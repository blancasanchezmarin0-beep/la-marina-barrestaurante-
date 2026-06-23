import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const PLACE_IDS: Record<string, string> = {
  coria: 'ChIJxw-acgBzEg0RsY9Yn9Y4TVY',
  gelves: 'ChIJzY0gIKhtEg0RG-XiAJl_4X0',
};

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_maps';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    let location = url.searchParams.get('location');
    if (!location && (req.method === 'POST' || req.method === 'PUT')) {
      try {
        const body = await req.json();
        if (body && typeof body.location === 'string') location = body.location;
      } catch { /* ignore */ }
    }
    location = (location ?? 'coria').toLowerCase();
    const placeId = PLACE_IDS[location];
    if (!placeId) {
      return new Response(JSON.stringify({ error: `Unknown location: ${location}` }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const GOOGLE_MAPS_API_KEY = Deno.env.get('GOOGLE_MAPS_API_KEY');
    if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
      throw new Error('Missing Google Maps connector credentials');
    }

    const res = await fetch(`${GATEWAY_URL}/places/v1/places/${placeId}?languageCode=es`, {
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': GOOGLE_MAPS_API_KEY,
        'X-Goog-FieldMask': 'regularOpeningHours,displayName',
      },
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Google Maps gateway ${res.status}: ${body}`);
    }

    const data = await res.json();
    const weekdayDescriptions: string[] = data?.regularOpeningHours?.weekdayDescriptions ?? [];

    return new Response(
      JSON.stringify({ location, weekdayDescriptions, updatedAt: new Date().toISOString() }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
        },
      },
    );
  } catch (err) {
    console.error('coria-hours error', err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
