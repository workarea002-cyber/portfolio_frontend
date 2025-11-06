import { client } from "./client";
import {
  aboutQuery,
  experienceQuery,
  projectsQuery,
  skillsQuery,
} from "./query";
import type { About, Experience, Project, Skill } from "./types";

export async function getProjects(): Promise<Project[]> {
  return await client.fetch(projectsQuery);
}

export async function getSkills(): Promise<Skill[]> {
  return await client.fetch(skillsQuery);
}

export async function getExperience(): Promise<Experience[]> {
  return await client.fetch(experienceQuery);
}

export async function getAbout(): Promise<About[]> {
  return await client.fetch(aboutQuery);
}
