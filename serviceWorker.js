const staticCar = "car-site"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/car.png",
  ]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCar).then(cache => {
      cache.addAll(assets)
    })
  )
})