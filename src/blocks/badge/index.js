(()=>{"use strict";var e,o={6388:()=>{const e=window.wp.i18n,o=window.wp.blocks,n=window.wp.blockEditor,t=window.wp.components,r=window.React,l=window.wp.primitives,s=(0,r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(l.Path,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})),i=(0,r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(l.Path,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})),a=window.ReactJSXRuntime,c=({children:e,conditions:o})=>{if(o)return e},h="Lorem";function d({value:o,onChange:n,disabledHelp:r=(0,e.__)("This setting is disabled. You must have at least one active property.","carbon-blocks"),label:l="",help:s="",disabled:i=!1}){return(0,a.jsxs)(t.__experimentalToggleGroupControl,{onChange:n,className:i?"is-disabled":"",label:l,value:o,help:i?r:s,isBlock:!0,__nextHasNoMarginBottom:!0,children:[(0,a.jsx)(t.__experimentalToggleGroupControlOption,{value:!0,label:(0,e.__)("Yes","carbon-blocks")}),(0,a.jsx)(t.__experimentalToggleGroupControlOption,{value:!1,label:(0,e.__)("No","carbon-blocks")})]})}(0,e.__)("Learn more","carbon-blocks");(0,o.registerBlockType)("carbon-blocks/badge",{icon:e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd"},...e,children:(0,a.jsxs)("g",{transform:"scale(.048)",children:[(0,a.jsx)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,a.jsx)("clipPath",{id:"Badge_svg__a",children:(0,a.jsx)("path",{d:"M0 0h500v500H0z"})}),(0,a.jsxs)("g",{clipPath:"url(#Badge_svg__a)",children:[(0,a.jsx)("path",{d:"M2 20.558v-5.116C2 14.598 2.598 14 3.442 14h17.116c1.035 0 1.442.606 1.442 1.442v5.116c0 .829-.613 1.442-1.442 1.442H3.442C2.5 22 2 21.5 2 20.558Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.05px"},transform:"translate(-35 -177.5)scale(23.75)"}),(0,a.jsx)("path",{d:"M18 8c1.646 0 3-1.354 3-3s-1.354-3-3-3-3 1.354-3 3 1.354 3 3 3",style:{fill:"#18181b",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.28px",strokeLinecap:"round",strokeLinejoin:"round"},transform:"translate(-93.573 189.976)scale(11.7284)"}),(0,a.jsx)("path",{d:"M3364.83 1523.31h78",style:{fill:"none",stroke:"#18181b",strokeWidth:"13.94px",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:30},transform:"matrix(2.32843 0 0 1.82692 -7598.74 -2534.34)"})]})]})}),title:(0,e.__)("Badge","carbon-blocks"),description:(0,e.__)("Create an elegant badge featuring an icon and text, perfect for highlighting a label, tag, or other distinctive element.","carbon-blocks"),example:{viewportWidth:240,attributes:{badgeContent:(0,e.__)("On sale !","carbon-blocks")},innerBlocks:[{name:"carbon-blocks/icons",attributes:{size:20,icon:{svg:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5l-3.75 1.5l-3.75-1.5l-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0Z"></path></svg>'}}}]},edit:function(o){const{attributes:r,setAttributes:l}=o,{badgeContent:p,showIcon:b,orientation:g}=r,u=(0,n.useBlockProps)({style:{flexDirection:(()=>{switch(g){case"left":return"row-reverse";case"right":return"row"}})()}}),{children:v,...w}=(0,n.useInnerBlocksProps)(u,{allowedBlocks:["carbon-blocks/icons"],templateLock:"all",template:[["carbon-blocks/icons",{size:20,showActions:!1,isChild:!0}]]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.InspectorControls,{children:(0,a.jsxs)(t.PanelBody,{title:(0,e.__)("Settings","carbon-blocks"),initialOpen:!0,children:[(0,a.jsx)(c,{conditions:b,children:(0,a.jsxs)(t.__experimentalToggleGroupControl,{__nextHasNoMarginBottom:!0,label:(0,e.__)("Orientation","carbon-blocks"),value:g,onChange:e=>l({orientation:e}),children:[(0,a.jsx)(t.__experimentalToggleGroupControlOptionIcon,{icon:s,label:(0,e.__)("Left","carbon-blocks"),value:"left"}),(0,a.jsx)(t.__experimentalToggleGroupControlOptionIcon,{icon:i,label:(0,e.__)("Right","carbon-blocks"),value:"right"})]})}),(0,a.jsx)(d,{onChange:e=>l({showIcon:e}),label:(0,e.__)("Show icon","carbon-blocks"),value:b})]})}),(0,a.jsxs)("li",{...w,children:[(0,a.jsx)(c,{conditions:b,children:v}),(0,a.jsx)(n.RichText,{tagName:"span",value:p,onChange:e=>l({badgeContent:e}),placeholder:h,allowedFormats:["core/bold","core/italic"]})]})]})},save:function(e){const{attributes:o}=e,{badgeContent:t,showIcon:r,orientation:l}=o,s=n.useBlockProps.save({style:{flexDirection:(()=>{switch(l){case"left":return"row-reverse";case"right":return"row"}})()}}),{children:i,...d}=n.useInnerBlocksProps.save(s);return(0,a.jsxs)("li",{...d,children:[(0,a.jsx)(c,{conditions:r,children:i}),(0,a.jsx)(n.RichText.Content,{tagName:"span",value:t||h})]})}})}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return o[e](l,l.exports,t),l.exports}t.m=o,e=[],t.O=(o,n,r,l)=>{if(!n){var s=1/0;for(h=0;h<e.length;h++){for(var[n,r,l]=e[h],i=!0,a=0;a<n.length;a++)(!1&l||s>=l)&&Object.keys(t.O).every((e=>t.O[e](n[a])))?n.splice(a--,1):(i=!1,l<s&&(s=l));if(i){e.splice(h--,1);var c=r();void 0!==c&&(o=c)}}return o}l=l||0;for(var h=e.length;h>0&&e[h-1][2]>l;h--)e[h]=e[h-1];e[h]=[n,r,l]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={3440:0,574:0};t.O.j=o=>0===e[o];var o=(o,n)=>{var r,l,[s,i,a]=n,c=0;if(s.some((o=>0!==e[o]))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(a)var h=a(t)}for(o&&o(n);c<s.length;c++)l=s[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(h)},n=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var r=t.O(void 0,[574],(()=>t(6388)));r=t.O(r)})();