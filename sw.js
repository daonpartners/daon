/* 앱 설치용 최소 서비스워커: 화면을 저장하지 않고 항상 최신 사이트를 불러옵니다 */
self.addEventListener('install',function(){ self.skipWaiting(); });
self.addEventListener('activate',function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch',function(e){ if(e.request.method!=='GET') return; e.respondWith(fetch(e.request).catch(function(){ return new Response('<meta charset=utf-8><p style="font:16px sans-serif;padding:24px">인터넷 연결을 확인해 주세요.</p>',{headers:{'Content-Type':'text/html; charset=utf-8'}}); })); });
