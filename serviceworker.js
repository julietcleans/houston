self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');  
});

importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('https://houstonmotorcyclerepair.com').then(function(cache) {
return cache.addAll([
'/',
'/index.html',
'webflow.css',
'/wardsmobilemechanic.css',
]);
})
);
});
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help