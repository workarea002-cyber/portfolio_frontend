import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-11-03",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
