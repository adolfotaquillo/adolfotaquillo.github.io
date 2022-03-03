'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a4e0f6a2dc6320d7340ef6d4d0f836f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/alarma_ss/actividades.png": "e67d0efef0c6db218b2b52f7d0d98f33",
"assets/lib/assets/alarma_ss/alarma.png": "888894d54a2434e5c3f068158387d283",
"assets/lib/assets/invernadero_ss/invernadero.png": "b0d2c70df483ee7452159ff4e120d360",
"assets/lib/assets/menu_ss/login.png": "a2ea3223562763d83be23d253454e129",
"assets/lib/assets/menu_ss/menu.jpg": "b09ca41f8c1d57dfffc00848c6416251",
"assets/lib/assets/web-developer.png": "efb242e201de4e1e86dca9474bb80e48",
"assets/NOTICES": "e17b8e05410751fecb8d681f99c182b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"gustavosobrevilla.github.io/.git/COMMIT_EDITMSG": "e9c8a5c30c33c9ab422488380cf8835a",
"gustavosobrevilla.github.io/.git/config": "84a1d28647031d216c5da0457d3451f4",
"gustavosobrevilla.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"gustavosobrevilla.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"gustavosobrevilla.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"gustavosobrevilla.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"gustavosobrevilla.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"gustavosobrevilla.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"gustavosobrevilla.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"gustavosobrevilla.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"gustavosobrevilla.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"gustavosobrevilla.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"gustavosobrevilla.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"gustavosobrevilla.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"gustavosobrevilla.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"gustavosobrevilla.github.io/.git/index": "7d8f421e4c217cfa838a0159bb23c2d3",
"gustavosobrevilla.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gustavosobrevilla.github.io/.git/logs/HEAD": "b98e37d72dff32d64e8aa9c614ad7100",
"gustavosobrevilla.github.io/.git/logs/refs/heads/main": "b98e37d72dff32d64e8aa9c614ad7100",
"gustavosobrevilla.github.io/.git/logs/refs/remotes/origin/HEAD": "b98e37d72dff32d64e8aa9c614ad7100",
"gustavosobrevilla.github.io/.git/objects/84/dab5ed43d5cedf4d2074a454dcc794988a080e": "67046a65cf90037ec6890be90839b6ec",
"gustavosobrevilla.github.io/.git/objects/c7/2f75245fc71651d700c54fc2da42576ba4dd14": "1173c0aea65982f6c4d323754ae0fb00",
"gustavosobrevilla.github.io/.git/objects/e9/8ae263d4333bed0e3b4e592e5d878e1d734937": "40de0eb3b0aaeed10767784a9136908b",
"gustavosobrevilla.github.io/.git/packed-refs": "7c91340656f41e1c57583e655d20faa1",
"gustavosobrevilla.github.io/.git/refs/heads/main": "507bc535e08db0fe848d2247a8491838",
"gustavosobrevilla.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"gustavosobrevilla.github.io/README.md": "058d73905a79dc4f91f7e0be367f6156",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "061a66c1d1c085d99ef17987cf72a644",
"/": "061a66c1d1c085d99ef17987cf72a644",
"main.dart.js": "141b4239b906d74eea4ba85be9ad5802",
"manifest.json": "dbe57e614410cd35008786e5d21c1757",
"version.json": "e6f581ae57f9a87550733cc5e01f0fa6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
