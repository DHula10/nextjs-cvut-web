/**
 * Directus Asset URL Utilities
 * 
 * This module provides utilities for generating consistent, secure URLs for Directus assets
 * and API endpoints. It uses environment variables to ensure proper configuration across
 * different deployment environments.
 * 
 * Environment variables required:
 * - NEXT_PUBLIC_DIRECTUS_URL: The base URL of your Directus instance
 * - NEXT_PUBLIC_DIRECTUS_TOKEN: Static token for authentication (optional for public assets)
 */

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL!;

/**
 * Generate a Directus asset URL with proper authentication
 * @param assetId - The asset ID from Directus
 * @param token - Optional token for private assets (uses env token by default)
 * @returns Complete URL to the asset
 */
export function getDirectusAssetUrl(assetId: string, token?: string): string {
  if (!assetId) return '';
  
  const authToken = token || process.env.NEXT_PUBLIC_DIRECTUS_TOKEN;
  const baseUrl = DIRECTUS_URL.endsWith('/') ? DIRECTUS_URL.slice(0, -1) : DIRECTUS_URL;
  
  // If we have a token, include it in the URL for authentication
  if (authToken) {
    return `${baseUrl}/assets/${assetId}?access_token=${authToken}`;
  }
  
  // Fallback without token (for public assets)
  return `${baseUrl}/assets/${assetId}`;
}

/**
 * Generate a Directus asset URL for public assets (no token needed)
 * @param assetId - The asset ID from Directus
 * @returns Complete URL to the public asset
 */
export function getPublicDirectusAssetUrl(assetId: string): string {
  if (!assetId) return '';
  
  const baseUrl = DIRECTUS_URL.endsWith('/') ? DIRECTUS_URL.slice(0, -1) : DIRECTUS_URL;
  return `${baseUrl}/assets/${assetId}`;
}

/**
 * Generate a Directus items API URL
 * @param collection - The collection name
 * @param options - Query parameters
 * @returns Complete URL to the Directus API endpoint
 */
export function getDirectusApiUrl(collection: string, options?: Record<string, string>): string {
  const baseUrl = DIRECTUS_URL.endsWith('/') ? DIRECTUS_URL.slice(0, -1) : DIRECTUS_URL;
  let url = `${baseUrl}/items/${collection}`;
  
  if (options) {
    const params = new URLSearchParams(options);
    url += `?${params.toString()}`;
  }
  
  return url;
}
