!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MiniMvvm=e():t.MiniMvvm=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=5)}([function(t,e,n){"use strict";function r(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i;Object.defineProperty(e,"__esModule",{value:!0}),e.getValByPath=e.toArray=e.nextIndex=e.each=e.getType=e.nextTick=void 0,e.nextTick=function(t){Promise.resolve().then(t)},e.getType=function(t){return Object.prototype.toString.call(t).toLowerCase().match(/\s(\S+?)\]/)[1]},e.each=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var n in t)e(t[n],n)},e.nextIndex=(i=365611,function(){return i++}),e.toArray=function(t){return[].slice.call(t)},e.getValByPath=function(t,e){var n,o=t,i=r(e.split("."));try{for(i.s();!(n=i.n()).done;){o=o[n.value]}}catch(t){i.e(t)}finally{i.f()}return o}},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var o=1,i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subs=[],this.id=o++}var e,n,i;return e=t,(n=[{key:"add",value:function(t){~this.subs.indexOf(t)||this.subs.push(t)}},{key:"remove",value:function(t){var e=this.subs.indexOf(t);~e&&this.subs.splice(e,1)}},{key:"clear",value:function(){this.subs=[]}},{key:"depend",value:function(){var e=t.target;e&&(e.addDep(this),this.add(e))}},{key:"notify",value:function(){this.subs.forEach((function(t){return t.update()}))}}])&&r(e.prototype,n),i&&r(e,i),t}();e.default=i},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;r(this,t),n.hook=n.hook||{},this.type=e,this.data=n,this.children=o,this.text=i,this.elm=a,this.key=n.key}var e,n;return e=t,(n=[{key:"isVNode",value:function(e){return e instanceof t}},{key:"isSameVNode",value:function(t,e){return t.key===e.key&&t.type===e.type}}])&&o(e,n),t}();e.default=i},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.VNode=e.patch=e.h=void 0;var o=r(n(2));e.patch=o.default;var i=r(n(7));e.h=i.default;var a=r(n(0));e.VNode=a.default,e.default={patch:o.default,h:i.default,VNode:a.default}},function(t,e,n){"use strict";function r(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(n(0)),u=i(n(3)),c=i(n(4)),f=i(n(5)),l=n(6),s=new a.default("");e.default=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n={create:[],insert:[],update:[],destroy:[],remove:[]},o=r(e);try{var i=function(){var e=t.value;l.hooks.forEach((function(t){return e[t]&&n[t].push(e[t])}))};for(o.s();!(t=o.n()).done;)i()}catch(t){o.e(t)}finally{o.f()}function u(t){return"!"===t.type?t.elm=document.createComment(t.text):t.type?(t.elm=t.data.ns?document.createElementNS(t.data.ns,t.type):document.createElement(t.type),t.children&&t.children.forEach((function(e){t.elm.appendChild(u(e))})),t.text&&t.text.length&&t.elm.appendChild(document.createTextNode(t.text))):t.elm=document.createTextNode(t.text),n.create.forEach((function(e){return e(s,t)})),t.data.hook.create&&t.data.hook.create(),t.elm}function c(t,e,r){for(var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.length-1,a=function(){var i=r[o];t.insertBefore(u(i),e),n.insert.forEach((function(t){return t(s,i)})),i.data.hook.insert&&i.data.hook.insert()};o<=i;o++)a()}function f(t,e){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length-1,i=function(){var o=e[r];t&&t.removeChild(o.elm),n.destroy.forEach((function(t){return t(o,s)})),o.data.hook.destroy&&o.data.hook.destroy()};r<=o;r++)i()}function d(t,e,n){for(var r=e.slice(),o=function(e){var o=n[e],i=r.findIndex((function(t){return t&&a.default.isSameVNode(t,o)}));if(~i){var u=r[i];r[i]=void 0,i!==e&&t.insertBefore(u.elm,t.children[e+1]),p(u,o)}else c(t,t.children[e+1],[o])},i=0;i<n.length;i++)o(i);var u=r.filter((function(t){return!!t}));u.length&&f(t,u)}function p(t,e){var r=e.elm=t.elm,o=t.children,i=e.children;t!==e&&(void 0===e.text||e.text===t.text?(o&&i?o!==i&&d(r,o,i):i?(t.text&&(r.textContent=""),c(r,null,i)):o?(f(r,o),e.text&&(r.textContent=e.text)):t.text!==e.text&&(r.textContent=e.text),n.update.forEach((function(n){return n(t,e)})),e.data.hook.update&&e.data.hook.update()):r.textContent=e.text)}function y(t,e){if(a.default.isVNode(t)||(t=new a.default("",{},[],void 0,t)),a.default.isSameVNode(t,e))p(t,e);else{var r=t.elm;c(r.parentNode,r,[e]),f(r.parentNode,[t]),n.insert.forEach((function(n){return n(t,e)}))}return e}return y}([u.default,c.default,f.default])},function(t,e,n){"use strict";function r(t,e){var n=t.data.attrs,r=e.data.attrs,o=e.elm;if((n||r)&&n!==r){for(var i in n=n||{},r=r||{}){var a=r[i];a!==n[i]&&o.setAttribute(i,a+"")}for(var u in n)u in r||o.removeAttribute(u)}}Object.defineProperty(e,"__esModule",{value:!0}),e.attrsModule=e.updateAttrs=void 0,e.updateAttrs=r,e.attrsModule={create:r,update:r},e.default=e.attrsModule},function(t,e,n){"use strict";function r(t,e){var n=t.data.props,r=e.data.props,o=e.elm;if((n||r)&&n!==r){for(var i in r=r||{},n=n||{})r[i]||delete o[i];for(var a in r)r[a]!==n[a]&&(o[a]=r[a])}}Object.defineProperty(e,"__esModule",{value:!0}),e.propsModule=e.updateProp=void 0,e.updateProp=r,e.propsModule={create:r,update:r},e.default=e.propsModule},function(t,e,n){"use strict";function r(t,e){var n=t.data.on,r=t.elm,o=e.data.on,i=e.elm;if(n!==o){if(n)for(var a in n)r.removeEventListener(a,n[a]);if(o)for(var u in o)i.addEventListener(u,o[u])}}Object.defineProperty(e,"__esModule",{value:!0}),e.EventModule=void 0,e.EventModule={create:r,update:r,destroy:r},e.default=e.EventModule},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.hooks=void 0,e.hooks=["create","insert","update","destroy","remove"]},function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(n(0)),u=n(8);e.default=function t(e,n,o){var i,c,f,l=u.getType(n),s=u.getType(o);if("object"===l?(i=n,"array"===s?f=o:"string"===s&&(c=o)):"array"===l?f=n:"string"===l&&(c=n),e&&null!=c&&(f=[t("",c)],c=void 0),e.length){i=i||{};var d=e.match(/#([^#\.\[\]]+)/);d&&(i.props=i.props||{},i.props.id=d[1]);var p=u.getMatchList(e,/\.([^#\.\[\]]+)/g).map((function(t){return t[1]}));p.length&&(i.attrs=i.attrs||{},i.attrs.class&&p.push.apply(p,r(i.attrs.class.split(" ").filter((function(t){return t&&t.length})))),i.attrs.class=p.join(" "));var y=u.getMatchList(e,/\[(\S+?)=(\S+?)\]/g);y.length&&(i.attrs=i.attrs||{},y.forEach((function(t){i.attrs[t[1]]=t[2]}))),e=e.replace(/(#|\.|\[)\S*/g,"").toLowerCase().trim()}var h=new a.default(e,i,f,c);return"svg"===h.type&&function t(e){e.type&&(e.data.ns="http://www.w3.org/2000/svg",e.children&&e.children.length&&e.children.forEach((function(e){return t(e)})))}(h),h}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getMatchList=e.getType=void 0,e.getType=function(t){return Object.prototype.toString.call(t).toLowerCase().match(/\s(\S+?)\]/)[1]},e.getMatchList=function(t,e){for(var n,r=[];n=e.exec(t);)r.push([].slice.call(n));return r}}]).default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ENodeType=void 0,function(t){t[t.Element=1]="Element",t[t.Text=3]="Text",t[t.Comment=8]="Comment",t[t.DocumentFragment=11]="DocumentFragment"}(e.ENodeType||(e.ENodeType={}))},function(t,e,n){"use strict";function r(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,a=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.proxy=void 0;var u=n(0),c=a(n(1)),f=["push","pop","shift","unshift","splice","sort","reverse"];function l(t,e,n){if("object"!==u.getType(e))Object.defineProperty(t,e,Object.assign({enumerable:!0,configurable:!0},n));else{var r=function(n){l(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e}})};for(var o in t)r(o)}}e.proxy=l;var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=u.getType(e);~["object","array"].indexOf(n)&&(this.data="array"===n?{a:e}:e,this.observe())}var e,n,o;return e=t,(n=[{key:"observe",value:function(){var e=this;Object.keys(this.data).forEach((function(n){e.defineReactive(n),"object"===u.getType(e.data[n])&&new t(e.data[n])}))}},{key:"defineReactive",value:function(e){var n=this,r=new c.default;r.key=e;var o=this.data[e];l(this.data,e,{get:function(){return r.depend(),o},set:function(i){o!==i&&(o=i,n.appendArrayHooks(e),"object"===u.getType(o)&&new t(o),r.notify())}}),l(this.data,"__ob__",{enumerable:!1,value:this}),this.appendArrayHooks(e)}},{key:"appendArrayHooks",value:function(e){var n=this,o=this.data[e];if("array"===u.getType(o)){var i,a=r(f);try{var c=function(){var t=i.value;l(o,t,{enumerable:!1,get:function(){return function(){var r=n.data[e].slice(),o=r[t].apply(r,arguments);return n.data[e]=r,o}}})};for(a.s();!(i=a.n()).done;)c()}catch(t){a.e(t)}finally{a.f()}var s,d=r(o);try{for(d.s();!(s=d.n()).done;)new t(s.value)}catch(t){d.e(t)}finally{d.f()}}}}])&&i(e.prototype,n),o&&i(e,o),t}();e.default=s},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),d=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),p=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&s(e,t,n);return d(e,t),e},y=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var h=n(2),v=y(n(6)),m=y(n(8)),b=p(n(4)),_=y(n(1)),g=p(n(17)),j=n(0),O=p(n(18)),w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(l,t);var e,n,r,c=u(l);function l(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(this,l),(t=c.call(this))._update=(e=!1,function(){e=!0,j.nextTick((function(){if(e&&t.$options.$el){var n=!1;t.$el||(t.$el=document.querySelector(t.$options.$el),n=!0),t.lastVnode=t.vnode||t.$el,t._watcher&&t._watcher.clear(),_.default.target=t._watcher=new g.default(f(t)),t.vnode=t.$options.render.call(f(t),h.h),_.default.target=null,n?t.$emit(O.default.beforeMount):t.$emit(O.default.beforeUpdate),h.patch(t.lastVnode,t.vnode),t.$el=t.vnode.elm,e=!1,n?t.$emit(O.default.mounted):t.$emit(O.default.updated)}}))}),t.$options=n,t._init(),t}return e=l,(n=[{key:"_init",value:function(){O.defineLifeCycle(this),this._initMethods(),this._initData(),this._initComputed(),this._initWatch(),this.$emit(O.default.created),this._compile(),this._update()}},{key:"_compile",value:function(){var t=this.$options,e=t.$el,n=t.template;this.$options.render||!n&&!e||(this.$options.render=m.default.render(n||document.querySelector(e).outerHTML))}},{key:"_initData",value:function(){this.$options.data&&(this._data=this.$options.data.call(this),new b.default(this._data),b.proxy(this._data,this),b.proxy(this._data,this.$data))}},{key:"_initComputed",value:function(){this._computedWatchers=g.defineComputed(this,this.$options.computed)}},{key:"_initMethods",value:function(){var t=this;Object.keys(this.$options.methods||{}).forEach((function(e){t[e]=t.$options.methods[e].bind(t)}))}},{key:"_initWatch",value:function(){g.defineWatch(this,this.$options.watch)}},{key:"$mount",value:function(t){return this.$options.$el=t,this._update(),this}}])&&i(e.prototype,n),r&&i(e,r),l}(v.default);e.default=w},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=n(2),s=f(n(7)),d=n(0),p=function(){var t=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=a(n);function n(){var t;return o(this,n),(t=e.apply(this,arguments))._data={},t.$data={},t._computedWatchers={},t._watchers=[],t.$nextTick=d.nextTick,t}return n}(s.default);return t.nextTick=d.nextTick,t.h=l.h,t.VNode=l.VNode,t.patch=l.patch,t}();e.default=p},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.normal=0]="normal",t[t.once=1]="once"}(o||(o={}));var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subscription={}}var e,n,i;return e=t,(n=[{key:"$on",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.normal;this.subscription[t]=this.subscription[t]||[],this.subscription[t].push({type:n,listener:e})}},{key:"$once",value:function(t,e){this.$on(t,e,o.once)}},{key:"$off",value:function(t,e){var n=this.subscription[t]||[],r=n.findIndex((function(t){return t.listener===e}));r>=0&&n.splice(r,1)}},{key:"$emit",value:function(t){for(var e=this.subscription[t]||[],n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var a=0;a<e.length;a++){var u=e[a];u.listener.apply(u,r),u.type!==o.normal&&u.type===o.once&&(e.splice(a,1),a--)}}},{key:"$listeners",value:function(t){return this.subscription[t]||[]}},{key:"$events",get:function(){return Object.keys(this.subscription)}}])&&r(e.prototype,n),i&&r(e,i),t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(10),a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,a;return e=t,a=[{key:"render",value:function(e){return(new t).render(e)}}],(n=[{key:"render",value:function(t){var e=document.createElement("div");e.innerHTML=t.trim();var n=e.children[0],r=i.parseElement2AST(n),o="\nvar ".concat("__spVnode__"," = function(args){\n    var r = [];\n    args.forEach(function(item){\n        if(!item) return;\n\n        if(Object.prototype.toString.call(item) === '[object Array]'){\n            item=item.filter(function(n){\n                return !!n;\n            });\n            [].push.apply(r,item);\n        }\n        else{\n            r.push(item);\n        }\n    });\n    return r;\n}\nwith(this) {\n    return ").concat(this.ast2Render(r),";\n}\n        ");return new Function("h",o)}},{key:"ast2Render",value:function(t){return t.type===o.ENodeType.Text?this.textAst2Render(t):t.type===o.ENodeType.Element?this.eleAst2Render(t):null}},{key:"eleAst2Render",value:function(t){var e=this,n=JSON.stringify(t.attrs).replace(/"\(\(/g,"(").replace(/\)\)"/g,")"),r=JSON.stringify(t.props).replace(/"\(\(/g,"(").replace(/\)\)"/g,")"),o=t.children.map((function(t){return e.ast2Render(t)})).filter((function(t){return t})).join(",\n"),i=Object.keys(t.events).map((function(e){return""+"".concat(e,":(function($event){\n                        ").concat(t.events[e].join(";"),"\n                    }).bind(this)")})).join(","),a=t.key?"key:".concat(t.key,","):"",u=function(){return(t.if?"!(".concat(t.if,")?null:"):"")+"h('".concat(t.tag,"',{\n                    ").concat(a,"\n                    attrs: ").concat(n,",\n                    props:").concat(r,",\n                    on:{").concat(i,"}\n                },\n                ").concat("__spVnode__","([\n                    ").concat(o,"\n                ])\n            )")};if(t.for){var c=t.forIndex?",".concat(t.forIndex):"";return""+"".concat(t.for,".map(function (").concat(t.forItem).concat(c,") {\n                    return ").concat(u(),"\n                })\n            ")}return u()}},{key:"textAst2Render",value:function(t){var e="'"+t.text.replace(/[\r\n\s]+/g," ").replace(/'/g,"\\'").replace(/\{\{(.*?)\}\}/g,"' + ($1) + '")+"'";return"h('', ".concat(e,")")}}])&&r(e.prototype,n),a&&r(e,a),t}();e.default=a},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.parseElement2AST=void 0;var o=n(3),i=n(0),a=r(n(11)),u=r(n(12)),c=r(n(13)),f=r(n(14)),l=r(n(15)),s=r(n(16));e.default=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},e.parseElement2AST=function t(e){if(e.nodeType===o.ENodeType.Text)return{tag:"",type:o.ENodeType.Text,text:e.textContent};if(e.nodeType===o.ENodeType.Element){var n=i.toArray(e.attributes).reduce((function(t,e){return t[e.name]=e.value,t}),{}),r=i.toArray(e.childNodes).map(t).filter((function(t){return t})),d={tag:e.tagName.toLowerCase(),type:o.ENodeType.Element,attrs:n,children:r};return a.default(d),l.default(d),c.default(d),f.default(d),u.default(d),s.default(d),d}return null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e={};for(var n in t.attrs){var r=t.attrs[n];if(/^:/.test(n)){var o=n.slice(1),i="((".concat(r,"))");delete t.attrs[n],e[o]=i}}Object.assign(t.attrs,e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.attrs["m-for"];if(e){var n=e.match(/^(\(\s*(\S+?)\s*,\s*(\S+?)\s*\)|(\S+?))\s+in\s+(.+)$/);if(!n)throw new Error("".concat("m-for","表达式出错：").concat("m-for",'="').concat(e,'"'));t.for=n[5],t.forItem=n[2]||n[4],t.forIndex=n[3],delete t.attrs["m-for"]}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e in t.events=t.events||{},t.attrs)/^@/.test(e)&&(/^(($|_)[\w$]*|[\w$]+)$/.test(t.attrs[e])&&(t.attrs[e]+="($event)"),t.events[e.slice(1)]=[t.attrs[e]],delete t.attrs[e])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.attrs["m-model"];e&&(t.events.input=t.events.input||[],t.events.input.push("".concat(e,"=$event.target.value")),t.props.value="((".concat(e,"))"),delete t.attrs["m-model"])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=["value","checked","disabled"];e.default=function(t){for(var e in t.props=t.props||{},t.attrs)~r.indexOf(e)&&(t.props[e]=t.attrs[e],delete t.attrs[e])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.attrs["m-if"];e&&(t.if=e,delete t.attrs["m-if"])}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.defineWatch=e.defineComputed=void 0;var u=a(n(1)),c=n(4),f=n(0);e.defineComputed=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},r=function(r){var o=new l(t,e[r],null,{lazy:!0});c.proxy(t,r,{get:function(){var t=u.default.target,e=o.dirty?o.get():o.value;return t&&(u.default.target=t,o.deps.forEach((function(t){return t.depend()}))),e}}),n[r]=o};for(var o in e)r(o);return n},e.defineWatch=function(t,e){for(var n in t.$watch=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{immediate:!1},o=r.immediate;t._watchers.push(new l(t,(function(){return f.getValByPath(t,e)}),n,{immediate:o}))},e){var r=e[n];"function"==typeof r?t.$watch(n,r):"object"===i(r)&&t.$watch(n,r.handler,{immediate:r.immediate})}};var l=function(){function t(e,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r(this,t),this.invoked=!1,this.deps=[],this.vm=e,this.getter=n,this.cb=o,Object.assign(this,i),this.dirty=this.lazy,this.cb&&this.get()}var e,n,i;return e=t,(n=[{key:"addDep",value:function(t){~this.deps.indexOf(t)||this.deps.push(t)}},{key:"update",value:function(){var t=this;this.lazy?this.dirty=!0:this.cb?(this.dirty=!0,f.nextTick((function(){t.dirty&&t.get()}))):this.vm._update()}},{key:"clear",value:function(){var t=this;this.deps.forEach((function(e){return e.remove(t)})),this.deps=[]}},{key:"get",value:function(){this.clear();var t=this.value;u.default.target=this;try{this.value=this.getter.call(this.vm,this.vm),this.cb&&this.value!==t&&(this.immediate||this.invoked)&&this.cb.call(this.vm,this.value,t)}catch(t){throw console.log("watcher get error"),t}finally{u.default.target=null,this.dirty=!1,this.invoked=!0}return this.value}}])&&o(e.prototype,n),i&&o(e,i),t}();e.default=l},function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.defineLifeCycle=void 0,function(t){t.created="hook:created",t.beforeMount="hook:beforeMount",t.mounted="hook:mounted",t.beforeUpdate="hook:beforeUpdate",t.updated="hook:updated"}(r||(r={})),e.default=r,e.defineLifeCycle=function(t){Object.keys(r).forEach((function(e){var n=t.$options[e];n&&(t[e]=n.bind(t),t.$on(r[e],t[e]))}))}}]).default}));