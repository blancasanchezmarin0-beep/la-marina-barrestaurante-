import LocationPage from "@/components/LocationPage";
import coriaHero from "@/assets/coria-hero.jpg";

export default function CoriaPage() {
  return (
    <LocationPage
      name="Coria del Río"
      address="Calle Batán, 95 · Coria del Río"
      phone="+34 614 940 256"
      heroImage={coriaHero}
      menuKey="coria"
      mapsEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.5!2d-6.0534!3d37.2878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zCalle+Batan+95+Coria+del+Rio!5e0!3m2!1ses!2ses!4v1"
      description="Nuestro local en Coria del Río, en pleno corazón del pueblo, mantiene la esencia de La Marina con una carta que combina nuestra tradicional fritura con carnes de las mejores ganaderías de la península."
    />
  );
}
