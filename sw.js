// JARVIS FLAMTEC: permite instalar la app. No guarda datos de JARVIS: todo se pide siempre en vivo.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () { /* sin caché: el navegador hace la petición normal */ });
