// src/Data/types.ts

export interface Result {
  id: number;
  description: string;
}

export interface SectionList {
  type: "list";
  title: string;
  items: { description: string }[];
}

export interface SectionParagraph {
  type: "paragraph";
  title: string;
  content: string;
}

export interface SectionComponent {
  type: "components";
  title: string;
  items: any[]; // Puedes afinar esto si sabes qué tipo de componentes usarás
}

export type Section = SectionList | SectionParagraph | SectionComponent;

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  sections: Section[];
}
