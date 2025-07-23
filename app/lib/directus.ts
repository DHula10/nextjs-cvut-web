import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus<any>('http://localhost:8055').with(rest());