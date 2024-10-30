(()=>{"use strict";var e,t={9232:()=>{const e=window.wp.i18n,t=window.wp.blocks,n=window.ReactJSXRuntime,o=((0,e.__)("Learn more","carbon-blocks"),window.wp.blockEditor),r=window.wp.element,i=window.wp.components,c=window.wp.data,s=window.React,l=Object.freeze({left:0,top:0,width:16,height:16}),a=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),u=Object.freeze({...l,...a}),f=Object.freeze({...u,body:"",hidden:!1});function d(e,t){const n=function(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}(e,t);for(const o in f)o in a?o in e&&!(o in n)&&(n[o]=a[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function p(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let i={};function c(e){i=d(o[e]||r[e],i)}return c(t),n.forEach(c),d(e,i)}function h(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const o=function(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function e(t){if(n[t])return r[t]=[];if(!(t in r)){r[t]=null;const n=o[t]&&o[t].parent,i=n&&e(n);i&&(r[t]=[n].concat(i))}return r[t]})),r}(e);for(const r in o){const i=o[r];i&&(t(r,p(e,r,i)),n.push(r))}return n}const g=/^[a-z0-9]+(-[a-z0-9]+)*$/,b=(e,t,n,o="")=>{const r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const e=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:e};return t&&!m(i)?null:i}const i=r[0],c=i.split("-");if(c.length>1){const e={provider:o,prefix:c.shift(),name:c.join("-")};return t&&!m(e)?null:e}if(n&&""===o){const e={provider:o,prefix:"",name:i};return t&&!m(e,n)?null:e}return null},m=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(g)||!(t&&""===e.prefix||e.prefix.match(g))||!e.name.match(g)),v={provider:"",aliases:{},not_found:{},...l};function x(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function w(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons)return null;if(!x(e,v))return null;const n=t.icons;for(const e in n){const t=n[e];if(!e.match(g)||"string"!=typeof t.body||!x(t,f))return null}const o=t.aliases||Object.create(null);for(const e in o){const t=o[e],r=t.parent;if(!e.match(g)||"string"!=typeof r||!n[r]&&!o[r]||!x(t,f))return null}return t}const y=Object.create(null);function k(e,t){const n=y[e]||(y[e]=Object.create(null));return n[t]||(n[t]=function(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}(e,t))}function j(e,t){return w(t)?h(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}let S=!1;function _(e){return"boolean"==typeof e&&(S=e),S}function O(e){const t="string"==typeof e?b(e,!0,S):e;if(t){const e=k(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}const C=Object.freeze({width:null,height:null}),T=Object.freeze({...C,...a}),I=/(-?[0-9.]*[0-9]+[0-9.]*)/g,E=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function M(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const o=e.split(I);if(null===o||!o.length)return e;const r=[];let i=o.shift(),c=E.test(i);for(;;){if(c){const e=parseFloat(i);isNaN(e)?r.push(i):r.push(Math.ceil(e*t*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");c=!c}}const B=/\sid="(\S+)"/g,F="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let L=0;function P(e,t=F){const n=[];let o;for(;o=B.exec(e);)n.push(o[1]);if(!n.length)return e;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof t?t(n):t+(L++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),e=e.replace(new RegExp(r,"g"),"")}const R=Object.create(null);function N(e){return R[e]||R[""]}function z(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const A=Object.create(null),H=["https://api.simplesvg.com","https://api.unisvg.com"],V=[];for(;H.length>0;)1===H.length||Math.random()>.5?V.push(H.shift()):V.push(H.pop());function $(e,t){const n=z(t);return null!==n&&(A[e]=n,!0)}function D(e){return A[e]}A[""]=z({resources:["https://api.iconify.design"].concat(V)});let J=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(e){}})();const q={prepare:(e,t,n)=>{const o=[],r=function(e,t){const n=D(e);if(!n)return 0;let o;if(n.maxURL){let e=0;n.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)}));const r=t+".json?icons=";o=n.maxURL-e-n.path.length-r.length}else o=0;return o}(e,t),i="icons";let c={type:i,provider:e,prefix:t,icons:[]},s=0;return n.forEach(((n,l)=>{s+=n.length+1,s>=r&&l>0&&(o.push(c),c={type:i,provider:e,prefix:t,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(e,t,n)=>{if(!J)return void n("abort",424);let o=function(e){if("string"==typeof e){const t=D(e);if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");o+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;o+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let r=503;J(e+o).then((e=>{const t=e.status;if(200===t)return r=501,e.json();setTimeout((()=>{n(function(e){return 404===e}(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",r)}))})).catch((()=>{n("next",r)}))}};function U(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}let Z=0;var G={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Q(e){const t={...G,...e};let n=[];function o(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,r,i){const c=function(e,t,n,o){const r=e.resources.length,i=e.random?Math.floor(Math.random()*r):e.index;let c;if(e.random){let t=e.resources.slice(0);for(c=[];t.length>1;){const e=Math.floor(Math.random()*t.length);c.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}c=c.concat(t)}else c=e.resources.slice(i).concat(e.resources.slice(0,i));const s=Date.now();let l,a="pending",u=0,f=null,d=[],p=[];function h(){f&&(clearTimeout(f),f=null)}function g(){"pending"===a&&(a="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function b(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function m(){a="failed",p.forEach((e=>{e(void 0,l)}))}function v(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}return"function"==typeof o&&p.push(o),setTimeout((function o(){if("pending"!==a)return;h();const r=c.shift();if(void 0===r)return d.length?void(f=setTimeout((()=>{h(),"pending"===a&&(v(),m())}),e.timeout)):void m();const i={status:"pending",resource:r,callback:(t,n)=>{!function(t,n,r){const i="success"!==n;switch(d=d.filter((e=>e!==t)),a){case"pending":break;case"failed":if(i||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return l=r,void m();if(i)return l=r,void(d.length||(c.length?o():m()));if(h(),v(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}a="completed",p.forEach((e=>{e(r)}))}(i,t,n)}};d.push(i),u++,f=setTimeout(o,e.rotate),n(r,t,i.callback)})),function(){return{startTime:s,payload:t,status:a,queriesSent:u,queriesPending:d.length,subscribe:b,abort:g}}}(t,e,r,((e,t)=>{o(),i&&i(e,t)}));return n.push(c),c},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:o}}function W(){}const X=Object.create(null);const Y="iconify2",K="iconify",ee=K+"-count",te=K+"-version",ne=36e5,oe=168;function re(e,t){try{return e.getItem(t)}catch(e){}}function ie(e,t,n){try{return e.setItem(t,n),!0}catch(e){}}function ce(e,t){try{e.removeItem(t)}catch(e){}}function se(e,t){return ie(e,ee,t.toString())}function le(e){return parseInt(re(e,ee))||0}const ae={local:!0,session:!0},ue={local:new Set,session:new Set};let fe=!1,de="undefined"==typeof window?{}:window;function pe(e){const t=e+"Storage";try{if(de&&de[t]&&"number"==typeof de[t].length)return de[t]}catch(e){}ae[e]=!1}function he(e,t){const n=pe(e);if(!n)return;const o=re(n,te);if(o!==Y){if(o){const e=le(n);for(let t=0;t<e;t++)ce(n,K+t.toString())}return ie(n,te,Y),void se(n,0)}const r=Math.floor(Date.now()/ne)-oe,i=e=>{const o=K+e.toString(),i=re(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch(e){}ce(n,o)}};let c=le(n);for(let t=c-1;t>=0;t--)i(t)||(t===c-1?(c--,se(n,c)):ue[e].add(t))}function ge(){if(!fe){fe=!0;for(const e in ae)he(e,(e=>{const t=e.data,n=k(e.provider,t.prefix);if(!j(n,t).length)return!1;const o=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function be(){}const me=(e,t)=>{const n=function(e,t=!0,n=!1){const o=[];return e.forEach((e=>{const r="string"==typeof e?b(e,t,n):e;r&&o.push(r)})),o}(e,!0,_()),o=function(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let o={provider:"",prefix:"",name:""};return e.forEach((e=>{if(o.name===e.name&&o.prefix===e.prefix&&o.provider===e.provider)return;o=e;const r=e.provider,i=e.prefix,c=e.name,s=n[r]||(n[r]=Object.create(null)),l=s[i]||(s[i]=k(r,i));let a;a=c in l.icons?t.loaded:""===i||l.missing.has(c)?t.missing:t.pending;const u={provider:r,prefix:i,name:c};a.push(u)})),t}(n);if(!o.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(o.loaded,o.missing,o.pending,be)})),()=>{e=!1}}const r=Object.create(null),i=[];let c,s;return o.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===s&&t===c)return;c=t,s=n,i.push(k(t,n));const o=r[t]||(r[t]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((e=>{const{provider:t,prefix:n,name:o}=e,i=k(t,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(o)||(c.add(o),r[t][n].push(o))})),i.forEach((e=>{const{provider:t,prefix:n}=e;r[t][n].length&&function(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,o=e.iconsToLoad;let r;delete e.iconsToLoad,o&&(r=N(t))&&r.prepare(t,n,o).forEach((n=>{!function(e,t,n){let o,r;if("string"==typeof e){const t=N(e);if(!t)return n(void 0,424),W;r=t.send;const i=function(e){if(!X[e]){const t=D(e);if(!t)return;const n={config:t,redundancy:Q(t)};X[e]=n}return X[e]}(e);i&&(o=i.redundancy)}else{const t=z(e);if(t){o=Q(t);const n=N(e.resources?e.resources[0]:"");n&&(r=n.send)}}o&&r?o.query(t,r,n)().abort:n(void 0,424)}(t,n,(t=>{if("object"!=typeof t)n.icons.forEach((t=>{e.missing.add(t)}));else try{const n=j(e,t);if(!n.length)return;const o=e.pendingIcons;o&&n.forEach((e=>{o.delete(e)})),function(e,t){function n(n){let o;if(!ae[n]||!(o=pe(n)))return;const r=ue[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=le(o),i>=50||!se(o,i+1))return;const c={cached:Math.floor(Date.now()/ne),provider:e.provider,data:t};return ie(o,K+i.toString(),JSON.stringify(c))}fe||ge(),t.lastModified&&!function(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const n in ae)he(n,(n=>{const o=n.data;return n.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t}));return!0}(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))}(e,t)}catch(e){console.error(e)}!function(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,function(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach((t=>{const i=t.icons,c=i.pending.length;i.pending=i.pending.filter((t=>{if(t.prefix!==r)return!0;const c=t.name;if(e.icons[c])i.loaded.push({provider:o,prefix:r,name:c});else{if(!e.missing.has(c))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:c})}return!1})),i.pending.length!==c&&(n||U([e],t.id),t.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),t.abort))}))})))}(e)})))}(e)}))}))})))}(e,r[t][n])})),t?function(e,t,n){const o=Z++,r=U.bind(null,n,o);if(!t.pending.length)return r;const i={id:o,icons:t,callback:e,abort:r};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(i)})),r}(t,o,i):be},ve=/[\s,]+/;function xe(e,t){t.split(ve).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function we(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:o(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r/=t,r%1==0?o(r):0)}}return t}let ye;function ke(e){return void 0===ye&&function(){try{ye=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch(e){ye=null}}(),ye?ye.createHTML(e):e}const je={...T,inline:!1},Se={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},_e={display:"inline-block"},Oe={backgroundColor:"currentColor"},Ce={backgroundColor:"transparent"},Te={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ie={WebkitMask:Oe,mask:Oe,background:Ce};for(const e in Ie){const t=Ie[e];for(const n in Te)t[e+n]=Te[n]}const Ee={...je,inline:!0};function Me(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}if(_(!0),Be=q,R[""]=Be,"undefined"!=typeof document&&"undefined"!=typeof window){ge();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),S&&!t&&!e.prefix){let t=!1;return w(e)&&(e.prefix="",h(e,((e,n)=>{n&&function(e,t){const n=b(e,!0,S);return!!n&&function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch(e){}return!1}(k(n.provider,n.prefix),n.name,t)}(e,n)&&(t=!0)}))),t}const n=e.prefix;return!!m({provider:t,prefix:n,name:"a"})&&!!j(k(t,n),e)}(e))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const o=t[e];if("object"!=typeof o||!o||void 0===o.resources)continue;$(e,o)||console.error(n)}catch(e){console.error(n)}}}}var Be;function Fe(e){const[t,n]=(0,s.useState)(!!e.ssr),[o,r]=(0,s.useState)({}),[i,c]=(0,s.useState)(function(t){if(t){const t=e.icon;if("object"==typeof t)return{name:"",data:t};const n=O(t);if(n)return{name:t,data:n}}return{name:""}}(!!e.ssr));function l(){const e=o.callback;e&&(e(),r({}))}function a(e){if(JSON.stringify(i)!==JSON.stringify(e))return l(),c(e),!0}function f(){var t;const n=e.icon;if("object"==typeof n)return void a({name:"",data:n});const o=O(n);if(a({name:n,data:o}))if(void 0===o){const e=me([n],f);r({callback:e})}else o&&(null===(t=e.onLoad)||void 0===t||t.call(e,n))}(0,s.useEffect)((()=>(n(!0),l)),[]),(0,s.useEffect)((()=>{t&&f()}),[e.icon,t]);const{name:d,data:p}=i;return p?((e,t,n)=>{const o=t.inline?Ee:je,r=function(e,t){const n={...e};for(const e in t){const o=t[e],r=typeof o;e in C?(null===o||o&&("string"===r||"number"===r))&&(n[e]=o):r===typeof n[e]&&(n[e]="rotate"===e?o%4:o)}return n}(o,t),i=t.mode||"svg",c={},l=t.style||{},a={..."svg"===i?Se:{}};if(n){const e=b(n,!1,!0);if(e){const t=["iconify"],n=["provider","prefix"];for(const o of n)e[o]&&t.push("iconify--"+e[o]);a.className=t.join(" ")}}for(let e in t){const n=t[e];if(void 0!==n)switch(e){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":a.ref=n;break;case"className":a[e]=(a[e]?a[e]+" ":"")+n;break;case"inline":case"hFlip":case"vFlip":r[e]=!0===n||"true"===n||1===n;break;case"flip":"string"==typeof n&&xe(r,n);break;case"color":c.color=n;break;case"rotate":"string"==typeof n?r[e]=we(n):"number"==typeof n&&(r[e]=n);break;case"ariaHidden":case"aria-hidden":!0!==n&&"true"!==n&&delete a["aria-hidden"];break;default:void 0===o[e]&&(a[e]=n)}}const f=function(e,t){const n={...u,...e},o={...T,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach((e=>{const t=[],n=e.hFlip,o=e.vFlip;let c,s=e.rotate;switch(n?o?s+=2:(t.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),t.push("scale(-1 1)"),r.top=r.left=0):o&&(t.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),t.push("scale(1 -1)"),r.top=r.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=r.height/2+r.top,t.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:t.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:c=r.width/2+r.left,t.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2==1&&(r.left!==r.top&&(c=r.left,r.left=r.top,r.top=c),r.width!==r.height&&(c=r.width,r.width=r.height,r.height=c)),t.length&&(i=function(e,t,n){const o=function(e,t="defs"){let n="";const o=e.indexOf("<"+t);for(;o>=0;){const r=e.indexOf(">",o),i=e.indexOf("</"+t);if(-1===r||-1===i)break;const c=e.indexOf(">",i);if(-1===c)break;n+=e.slice(r+1,i).trim(),e=e.slice(0,o).trim()+e.slice(c+1)}return{defs:n,content:e}}(e);return r=o.defs,i=t+o.content+"</g>",r?"<defs>"+r+"</defs>"+i:i;var r,i}(i,'<g transform="'+t.join(" ")+'">'))}));const c=o.width,s=o.height,l=r.width,a=r.height;let f,d;null===c?(d=null===s?"1em":"auto"===s?a:s,f=M(d,l/a)):(f="auto"===c?l:c,d=null===s?M(f,a/l):"auto"===s?a:s);const p={},h=(e,t)=>{(e=>"unset"===e||"undefined"===e||"none"===e)(t)||(p[e]=t.toString())};h("width",f),h("height",d);const g=[r.left,r.top,l,a];return p.viewBox=g.join(" "),{attributes:p,viewBox:g,body:i}}(e,r),d=f.attributes;if(r.inline&&(c.verticalAlign="-0.125em"),"svg"===i){a.style={...c,...l},Object.assign(a,d);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),a.dangerouslySetInnerHTML={__html:ke(P(f.body,n?()=>n+"ID"+e++:"iconifyReact"))},(0,s.createElement)("svg",a)}const{body:p,width:h,height:g}=e,m="mask"===i||"bg"!==i&&-1!==p.indexOf("currentColor"),v=function(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}(p,{...d,width:h+"",height:g+""});var x;return a.style={...c,"--svg":(x=v,'url("'+function(e){return"data:image/svg+xml,"+function(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(e)}(x)+'")'),width:Me(d.width),height:Me(d.height),..._e,...m?Oe:Ce,...l},(0,s.createElement)("span",a)})({...u,...p},e,d):e.children?e.children:(0,s.createElement)("span",{})}const Le=(0,s.forwardRef)(((e,t)=>Fe({...e,_ref:t})));function Pe({title:t="block",icon:o="fluent:settings-24-filled",position:r="right"}){const i="left"===r?{left:0}:{right:0};return(0,n.jsx)("span",{"aria-label":(0,e.sprintf)("Open %1$s settings",t,"carbon"),title:(0,e.__)(`Open ${t} settings`,"carbon"),className:"carbon-setting",onClick:function(){(0,c.dispatch)("core/edit-post").openGeneralSidebar("edit-post/block")},style:i,children:(0,n.jsx)(Le,{icon:o})})}function Re({children:s,blockProps:l,clientId:a,showSettingButton:u,blockName:f}){l.className="swiper-slide "+l.className;const[d,p]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1),b=(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:"currentColor",d:"M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2m-7 3H3V6h16v7h2V6c0-1.11-.89-2-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11v-2Z"})}),m=(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:"currentColor",d:"m20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41L20.41 19m-7.32-1H4V6h16v7.09c.72.12 1.39.37 2 .72V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1c0-.34.04-.67.09-1Z"})}),v=(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:"currentColor",d:"M21 16V6H7v10h14m0-12c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v10c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h14M3 20h15v2H3c-.53 0-1.04-.21-1.41-.59C1.21 21.04 1 20.53 1 20V9h2v11Z"})}),x=(0,c.select)("core/block-editor").getBlockRootClientId(a),w=(0,c.select)("core/block-editor").getBlock(x);return(0,r.useEffect)((()=>{g(document.querySelector(`.editor-styles-wrapper [data-block="${x}"]`))}),[]),(0,n.jsxs)(r.Fragment,{children:[(0,n.jsxs)("li",{...l,children:[u&&(0,n.jsx)(Pe,{title:(0,e.__)("slide","carbon-blocks"),icon:"mdi:card-outline",position:"right"}),s]}),(0,n.jsx)(o.BlockControls,{children:(0,n.jsxs)(i.ToolbarGroup,{children:[(0,n.jsx)(i.ToolbarButton,{label:(0,e.__)("Duplicate current slide","carbon-blocks"),icon:v,onClick:()=>{const e=w.innerBlocks.findIndex((e=>e.clientId===a))+1,n=(0,c.select)("core/block-editor").getBlock(a),o=(0,t.cloneBlock)(n),r=new CustomEvent("duplicateSlide",{detail:{index:e,clientId:o.clientId}});(0,c.dispatch)("core/block-editor").insertBlock(o,e,x,!1),setTimeout((()=>h.dispatchEvent(r)),20)}}),(0,n.jsx)(i.ToolbarButton,{label:(0,e.__)("Add a slide","carbon-blocks"),icon:b,onClick:()=>{const e=w.innerBlocks.findIndex((e=>e.clientId===a))+1,n=(0,t.createBlock)(f,{isSlide:!0}),o=new CustomEvent("addSlide",{detail:{index:e,clientId:n.clientId}});(0,c.dispatch)("core/block-editor").insertBlock(n,e,x,!1),setTimeout((()=>h.dispatchEvent(o)),20)}}),(0,n.jsx)(i.ToolbarButton,{label:(0,e.__)("Remove current slide","carbon-blocks"),icon:m,onClick:()=>p(!0)})]})}),(0,n.jsx)(i.__experimentalConfirmDialog,{isOpen:d,isDestructive:!0,onConfirm:()=>{(e=>{(0,c.dispatch)("core/block-editor").removeBlock(e,!1)})(a),p(!1)},onCancel:()=>p(!1),cancelButtonText:(0,e.__)("Cancel","carbon-blocks"),confirmButtonText:(0,e.__)("Yes, delete it","carbon-blocks"),children:(0,e.__)("Are you sure you want to delete this slide ?","carbon-blocks")})]})}function Ne({children:e,isSlide:t,...o}){return t?(0,n.jsx)(Re,{...o,children:e}):e}(0,s.forwardRef)(((e,t)=>Fe({inline:!0,...e,_ref:t}))),window.wp.primitives;const ze=e=>{switch(e){case"top":case"left":return"flex-start";case"center":return"center";case"right":case"bottom":return"flex-end";case"space-between":return"space-between";case"stretch":return"stretch"}},Ae=({value:e,onChange:t,allowSpaceBetween:r=!1})=>{const c=["left","center","right",...r?["space-between"]:[]];return(0,n.jsx)(i.ToolbarGroup,{group:"blocks",children:(0,n.jsx)(o.JustifyContentControl,{value:e,allowedControls:c,onChange:t})})};function He({children:e,blockProps:t}){return t.className="swiper-slide "+t.className,(0,n.jsx)("li",{...t,children:e})}function Ve({children:e,isSlide:t,...o}){return t?(0,n.jsx)(He,{...o,children:e}):e}(0,t.registerBlockType)("carbon-blocks/testimonial",{icon:e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd"},...e,children:(0,n.jsxs)("g",{transform:"translate(0 -.075)scale(.04793)",children:[(0,n.jsx)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,n.jsx)("clipPath",{id:"Testimonial_svg__a",children:(0,n.jsx)("path",{d:"M0 0h500v500H0z"})}),(0,n.jsxs)("g",{clipPath:"url(#Testimonial_svg__a)",children:[(0,n.jsx)("path",{d:"M3 20.29V5c0-1.097.903-2 2-2h14c1.097 0 2 .903 2 2v10c0 1.097-.903 2-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:".95px"},transform:"matrix(26.3889 0 0 26.5515 -66.667 -67.154)"}),(0,n.jsx)("path",{d:"M10.894 10h-2c-.549 0-1-.451-1-1V8c0-.549.451-1 1-1h1c.548 0 1 .451 1 1zm0 0c0 1-1 2-2 3m7.212-3h-2c-.548 0-1-.451-1-1V8c0-.549.452-1 1-1h1c.549 0 1 .451 1 1zm0 0c0 1-1 2-2 3",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:".95px",strokeLinecap:"round"},transform:"matrix(26.3889 0 0 26.5515 -66.667 -56.697)"})]})]})}),title:(0,e.__)("Testimonial","carbon-blocks"),description:(0,e.__)("Showcase a testimonial from a satisfied client in an appealing manner.","carbon-blocks"),example:{attributes:{style:{color:{text:"black"}}},innerBlocks:[{name:"core/heading",attributes:{textAlign:"center",level:3,content:(0,e.__)("The legend of customer service","carbon-blocks")}},{name:"core/paragraph",attributes:{content:(0,e.__)("They solved my problem with so much joy that I almost forgot why I contacted them. I'm thinking of writing a book about their customer service – it would be worth it !","carbon-blocks")}},{name:"carbon-blocks/signature",attributes:{position:(0,e.__)("Customer","carbon-blocks"),name:(0,e.__)("John Smith","carbon-blocks")},innerBlocks:[{name:"carbon-blocks/advanced-avatar",attributes:{type:"initials",initials:{value:(0,e.__)("John Smith","carbon-blocks"),color:"white"}}}]}]},edit:function(e){const{attributes:t,setAttributes:r,clientId:i}=e,{isSlide:c,alignment:s}=t,l=(0,o.useBlockProps)({style:{alignItems:ze(s)}}),{children:a,...u}=(0,o.useInnerBlocksProps)(l,{allowedBlocks:["carbon-blocks/signature","core/heading","core/paragraph"],renderAppender:!1,template:[["core/heading",{textAlign:"center",placeholder:"Lorem ipsum",level:3}],["core/paragraph",{placeholder:"Vestibulum hendrerit lectus. Mauris sodales nibh ex, et auctor ex tempus et. Sed sit amet suscipit urna",align:"center"}],["carbon-blocks/signature"]]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ne,{isSlide:c,blockProps:{},clientId:i,showSettingButton:!1,blockName:e.name,children:(0,n.jsx)("blockquote",{...u,children:a})}),(0,n.jsx)(o.BlockControls,{children:(0,n.jsx)(Ae,{value:s,onChange:e=>r({alignment:e})})})]})},save:function(e){const{attributes:t}=e,{isSlide:r,alignment:i}=t,c=o.useBlockProps.save({style:{alignItems:ze(i)}}),{children:s,...l}=o.useInnerBlocksProps.save(c);return(0,n.jsx)(Ve,{isSlide:r,blockProps:{},children:(0,n.jsx)("blockquote",{...l,children:s})})}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var c=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],s=!0,l=0;l<n.length;l++)(!1&i||c>=i)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,i<c&&(c=i));if(s){e.splice(u--,1);var a=r();void 0!==a&&(t=a)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={743:0,9405:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[c,s,l]=n,a=0;if(c.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(t&&t(n);a<c.length;a++)i=c[a],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[9405],(()=>o(9232)));r=o.O(r)})();