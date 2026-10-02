interface RateLimitRecord {
  count: number;
  firstRequest: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

export function checkRateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 60 * 1000
): { allowed: boolean; remaining: number; resetInSeconds: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, firstRequest: now });
    return {
      allowed: true,
      remaining: limit - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  // Check if window expired
  if (now - record.firstRequest > windowMs) {
    rateLimitMap.set(key, { count: 1, firstRequest: now });
    return {
      allowed: true,
      remaining: limit - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  // Within window
  if (record.count >= limit) {
    const resetInSeconds = Math.ceil((record.firstRequest + windowMs - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      resetInSeconds,
    };
  }

  record.count += 1;
  const resetInSeconds = Math.ceil((record.firstRequest + windowMs - now) / 1000);
  return {
    allowed: true,
    remaining: limit - record.count,
    resetInSeconds,
  };
}
