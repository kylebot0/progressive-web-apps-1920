const CORE_CACHE = 1
const CORE_CACHE_NAME = `demo-core-v${CORE_CACHE}`
const CORE_ASSETS = ["./", "./dist/styles.css", "./dist/fonts/BankGothic Md BT.ttf", "./img/logo.png", "./dist/main.bundle.js", "./offline"]

self.addEventListener("install", (e) => {
    console.log("Installed")
    e.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
})

self.addEventListener("activate", (e) => {
    console.log("Activated")
    e.waitUntil(clients.claim())
})

self.addEventListener("fetch", (e) => {

    const req = e.request
    console.log("Fetching:" + req)
    if (isHtmlGetRequest(req)) {
        e.respondWith(
            caches.match(req)
            .then(cachedRes => {
                if (cachedRes) {
                    return cachedRes
                }
                return fetch(req)
                    .then((fetchRes) => fetchRes)
                    .catch((err) => {})
            })
        )
    }

})

function isHtmlGetRequest(req) {
    return req.method === 'GET' && (req.headers.get('accept') !== null && req.headers.get('accept').indexOf('text/html') > -1);
}