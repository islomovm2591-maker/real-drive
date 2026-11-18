// Offline support. The page itself is always fetched from the network first (so a new version shows
// up on the next launch); the big model files are served from the cache after the first visit.
const CACHE = 'real-drive-v18';
const CORE = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => fetch(u, { cache: 'reload' }).then(r => r.ok && c.put(u, r)).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const isPage = req => req.mode === 'navigate' || /\/(index\.html)?$/.test(new URL(req.url).pathname) || /\.(js|json)$/.test(new URL(req.url).pathname) && new URL(req.url).origin === self.location.origin;
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  if (isPage(req)) {   // network first, cache as fallback (offline)
    e.respondWith(fetch(req, { cache: 'no-cache' }).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(k => k.put(req, c)); } return res; })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok && (req.url.startsWith(self.location.origin) || req.url.includes('cdn.jsdelivr.net') || req.url.includes('fonts.g'))) { const c = res.clone(); caches.open(CACHE).then(k => k.put(req, c)); }
    return res;
  })));
});
