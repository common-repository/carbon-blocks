(()=>{"use strict";window.wp.i18n;const t=window.lodash;wp.hooks.addFilter("blocks.registerBlockType","carbon-plugins/attributes",((s,i)=>((i.startsWith("core/")||i.startsWith("carbon-blocks/"))&&void 0===s?.attributes?.animation&&(s.attributes=(0,t.assign)({},s.attributes,{animation:{type:"object",default:{isActive:!1,type:"fade",duration:500,delay:0,repeat:!1,easing:"ease"}}})),(i.startsWith("core/")||i.startsWith("carbon-blocks/"))&&void 0===s?.attributes?.showActions&&(s.attributes=(0,t.assign)({},s.attributes,{showActions:{type:"boolean",default:!0}})),s)))})();