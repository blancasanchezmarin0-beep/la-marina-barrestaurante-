export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuCategory {
  label: string;
  items: MenuItem[];
}

export const menuData: Record<string, MenuCategory[]> = {
  coria: [
    {
      label: "Entrantes",
      items: [
        { name: "Ensaladilla La Marina", description: "Receta casera con mayonesa artesanal" },
        { name: "Pimientos del piquillo rellenos", description: "Rellenos de marisco con salsa suave" },
        { name: "Jamón ibérico de bellota", description: "Cortado a mano, curación mínima 36 meses" },
      ],
    },
    {
      label: "Pescados",
      items: [
        { name: "Chocos fritos", description: "Crujientes y ligeros" },
        { name: "Bacalao frito", description: "Receta tradicional" },
        { name: "Corvina a la plancha", description: "Producto fresco del día" },
      ],
    },
    {
      label: "Mariscos",
      items: [
        { name: "Gambas al ajillo", description: "Con aceite de oliva virgen extra" },
        { name: "Langostinos a la plancha", description: "De Sanlúcar de Barrameda" },
        { name: "Coquinas al ajillo", description: "Frescas del día" },
      ],
    },
    {
      label: "Carnes",
      items: [
        { name: "Rubia Gallega", description: "Maduración mínima 40 días" },
        { name: "Frisona", description: "Corte premium a la brasa" },
        { name: "Turina de Portugal", description: "Intenso sabor, textura excepcional" },
      ],
    },
  ],
  gelves: [
    {
      label: "Entrantes",
      items: [
        { name: "Aceitunas", description: "", price: "0,50€" },
        { name: "Tomate con melva", description: "Ración generosa de la casa", price: "7,50€" },
        { name: "Ensaladilla rusa", description: "Tapa / Media / Ración", price: "2,70 / 5,50 / 9,50€" },
        { name: "Ensaladilla de pulpo", description: "Tapa / Media / Ración", price: "3,00 / 6,00 / 12,00€" },
        { name: "Pimiento con melva", description: "Tapa / Media / Ración", price: "3,00 / 6,00 / 12,00€" },
        { name: "Queso viejo", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
      ],
    },
    {
      label: "Fritos",
      items: [
        { name: "Croqueta de cocido", description: "Tapa / Media / Ración", price: "3,00 / 6,00 / 11,00€" },
        { name: "Croqueta de cola", description: "Tapa / Media / Ración", price: "3,00 / 6,00 / 11,00€" },
        { name: "Croqueta de bogavante", description: "Tapa / Media / Ración", price: "3,00 / 6,00 / 11,00€" },
        { name: "Lagrimitas de pollo", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
        { name: "Saquitos de queso", description: "Tapa / Media / Ración" },
      ],
    },
    {
      label: "Pescados",
      items: [
        { name: "Boquerones", description: "", price: "7,00 / 13,00€" },
        { name: "Adobo", description: "", price: "7,00 / 13,00€" },
        { name: "Chocos", description: "", price: "7,00 / 13,00€" },
        { name: "Puntillitas", description: "", price: "7,00 / 13,00€" },
        { name: "Acedías", description: "", price: "7,00 / 13,00€" },
        { name: "Salmonetes", description: "", price: "7,00 / 13,00€" },
        { name: "Ortiguillas", description: "", price: "10,00€" },
      ],
    },
    {
      label: "Carnes",
      items: [
        { name: "Albóndigas", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
        { name: "Carrillada", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
        { name: "Solomillo al whisky", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
        { name: "Presa ibérica", description: "Ración" },
      ],
    },
  ],
};
