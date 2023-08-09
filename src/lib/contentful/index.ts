import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENV_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})