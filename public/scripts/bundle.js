!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={searchText:"",hideCompleted:!1};t.getFilters=function(){return n},t.setFilters=function(e){"string"==typeof e.searchText&&(n.searchText=e.searchText),"boolean"==typeof e.hideCompleted&&(n.hideCompleted=e.hideCompleted)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderTodos=void 0;var n=o(0),r=(0,o(5).exposeTodos)(),d=function(e){var t=document.createElement("label"),o=document.createElement("div"),n=document.createElement("input"),d=document.createElement("button"),i=document.createElement("span");return i.textContent=e.text,t.appendChild(i),n.setAttribute("type","checkbox"),n.checked=e.completed,i.appendChild(n),n.addEventListener("change",function(t){toggleTodo(e.id),saveTodos(r),c(r,filters)}),i.appendChild(d),o.appendChild(i),t.classList.add("list-item"),o.classList.add("list-item__container"),t.appendChild(o),d.textContent="Remove",d.classList.add("button","button--text"),d.addEventListener("click",function(){removeTodo(e.id),saveTodos(r),c(r,filters)}),i},c=function(){var e=r.filter(function(e){var t=(0,n.getFilters)(),o=e.text.toLowerCase().includes(t.searchText.toLowerCase()),r=!t.hideCompleted||!e.completed;return o&&r}),t=e.filter(function(e){return!e.completed});if(document.querySelector("#todos").innerHTML="",document.querySelector("#todos").appendChild(function(e){var t=document.createElement("h2");return e.length>1?t.textContent="You have "+e.length+" todos left":t.textContent="You have "+e.length+" todo left",t}(t)),0===e.length){var o=document.createElement("p");o.textContent="No todos available",document.querySelector("#todos").appendChild(o),o.classList.add("empty-message")}else e.forEach(function(e){document.querySelector("#todos").appendChild(d(e))})};t.renderTodos=c},,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[];n=function(){var e=localStorage.getItem("todos");try{return e?JSON.parse(e):[]}catch(e){return[]}}();t.exposeTodos=function(){return n}},function(e,t,o){"use strict";(0,o(1).renderTodos)()}]);
//# sourceMappingURL=bundle.js.map