if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f8ab81364a8aff5fc34ff0059656ccb9"},{url:"/_next/static/chunks/1324-c96947d88a38ca09.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/1324-c96947d88a38ca09.js.map",revision:"b27076784ce9da4a359befe7b69d5b16"},{url:"/_next/static/chunks/1396-4a17d91be2b58c73.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/1396-4a17d91be2b58c73.js.map",revision:"eff246ac9f634572518a08757d63e965"},{url:"/_next/static/chunks/1411-985796be059c5e4d.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/1411-985796be059c5e4d.js.map",revision:"538b1e80eab83f755d7205f9a53218dc"},{url:"/_next/static/chunks/1666.5b6e6bf63cd6e692.js",revision:"5b6e6bf63cd6e692"},{url:"/_next/static/chunks/1666.5b6e6bf63cd6e692.js.map",revision:"d9b083919a9fbd9dcbe8f0defcad8648"},{url:"/_next/static/chunks/1865-c3d910272f06b124.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/1865-c3d910272f06b124.js.map",revision:"01fcec2bdb37e9647d0a36df02695cae"},{url:"/_next/static/chunks/2345-7073027b1c9dba69.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/2345-7073027b1c9dba69.js.map",revision:"c3016927b702cb16ace460daafca09e8"},{url:"/_next/static/chunks/263-b5458c488e7d609a.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/263-b5458c488e7d609a.js.map",revision:"ea6b3a11425a49378dd6d669c62a3df8"},{url:"/_next/static/chunks/2704-654b9cedb70d33f1.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/2704-654b9cedb70d33f1.js.map",revision:"08a3c3531b40ebcfc6178a9b3dbf2e14"},{url:"/_next/static/chunks/2749-27c8c2bb9fa6391a.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/2749-27c8c2bb9fa6391a.js.map",revision:"5180251e4bf1bee42dc90c0474cdb0b9"},{url:"/_next/static/chunks/336-421fec53f468940d.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/336-421fec53f468940d.js.map",revision:"26c0eacc34e4b7f2342c3e9a01700058"},{url:"/_next/static/chunks/3690-551269b1e5b208e3.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/3690-551269b1e5b208e3.js.map",revision:"c6a078f3d4ce10b808faec9dca387f98"},{url:"/_next/static/chunks/3773-506c3095b6e24862.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/3773-506c3095b6e24862.js.map",revision:"c412a7795543508e84374763ac8ddb83"},{url:"/_next/static/chunks/4036.562cf14c3410854c.js",revision:"562cf14c3410854c"},{url:"/_next/static/chunks/4036.562cf14c3410854c.js.map",revision:"7650b0a7262a353afc5d21079e449e1e"},{url:"/_next/static/chunks/4109-6e495ca159e9d14b.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/4109-6e495ca159e9d14b.js.map",revision:"aff3503c20c3f1dfdb9cd9b918652201"},{url:"/_next/static/chunks/4779-15c36ae3d22798ed.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/4779-15c36ae3d22798ed.js.map",revision:"b0beca639d425c04720616456a6d603e"},{url:"/_next/static/chunks/5198-40a48846b230819d.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/5198-40a48846b230819d.js.map",revision:"6175be9d7ca7e6697a7f5223a2638c2c"},{url:"/_next/static/chunks/52774a7f-74308ca7d7a4de05.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/52774a7f-74308ca7d7a4de05.js.map",revision:"14ae8cb26e0e45a4e1e58c17ea43164e"},{url:"/_next/static/chunks/5340-10748521ff4cf6bb.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/5340-10748521ff4cf6bb.js.map",revision:"a629da9a0a89cc8f3b49dfbfa2544ecc"},{url:"/_next/static/chunks/5600-54a28646d7c098ef.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/5600-54a28646d7c098ef.js.map",revision:"059891be2ead060979b24da01286efd0"},{url:"/_next/static/chunks/5614-bd700119925783e3.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/5614-bd700119925783e3.js.map",revision:"9ddc1c996c5140bf53c6c7e88ace01a9"},{url:"/_next/static/chunks/5764.535ccc8b7480b386.js",revision:"535ccc8b7480b386"},{url:"/_next/static/chunks/5764.535ccc8b7480b386.js.map",revision:"827a287f48761287572940ce0ee8dec0"},{url:"/_next/static/chunks/6003-ba58e3faf8127549.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/6003-ba58e3faf8127549.js.map",revision:"d79e809a07b6374a824e2296bdc31cad"},{url:"/_next/static/chunks/6282-eb9101d212504122.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/6282-eb9101d212504122.js.map",revision:"db4add15a257b5312e9c95a3c8aa499c"},{url:"/_next/static/chunks/6573-1595065669a7b79f.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/6573-1595065669a7b79f.js.map",revision:"39327b5a63fe8d8e09766d7e685da983"},{url:"/_next/static/chunks/6795-4eb01e66b91aa258.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/6795-4eb01e66b91aa258.js.map",revision:"4520d678d667f5094304ef88c54a5262"},{url:"/_next/static/chunks/6964-b7e66fff32b38484.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/6964-b7e66fff32b38484.js.map",revision:"2ecc351531746e8513303efed3c10d88"},{url:"/_next/static/chunks/7451-bdbbecfce4b8952d.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/7451-bdbbecfce4b8952d.js.map",revision:"b2e4adec3a4b451919dd3bcd7bca63ef"},{url:"/_next/static/chunks/8314.8c6a7ea9bd64bc95.js",revision:"8c6a7ea9bd64bc95"},{url:"/_next/static/chunks/8314.8c6a7ea9bd64bc95.js.map",revision:"8a0df3d43efd0e011f079a4f3db255a9"},{url:"/_next/static/chunks/8385-762433712d1f4a57.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/8385-762433712d1f4a57.js.map",revision:"1fc1dc1c39c3e188ed74f5bf48b0882f"},{url:"/_next/static/chunks/86-8afd5510355f9851.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/86-8afd5510355f9851.js.map",revision:"81bbb3029ab6cd183b5ece5da1e8a213"},{url:"/_next/static/chunks/8966-b88b725ea5449b18.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/8966-b88b725ea5449b18.js.map",revision:"e8e7a25909646c8a855eabeca780fc03"},{url:"/_next/static/chunks/9030-1bc367326e844cb7.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/9030-1bc367326e844cb7.js.map",revision:"6c81f52870740d691fe3f17b1554d4cd"},{url:"/_next/static/chunks/9041-a52dd6ac0b0b914a.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/9041-a52dd6ac0b0b914a.js.map",revision:"fab53eef463dd8073fd705b8bd84762c"},{url:"/_next/static/chunks/9197-539b8219c29c18e2.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/9197-539b8219c29c18e2.js.map",revision:"ca40e117046de2bb46130fcdc5e469f6"},{url:"/_next/static/chunks/9305-e9f45de4585dcfcd.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/9305-e9f45de4585dcfcd.js.map",revision:"5b21b080f0f87fb948d5eaabce204fa7"},{url:"/_next/static/chunks/948-56365b3d448a6018.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/948-56365b3d448a6018.js.map",revision:"468db2d6c6bdc93de0ef00bfd9e21744"},{url:"/_next/static/chunks/9724-693cdd83779dc5ad.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/9724-693cdd83779dc5ad.js.map",revision:"fba5193980f5eeb3991f9e10563bbd04"},{url:"/_next/static/chunks/9757-b236f8c39794733a.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/9757-b236f8c39794733a.js.map",revision:"d6626f9c359c33b5f549568e337ca875"},{url:"/_next/static/chunks/app/(default)/book/%5Bid%5D/page-bec5279c0209b1f8.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(default)/book/%5Bid%5D/page-bec5279c0209b1f8.js.map",revision:"f61861db403eb1aed7281426645eb70b"},{url:"/_next/static/chunks/app/(default)/feed/%5BitemId%5D/comments/page-9de5f0be377fbf6e.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(default)/feed/%5BitemId%5D/comments/page-9de5f0be377fbf6e.js.map",revision:"4bce1e45f719ba1848e914b8615a0341"},{url:"/_next/static/chunks/app/(default)/flash/%5Btype%5D/page-8ca23940af633f1b.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(default)/flash/%5Btype%5D/page-8ca23940af633f1b.js.map",revision:"466b24cc21e93a6dc6acdb11d3f51b43"},{url:"/_next/static/chunks/app/(default)/frolog-test/page-2015162a0a68c824.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(default)/frolog-test/page-2015162a0a68c824.js.map",revision:"8bdd7c50862e08242f312a02f3a8e219"},{url:"/_next/static/chunks/app/(default)/frolog-test/result/%5Bid%5D/page-7b0511500ff6b172.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(default)/frolog-test/result/%5Bid%5D/page-7b0511500ff6b172.js.map",revision:"3936e0e4e0e308c55b84959e2156e455"},{url:"/_next/static/chunks/app/(default)/join/finish/page-34cf72d81fd9e3ec.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(default)/join/finish/page-34cf72d81fd9e3ec.js.map",revision:"49e82a1ed165bd824a844c64507cbe3a"},{url:"/_next/static/chunks/app/(default)/landing/page-774a361ba9d23509.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(default)/landing/page-774a361ba9d23509.js.map",revision:"3a47657b9c2766bdcbffcf61273cb4b6"},{url:"/_next/static/chunks/app/(default)/search/page-55ef4251155482aa.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(default)/search/page-55ef4251155482aa.js.map",revision:"c71404671b7086db71ec439dffdf8170"},{url:"/_next/static/chunks/app/(detail)/memo/%5BmemoId%5D/page-d56c5aa253096086.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(detail)/memo/%5BmemoId%5D/page-d56c5aa253096086.js.map",revision:"c3aef6727127b667774f9048715340a0"},{url:"/_next/static/chunks/app/(detail)/review/%5BreviewId%5D/page-0bf226fb3d687126.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(detail)/review/%5BreviewId%5D/page-0bf226fb3d687126.js.map",revision:"cbdd9ab2041f3bf70af300fc5f9090a9"},{url:"/_next/static/chunks/app/(form)/find-password/page-37951b8948727282.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(form)/find-password/page-37951b8948727282.js.map",revision:"52f2846377595e39ec7134f63128a781"},{url:"/_next/static/chunks/app/(form)/join/page-a0d5d38dd1dab7d8.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(form)/join/page-a0d5d38dd1dab7d8.js.map",revision:"ad00fce45304bf919d8f233aca846da0"},{url:"/_next/static/chunks/app/(form)/layout-e9d51deeab15ca64.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(form)/layout-e9d51deeab15ca64.js.map",revision:"ef8f1e37773d57d45b27ca2584928e0d"},{url:"/_next/static/chunks/app/(form)/login/page-ec202c75b14c3987.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(form)/login/page-ec202c75b14c3987.js.map",revision:"fb47c3c47f14626aa76473d9c161479a"},{url:"/_next/static/chunks/app/(main)/(well)/page-4058bd4d587b19b9.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(main)/default/page-e916b9d5b926196b.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(main)/default/page-e916b9d5b926196b.js.map",revision:"bd697df1fb3fdbbc1cb5f04b77ea528c"},{url:"/_next/static/chunks/app/(main)/feed/page-41613c615400e0f9.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(main)/feed/page-41613c615400e0f9.js.map",revision:"0932025787490d922f77218b9ec48b8d"},{url:"/_next/static/chunks/app/(main)/layout-3c5a92ac8aad0bcb.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(main)/layout-3c5a92ac8aad0bcb.js.map",revision:"394df4233eec7ec4109dd1925d71f668"},{url:"/_next/static/chunks/app/(main)/search-home/page-3695d2e9fede34c4.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(main)/search-home/page-3695d2e9fede34c4.js.map",revision:"2c33b9938fd392fa3046072485d34b57"},{url:"/_next/static/chunks/app/(profile-title)/layout-7ee8cc5f2947e293.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(profile-title)/layout-7ee8cc5f2947e293.js.map",revision:"e889ef2be4b0d4c8f91340855a5398ac"},{url:"/_next/static/chunks/app/(profile-title)/quit/page-956831da7bce092e.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(profile-title)/quit/page-956831da7bce092e.js.map",revision:"4edf9b58fd82caa8dc21f162a2c41932"},{url:"/_next/static/chunks/app/(profile-title)/terms/%5Btype%5D/page-494be388788f4a04.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(profile-title)/terms/page-d790224e94090e87.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(profile-title)/terms/page-d790224e94090e87.js.map",revision:"f31c15113f5ce3b7c83ef9bd759917fe"},{url:"/_next/static/chunks/app/(store)/layout-60f303a94156609b.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(store)/layout-60f303a94156609b.js.map",revision:"5bd5c53d2e5bea2fb91411afd92475dd"},{url:"/_next/static/chunks/app/(store)/mission/page-852a0f008ab2896a.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(store)/mission/page-852a0f008ab2896a.js.map",revision:"34cb2a0cf311952b4ee1dbbfe1ec3eb7"},{url:"/_next/static/chunks/app/(store)/store/page-470ee5415f390397.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(store)/store/page-470ee5415f390397.js.map",revision:"556bec571a3fde01d27bac9867652605"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/profile/edit/page-90f178a1158c6257.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/profile/edit/page-90f178a1158c6257.js.map",revision:"c3c141c628c4fe13f49c5f29fc00f168"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/profile/follows/page-2e80e933414a01c8.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/profile/follows/page-2e80e933414a01c8.js.map",revision:"954c164e954fd4d8df0f4926064b0dc5"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/profile/page-668ba2c1b21c0bcc.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/profile/page-668ba2c1b21c0bcc.js.map",revision:"c5c3a5e215e4aa97c6ad7d3483e8ac65"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(detail)/memo/%5BmemoId%5D/page-bfa3ce21681129c1.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(detail)/memo/%5BmemoId%5D/page-bfa3ce21681129c1.js.map",revision:"46ba52e6e9c22a2d277731cf9ea70ef8"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(detail)/review/%5BreviewId%5D/page-1b6649c4755827bf.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(detail)/review/%5BreviewId%5D/page-1b6649c4755827bf.js.map",revision:"ae09984291c8c50b6e9694f23b227d8f"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(list)/layout-e4982712a9e13325.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(list)/layout-e4982712a9e13325.js.map",revision:"fcc2c04cdd1665ad618a4563f2ee9d8e"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(list)/memo/page-81613db74677e701.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(list)/memo/page-81613db74677e701.js.map",revision:"55b34f7dac5a3d00f010d7a00aeea281"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(list)/review/page-8a044f3c76c83616.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/book/%5BbookId%5D/(list)/review/page-8a044f3c76c83616.js.map",revision:"a7b1aa4f4085a53b9b1b8397e46e7b56"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/edit/page-6f415bc43b2c4c87.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/new-memo/%5BbookId%5D/page-5a166d2fe2984ac8.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/new-memo/%5BbookId%5D/page-5a166d2fe2984ac8.js.map",revision:"cb8932cfdb837a95a0d6705bc8bfef8d"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/new-review/%5BbookId%5D/page-7520921147822354.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/new-review/%5BbookId%5D/page-7520921147822354.js.map",revision:"3a725173c17d91260d6e358d27e1ddb8"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/%5BwellId%5D/page-41edd3d7617d8330.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/create/page-5ead435f4c571da5.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/(user)/%5BuserId%5D/well/page-f152867ed409d9d1.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/error-4963628a5951e759.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/error-4963628a5951e759.js.map",revision:"d36b1c8ae5115a4a2e693c5c1054b510"},{url:"/_next/static/chunks/app/layout-67d13b43550ff25d.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/app/layout-67d13b43550ff25d.js.map",revision:"1778237da8078aa2ef32065e21de334a"},{url:"/_next/static/chunks/app/not-found-e98041c46a4619c0.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/dc112a36.ab1cd89af0b6afd0.js",revision:"ab1cd89af0b6afd0"},{url:"/_next/static/chunks/dc112a36.ab1cd89af0b6afd0.js.map",revision:"70a82bd16516ec1cda6cec9a0e57b9a4"},{url:"/_next/static/chunks/fd9d1056-16d4edccbef04791.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/fd9d1056-16d4edccbef04791.js.map",revision:"648eb56e2031c3ba74838c3a97e230e7"},{url:"/_next/static/chunks/framework-e6d9b196313bbe50.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/framework-e6d9b196313bbe50.js.map",revision:"ded4b553f5db07575c41f49f4aea82a6"},{url:"/_next/static/chunks/main-app-17fa6548245a53b3.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/main-app-17fa6548245a53b3.js.map",revision:"62f894a8f56802af0be9ee7aa4a22003"},{url:"/_next/static/chunks/main-c1cce04f891bf564.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/main-c1cce04f891bf564.js.map",revision:"7f5216e820b0ab7edd715262220dd0eb"},{url:"/_next/static/chunks/pages/_app-f0d0fa8f2712695e.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/pages/_app-f0d0fa8f2712695e.js.map",revision:"66121208f5911cc573c119b0ce1c900e"},{url:"/_next/static/chunks/pages/_error-2843dac9c89eec9f.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/pages/_error-2843dac9c89eec9f.js.map",revision:"d236c9b9ea9d5b5a9d484cd33cbfed9c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-92c91d3cf1a03f82.js",revision:"oYUsNhdtH2n2IYn_NclvH"},{url:"/_next/static/chunks/webpack-92c91d3cf1a03f82.js.map",revision:"73cfb1741079610c60644a7d522c283f"},{url:"/_next/static/css/bb8c6169e8ccc289.css",revision:"bb8c6169e8ccc289"},{url:"/_next/static/css/bb8c6169e8ccc289.css.map",revision:"e22bac8479314b62ecff4fb63b5a43ec"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/ff840cfebfb63b0c-s.p.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.db61df16.svg",revision:"db61df16"},{url:"/_next/static/oYUsNhdtH2n2IYn_NclvH/_buildManifest.js",revision:"8a7f2ca7a0d59236fee699a06eaa3ac7"},{url:"/_next/static/oYUsNhdtH2n2IYn_NclvH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/fonts/PretendardVariable.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/icons/check/circle-checked.svg",revision:"8dc2bcd80298666847aec449e552fafc"},{url:"/icons/check/circle-uncheck.svg",revision:"59de465aa3a8e24e9806a1d8cdf17f00"},{url:"/icons/common/add-icon.svg",revision:"3aacc2ff81ff14893b1cd71c2217ae1d"},{url:"/icons/common/back.svg",revision:"6b8f8f4dff02202bd266159269b7f4ba"},{url:"/icons/common/clear.svg",revision:"4e0db9a8b6f10f4479e97f8141465a01"},{url:"/icons/common/expand.svg",revision:"a1db86835bf7278e2d859eb10f0633b8"},{url:"/icons/common/icon-plus-circle.svg",revision:"e0737aa6a2eaa98e843895d436295d8b"},{url:"/icons/common/menu-arrow.svg",revision:"b4205faca3b1997c66e768b94e72d156"},{url:"/icons/common/scroll-to-top.svg",revision:"f80938616e0e7e9bba82a0325dc98352"},{url:"/icons/common/toggle.svg",revision:"2bb2628a582a172b1bafd3adbd5692c4"},{url:"/icons/common/x-icon.svg",revision:"75d553691a11e997c502f3a878560155"},{url:"/icons/counter/minus.svg",revision:"2cc8ce60824f4624ef6bb6816ebbb087"},{url:"/icons/counter/plus.svg",revision:"514cc578066c90ff6c7eddf6dc6cc1e5"},{url:"/icons/feed/comment-child.svg",revision:"4f26dd3dc7d604073dced7757dd361d4"},{url:"/icons/feed/feed-menu.svg",revision:"6ab0560ff394a96e1db4227898276fee"},{url:"/icons/feed/icon-bookmark.svg",revision:"2f3b8101ac7f7532ad4f528f1021b98c"},{url:"/icons/feed/icon-chat.svg",revision:"6b597fccf2512a7be8fe812ba37ca6d2"},{url:"/icons/feed/icon-heart-filled.svg",revision:"1c34f5283d88cea215b3bc9a4a665ab4"},{url:"/icons/feed/icon-heart.svg",revision:"d5dadc9cf39ae8e53b49ba61c9fefe09"},{url:"/icons/feed/icon-send.svg",revision:"45af17c3975207177c2825bb3164c5f2"},{url:"/icons/form/image-edit.svg",revision:"f31f57606b49a983793c356032c270cd"},{url:"/icons/form/input-enter.svg",revision:"a765705c2eb585d9e07585db6e253eae"},{url:"/icons/form/select-icon.svg",revision:"6888e72148cbddc99f4011560fcd8e96"},{url:"/icons/index.ts",revision:"52c6a1326f2132482b18625d549d4280"},{url:"/icons/memo/icon-plus.svg",revision:"7e4ac9a803ac251e00b7194c1d14f38a"},{url:"/icons/memo/memo-bubble.svg",revision:"f4cd619effbe628b3364c6fdf93e7e6a"},{url:"/icons/memo/memo-light.svg",revision:"9a14549fd37551611899c15b101940b2"},{url:"/icons/memo/memo-pin.svg",revision:"6bbfea0c4603cc0dc429cae9eaba02ad"},{url:"/icons/memo/x-light.svg",revision:"6f23d05911c3533803a66648c8673da2"},{url:"/icons/navigation/feed-icon.svg",revision:"c2455131dc9b677798af1a3841ead8db"},{url:"/icons/navigation/profile-icon.svg",revision:"17e789a96bcfbda57438847ca85018bd"},{url:"/icons/navigation/search-icon.svg",revision:"3650556983fce750dc8c722f4c86b72f"},{url:"/icons/navigation/well-icon.svg",revision:"30bdb8c702709fbdc6bec6ec1c6bdb8e"},{url:"/icons/test/download-done.svg",revision:"b90b6990df256d2df8051e94e2c9ecff"},{url:"/icons/test/download-icon.svg",revision:"fb9cace213c0fcdd74e02815b9b4e3b3"},{url:"/icons/toast/toast-error.svg",revision:"08018558993f43aa6391cbc02a00d1a5"},{url:"/icons/toast/toast-normal.svg",revision:"81af27ab1c581bbc013bc91100cbcb8b"},{url:"/icons/toast/toast-plus.svg",revision:"c3e3de5d585c95fb9bffb20e547c1041"},{url:"/icons/well/bookmark.svg",revision:"d7392eba67db71e51122ac1720472ff5"},{url:"/icons/well/circle-arrow.svg",revision:"dc06f93074df3a7b96850db3c52271c1"},{url:"/icons/well/circle-plus.svg",revision:"699ee3993f86dc639496d5b9ea76c97c"},{url:"/icons/well/store-button.svg",revision:"91d6d636ff3f69abaad86cd189e12737"},{url:"/icons/well/well-add-button.svg",revision:"aeb1520996e266a03cc73eda5f705e32"},{url:"/icons/well/well-back.svg",revision:"1bd2b8ca4c30a8b32ac0d8bb6694916b"},{url:"/icons/well/well-edit.svg",revision:"af5ac4ec9c516c8eb61fa38af43991fc"},{url:"/images/book/book-bg.svg",revision:"e139d617fc94cf61d75c909b0ff47002"},{url:"/images/book/book-cover.svg",revision:"b5d0dd51337da4072c46a8e5e21532eb"},{url:"/images/book/book-skin.svg",revision:"fda1d65bd03669ef0eb79443847860e1"},{url:"/images/etc/default-profile.svg",revision:"05916337d63f10306938ae8c5e956010"},{url:"/images/etc/ground-sm.webp",revision:"64b94cae2906fd6a88c81cee4c373011"},{url:"/images/etc/ground.webp",revision:"fd0264b749febde2177393c32add761a"},{url:"/images/flash/light-bg.svg",revision:"11c00e120020633ecf6a692bb76a47d5"},{url:"/images/flash/light-bg.webp",revision:"6c6744aa111b56eddfee72429d60ec12"},{url:"/images/flash/light.svg",revision:"44c5f7e550123113b3391335c5cf5a01"},{url:"/images/flash/light.webp",revision:"17289bcfc1bdbb563c78b99bfabd1622"},{url:"/images/frog/character/fit/default.svg",revision:"c7596d4c34f2b7c040d694fde90c884b"},{url:"/images/frog/character/fit/devil.svg",revision:"2e1e895ee3a8ec0a9a83df177c66bf74"},{url:"/images/frog/character/fit/dracula.svg",revision:"2d4d4ae1bbab9cff985281cdb05229e4"},{url:"/images/frog/character/fit/fro.svg",revision:"e215ccd7b35d22a9e983320084bf558a"},{url:"/images/frog/character/fit/gguristein.svg",revision:"4439b3261e0320521a80a67ac3eb456b"},{url:"/images/frog/character/fit/ghost.svg",revision:"b5df2893fb9b4c62a5b9a88ddf6f2a4a"},{url:"/images/frog/character/fit/mummy.svg",revision:"d7999f7b964f62572f4d09a1710db571"},{url:"/images/frog/character/fit/pumpkin.svg",revision:"a7a947796ba2644ae3c7223eb8e5a609"},{url:"/images/frog/character/fit/rogy.svg",revision:"3b530a561101e5ca20c879e67ea88080"},{url:"/images/frog/character/fit/roro.svg",revision:"7ebe27a71d48be39ade2e8da25c142a9"},{url:"/images/frog/character/fit/skeleton.svg",revision:"5770f89cd402b2f26244ca70e65db764"},{url:"/images/frog/character/fit/witch.svg",revision:"da461a3706e293dc40553ae5e85f0d09"},{url:"/images/frog/character/square/default-square.svg",revision:"06097744a29fbcd4828b071b87dd7a35"},{url:"/images/frog/character/square/devil-square.svg",revision:"4ee629f4b124f48652f16f7a66049f94"},{url:"/images/frog/character/square/dracula-square.svg",revision:"cbdc78467187f6d3d15a7b57a7a85eea"},{url:"/images/frog/character/square/fro-square.svg",revision:"3abc4664a2223759d4a6306e62184f90"},{url:"/images/frog/character/square/gguristein-square.svg",revision:"859781d6693af4041ba2cfebab8e06db"},{url:"/images/frog/character/square/ghost-square.svg",revision:"77c1eb31f2531f08d74dc76a92cac04a"},{url:"/images/frog/character/square/mummy-square.svg",revision:"943d2f3d5fa746a00b7ad420db198219"},{url:"/images/frog/character/square/pumpkin-square.svg",revision:"3944c03de47b5637fe0944fb6c95c9fb"},{url:"/images/frog/character/square/rogy-square.svg",revision:"f2d679effb6b42296f7b852517e094cf"},{url:"/images/frog/character/square/roro-square.svg",revision:"c9c16a96a13999c29b586c94bcb4ad87"},{url:"/images/frog/character/square/skeleton-square.svg",revision:"5b15be1753388807aaaf51c5173d795b"},{url:"/images/frog/character/square/witch-square.svg",revision:"97d789aac00ebd8244196f330c3ea247"},{url:"/images/frog/fallback/frog-empty-dot.svg",revision:"bc73507180645f760d3d223c59e4c3a0"},{url:"/images/frog/fallback/frog-with-pen.svg",revision:"0dca3a12ccd7bf47c7cba5a40829776f"},{url:"/images/frog/fallback/no-review.svg",revision:"b21517f2df24b3ccc923218343f279cd"},{url:"/images/frog/fallback/search-frog.svg",revision:"79294eb7af07e0b53210501a4dc6a970"},{url:"/images/frog/first-review-congrats.svg",revision:"28cedf972e286bfcab8ac3fb1be454fc"},{url:"/images/frog/flash/congrats.webp",revision:"ce604d78bcc1decf8fc962951fe1ec0a"},{url:"/images/frog/flash/frog-evaluating-done.webp",revision:"b7fef60bff833216682afc028329459e"},{url:"/images/frog/flash/frog-evaluating.webp",revision:"5f74d3e3b5937d837999dc45dafe99f8"},{url:"/images/frog/flash/new-well-congrats.webp",revision:"dee989ac1f7e021c8ed48f174c87f4b7"},{url:"/images/frog/frog-done.svg",revision:"e4362b6a61cf54d7054336c0f54e4564"},{url:"/images/frog/frog-reading.svg",revision:"7280a356c965279c7e6ff4fc23e0cdff"},{url:"/images/frog/memo-frog.svg",revision:"1153a438afa66071408b699888e48e4d"},{url:"/images/frog/mission-frog.svg",revision:"e0a8934eae2f2d4b8b91ad8f34a09af0"},{url:"/images/frog/more-character-frog.svg",revision:"b5940896174fee453155cd173ba546f4"},{url:"/images/frog/morefeed-frog.svg",revision:"bd10c72a6384347296df712be7fb4919"},{url:"/images/frog/sheet/frog-normal.svg",revision:"06717a9732096b74419ac6a677dc6a4b"},{url:"/images/frog/sheet/frog-sheet-error.svg",revision:"096fb3433ccccbb2dae286ca88234080"},{url:"/images/frog/sheet/frog-with-book.svg",revision:"22a547693a99ac9f3c17145bd2189105"},{url:"/images/frog/sheet/sheet-header.svg",revision:"f9487dd99b3e287e64f8d2253a64c641"},{url:"/images/frog/sheet/wink-frog.svg",revision:"0e172987f97b0005fc8a13f5f51d72bf"},{url:"/images/index.ts",revision:"554be86696001caa1b17a02f00dc7572"},{url:"/images/onBoarding/slide-1.svg",revision:"9955b28aa2413526b363ac1edf916c45"},{url:"/images/onBoarding/slide-2.svg",revision:"efb2ba150cc8e7db5c1e9c2cd302ba10"},{url:"/images/onBoarding/slide-3.svg",revision:"abe41928631fd61dcb6603154b66bc89"},{url:"/images/onBoarding/slide-4.svg",revision:"bffe7a826ada78f1abf2497c8103bc2a"},{url:"/images/test/result-image/type1.png",revision:"cc2028d8e51159a002db613ae7212077"},{url:"/images/test/result-image/type2.png",revision:"2fe0cfdeac14b000436f0d2ac9dc4f90"},{url:"/images/test/result-image/type3.png",revision:"6d6db674f0d74aafac038624023be46a"},{url:"/images/test/type1.svg",revision:"fc6035ee79e886068fccfb241882030d"},{url:"/images/test/type2.svg",revision:"37620e83091d7732491785b697a68adf"},{url:"/images/test/type3.svg",revision:"603691823ff6868a2f882009bce9189c"},{url:"/images/well/bg/well-bg-1.svg",revision:"05c058742d749d0c2c39a28ed33d5df6"},{url:"/images/well/bg/well-bg-2.svg",revision:"a4fcfc64a8f2e66d544494f2b16bc16c"},{url:"/images/well/bg/well-bg-3.svg",revision:"2c8c629df6166190d2817fc8b1be633f"},{url:"/images/well/bg/well-bg-4.svg",revision:"5f5cd4bf528fe365819ea0da4471cef3"},{url:"/images/well/bg/well-bg-5.svg",revision:"8b53f06f2e0ceb3799a618efe8ee80eb"},{url:"/images/well/bg/well-bg-6.svg",revision:"0e2a40d464cda1ba846c0a6d494bcc64"},{url:"/images/well/bg/well-bg-7.svg",revision:"4bdbde76102ae60688702de233ca71c9"},{url:"/images/well/bg/well-bg-8.svg",revision:"a57a1834685989e85d2f7f28ee7994fd"},{url:"/images/well/bg/well-bg-9.svg",revision:"8a9e595fdf848b2eb9c39be2e0f268d7"},{url:"/images/well/memo_leaf.svg",revision:"26bb4e9cf8f3fa373054b0db91787a0c"},{url:"/images/well/outline/1.svg",revision:"5e5a98a83119823a36751194300240ae"},{url:"/images/well/outline/2.svg",revision:"1899292b13d6a797358ee42b2574b44c"},{url:"/images/well/outline/3.svg",revision:"38f1858edc55382025dbd28ad6427689"},{url:"/images/well/outline/4.svg",revision:"b1da4be233733e226973e32e21932516"},{url:"/images/well/outline/5.svg",revision:"712ec8a2324aea15ee5717fbbe649d1f"},{url:"/images/well/outline/6.svg",revision:"0bcdea52115eead440d9e57242a9568a"},{url:"/images/well/outline/7.svg",revision:"18d8ba6fcb0f92a71d9b0ff67ca3bbd3"},{url:"/images/well/outline/8.svg",revision:"ffb9611e24812ce1a3d6b2c59bce78fc"},{url:"/images/well/outline/9.svg",revision:"8027a3f95378f327767a116570bd3a15"},{url:"/images/well/shape/1.svg",revision:"5c133063469fb41b9f058d32558aba4d"},{url:"/images/well/shape/2.svg",revision:"3da5bd0fd510344ddffaa1a2428d938d"},{url:"/images/well/shape/3.svg",revision:"5b292713a49102786989982271439814"},{url:"/images/well/shape/4.svg",revision:"d643b5e26458c08aec571a85bf00b64b"},{url:"/images/well/shape/5.svg",revision:"6ebcf3bac74eec3a92898805f7771bf4"},{url:"/images/well/shape/6.svg",revision:"abc4be99c208376b34944f1331d025f9"},{url:"/images/well/shape/7.svg",revision:"92947b8760f7a9012a4896749a522c22"},{url:"/images/well/shape/8.svg",revision:"6934d6330782113bf32f0f1770f9d8dc"},{url:"/images/well/shape/9.svg",revision:"a833a36d23a5e4ea9ecd4c401ae43b7b"},{url:"/images/well/wave/art.svg",revision:"66b07a68031481153787b009847fc655"},{url:"/images/well/wave/cartoon.svg",revision:"b4d5b0aeff315b18bf49450a47a52234"},{url:"/images/well/wave/default-2.svg",revision:"53383196afaef374fa22cbb0de652aa5"},{url:"/images/well/wave/default.svg",revision:"7bd32251aa089d3bd06c8c29de1dd3f1"},{url:"/images/well/wave/economic_business.svg",revision:"63d581eaa82ac82bd3cad2f81cfd61f3"},{url:"/images/well/wave/essay.svg",revision:"3514388a3cbafee2d6e8b1a1694f0602"},{url:"/images/well/wave/foreign_languages.svg",revision:"114c2896e1b75cab29a31572584bc85d"},{url:"/images/well/wave/humanities.svg",revision:"bb486801fa709b237dbab9f417121b41"},{url:"/images/well/wave/it.svg",revision:"270842ddeac525f77ffce5492b552422"},{url:"/images/well/wave/life.svg",revision:"45f470a705d6e618b5c21c6e75e38663"},{url:"/images/well/wave/novel.svg",revision:"465600930d92eb10394ace9c86fe60f8"},{url:"/images/well/wave/religion.svg",revision:"4b05984128d53b1809157661a892eac6"},{url:"/images/well/wave/science.svg",revision:"e0196ed643a01d5f17d9186af9c52d4a"},{url:"/images/well/wave/self_development.svg",revision:"a11d7121deccb3e97a4f7f5cd4b5f300"},{url:"/images/well/wave/sociology.svg",revision:"47838d7245daaf0654c28d52e4bdb5e7"},{url:"/images/well/wave/travel.svg",revision:"8eb8ca95f9c9c7328cc428d005c752ec"},{url:"/images/well/wave/unknown.svg",revision:"a27c15b1959acbddc2cfd6fbecda6830"},{url:"/images/well/well-add-button.svg",revision:"8f7f97a5be43f6bb3e7f1357357a5461"},{url:"/images/well/well-bubble.svg",revision:"b20c63e6981d0b1d8063fbedf65ea221"},{url:"/images/well/well-leaf.svg",revision:"5fb5543db516b2420a7abdc027d6c015"},{url:"/logo-symbol.svg",revision:"ec1249ae8756b7004171f8b8a204ac9e"},{url:"/logo-title.svg",revision:"bca49c4e7e8d805d3d0f3dbbfda82a4a"},{url:"/logo.svg",revision:"1fa7be79b1cda3e04072c3e60b9b7a2d"},{url:"/logo/apple-touch-icon-120x120.png",revision:"6df9053da391b778b3624e7795fb2b95"},{url:"/logo/apple-touch-icon-152x152.png",revision:"083969784a6734220352957499effb63"},{url:"/logo/apple-touch-icon-60x60.png",revision:"12ccf32cfbbd0560bde0e68b7629dd10"},{url:"/logo/favicon-196x196.png",revision:"1fc84fc49c98c2c51aa9e6b9ef2f1e74"},{url:"/logo/favicon-512x512.png",revision:"61542340f3a97d7c64f11aab9f306cde"},{url:"/logo/favicon-96x96.png",revision:"bc2000337a6d50eddc6b7dc8fabc205a"},{url:"/logo/favicon.ico",revision:"c7ccf2e5ab70f6656ef09a06596787ad"},{url:"/lotties/popper-small.json",revision:"b4f9cda33626105db7d7f3664f7a2881"},{url:"/lotties/popper.json",revision:"87226751a9b258ddfb0b1a4fd7cdb1a9"},{url:"/splash/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"4e4b0976246d786dc1b346015c80e359"},{url:"/splash/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"af710f42c83ce4d377168b1d843a815a"},{url:"/splash/iPhone_11__iPhone_XR_portrait.png",revision:"a8270fbd4b72c8b5ecbd12bfc166d8ff"},{url:"/splash/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"57e9406fb271e31f9ef5b8f55dfd48df"},{url:"/splash/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"63bef9e4acd93e4cc49a916905a08e17"},{url:"/splash/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"78c9ebf23b47bed6fe2845186eeab0b6"},{url:"/splash/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png",revision:"ee6aa795455156fd394b29aa43552b94"},{url:"/splash/iPhone_16_Pro_Max_portrait.png",revision:"895161ed06dc03c8b61eaf0d10aa4efe"},{url:"/splash/iPhone_16_Pro_portrait.png",revision:"2e012847dea840a3086c38f07126d9f3"},{url:"/splash/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png",revision:"d3b187e799f812862fb7b821216fcf10"},{url:"/splash/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"7e25cc0e4f3936248b4f2c12629086bc"},{url:"/splash/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"57563991c84d6413625238dc33319ce0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
