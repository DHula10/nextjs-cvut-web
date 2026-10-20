import { createDirectus, rest, authentication, readItems, staticToken } from '@directus/sdk';
import type { Schema } from '@/app/lib/schema';

const BACKEND_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL!; 
const STATIC_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN!;

const client = createDirectus<Schema>(BACKEND_URL)
    .with(staticToken(STATIC_TOKEN))
    .with(rest())

export default client;

