!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MiniMvvm=e():t.MiniMvvm=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=5)}([function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.nextTick=function(t){Promise.resolve().then(t)},e.getType=function(t){return Object.prototype.toString.call(t).toLowerCase().match(/\s(\S+?)\]/)[1]},e.each=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var n in t)e(t[n],n)},e.nextIndex=(r=365611,function(){return r++}),e.toArray=function(t){return[].slice.call(t)},e.getValByPath=function(t,e){var n=e.split("."),r=t,o=!0,i=!1,a=void 0;try{for(var u,c=n[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){r=r[u.value]}}catch(t){i=!0,a=t}finally{try{o||null==c.return||c.return()}finally{if(i)throw a}}return r}},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var o=1,i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subs=[],this.id=o++}var e,n,i;return e=t,(n=[{key:"add",value:function(t){~this.subs.indexOf(t)||this.subs.push(t)}},{key:"remove",value:function(t){var e=this.subs.indexOf(t);~e&&this.subs.splice(e,1)}},{key:"clear",value:function(){this.subs=[]}},{key:"depend",value:function(){var e=t.target;e&&(e.addDep(this),this.add(e))}},{key:"notify",value:function(){this.subs.forEach((function(t){return t.update()}))}}])&&r(e.prototype,n),i&&r(e,i),t}();e.default=i},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n.hook=n.hook||{},this.type=e,this.data=n,this.children=r,this.text=o,this.elm=i,this.key=n.key}var e,n;return e=t,(n=[{key:"isVNode",value:function(e){return e instanceof t}},{key:"isSameVNode",value:function(t,e){return t.key===e.key&&t.type===e.type}}])&&r(e,n),t}();e.default=o},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(2));e.patch=o.default;var i=r(n(7));e.h=i.default;var a=r(n(0));e.VNode=a.default,e.default={patch:o.default,h:i.default,VNode:a.default}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0)),i=r(n(3)),a=r(n(4)),u=r(n(5)),c=n(6),f=new o.default("");e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={create:[],insert:[],update:[],destroy:[],remove:[]},n=!0,r=!1,i=void 0;try{for(var a,u=function(){var t=a.value;c.hooks.forEach((function(n){return t[n]&&e[n].push(t[n])}))},l=t[Symbol.iterator]();!(n=(a=l.next()).done);n=!0)u()}catch(t){r=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}function s(t,n,r){for(var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.length-1,a=function(){var i=r[o];t.insertBefore(function t(n){return"!"===n.type?n.elm=document.createComment(n.text):n.type?(n.elm=document.createElement(n.type),n.children&&n.children.forEach((function(e){n.elm.appendChild(t(e))})),n.text&&n.text.length&&n.elm.appendChild(document.createTextNode(n.text))):n.elm=document.createTextNode(n.text),e.create.forEach((function(t){return t(f,n)})),n.data.hook.create&&n.data.hook.create(),n.elm}(i),n),e.insert.forEach((function(t){return t(f,i)})),i.data.hook.insert&&i.data.hook.insert()};o<=i;o++)a()}function d(t,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length-1,i=function(){var o=n[r];t&&t.removeChild(o.elm),e.destroy.forEach((function(t){return t(o,f)})),o.data.hook.destroy&&o.data.hook.destroy()};r<=o;r++)i()}function p(t,n){var r=n.elm=t.elm,i=t.children,a=n.children;t!==n&&(void 0===n.text||n.text===t.text?(i&&a?i!==a&&function(t,e,n){for(var r=e.slice(),i=function(e){var i=n[e],a=r.findIndex((function(t){return t&&o.default.isSameVNode(t,i)}));if(~a){var u=r[a];r[a]=void 0,a!==e&&t.insertBefore(u.elm,t.children[e+1]),p(u,i)}else s(t,t.children[e+1],[i])},a=0;a<n.length;a++)i(a);var u=r.filter((function(t){return!!t}));u.length&&d(t,u)}(r,i,a):a?(t.text&&(r.textContent=""),s(r,null,a)):i?(d(r,i),n.text&&(r.textContent=n.text)):t.text!==n.text&&(r.textContent=n.text),e.update.forEach((function(e){return e(t,n)})),n.data.hook.update&&n.data.hook.update()):r.textContent=n.text)}return function(t,n){if(o.default.isVNode(t)||(t=new o.default("",{},[],void 0,t)),o.default.isSameVNode(t,n))p(t,n);else{var r=t.elm;s(r.parentNode,r,[n]),d(r.parentNode,[t]),e.insert.forEach((function(e){return e(t,n)}))}return n}}([i.default,a.default,u.default])},function(t,e,n){"use strict";function r(t,e){var n=t.data.attrs,r=e.data.attrs,o=e.elm;if((n||r)&&n!==r){for(var i in n=n||{},r=r||{}){var a=r[i];a!==n[i]&&o.setAttribute(i,a+"")}for(var u in n)u in r||o.removeAttribute(u)}}Object.defineProperty(e,"__esModule",{value:!0}),e.updateAttrs=r,e.attrsModule={create:r,update:r},e.default=e.attrsModule},function(t,e,n){"use strict";function r(t,e){var n=t.data.props,r=e.data.props,o=e.elm;if((n||r)&&n!==r){for(var i in r=r||{},n=n||{})r[i]||delete o[i];for(var a in r)r[a]!==n[a]&&(o[a]=r[a])}}Object.defineProperty(e,"__esModule",{value:!0}),e.updateProp=r,e.propsModule={create:r,update:r},e.default=e.propsModule},function(t,e,n){"use strict";function r(t,e){var n=t.data.on,r=t.elm,o=e.data.on,i=e.elm;if(n!==o){if(n)for(var a in n)r.removeEventListener(a,n[a]);if(o)for(var u in o)i.addEventListener(u,o[u])}}Object.defineProperty(e,"__esModule",{value:!0}),e.EventModule={create:r,update:r,destroy:r},e.default=e.EventModule},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.hooks=["create","insert","update","destroy","remove"]},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0)),i=n(8);e.default=function t(e,n,r){var a,u,c,f=i.getType(n),l=i.getType(r);if("object"===f?(a=n,"array"===l?c=r:"string"===l&&(u=r)):"array"===f?c=n:"string"===f&&(u=n),e&&null!=u&&(c=[t("",u)],u=void 0),e.length){a=a||{};var s=e.match(/#([^#\.\[\]]+)/);s&&(a.props=a.props||{},a.props.id=s[1]);var d=i.getMatchList(e,/\.([^#\.\[\]]+)/g).map((function(t){return t[1]}));d.length&&(a.attrs=a.attrs||{},a.attrs.class&&d.push.apply(d,function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(a.attrs.class.split(" ").filter((function(t){return t&&t.length})))),a.attrs.class=d.join(" "));var p=i.getMatchList(e,/\[(\S+?)=(\S+?)\]/g);p.length&&(a.attrs=a.attrs||{},p.forEach((function(t){a.attrs[t[1]]=t[2]}))),e=e.replace(/(#|\.|\[)\S*/g,"").toLowerCase().trim()}return new o.default(e,a,c,u)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getType=function(t){return Object.prototype.toString.call(t).toLowerCase().match(/\s(\S+?)\]/)[1]},e.getMatchList=function(t,e){for(var n,r=[];n=e.exec(t);)r.push([].slice.call(n));return r}}]).default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.Element=1]="Element",t[t.Text=3]="Text",t[t.Comment=8]="Comment",t[t.DocumentFragment=11]="DocumentFragment"}(e.ENodeType||(e.ENodeType={}))},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=o(n(1)),u=["push","pop","shift","unshift","splice","sort","reverse"];function c(t,e,n){if("object"!==i.getType(e))Object.defineProperty(t,e,Object.assign({enumerable:!0,configurable:!0},n));else{var r=function(n){c(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e}})};for(var o in t)r(o)}}e.proxy=c;var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this.observe()}var e,n,o;return e=t,(n=[{key:"observe",value:function(){var e=this;Object.keys(this.data).forEach((function(n){e.defineReactive(n),"object"===i.getType(e.data[n])&&new t(e.data[n])}))}},{key:"defineReactive",value:function(e){var n=this,r=new a.default;r.key=e;var o=this.data[e];c(this.data,e,{get:function(){return r.depend(),o},set:function(a){o!==a&&(o=a,n.appendArrayHooks(e),"object"===i.getType(o)&&new t(o),r.notify())}}),c(this.data,"__ob__",{enumerable:!1,value:this}),this.appendArrayHooks(e)}},{key:"appendArrayHooks",value:function(t){var e=this,n=this.data[t];if("array"===i.getType(n)){var r=!0,o=!1,a=void 0;try{for(var f,l=function(){var r=f.value;c(n,r,{enumerable:!1,get:function(){return function(){var n=e.data[t].slice(),o=n[r].apply(n,arguments);return e.data[t]=n,o}}})},s=u[Symbol.iterator]();!(r=(f=s.next()).done);r=!0)l()}catch(t){o=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}}}}])&&r(e.prototype,n),o&&r(e,o),t}();e.default=f},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},f=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var l=n(2),s=c(n(6)),d=c(n(8)),p=f(n(4)),h=c(n(1)),v=f(n(17)),y=n(0),m=f(n(18)),b=function(t){function e(){var t,n,o,u,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=i(e).call(this),(t=!o||"object"!==r(o)&&"function"!=typeof o?a(n):o)._update=(u=!1,function(){u=!0,y.nextTick((function(){if(u&&t.$options.el){var e=!1;t.el||(t.el=document.querySelector(t.$options.el),e=!0),t.lastVnode=t.vnode||t.el,t._watcher&&t._watcher.clear(),h.default.target=t._watcher=new v.default(a(t)),t.vnode=t.$options.render.call(a(t),l.h),h.default.target=null,e?t.$emit(m.default.beforeMount):t.$emit(m.default.beforeUpdate),l.patch(t.lastVnode,t.vnode),t.el=t.vnode.elm,u=!1,e?t.$emit(m.default.mounted):t.$emit(m.default.updated)}}))}),t.$options=c,t._init(),t}var n,c,f;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),n=e,(c=[{key:"_init",value:function(){m.defineLifeCycle(this),this._initMethods(),this._initData(),this._initComputed(),this._initWatch(),this.$emit(m.default.created),this._compile(),this._update()}},{key:"_compile",value:function(){var t=this.$options,e=t.el,n=t.template;this.$options.render||!n&&!e||(this.$options.render=d.default.render(n||document.querySelector(e).outerHTML))}},{key:"_initData",value:function(){this.$options.data&&(this._data=this.$options.data.call(this),new p.default(this._data),p.proxy(this._data,this),p.proxy(this._data,this.$data))}},{key:"_initComputed",value:function(){this._computedWatchers=v.defineComputed(this,this.$options.computed)}},{key:"_initMethods",value:function(){var t=this;Object.keys(this.$options.methods||{}).forEach((function(e){t[e]=t.$options.methods[e].bind(t)}))}},{key:"_initWatch",value:function(){v.defineWatch(this,this.$options.watch)}},{key:"$mount",value:function(t){return this.$options.el=t,this._update(),this}}])&&o(n.prototype,c),f&&o(n,f),e}(s.default);e.default=b},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=n(2),f=u(n(7)),l=n(0),s=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=o(this,i(e).apply(this,arguments)))._data={},t.$data={},t._computedWatchers={},t._watchers=[],t.$nextTick=l.nextTick,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),e}(f.default);e.default=s,s.nextTick=l.nextTick,s.h=c.h,s.VNode=c.VNode,s.patch=c.patch},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.normal=0]="normal",t[t.once=1]="once"}(o||(o={}));var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subscription={}}var e,n,i;return e=t,(n=[{key:"$on",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.normal;this.subscription[t]=this.subscription[t]||[],this.subscription[t].push({type:n,listener:e})}},{key:"$once",value:function(t,e){this.$on(t,e,o.once)}},{key:"$off",value:function(t,e){var n=this.subscription[t]||[],r=n.findIndex((function(t){return t.listener===e}));r>=0&&n.splice(r,1)}},{key:"$emit",value:function(t){for(var e=this.subscription[t]||[],n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var a=0;a<e.length;a++){var u=e[a];u.listener.apply(u,r),u.type!==o.normal&&u.type===o.once&&(e.splice(a,1),a--)}}},{key:"$listeners",value:function(t){return this.subscription[t]||[]}},{key:"$events",get:function(){return Object.keys(this.subscription)}}])&&r(e.prototype,n),i&&r(e,i),t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9);e.default=r.default},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(10),a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,a;return e=t,a=[{key:"render",value:function(e){return(new t).render(e)}}],(n=[{key:"render",value:function(t){var e=document.createElement("div");e.innerHTML=t.trim();var n=e.children[0],r=i.parseElement2AST(n),o="\nvar ".concat("__spVnode__"," = function(args){\n    var r = [];\n    args.forEach(function(item){\n        if(!item) return;\n\n        if(Object.prototype.toString.call(item) === '[object Array]'){\n            item=item.filter(function(n){\n                return !!n;\n            });\n            [].push.apply(r,item);\n        }\n        else{\n            r.push(item);\n        }\n    });\n    return r;\n}\nwith(this) {\n    return ").concat(this.ast2Render(r),";\n}\n        ");return new Function("h",o)}},{key:"ast2Render",value:function(t){return t.type===o.ENodeType.Text?this.textAst2Render(t):t.type===o.ENodeType.Element?this.eleAst2Render(t):null}},{key:"eleAst2Render",value:function(t){var e=this,n=JSON.stringify(t.attrs).replace(/"\(|\)"/g,""),r=JSON.stringify(t.props).replace(/"\(|\)"/g,""),o=t.children.map((function(t){return e.ast2Render(t)})).filter((function(t){return t})).join(",\n"),i=Object.keys(t.events).map((function(e){return""+"".concat(e,":(function($event){\n                        ").concat(t.events[e].join(";"),"\n                    }).bind(this)")})).join(","),a=t.key?"key:".concat(t.key,","):"",u=function(){return(t.if?"!(".concat(t.if,")?null:"):"")+"h('".concat(t.tag,"',{\n                    ").concat(a,"\n                    attrs: ").concat(n,",\n                    props:").concat(r,",\n                    on:{").concat(i,"}\n                },\n                ").concat("__spVnode__","([\n                    ").concat(o,"\n                ])\n            )")};if(t.for){var c=t.forIndex?",".concat(t.forIndex):"";return""+"".concat(t.for,".map(function (").concat(t.forItem).concat(c,") {\n                    return ").concat(u(),"\n                })\n            ")}return u()}},{key:"textAst2Render",value:function(t){var e="'"+t.text.replace(/[\r\n\s]+/g," ").replace(/'/g,"\\'").replace(/\{\{(.*?)\}\}/g,"' + ($1) + '")+"'";return"h('', ".concat(e,")")}}])&&r(e.prototype,n),a&&r(e,a),t}();e.default=a},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(0),a=r(n(11)),u=r(n(12)),c=r(n(13)),f=r(n(14)),l=r(n(15)),s=r(n(16));e.default=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},e.parseElement2AST=function t(e){if(e.nodeType===o.ENodeType.Text)return{tag:"",type:o.ENodeType.Text,text:e.textContent};if(e.nodeType===o.ENodeType.Element){var n=i.toArray(e.attributes).reduce((function(t,e){return t[e.name]=e.value,t}),{}),r=i.toArray(e.childNodes).map(t).filter((function(t){return t})),d={tag:e.tagName.toLowerCase(),type:o.ENodeType.Element,attrs:n,children:r};return a.default(d),l.default(d),c.default(d),f.default(d),u.default(d),s.default(d),d}return null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e={};for(var n in t.attrs){var r=t.attrs[n];if(/^:/.test(n)){var o=n.slice(1),i="((".concat(r,"))");delete t.attrs[n],e[o]=i}}Object.assign(t.attrs,e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.attrs["m-for"];if(e){var n=e.match(/^(\(\s*(\S+?)\s*,\s*(\S+?)\s*\)|(\S+?))\s*in\s*(.+)$/);if(!n)throw new Error("".concat("m-for","表达式出错：").concat("m-for",'="').concat(e,'"'));t.for=n[5],t.forItem=n[2]||n[4],t.forIndex=n[3],delete t.attrs["m-for"]}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e in t.events=t.events||{},t.attrs)/^@/.test(e)&&(/^(($|_)[\w$]*|[\w$]+)$/.test(t.attrs[e])&&(t.attrs[e]+="($event)"),t.events[e.slice(1)]=[t.attrs[e]],delete t.attrs[e])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.attrs["m-model"];e&&(t.events.input=t.events.input||[],t.events.input.push("".concat(e,"=$event.target.value")),t.props.value="((".concat(e,"))"),delete t.attrs["m-model"])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=["value","checked","disabled"];e.default=function(t){for(var e in t.props=t.props||{},t.attrs)~r.indexOf(e)&&(t.props[e]=t.attrs[e],delete t.attrs[e])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.attrs["m-if"];e&&(t.if=e,delete t.attrs["m-if"])}},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(n(1)),u=n(4),c=n(0);e.defineComputed=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},r=function(r){var o=new f(t,e[r],null,{lazy:!0});u.proxy(t,r,{get:function(){var t=a.default.target,e=o.dirty?o.get():o.value;return t&&(a.default.target=t,o.deps.forEach((function(t){return t.depend()}))),e}}),n[r]=o};for(var o in e)r(o);return n},e.defineWatch=function(t,e){for(var n in t.$watch=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{immediate:!1},o=r.immediate;t._watchers.push(new f(t,(function(){return c.getValByPath(t,e)}),n,{immediate:o}))},e){var r=e[n];"function"==typeof r?t.$watch(n,r):"object"===o(r)&&t.$watch(n,r.handler,{immediate:r.immediate})}};var f=function(){function t(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.invoked=!1,this.deps=[],this.vm=e,this.getter=n,this.cb=r,Object.assign(this,o),this.dirty=this.lazy,this.cb&&this.get()}var e,n,o;return e=t,(n=[{key:"addDep",value:function(t){~this.deps.indexOf(t)||this.deps.push(t)}},{key:"update",value:function(){var t=this;this.lazy?this.dirty=!0:this.cb?(this.dirty=!0,c.nextTick((function(){t.dirty&&t.get()}))):this.vm._update()}},{key:"clear",value:function(){var t=this;this.deps.forEach((function(e){return e.remove(t)})),this.deps=[]}},{key:"get",value:function(){this.clear();var t=this.value;a.default.target=this;try{this.value=this.getter.call(this.vm,this.vm),this.cb&&this.value!==t&&(this.immediate||this.invoked)&&this.cb.call(this.vm,this.value,t)}catch(t){throw console.log("watcher get error"),t}finally{a.default.target=null,this.dirty=!1,this.invoked=!0}return this.value}}])&&r(e.prototype,n),o&&r(e,o),t}();e.default=f},function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.created="hook:created",t.beforeMount="hook:beforeMount",t.mounted="hook:mounted",t.beforeUpdate="hook:beforeUpdate",t.updated="hook:updated"}(r||(r={})),e.default=r,e.defineLifeCycle=function(t){Object.keys(r).forEach((function(e){var n=t.$options[e];n&&(t[e]=n.bind(t),t.$on(r[e],t[e]))}))}}]).default}));