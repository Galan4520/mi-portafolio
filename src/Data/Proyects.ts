// src/Data/Projects.ts
import type { Project } from "@/Data/types";
import ChartAjedrez from "../components/Graficos/ChartAjedrez.astro";

export const projects: Project[] = [
  {
    slug: "ajedrez",
    title: "Mi Proyecto de Ajedrez",
    description: "Este proyecto muestra partidas y análisis.",
    image: "/projects/Aplicativo_InOA (2).jpg",
    sections: [
      {
        type: "list",
        title: "Resultados",
        items: [
          { description: "Partida 1: Victoria en 35 movimientos" },
          { description: "Partida 2: Tablas en 50 movimientos" },
          { description: "Partida 3: Derrota en 28 movimientos" }
        ]
      },
      {
        type: "components",
        title: "Análisis gráfico",
        items: [ChartAjedrez]
      },
      {
        type: "paragraph",
        title: "Conclusión",
        content: "Se observa que las partidas más largas tienden a terminar en empate."
      }
    ]
  }
];
