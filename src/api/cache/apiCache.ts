import { API_CACHE_TTL_MS } from '../../constants/api';

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
  cachedAt: number;
}

export interface CacheStats {
  entries: number;
  inflight: number;
}

class ApiCache {
  private entries = new Map<string, CacheEntry<unknown>>();

  private inflight = new Map<string, Promise<unknown>>();

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  get<T>(key: string): T | null {
    const entry = this.entries.get(key);

    if (!entry) {
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.entries.delete(key);
      return null;
    }

    return entry.value as T;
  }

  set<T>(key: string, value: T, ttlMs = API_CACHE_TTL_MS): void {
    const now = Date.now();

    this.entries.set(key, {
      value,
      expiresAt: now + ttlMs,
      cachedAt: now,
    });
  }

  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttlMs = API_CACHE_TTL_MS
  ): Promise<T> {
    const cached = this.get<T>(key);

    if (cached !== null) {
      return cached;
    }

    const pending = this.inflight.get(key);

    if (pending) {
      return pending as Promise<T>;
    }

    const promise = fetcher()
      .then((result) => {
        this.set(key, result, ttlMs);
        return result;
      })
      .finally(() => {
        this.inflight.delete(key);
      });

    this.inflight.set(key, promise);
    return promise;
  }

  invalidate(key: string): void {
    this.entries.delete(key);
    this.inflight.delete(key);
  }

  invalidateByPrefix(prefix: string): void {
    for (const key of Array.from(this.entries.keys())) {
      if (key.startsWith(prefix)) {
        this.entries.delete(key);
      }
    }

    for (const key of Array.from(this.inflight.keys())) {
      if (key.startsWith(prefix)) {
        this.inflight.delete(key);
      }
    }
  }

  clear(): void {
    this.entries.clear();
    this.inflight.clear();
  }

  stats(): CacheStats {
    return {
      entries: this.entries.size,
      inflight: this.inflight.size,
    };
  }
}

export const apiCache = new ApiCache();
