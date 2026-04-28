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
        { name: "Aceitunas", description: "", price: "0,80€" },
        { name: "Tomate con melva", description: "", price: "7,50€" },
        { name: "Ensaladilla rusa", description: "Tapa / Media / Ración", price: "3,00 / 6,00 / 10,00€" },
        { name: "Ensaladilla de pulpo", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
        { name: "Pimiento con melva", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
        { name: "Queso viejo", description: "Tapa / Media / Ración", price: "4,00 / 7,50 / 14,00€" },
        { name: "Revuelto espárragos (en temporada)", description: "", price: "12,00€" },
        { name: "Revuelto habitas baby", description: "", price: "12,00€" },
        { name: "Papas aliñás", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
      ],
    },
    {
      label: "Fritos",
      items: [
        { name: "Croqueta cocido", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 12,00€" },
        { name: "Croqueta cola", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 12,00€" },
        { name: "Croqueta bogavante", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 12,00€" },
        { name: "Lagrimitas de pollo", description: "Tapa / Media / Ración", price: "4,00 / 8,00 / 14,00€" },
        { name: "Saquitos de queso", description: "Tapa / Media / Ración", price: "3,50 / 7,00 / 13,00€" },
      ],
    },
    {
      label: "Carnes",
      items: [
        { name: "Albóndigas", description: "Tapa / Media / Ración", price: "4,00 / 8,00 / 13,00€" },
        { name: "Churrasco pollo aliñado", description: "", price: "9,50€" },
        { name: "Carrillada", description: "Tapa / Media / Ración", price: "4,00 / 8,00 / 13,00€" },
        { name: "Solomillo al whisky", description: "Tapa / Media / Ración", price: "4,00 / 8,00 / 14,00€" },
        { name: "Presa ibérica", description: "", price: "16,00€" },
        { name: "Largartito ibérico", description: "", price: "14,00€" },
        { name: "Secreto ibérico extra de cruceta", description: "", price: "15,00€" },
        { name: "Abanico ibérico", description: "", price: "16,00€" },
        { name: "Frisona", description: "Carnes por peso", price: "38,00€/kg" },
        { name: "Turina de Portugal", description: "Carnes por peso", price: "67,00€/kg" },
        { name: "Rubia Gallega", description: "Carnes por peso", price: "70,00€/kg" },
      ],
    },
    {
      label: "Montaditos",
      items: [
        { name: "Pimientos con melva", description: "", price: "3,20€" },
        { name: "Solomillo con jamón", description: "", price: "3,50€" },
        { name: "Solomillo con jamón y queso", description: "", price: "3,80€" },
        { name: "Solomillo al whisky", description: "", price: "3,20€" },
        { name: "Melva y tomate", description: "", price: "3,00€" },
        { name: "Queso", description: "", price: "3,50€" },
      ],
    },
    {
      label: "Pescados",
      items: [
        { name: "Boquerones", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Adobo", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Chocos", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Puntillitas", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Acedías", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Pijota", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Chipirón", description: "", price: "S/P" },
        { name: "Huevas fritas", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Hueva plancha", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Huevos choco frito", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Huevos choco plancha", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Sardina (en temporada)", description: "Unidad", price: "1,80€" },
        { name: "Pez espada", description: "", price: "S/P" },
        { name: "Atún", description: "", price: "S/P" },
        { name: "Salmonetes", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Tortillitas de camarón", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Tortillitas de bacalao", description: "Tapa / 1/2 / Ración", price: "8,00 / 14,00€" },
        { name: "Almejas", description: "", price: "15,00€" },
        { name: "Gambas al ajillo", description: "", price: "12,00€" },
        { name: "Gambas cocidas", description: "", price: "14,00€" },
        { name: "Calamar frito", description: "", price: "S/P" },
        { name: "Calamar plancha", description: "", price: "S/P" },
        { name: "Gambones", description: "", price: "S/P" },
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
        { name: "Presa ibérica", description: "Ración", price: "14,00€" },
      ],
    },
  ],
};
