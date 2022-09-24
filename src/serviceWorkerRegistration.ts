import { Workbox } from "workbox-window";

// A new route that matches same-origin image requests and handles
// them with the cache-first, falling back to network strategy:

export function register() {
  if ("serviceWorker" in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    // const swUrl = './service-worker.js';
    const wb = new Workbox(swUrl);

    wb.register();
  }
}
