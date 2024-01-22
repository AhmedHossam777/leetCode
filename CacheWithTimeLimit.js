class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    this.cleanupExpiredKeys();

    if (this.cache.has(key)) {
      // Key already exists, update value and duration
      const entry = this.cache.get(key);
      entry.value = value;
      entry.expireTime = Date.now() + duration;
      return true;
    } else {
      // Key doesn't exist, add a new entry
      this.cache.set(key, { value, expireTime: Date.now() + duration });
      return false;
    }
  }

  get(key) {
    this.cleanupExpiredKeys();

    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    } else {
      return -1;
    }
  }

  count() {
    this.cleanupExpiredKeys();
    return this.cache.size;
  }

  cleanupExpiredKeys() {
    const currentTime = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expireTime <= currentTime) {
        this.cache.delete(key);
      }
    }
  }
}