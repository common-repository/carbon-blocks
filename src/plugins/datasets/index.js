(()=>{"use strict";const t=window.ReactJSXRuntime;wp.hooks.addFilter("editor.BlockListBlock","carbon-plugins/text-align",(e=>r=>{const{name:n,clientId:s,attributes:i}=r,{textAlign:a}=i;if(!n.startsWith("carbon-blocks"))return(0,t.jsx)(e,{...r});const o={...r.wrapperProps};return a&&(o["data-textAlign"]=a),(0,t.jsx)(e,{...r,wrapperProps:o})})),wp.hooks.addFilter("editor.BlockListBlock","carbon-plugins/text-animation",(e=>r=>{const{name:n,clientId:s,attributes:i}=r,{textAnimation:a}=i;if(!n.startsWith("carbon-blocks/")&&!n.startsWith("core/"))return(0,t.jsx)(e,{...r});const o={...r.wrapperProps};return a&&(o["text-anim"]=a.animation,o["text-anim-speed"]=a.speed,o["text-anim-delay"]=a.delay),(0,t.jsx)(e,{...r,wrapperProps:o})}))})();