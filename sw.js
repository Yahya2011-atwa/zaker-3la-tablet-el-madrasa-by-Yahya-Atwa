self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pdf-notebook-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
        'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf_viewer.min.css'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});