!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([,,function(e,t){for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,n=r;return[n[e[o++]],n[e[o++]],n[e[o++]],n[e[o++]],"-",n[e[o++]],n[e[o++]],"-",n[e[o++]],n[e[o++]],"-",n[e[o++]],n[e[o++]],"-",n[e[o++]],n[e[o++]],n[e[o++]],n[e[o++]],n[e[o++]],n[e[o++]]].join("")}},function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var o=new Uint8Array(16);e.exports=function(){return r(o),o}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},function(e,t,r){var o=r(3),n=r(2);e.exports=function(e,t,r){var u=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var i=0;i<16;++i)t[u+i]=a[i];return t||n(a)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.exposeTodos=t.createTodo=t.loadTodos=void 0;var o,n=r(4),u=(o=n)&&o.__esModule?o:{default:o};var a=[],i=function(){localStorage.setItem("todos",JSON.stringify(a))};t.loadTodos=function(){var e=localStorage.getItem("todos");try{return e?JSON.parse(e):[]}catch(e){return[]}},t.createTodo=function(e,t){e.push({id:(0,u.default)(),text:t,completed:!1}),i(e),renderTodos(e,getFilters())},t.exposeTodos=function(){return a}},function(e,t,r){"use strict";var o=r(5);document.querySelector("#new-todo").addEventListener("submit",function(e){e.preventDefault();var t=e.target.elements.text.value.trim();if(t.length>0){var r=(0,o.exposeTodos)();(0,o.createTodo)(r,t),e.target.elements.text.value=""}})}]);
//# sourceMappingURL=bundle.js.map