import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXTJS_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-11-01",
  useCdn: true,
  token: process.env.NEXTJS_APP_SANITY_TOKEN,
});
