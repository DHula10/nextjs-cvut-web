import { createDirectus, rest, authentication, readItems } from '@directus/sdk';
import type { Schema } from '@/app/lib/schema';

const BACKEND_URL = "http://localhost:8055/"

const client = createDirectus<Schema>(BACKEND_URL)
    .with(authentication("json"))
    .with(rest())

export default client;