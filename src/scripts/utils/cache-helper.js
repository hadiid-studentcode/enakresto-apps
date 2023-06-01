import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      return response;
    }

    return this._fetchRequest(request);
  },

  async _openCache() {
    return await caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    try {
      const cache = await this._openCache();

      if (request.url.startsWith('chrome-extension://')) {
        const response = await fetch(request);

        if (!response || response.status !== 200) {
          return response;
        }

        return response;
      }

      const cachedResponse = await cache.match(request);

      if (cachedResponse) {
        return cachedResponse;
      }

      const response = await fetch(request);

      if (!response || response.status !== 200) {
        return response;
      }

      await cache.put(request, response.clone());
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default CacheHelper;
