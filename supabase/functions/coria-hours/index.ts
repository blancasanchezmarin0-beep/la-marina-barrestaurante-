import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const PLACE_ID = 'ChIJxw-acgBzEg0RsY9Yn9Y4TVY';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_maps';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const GOOGLE_MAPS_API_KEY = Deno.env.get('GOOGLE_MAPS_API_KEY');
    if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
      throw new Error('Missing Google Maps connector credentials');
    }

    const res = await fetch(`${GATEWAY_URL}/places/v1/places/${PLACE_ID}?languageCode=es`, {
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
      JSON.stringify({ weekdayDescriptions, updatedAt: new Date().toISOString() }),
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
