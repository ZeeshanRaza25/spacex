let cacheData = 'app1';

this.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/',
                'localhost',
                '/static/js/1.chunk.js',
                '/static/js/bundle.js',
                '/static/js/main.chunk.js',
                '/static/js/main.af739cddf0fb9934355b.hot-update.js',
                '/static/js/0.chunk.js',
                // '/static/js/0.bundle.js',
                // '/static/js/0.chunk.js.map',
                // '/static/js/main.0152cf528d7a1b6e1450.hot-update.js',
                // '/index.html',
                '/manifest.json',
                '/favicon.ico',
                '/icon-192x192.png',
                // 'https://spacexdata.herokuapp.com/graphql'
                // '/images/icons/test-192x192.png',
                // '/static/css/2.fc5a9450.chunk.css',
                // '/static/js/2.7966d3c5.chunk.js',
                // '/static/css/main.3fbbc787.chunk.css',
                // '/static/js/main.4bf167e8.chunk.js'
            ]);
        })
    );
});

this.addEventListener(
    'fetch',
    (event) => {
        // console.log(event.request.url);
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result;
                }
            })
        );
    }
);