if(!self.define){let e,n={};const s=(s,l)=>(s=new URL(s+".js",l).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(l,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const t=e=>s(e,o),f={module:{uri:o},exports:r,require:t};n[o]=Promise.all(l.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"encryption-application"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.b3701413.css",revision:null},{url:"/css/chunk-vendors.36b401cf.css",revision:null},{url:"/fonts/IRANSansWeb.2d185fc0.ttf",revision:null},{url:"/fonts/IRANSansWeb.48f0046d.eot",revision:null},{url:"/fonts/IRANSansWeb.9db745db.woff",revision:null},{url:"/fonts/IRANSansWeb.d9b1a4d0.woff2",revision:null},{url:"/fonts/fa-brands-400.86c7e1fa.woff2",revision:null},{url:"/fonts/fa-brands-400.f5defc2e.ttf",revision:null},{url:"/fonts/fa-regular-400.3edb9004.ttf",revision:null},{url:"/fonts/fa-regular-400.e0550912.woff2",revision:null},{url:"/fonts/fa-solid-900.64d5644d.woff2",revision:null},{url:"/fonts/fa-solid-900.f418d876.ttf",revision:null},{url:"/fonts/fa-v4compatibility.7e7e1dad.ttf",revision:null},{url:"/img/triangles-bottom.1e8677ce.svg",revision:null},{url:"/index.html",revision:"9365a34b754b9db650b9bbcc912b21f0"},{url:"/js/app.74a84ea6.js",revision:null},{url:"/manifest.json",revision:"d402c2b8a314541da9eebe2178ceb10e"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
