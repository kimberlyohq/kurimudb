export default class Cache {
    constructor(model) {
        this.value = new Map();
        this.model = model;
    }
    all() {
        const result = {};
        for (const [key, value] of this.value.entries())
            result[key] = value.get();
        return result;
    }
    subscribe(key) {
        if (this.value.has(key))
            return this.value.get(key)?.subscribe();
        this.value.set(key, this.createCacheItem(null));
        return this.value.get(key)?.subscribe();
    }
    get(key, def = null) {
        if (this.value.has(key))
            return this.value.get(key)?.get();
        return def;
    }
    add(key, value) {
        if (this.value.has(key))
            throw new Error(`Key already exists in the object store.`);
        this.value.set(key, this.createCacheItem(value));
    }
    put(key, value) {
        if (this.value.has(key))
            this.value.get(key)?.set(value);
        else
            this.value.set(key, this.createCacheItem(value));
    }
    forget(key) {
        this.value.get(key)?.forget();
        this.value.delete(key);
    }
    has(key) {
        return this.value.has(key);
    }
    count() {
        return this.value.size;
    }
    createCacheItem(value) {
        return new this.model.config.drivers.cache(value, this.model.config.drivers.cacheInject);
    }
}
//# sourceMappingURL=cache.js.map