import LocationPage from "@/components/LocationPage";
import gelvesHero from "@/assets/gelves-hero-new.jpg";
import gelvesReserva from "@/assets/gelves-reserva.jpg";
import gallery1 from "@/assets/gelves-gallery1.jpg";
import gallery2 from "@/assets/gelves-gallery2.jpg";
import gallery3 from "@/assets/gelves-gallery3.jpg";
import gallery4 from "@/assets/gelves-gallery4.jpg";

export default function GelvesPage() {
  const galleryImages = [
    { src: gallery1, title: "Nuestra fritura tradicional", category: "Gastronomía", size: "wide" },
    { src: gallery2, title: "Selección de carnes", category: "Gastronomía", size: "medium" },
    { src: gallery3, title: "Excelencia en cada plato", category: "Gastronomía", size: "tall" },
    { src: gallery4, title: "Sabor y tradición", category: "Gastronomía", size: "medium" },
  ];

  return (
    <LocationPage
      name="Gelves"
      address="Pl. de la Marina, 1 · Gelves"
      phone="+34 674 322 897"
      heroImage={gelvesHero}
      reservaImage={gelvesReserva}
      galleryImages={galleryImages}
      menuKey="gelves"
      mapsEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.5!2d-6.0267!3d37.3387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zPlaza+de+la+Marina+Gelves!5e0!3m2!1ses!2ses!4v1"
      description="Nuestro restaurante en Gelves, situado en la emblemática Plaza de la Marina, te ofrece un espacio acogedor donde disfrutar de la mejor fritura y carnes premium con vistas al Guadalquivir."
      mapsLink="https://share.google/18HQvkOaVOtBli8Ul"
    />
  );
}
