import { NextRequest } from 'next/server';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function getRealIP(request: NextRequest): string {
  // Get IP from various possible headers (for different deployment scenarios)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  // Fallback
  return 'unknown';
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // Maximum 3 requests per window
  
  // Clean up expired records
  cleanupExpiredRecords(now);
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    // No record or window expired, create new record
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  
  if (record.count >= maxRequests) {
    return true; // Rate limited
  }
  
  // Increment count
  record.count++;
  return false;
}

function cleanupExpiredRecords(now: number): void {
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}
