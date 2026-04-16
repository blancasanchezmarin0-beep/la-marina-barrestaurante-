export interface MenuItem {
  name: string;
  description: string;
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
        { name: "Salmorejo cordobés", description: "Con virutas de jamón y huevo" },
        { name: "Croquetas de puchero", description: "Cremosas y artesanales" },
        { name: "Ortiguillas fritas", description: "Crujientes del mar" },
      ],
    },
    {
      label: "Pescados",
      items: [
        { name: "Chocos fritos", description: "Crujientes y ligeros" },
        { name: "Puntillitas fritas", description: "Delicadas y crujientes" },
        { name: "Urta a la roteña", description: "Receta tradicional gaditana" },
      ],
    },
    {
      label: "Mariscos",
      items: [
        { name: "Gambas blancas de Huelva", description: "Cocidas en su punto" },
        { name: "Cigalas a la plancha", description: "Frescura del Atlántico" },
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
};
