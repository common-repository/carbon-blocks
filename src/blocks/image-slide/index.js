(()=>{"use strict";var e,t={4788:()=>{const e=window.wp.i18n,t=window.wp.blocks,n=window.React,o="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNTsiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBzdHlsZT0iZmlsbDpyZ2IoMjI5LDIyOSwyMjkpOyIvPjxwYXRoIGQ9Ik0wLDBMNDAwLDMwMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6cmdiKDE3MiwxNzIsMTcyKTtzdHJva2Utd2lkdGg6MXB4OyIvPjwvc3ZnPgo=",i=window.wp.blockEditor,r=window.wp.components,c=window.wp.primitives,s=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})),l=window.wp.element,a=window.wp.data,f=Object.freeze({left:0,top:0,width:16,height:16}),u=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),d=Object.freeze({...f,...u}),p=Object.freeze({...d,body:"",hidden:!1});function h(e,t){const n=function(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}(e,t);for(const o in p)o in u?o in e&&!(o in n)&&(n[o]=u[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function g(e,t,n){const o=e.icons,i=e.aliases||Object.create(null);let r={};function c(e){r=h(o[e]||i[e],r)}return c(t),n.forEach(c),h(e,r)}function m(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const o=function(e,t){const n=e.icons,o=e.aliases||Object.create(null),i=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function e(t){if(n[t])return i[t]=[];if(!(t in i)){i[t]=null;const n=o[t]&&o[t].parent,r=n&&e(n);r&&(i[t]=[n].concat(r))}return i[t]})),i}(e);for(const i in o){const r=o[i];r&&(t(i,g(e,i,r)),n.push(i))}return n}const b=/^[a-z0-9]+(-[a-z0-9]+)*$/,v=(e,t,n,o="")=>{const i=e.split(":");if("@"===e.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const e=i.pop(),n=i.pop(),r={provider:i.length>0?i[0]:o,prefix:n,name:e};return t&&!x(r)?null:r}const r=i[0],c=r.split("-");if(c.length>1){const e={provider:o,prefix:c.shift(),name:c.join("-")};return t&&!x(e)?null:e}if(n&&""===o){const e={provider:o,prefix:"",name:r};return t&&!x(e,n)?null:e}return null},x=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(b)||!(t&&""===e.prefix||e.prefix.match(b))||!e.name.match(b)),w={provider:"",aliases:{},not_found:{},...f};function y(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function k(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons)return null;if(!y(e,w))return null;const n=t.icons;for(const e in n){const t=n[e];if(!e.match(b)||"string"!=typeof t.body||!y(t,p))return null}const o=t.aliases||Object.create(null);for(const e in o){const t=o[e],i=t.parent;if(!e.match(b)||"string"!=typeof i||!n[i]&&!o[i]||!y(t,p))return null}return t}const j=Object.create(null);function I(e,t){const n=j[e]||(j[e]=Object.create(null));return n[t]||(n[t]=function(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}(e,t))}function O(e,t){return k(t)?m(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}let S=!1;function M(e){return"boolean"==typeof e&&(S=e),S}function C(e){const t="string"==typeof e?v(e,!0,S):e;if(t){const e=I(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}const T=Object.freeze({width:null,height:null}),E=Object.freeze({...T,...u}),B=/(-?[0-9.]*[0-9]+[0-9.]*)/g,_=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function L(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const o=e.split(B);if(null===o||!o.length)return e;const i=[];let r=o.shift(),c=_.test(r);for(;;){if(c){const e=parseFloat(r);isNaN(e)?i.push(r):i.push(Math.ceil(e*t*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");c=!c}}const R=/\sid="(\S+)"/g,P="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let Z=0;function z(e,t=P){const n=[];let o;for(;o=R.exec(e);)n.push(o[1]);if(!n.length)return e;const i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof t?t(n):t+(Z++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+i+"$3")})),e=e.replace(new RegExp(i,"g"),"")}const H=Object.create(null);function N(e){return H[e]||H[""]}function F(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const A=Object.create(null),D=["https://api.simplesvg.com","https://api.unisvg.com"],W=[];for(;D.length>0;)1===D.length||Math.random()>.5?W.push(D.shift()):W.push(D.pop());function V(e,t){const n=F(t);return null!==n&&(A[e]=n,!0)}function G(e){return A[e]}A[""]=F({resources:["https://api.iconify.design"].concat(W)});let J=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(e){}})();const U={prepare:(e,t,n)=>{const o=[],i=function(e,t){const n=G(e);if(!n)return 0;let o;if(n.maxURL){let e=0;n.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)}));const i=t+".json?icons=";o=n.maxURL-e-n.path.length-i.length}else o=0;return o}(e,t),r="icons";let c={type:r,provider:e,prefix:t,icons:[]},s=0;return n.forEach(((n,l)=>{s+=n.length+1,s>=i&&l>0&&(o.push(c),c={type:r,provider:e,prefix:t,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(e,t,n)=>{if(!J)return void n("abort",424);let o=function(e){if("string"==typeof e){const t=G(e);if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");o+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;o+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let i=503;J(e+o).then((e=>{const t=e.status;if(200===t)return i=501,e.json();setTimeout((()=>{n(function(e){return 404===e}(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",i)}))})).catch((()=>{n("next",i)}))}};function $(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}let X=0;var Q={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function q(e){const t={...Q,...e};let n=[];function o(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,i,r){const c=function(e,t,n,o){const i=e.resources.length,r=e.random?Math.floor(Math.random()*i):e.index;let c;if(e.random){let t=e.resources.slice(0);for(c=[];t.length>1;){const e=Math.floor(Math.random()*t.length);c.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}c=c.concat(t)}else c=e.resources.slice(r).concat(e.resources.slice(0,r));const s=Date.now();let l,a="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===a&&(a="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function m(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function b(){a="failed",p.forEach((e=>{e(void 0,l)}))}function v(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}return"function"==typeof o&&p.push(o),setTimeout((function o(){if("pending"!==a)return;h();const i=c.shift();if(void 0===i)return d.length?void(u=setTimeout((()=>{h(),"pending"===a&&(v(),b())}),e.timeout)):void b();const r={status:"pending",resource:i,callback:(t,n)=>{!function(t,n,i){const r="success"!==n;switch(d=d.filter((e=>e!==t)),a){case"pending":break;case"failed":if(r||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return l=i,void b();if(r)return l=i,void(d.length||(c.length?o():b()));if(h(),v(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}a="completed",p.forEach((e=>{e(i)}))}(r,t,n)}};d.push(r),f++,u=setTimeout(o,e.rotate),n(i,t,r.callback)})),function(){return{startTime:s,payload:t,status:a,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}(t,e,i,((e,t)=>{o(),r&&r(e,t)}));return n.push(c),c},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:o}}function Y(){}const K=Object.create(null);const ee="iconify2",te="iconify",ne=te+"-count",oe=te+"-version",ie=36e5,re=168;function ce(e,t){try{return e.getItem(t)}catch(e){}}function se(e,t,n){try{return e.setItem(t,n),!0}catch(e){}}function le(e,t){try{e.removeItem(t)}catch(e){}}function ae(e,t){return se(e,ne,t.toString())}function fe(e){return parseInt(ce(e,ne))||0}const ue={local:!0,session:!0},de={local:new Set,session:new Set};let pe=!1,he="undefined"==typeof window?{}:window;function ge(e){const t=e+"Storage";try{if(he&&he[t]&&"number"==typeof he[t].length)return he[t]}catch(e){}ue[e]=!1}function me(e,t){const n=ge(e);if(!n)return;const o=ce(n,oe);if(o!==ee){if(o){const e=fe(n);for(let t=0;t<e;t++)le(n,te+t.toString())}return se(n,oe,ee),void ae(n,0)}const i=Math.floor(Date.now()/ie)-re,r=e=>{const o=te+e.toString(),r=ce(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch(e){}le(n,o)}};let c=fe(n);for(let t=c-1;t>=0;t--)r(t)||(t===c-1?(c--,ae(n,c)):de[e].add(t))}function be(){if(!pe){pe=!0;for(const e in ue)me(e,(e=>{const t=e.data,n=I(e.provider,t.prefix);if(!O(n,t).length)return!1;const o=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function ve(){}const xe=(e,t)=>{const n=function(e,t=!0,n=!1){const o=[];return e.forEach((e=>{const i="string"==typeof e?v(e,t,n):e;i&&o.push(i)})),o}(e,!0,M()),o=function(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let o={provider:"",prefix:"",name:""};return e.forEach((e=>{if(o.name===e.name&&o.prefix===e.prefix&&o.provider===e.provider)return;o=e;const i=e.provider,r=e.prefix,c=e.name,s=n[i]||(n[i]=Object.create(null)),l=s[r]||(s[r]=I(i,r));let a;a=c in l.icons?t.loaded:""===r||l.missing.has(c)?t.missing:t.pending;const f={provider:i,prefix:r,name:c};a.push(f)})),t}(n);if(!o.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(o.loaded,o.missing,o.pending,ve)})),()=>{e=!1}}const i=Object.create(null),r=[];let c,s;return o.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===s&&t===c)return;c=t,s=n,r.push(I(t,n));const o=i[t]||(i[t]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((e=>{const{provider:t,prefix:n,name:o}=e,r=I(t,n),c=r.pendingIcons||(r.pendingIcons=new Set);c.has(o)||(c.add(o),i[t][n].push(o))})),r.forEach((e=>{const{provider:t,prefix:n}=e;i[t][n].length&&function(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,o=e.iconsToLoad;let i;delete e.iconsToLoad,o&&(i=N(t))&&i.prepare(t,n,o).forEach((n=>{!function(e,t,n){let o,i;if("string"==typeof e){const t=N(e);if(!t)return n(void 0,424),Y;i=t.send;const r=function(e){if(!K[e]){const t=G(e);if(!t)return;const n={config:t,redundancy:q(t)};K[e]=n}return K[e]}(e);r&&(o=r.redundancy)}else{const t=F(e);if(t){o=q(t);const n=N(e.resources?e.resources[0]:"");n&&(i=n.send)}}o&&i?o.query(t,i,n)().abort:n(void 0,424)}(t,n,(t=>{if("object"!=typeof t)n.icons.forEach((t=>{e.missing.add(t)}));else try{const n=O(e,t);if(!n.length)return;const o=e.pendingIcons;o&&n.forEach((e=>{o.delete(e)})),function(e,t){function n(n){let o;if(!ue[n]||!(o=ge(n)))return;const i=de[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=fe(o),r>=50||!ae(o,r+1))return;const c={cached:Math.floor(Date.now()/ie),provider:e.provider,data:t};return se(o,te+r.toString(),JSON.stringify(c))}pe||be(),t.lastModified&&!function(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const n in ue)me(n,(n=>{const o=n.data;return n.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t}));return!0}(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))}(e,t)}catch(e){console.error(e)}!function(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,function(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,i=e.prefix;t.forEach((t=>{const r=t.icons,c=r.pending.length;r.pending=r.pending.filter((t=>{if(t.prefix!==i)return!0;const c=t.name;if(e.icons[c])r.loaded.push({provider:o,prefix:i,name:c});else{if(!e.missing.has(c))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:c})}return!1})),r.pending.length!==c&&(n||$([e],t.id),t.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),t.abort))}))})))}(e)})))}(e)}))}))})))}(e,i[t][n])})),t?function(e,t,n){const o=X++,i=$.bind(null,n,o);if(!t.pending.length)return i;const r={id:o,icons:t,callback:e,abort:i};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(r)})),i}(t,o,r):ve},we=/[\s,]+/;function ye(e,t){t.split(we).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function ke(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:o(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i/=t,i%1==0?o(i):0)}}return t}let je;function Ie(e){return void 0===je&&function(){try{je=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch(e){je=null}}(),je?je.createHTML(e):e}const Oe={...E,inline:!1},Se={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Me={display:"inline-block"},Ce={backgroundColor:"currentColor"},Te={backgroundColor:"transparent"},Ee={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Be={WebkitMask:Ce,mask:Ce,background:Te};for(const e in Be){const t=Be[e];for(const n in Ee)t[e+n]=Ee[n]}const _e={...Oe,inline:!0};function Le(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}if(M(!0),Re=U,H[""]=Re,"undefined"!=typeof document&&"undefined"!=typeof window){be();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),S&&!t&&!e.prefix){let t=!1;return k(e)&&(e.prefix="",m(e,((e,n)=>{n&&function(e,t){const n=v(e,!0,S);return!!n&&function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(e){}return!1}(I(n.provider,n.prefix),n.name,t)}(e,n)&&(t=!0)}))),t}const n=e.prefix;return!!x({provider:t,prefix:n,name:"a"})&&!!O(I(t,n),e)}(e))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const o=t[e];if("object"!=typeof o||!o||void 0===o.resources)continue;V(e,o)||console.error(n)}catch(e){console.error(n)}}}}var Re;function Pe(e){const[t,o]=(0,n.useState)(!!e.ssr),[i,r]=(0,n.useState)({}),[c,s]=(0,n.useState)(function(t){if(t){const t=e.icon;if("object"==typeof t)return{name:"",data:t};const n=C(t);if(n)return{name:t,data:n}}return{name:""}}(!!e.ssr));function l(){const e=i.callback;e&&(e(),r({}))}function a(e){if(JSON.stringify(c)!==JSON.stringify(e))return l(),s(e),!0}function f(){var t;const n=e.icon;if("object"==typeof n)return void a({name:"",data:n});const o=C(n);if(a({name:n,data:o}))if(void 0===o){const e=xe([n],f);r({callback:e})}else o&&(null===(t=e.onLoad)||void 0===t||t.call(e,n))}(0,n.useEffect)((()=>(o(!0),l)),[]),(0,n.useEffect)((()=>{t&&f()}),[e.icon,t]);const{name:u,data:p}=c;return p?((e,t,o)=>{const i=t.inline?_e:Oe,r=function(e,t){const n={...e};for(const e in t){const o=t[e],i=typeof o;e in T?(null===o||o&&("string"===i||"number"===i))&&(n[e]=o):i===typeof n[e]&&(n[e]="rotate"===e?o%4:o)}return n}(i,t),c=t.mode||"svg",s={},l=t.style||{},a={..."svg"===c?Se:{}};if(o){const e=v(o,!1,!0);if(e){const t=["iconify"],n=["provider","prefix"];for(const o of n)e[o]&&t.push("iconify--"+e[o]);a.className=t.join(" ")}}for(let e in t){const n=t[e];if(void 0!==n)switch(e){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":a.ref=n;break;case"className":a[e]=(a[e]?a[e]+" ":"")+n;break;case"inline":case"hFlip":case"vFlip":r[e]=!0===n||"true"===n||1===n;break;case"flip":"string"==typeof n&&ye(r,n);break;case"color":s.color=n;break;case"rotate":"string"==typeof n?r[e]=ke(n):"number"==typeof n&&(r[e]=n);break;case"ariaHidden":case"aria-hidden":!0!==n&&"true"!==n&&delete a["aria-hidden"];break;default:void 0===i[e]&&(a[e]=n)}}const f=function(e,t){const n={...d,...e},o={...E,...t},i={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach((e=>{const t=[],n=e.hFlip,o=e.vFlip;let c,s=e.rotate;switch(n?o?s+=2:(t.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),t.push("scale(-1 1)"),i.top=i.left=0):o&&(t.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),t.push("scale(1 -1)"),i.top=i.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=i.height/2+i.top,t.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:t.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:c=i.width/2+i.left,t.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(i.left!==i.top&&(c=i.left,i.left=i.top,i.top=c),i.width!==i.height&&(c=i.width,i.width=i.height,i.height=c)),t.length&&(r=function(e,t,n){const o=function(e,t="defs"){let n="";const o=e.indexOf("<"+t);for(;o>=0;){const i=e.indexOf(">",o),r=e.indexOf("</"+t);if(-1===i||-1===r)break;const c=e.indexOf(">",r);if(-1===c)break;n+=e.slice(i+1,r).trim(),e=e.slice(0,o).trim()+e.slice(c+1)}return{defs:n,content:e}}(e);return i=o.defs,r=t+o.content+"</g>",i?"<defs>"+i+"</defs>"+r:r;var i,r}(r,'<g transform="'+t.join(" ")+'">'))}));const c=o.width,s=o.height,l=i.width,a=i.height;let f,u;null===c?(u=null===s?"1em":"auto"===s?a:s,f=L(u,l/a)):(f="auto"===c?l:c,u=null===s?L(f,a/l):"auto"===s?a:s);const p={},h=(e,t)=>{(e=>"unset"===e||"undefined"===e||"none"===e)(t)||(p[e]=t.toString())};h("width",f),h("height",u);const g=[i.left,i.top,l,a];return p.viewBox=g.join(" "),{attributes:p,viewBox:g,body:r}}(e,r),u=f.attributes;if(r.inline&&(s.verticalAlign="-0.125em"),"svg"===c){a.style={...s,...l},Object.assign(a,u);let e=0,o=t.id;return"string"==typeof o&&(o=o.replace(/-/g,"_")),a.dangerouslySetInnerHTML={__html:Ie(z(f.body,o?()=>o+"ID"+e++:"iconifyReact"))},(0,n.createElement)("svg",a)}const{body:p,width:h,height:g}=e,m="mask"===c||"bg"!==c&&-1!==p.indexOf("currentColor"),b=function(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}(p,{...u,width:h+"",height:g+""});var x;return a.style={...s,"--svg":(x=b,'url("'+function(e){return"data:image/svg+xml,"+function(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(e)}(x)+'")'),width:Le(u.width),height:Le(u.height),...Me,...m?Ce:Te,...l},(0,n.createElement)("span",a)})({...d,...p},e,u):e.children?e.children:(0,n.createElement)("span",{})}const Ze=(0,n.forwardRef)(((e,t)=>Pe({...e,_ref:t}))),ze=((0,n.forwardRef)(((e,t)=>Pe({inline:!0,...e,_ref:t}))),window.ReactJSXRuntime);function He({title:t="block",icon:n="fluent:settings-24-filled",position:o="right"}){const i="left"===o?{left:0}:{right:0};return(0,ze.jsx)("span",{"aria-label":(0,e.sprintf)("Open %1$s settings",t,"carbon"),title:(0,e.__)(`Open ${t} settings`,"carbon"),className:"carbon-setting",onClick:function(){(0,a.dispatch)("core/edit-post").openGeneralSidebar("edit-post/block")},style:i,children:(0,ze.jsx)(Ze,{icon:n})})}function Ne({children:n,blockProps:o,clientId:c,showSettingButton:s,blockName:f}){o.className="swiper-slide "+o.className;const[u,d]=(0,l.useState)(!1),[p,h]=(0,l.useState)(!1),g=(0,ze.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,ze.jsx)("path",{fill:"currentColor",d:"M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2m-7 3H3V6h16v7h2V6c0-1.11-.89-2-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11v-2Z"})}),m=(0,ze.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,ze.jsx)("path",{fill:"currentColor",d:"m20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41L20.41 19m-7.32-1H4V6h16v7.09c.72.12 1.39.37 2 .72V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1c0-.34.04-.67.09-1Z"})}),b=(0,ze.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,ze.jsx)("path",{fill:"currentColor",d:"M21 16V6H7v10h14m0-12c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v10c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h14M3 20h15v2H3c-.53 0-1.04-.21-1.41-.59C1.21 21.04 1 20.53 1 20V9h2v11Z"})}),v=(0,a.select)("core/block-editor").getBlockRootClientId(c),x=(0,a.select)("core/block-editor").getBlock(v);return(0,l.useEffect)((()=>{h(document.querySelector(`.editor-styles-wrapper [data-block="${v}"]`))}),[]),(0,ze.jsxs)(l.Fragment,{children:[(0,ze.jsxs)("li",{...o,children:[s&&(0,ze.jsx)(He,{title:(0,e.__)("slide","carbon-blocks"),icon:"mdi:card-outline",position:"right"}),n]}),(0,ze.jsx)(i.BlockControls,{children:(0,ze.jsxs)(r.ToolbarGroup,{children:[(0,ze.jsx)(r.ToolbarButton,{label:(0,e.__)("Duplicate current slide","carbon-blocks"),icon:b,onClick:()=>{const e=x.innerBlocks.findIndex((e=>e.clientId===c))+1,n=(0,a.select)("core/block-editor").getBlock(c),o=(0,t.cloneBlock)(n),i=new CustomEvent("duplicateSlide",{detail:{index:e,clientId:o.clientId}});(0,a.dispatch)("core/block-editor").insertBlock(o,e,v,!1),setTimeout((()=>p.dispatchEvent(i)),20)}}),(0,ze.jsx)(r.ToolbarButton,{label:(0,e.__)("Add a slide","carbon-blocks"),icon:g,onClick:()=>{const e=x.innerBlocks.findIndex((e=>e.clientId===c))+1,n=(0,t.createBlock)(f,{isSlide:!0}),o=new CustomEvent("addSlide",{detail:{index:e,clientId:n.clientId}});(0,a.dispatch)("core/block-editor").insertBlock(n,e,v,!1),setTimeout((()=>p.dispatchEvent(o)),20)}}),(0,ze.jsx)(r.ToolbarButton,{label:(0,e.__)("Remove current slide","carbon-blocks"),icon:m,onClick:()=>d(!0)})]})}),(0,ze.jsx)(r.__experimentalConfirmDialog,{isOpen:u,isDestructive:!0,onConfirm:()=>{(e=>{(0,a.dispatch)("core/block-editor").removeBlock(e,!1)})(c),d(!1)},onCancel:()=>d(!1),cancelButtonText:(0,e.__)("Cancel","carbon-blocks"),confirmButtonText:(0,e.__)("Yes, delete it","carbon-blocks"),children:(0,e.__)("Are you sure you want to delete this slide ?","carbon-blocks")})]})}function Fe({children:e,blockProps:t}){return t.className="swiper-slide "+t.className,(0,ze.jsx)("li",{...t,children:e})}(0,t.registerBlockType)("carbon-blocks/image-slide",{icon:e=>(0,ze.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},...e,children:[(0,ze.jsx)("path",{d:"M0 0h500v500H0z",style:{fill:"none"},transform:"matrix(.04792 0 0 .04792 -.041 -.109)"}),(0,ze.jsx)("path",{d:"M2 3v18",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.31px"},transform:"matrix(1.08038 0 0 .7238 -1.006 3.185)"}),(0,ze.jsx)("path",{d:"M18 5.763v12.474C18 19.762 17.171 21 16.149 21H7.851C6.829 21 6 19.762 6 18.237V5.763C6 4.238 6.829 3 7.851 3h8.298C17.171 3 18 4.238 18 5.763",style:{fill:"none",stroke:"#18181b",strokeWidth:"1.31px"},transform:"matrix(1.08038 0 0 .7238 -1.006 3.185)"}),(0,ze.jsx)("path",{d:"M22 3v18",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.31px"},transform:"matrix(1.08038 0 0 .7238 -1.006 3.185)"})]}),title:(0,e.__)("Image slide","carbon-blocks"),description:(0,e.__)("Add an image to your slideshow.","carbon-blocks"),example:{},edit:function(t){const{attributes:n,clientId:c,setAttributes:l}=t,{image:a}=n,f=(0,i.useBlockProps)();return(0,ze.jsxs)(Ne,{blockProps:f,clientId:c,showSettingButton:!1,blockName:t.name,children:[(0,ze.jsx)(i.BlockControls,{children:(0,ze.jsx)(r.ToolbarGroup,{children:(0,ze.jsx)(i.MediaUploadCheck,{children:(0,ze.jsx)(i.MediaUpload,{onSelect:e=>l({image:e}),allowedTypes:["image"],multiple:!1,value:a?.id,render:({open:t})=>(0,ze.jsx)(r.ToolbarButton,{label:a?.id?(0,e.__)("Change image","carbon-blocks"):(0,e.__)("Pick an image","carbon-blocks"),icon:s,onClick:t})})})})}),a?.id?(0,ze.jsx)("img",{src:a.url,alt:a.caption}):(0,ze.jsx)("img",{src:o,alt:"Placeholder image"})]})},save:function(e){const{attributes:t}=e,{image:n}=t,r=i.useBlockProps.save();return(0,ze.jsx)(Fe,{blockProps:r,children:n?.id?(0,ze.jsx)("img",{src:n.url,alt:n.caption}):(0,ze.jsx)("img",{src:o,alt:"Placeholder image"})})}})}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,i,r)=>{if(!n){var c=1/0;for(f=0;f<e.length;f++){for(var[n,i,r]=e[f],s=!0,l=0;l<n.length;l++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,r<c&&(c=r));if(s){e.splice(f--,1);var a=i();void 0!==a&&(t=a)}}return t}r=r||0;for(var f=e.length;f>0&&e[f-1][2]>r;f--)e[f]=e[f-1];e[f]=[n,i,r]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={5707:0,7205:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[c,s,l]=n,a=0;if(c.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var f=l(o)}for(t&&t(n);a<c.length;a++)r=c[a],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(f)},n=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[7205],(()=>o(4788)));i=o.O(i)})();