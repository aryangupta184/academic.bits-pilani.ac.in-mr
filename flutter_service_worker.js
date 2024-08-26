'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c238b8ee369ecebaebce6e1c72cdd739",
".git/config": "8f49b638341ca1af37c41270bcaaf24d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34c9e81e72edba4c236f67d588fe78a1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3277b7af222bdc7bd43c9f384c540bc",
".git/logs/refs/heads/main": "a57c8645dedbd93d4ce7fdbe8473f5bf",
".git/logs/refs/remotes/origin/main": "1487d7a2319ddf1bfe96fc76ff5ee4f9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/68e4b1003325b94b20e0d22b570037b5b5eb7a": "fd0bd51e7761c096aebf9fe196c2ca31",
".git/objects/0d/dc583a680fd126278705e974040aae81e95c48": "754e8aac6a48be7894e56a80d436ad84",
".git/objects/0f/056c2e24020308007cdb8e4852ed6741aa2105": "63b10a06955ae0420e88065e2ee1f51c",
".git/objects/10/2727118fc29e58eb528d721e11713b4e5a9e71": "075cb948a4eeb3a59edd6a91c5e9f727",
".git/objects/13/369fc3ced6ed52e04e0e043164c8480ee0a973": "fb9a4c6151ecdc5bfbef5c893a42f176",
".git/objects/15/63d09e6980515aea82cfb12526cd8fe6d289e1": "65f956a93c9afdf414ad263616e6d66c",
".git/objects/16/890519561c99d4b43cc078660e007f701a35f3": "3cab907a406579ef65968e23353ff3d5",
".git/objects/1c/3955340b0136bdff0c7efe9749110e10f3760e": "ee1e6c5088debc61e2c73dfd1c10bf12",
".git/objects/1f/92fab64d08c0dc164e83a0d52a7fb29e8d7b2a": "5c1fa8b172ff1bcd3f45e540b49e738d",
".git/objects/20/2cd34d19e1d4b4642d5e7b72014a4e0f7d89d1": "9d8e5859d9e1aad7f536099d001f8823",
".git/objects/27/e11de375fb0f636ebebb4fa4b3617dec6335c3": "0998ec8145a5ceb08ed3757116b6f001",
".git/objects/29/1e08742c8cf0d9f61a176b6584f3ade47a275d": "91b4f3215a213431b4bdc6d0b07f7873",
".git/objects/2a/a78c44e8049a353e6db97790fecc29ee0df452": "774f79085fd4fba68727ddeba7ea65d5",
".git/objects/2d/2fe7c9defd32aa8d29ba8a69cbed34c1dcf3c7": "eb7891013fb28c96f7c17c4e14ed76b2",
".git/objects/2d/be6945bc679798c0db686b6b92f349ee31bcc5": "5623f7e171d2d6dc4edfe60ac1644cda",
".git/objects/2e/7ae90b2471648c392b13f2c8c9d7b4dba6d739": "d07f8ec24b5b8b2989b321a4bff64842",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/311eb8653556bb20420f9b1eaa50a72adcb420": "00a4fa74e287db6e8feedea3c88f62ba",
".git/objects/36/441bd50694dd97ac0a701b9ccc04a097c31af7": "4bc6f5a0d0aa439f131ab60b3588d9be",
".git/objects/38/b52f997dd7ceba29a9f09d81a1e2568a8b70ac": "6e83110e4e25e9aa76119817f7e9d9c6",
".git/objects/3d/e410889eb8f82b6cd5d895dc8b2e8205c38a44": "7f0cf119d4b44a4c28232170e94fa29d",
".git/objects/42/b5b2e5852d8a464b621c57027169aca4a18eab": "d880eb6055f23676a7a8c85ff2b96e97",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/8549c9bac0b93770fccee760420c6a9c3bd1ed": "c0658350b329e331b4a3a1780a0db46f",
".git/objects/4f/55fead9d3ca99ff4cd239cf7299dfe7fdcfd25": "0951c6c58251a4fb314b0407a885dd90",
".git/objects/52/64fca4777979ec809c87938be1ceafde886756": "9b3bcc6ab37d4812d0be3b1459b2b990",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/31b2f1062b58c1dbb44d3161955ecee476a1c1": "96da11e6275ba4587671d39203f20e83",
".git/objects/5a/b512cceb738f465ff1b9b04fea1196508103b3": "4df1d60e94be3f22295299ddb07117fd",
".git/objects/60/cec2a85fc24c22c36b9a7f4e1b20215fcab89a": "925ae2815d138ce62577904597c5e70a",
".git/objects/62/d4a25758b972ff0704d9f2dbd94d1e00ed1d0c": "592ce8f0061cf7d7f9e2ed83a01df057",
".git/objects/64/98dfb64bb29914849eca22fd7a5c8b5620d54d": "a9d84043681c2c00032bc5af32d1b853",
".git/objects/67/9433cd34a3de28fdc308f298acec37ef638aa1": "e39b56c2c2942e038f75a676994df82c",
".git/objects/6a/ba2991c72683d079e903c244f62b7b72cfb464": "dcf97af1b171af0a9378bd222c3e6f92",
".git/objects/6c/14ae3e914e7ace5a05b09aa4fd33508740a569": "5a73f26bc22750b9a04597b9b2f6f15e",
".git/objects/6d/a88235c8db7004c99cd4a79d3d6dbedb559ab8": "cd213769c9f6009a225488e09f810550",
".git/objects/6f/5f851dd0bcb4ebcd2e7617d0abbe80131b36c7": "3b2bd80665f30dddd9f28782cd81a899",
".git/objects/6f/5fbb2dc8d495ab2d2664026f48f189e90a3c5c": "42360a3ada18b3cd9cd8c832790cadf8",
".git/objects/7d/ff8ade1c9de8edc0515325cac12984f30f5020": "961e506f337492315ef4082c61fd8933",
".git/objects/80/066486c8814654009ecdf2474822f05f14efcb": "6260beaf61379146db287d7a15608710",
".git/objects/81/51fc7b45175badc50e7a1dbe156d0f7ecab21d": "4f8e8fd951a0858e737824b4d3a1a49b",
".git/objects/86/2862ac206554bbeb2dd79814d1782b85cb2cdf": "3fade25dcb5d0bc5bf2d25458723ecdf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/96/bc3b6d3c42f5742c38ec4440217a80d7b9b9df": "55daffffa80872ac750dcf91b5d1f647",
".git/objects/98/81fb085b2f64409bb7bad1002df5c862612b9d": "300eeea7ad5023207166c0f488e341a6",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a5/9f64e986e094ac0cfbbfed9d98f7307f3f3d02": "1a895aeb3c1bee4039a3d361af6cb8dc",
".git/objects/a6/82e04f385dbba9fa57605073a2b94be6c3afb2": "cb00d47d1a14015ed0307e5594f6bc38",
".git/objects/ae/0c8b9d873b961920940b6e0b664625646e8a7b": "fede2d7770cd9b3e14ad99fed69999b0",
".git/objects/ae/a42dfeac5e43e7a0d725dd9d0b85c172139f6a": "2a5870453bc29d766f470b3efa045aba",
".git/objects/af/09d9ad0e00871105a07c90d96d4782e590ba9c": "103be7d7f7c57b0a37fbb66cb791fe3e",
".git/objects/af/8ab475b023a4b4fb3a0d2fa412d32d1c8ed09b": "4d62a66bfc159f95aeafeb494380d247",
".git/objects/b0/4eeeaf96df7d809427b6777bd8ffd952d9f9b9": "af7fbab9aca13bbc5bc50861ec2b4836",
".git/objects/b4/b20da244590d7351a8cfa9261bcfa2371f1994": "280de64f42f8dc9814797f40415c6ca2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/13f585e154b2b9a799e57022a82145376cab36": "107167892d2f48bc45e8cd095ac07712",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/a5f2ff0e28e801f747bf07cf00a72bc4588bde": "fb3473997667637ae20c1725a8f232db",
".git/objects/be/ab3f8004e15d20df08ac166649291b2cbdbb8b": "0c3399e09493885d060299ff0f27d1b8",
".git/objects/c1/b1880fde4a9e264d9de8fea0bffbd4aa4c42a0": "3e3cd3c173939013a6f6f960a4b05ac1",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/879f0356ee07f785082b2f9455ec62338eccf2": "1ab10edc146f573a305379262358ec62",
".git/objects/c5/a13dfe0c84f87f35aba019c30ea3d734e236a1": "7fcfd04f33656d8526868524c14a2d08",
".git/objects/c8/3222bb68607a64a381e62905c40843492d778d": "a1be064c047fb251004e00d0f678ba47",
".git/objects/ca/49ef2a506a27d7ecabef4f2f7dff2185bdd461": "540539b53d347c081e9035ea8933573e",
".git/objects/d0/69b4c02403c9f843fc7fb05c7b48e47433d8fa": "a416134b99e52fcb5fe1c1f51c0a467a",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/5572668fe5b5026e20492844c55eba9cd2db1d": "750d9554d7579f06d2a846363c3761b8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3a123d8f695cf847cc03030a2e77eeecd88491": "a988b3a3d4a55773e560ca4323928487",
".git/objects/d4/d282be7f902f7d31a926a493c2bff1d2df1d9e": "e30eae50702d3d30cfc42df3c4fc1650",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/6cbcbf65df726f13f782d0ddb79178d8739f21": "7607dd6c5165c3202fde25f8455da981",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/25d672a3ddbb70218cdd6798dd7b720139f318": "40ebdaae276c72c19d38deb05a2cce53",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/924e2f034150e099a7c48fc35e096927ef7c66": "0a4c02445b0e2378094d5808bbcc6805",
".git/objects/e2/5adaeac24001a32182a5a9c9cb04286242fede": "c6c2764b6fc6774ec88aa85dbf7687af",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/508b6b8e0bb424a7d53cb59caff5f87803c64e": "91e4c5a62d677ebde448af46c9478d71",
".git/objects/e5/cd1e7276c303fc84d1c3d9f7ebbad840be7063": "b30510332dc1b1ae71441056335bd71a",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/87eb69b843cebfcc08081f23b236d00b3fbf70": "c36a106f364f698f7a35a0633b542415",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b6fed30d31c3fcb08cfc44ac95a0407ba9e692": "0c816b1a7e2dce47983d747ef410c186",
".git/objects/f3/a8952c7d7643c4ca4fbc95f2c8b82cc4db9793": "afbfdd93d681e09d36a0acde7abe010d",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/e330019cace453d8bd198758f53723bae9d17f": "ef2d3f52ec3f104c3bdc0d93457ffaa9",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/4a665ce320e2a080989aa2663fc6f19ac8d4e6": "cd9738b3b267d1471fdbc68aa724fa36",
".git/objects/ff/bf3dd5ab98e2a9c7f472309ddd5504c2338f5e": "a79296f77327967f9f7cf369ce277105",
".git/refs/heads/main": "1566664de0e2cdb281466ac9607bed48",
".git/refs/remotes/origin/main": "709419d0273669214856845d0bb6d35c",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/logo.jpg": "ab3a7f3ce86995eff0c872412760283c",
"assets/NOTICES": "63283986a24bf441d4239a105b04af2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/sign.jpg": "cd34ef36a90afb9fff9e31bcfa044791",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bcddbe347bcb33c73786028aa013d979",
"/": "bcddbe347bcb33c73786028aa013d979",
"main.dart.js": "f062e931bacdf1251dea5ea8e397c41b",
"manifest.json": "8aa9d1782b09c8622f67c636117ae2f7",
"version.json": "4ff0e61062f20fdbb961e43818e83845"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
