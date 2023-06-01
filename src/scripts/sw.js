import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icon/icon-192x192.png',
  './icon/icon-256x256.png',
  './icon/icon-384x384.png',
  './icon/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './manifest.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
event.waitUntil(CacheHelper.deleteOldCache());
  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
event.respondWith(CacheHelper.revalidateCache(event.request));
  // TODO: Add/get fetch request to/from caches
});
