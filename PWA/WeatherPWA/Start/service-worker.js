'use strict';

const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);

});
