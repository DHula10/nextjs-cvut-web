import { createDirectus, rest, authentication } from '@directus/sdk';
import type { Schema } from './schema';

const BACKEND_URL = "http://localhost:8055/"

const client = createDirectus<Schema>(BACKEND_URL)
    .with(authentication("json"))
    .with(rest())

export default client;
