if(!self.define){let e,i={};const n=(n,f)=>(n=new URL(n+".js",f).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const o=e=>n(e,r),s={module:{uri:r},exports:a,require:o};i[r]=Promise.all(f.map((e=>s[e]||o(e)))).then((e=>(c(...e),a)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"b4f3be255d771855271aa62de1fde401"},{url:"946.bundle.js",revision:"cbc435a155cc44d631a17ce6c4bafa19"},{url:"app~49ea73a0.bundle.js",revision:"48a595c3f959bcabd6bdc25c349a33de"},{url:"app~49ea73a0.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"34e619f6a8930569b6477d33e50411f9"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"7d0f59cc9343c9f36460699e167b33d7"},{url:"app~e4317507.bundle.js",revision:"00fcc3adaed74b353d9d1eeac482313f"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"5492e36f85141bbe0cd5eabfc084065f"},{url:"icon/alert.svg",revision:"6be782342fe10a875a4ec2836ed3eb21"},{url:"icon/favorite.svg",revision:"8efd6179dd131186b9a3b48a790796c1"},{url:"icon/home.svg",revision:"5cd77e6170573b4fae736fdf07fed4f5"},{url:"icon/icon-192x192.png",revision:"8cad3b0355626ea735f02e093f811cfc"},{url:"icon/icon-256x256.png",revision:"c66b12fcf5e8326815e2f916ef2ba42b"},{url:"icon/icon-384x384.png",revision:"10abf52a319c1a880c81c483dc8200f0"},{url:"icon/icon-512x512.png",revision:"14fbee304a50365c0255c9b2d0c96c20"},{url:"index.html",revision:"257a119b116f05a5ba56123347b4386f"},{url:"manifest.webmanifest",revision:"ac767ef19e121fbaf798fd7c4f06eab1"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
