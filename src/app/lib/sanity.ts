
import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "yc8n7g05",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})