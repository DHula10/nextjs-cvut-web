import { createDirectus, rest, authentication, readItems } from '@directus/sdk';
import type { Schema } from '@/app/lib/schema';

const BACKEND_URL = "http://127.0.0.1:8055/"

const client = createDirectus<Schema>(BACKEND_URL)
    .with(authentication("json"))
    .with(rest())

export default client;