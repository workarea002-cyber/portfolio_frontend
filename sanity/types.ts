import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Skill {
  _id: string;
  name: string;
  icon: SanityImageSource;
  bgColor?: string;
}
export interface Work {
  _id: string;
  role: string;
  company: string;
  description: string;
}
export interface Experience {
  _id: string;
  year: string;
  works: Work[];
}

export interface Project {
  _id: string;
  title: string;
  imgUrl: SanityImageSource;
  description?: string;
  projectLink?: string;
  codeLink?: string;
  tags: string[];
}
