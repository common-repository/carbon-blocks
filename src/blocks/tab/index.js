(()=>{var e,t={8795:(e,t,r)=>{"use strict";const n=window.wp.i18n,o=window.wp.blocks;var s=r(4184),i=r.n(s);const a=window.wp.blockEditor,l=window.ReactJSXRuntime;window.React;(0,o.registerBlockType)("carbon-blocks/tab",{icon:e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd"},...e,children:(0,l.jsxs)("g",{transform:"translate(0 -.034)scale(.04793)",children:[(0,l.jsx)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,l.jsx)("clipPath",{id:"Tab_svg__a",children:(0,l.jsx)("path",{d:"M0 0h500v500H0z"})}),(0,l.jsxs)("g",{clipPath:"url(#Tab_svg__a)",children:[(0,l.jsx)("path",{d:"M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:1},transform:"matrix(23.75 0 0 26.3889 -35 -66.667)"}),(0,l.jsx)("path",{d:"M6.5 6v12",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.37px",strokeLinecap:"round",strokeLinejoin:"round"},transform:"matrix(23.75 0 0 10.2451 95.625 -48.97)"}),(0,l.jsx)("path",{d:"M2 7h20",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.05px",strokeLinecap:"round",strokeLinejoin:"round"},transform:"translate(-35 -30.809)scale(23.75)"})]})]})}),title:(0,n.__)("Tab","carbon-blocks"),description:(0,n.__)("Organize your content interactively with a customized tab.","carbon-blocks"),example:{},edit:function(e){const{attributes:t,setAttributes:r,context:n}=e,{className:o,id:s,active:c}=t;r({active:n["carbon-blocks/active"]});const d=i()(o,{"is-active":c===s}),p=(0,a.useBlockProps)({className:d}),{children:u,...v}=(0,a.useInnerBlocksProps)(p,{renderAppender:a.InnerBlocks.ButtonBlockAppender});return(0,l.jsx)("section",{...v,"data-id":s,children:u})},save:function(e){const{attributes:t}=e,{id:r}=t,n=a.useBlockProps.save();return(0,l.jsx)("section",{...n,"data-id":r,children:(0,l.jsx)(a.InnerBlocks.Content,{})})}})},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,r,o,s)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,s]=e[d],a=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,o,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1394:0,1680:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,s,[i,a,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var d=l(n)}for(t&&t(r);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[1680],(()=>n(8795)));o=n.O(o)})();