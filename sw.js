const CACHE_NAME = 'kalkulator-v1';
const URLS_TO_CACHE = [
  './',
  './calculator22.html',       // Zmień na Twój plik, np. calculator19.html
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './style.css',        // jeśli masz
  './script.js'         // jeśli masz
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
