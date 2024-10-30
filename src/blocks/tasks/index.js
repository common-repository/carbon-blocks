(()=>{"use strict";var e,o={2958:()=>{const e=window.wp.i18n,o=window.wp.blocks,t=window.wp.data,r=window.wp.blockEditor,s=window.ReactJSXRuntime;window.React;(0,o.registerBlockType)("carbon-blocks/tasks",{icon:e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24,style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},...e,children:(0,s.jsxs)("g",{transform:"translate(0 -.034)scale(.04793)",children:[(0,s.jsx)("path",{d:"M0 0h500v500H0z",style:{fill:"none"}}),(0,s.jsx)("clipPath",{id:"Tasks_svg__a",children:(0,s.jsx)("path",{d:"M0 0h500v500H0z"})}),(0,s.jsxs)("g",{clipPath:"url(#Tasks_svg__a)",children:[(0,s.jsx)("path",{d:"M9 6h11M9 14.758h11",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"1.39px"},transform:"matrix(17.19808 0 0 18.80644 75.859 58.935)"}),(0,s.jsx)("path",{d:"m110.811 149.864-4.461 4.461M110.946 154.325l-4.46-4.461",style:{fill:"none",stroke:"#18181b",strokeWidth:"1.4px",strokeLinejoin:"miter",strokeMiterlimit:30},transform:"matrix(20.86287 0 0 20.86287 -2128.009 -2836.638)"}),(0,s.jsx)("path",{d:"M2 19V5c0-1.097.903-2 2-2h16c1.097 0 2 .903 2 2v14c0 1.097-.903 2-2 2H4c-1.097 0-2-.903-2-2Z",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:1,strokeLinecap:"butt",strokeLinejoin:"miter"},transform:"matrix(23.75 0 0 26.3889 -34.416 -66.667)"}),(0,s.jsx)("path",{d:"m5 13 4 4L19 7",style:{fill:"none",fillRule:"nonzero",stroke:"#18181b",strokeWidth:"3.84px"},transform:"translate(42.156 69.926)scale(7.60474)"})]})]})}),title:(0,e.__)("Tasks","carbon-blocks"),description:(0,e.__)("Add task lines and customize their styles. Mark completed tasks for a clear management of your goals.","carbon-blocks"),example:{innerBlocks:[{name:"carbon-blocks/task",attributes:{tickBackground:"black",textContent:(0,e.__)("Task to do","carbon-blocks"),color:"black"}},{name:"carbon-blocks/task",attributes:{tickBackground:"black",textContent:(0,e.__)("Task to do","carbon-blocks"),color:"black"}},{name:"carbon-blocks/task",attributes:{textContent:(0,e.__)("Task completed","carbon-blocks"),activeTask:!1}}]},edit:function(e){const{isSelected:o,clientId:n}=e,l=(0,r.useBlockProps)(),a=(0,t.useSelect)((e=>e("core/block-editor").hasSelectedInnerBlock(n,!0))),{children:c,...i}=(0,r.useInnerBlocksProps)(l,{allowedBlocks:["carbon-blocks/task"],templateLock:!1,renderAppender:!(!o&&!a)&&r.InnerBlocks.ButtonBlockAppender,template:[["carbon-blocks/task"]],orientation:"vertical"});return(0,s.jsx)("ul",{...i,children:c})},save:function(){const e=r.useBlockProps.save(),{children:o,...t}=r.useInnerBlocksProps.save(e);return(0,s.jsx)("ul",{...t,children:o})}})}},t={};function r(e){var s=t[e];if(void 0!==s)return s.exports;var n=t[e]={exports:{}};return o[e](n,n.exports,r),n.exports}r.m=o,e=[],r.O=(o,t,s,n)=>{if(!t){var l=1/0;for(k=0;k<e.length;k++){for(var[t,s,n]=e[k],a=!0,c=0;c<t.length;c++)(!1&n||l>=n)&&Object.keys(r.O).every((e=>r.O[e](t[c])))?t.splice(c--,1):(a=!1,n<l&&(l=n));if(a){e.splice(k--,1);var i=s();void 0!==i&&(o=i)}}return o}n=n||0;for(var k=e.length;k>0&&e[k-1][2]>n;k--)e[k]=e[k-1];e[k]=[t,s,n]},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={3740:0,897:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var s,n,[l,a,c]=t,i=0;if(l.some((o=>0!==e[o]))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(c)var k=c(r)}for(o&&o(t);i<l.length;i++)n=l[i],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(k)},t=globalThis.webpackChunkcarbon_blocks=globalThis.webpackChunkcarbon_blocks||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var s=r.O(void 0,[897],(()=>r(2958)));s=r.O(s)})();