(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"1Yd/":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),o=n("8Kt/"),a=n.n(o);function c(e){var t=e.title,n=e.description,o=e.image,c=e.shouldExcludeTitleSuffix,i=void 0!==c&&c,s=e.shouldIndexPage,u=void 0===s||s,l="".concat(t," ").concat(i?"":"| Uperttech"),f=o?"".concat("https://uperttech.com","/").concat(o):null;return Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:l}),n&&Object(r.jsx)("meta",{name:"description",content:n}),f&&Object(r.jsx)("meta",{name:"image",content:f}),!u&&Object(r.jsx)("meta",{name:"robots",content:"noindex/nofollow"}),Object(r.jsx)("link",{rel:"shortcut icon",href:"/logo-uperttech.svg"}),Object(r.jsx)("link",{rel:"apple-touch-icon",href:"/logo-uperttech.svg"}),Object(r.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"IE=edge,chrome=1"}),Object(r.jsx)("meta",{name:"MobileOptimized",content:"320"}),Object(r.jsx)("meta",{name:"HandheldFriendly",content:"True"}),Object(r.jsx)("meta",{name:"theme-color",content:"#e4e9fe"}),Object(r.jsx)("meta",{name:"msapplication-TileColor",content:"#e4e9fe"}),Object(r.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),Object(r.jsx)("meta",{name:"google",content:"notranslate"}),Object(r.jsx)("meta",{property:"og:title",content:l}),Object(r.jsx)("meta",{property:"og:description",content:n}),Object(r.jsx)("meta",{property:"og:locale",content:"pt_BR"}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"og:site_name",content:l}),Object(r.jsx)("meta",{property:"og:image",content:f}),Object(r.jsx)("meta",{property:"og:image:secure_url",content:f}),Object(r.jsx)("meta",{property:"og:image:alt",content:"Thumbnail"}),Object(r.jsx)("meta",{property:"og:image:type",content:"image/png"}),Object(r.jsx)("meta",{property:"og:image:width",content:"1200"}),Object(r.jsx)("meta",{property:"og:image:height",content:"630"})]})}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,s=d.length;i<s;i++){var u=d[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=o.props[u],f=r[u]||new Set;f.has(l)?a=!1:(f.add(l),r[u]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function s(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,c({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var a=e.attr,s=e.title,u=i(e,["attr","title"]);return r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:c({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),c=(n("qXWd"),n("48fX")),i=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),i=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],u=o[1],h=(0,s.useRouter)(),m=h&&h.pathname||"/",v=c.default.useMemo((function(){var t=(0,i.resolveHref)(m,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,i.resolveHref)(m,e.as):a||o}}),[m,e.href,e.as]),g=v.href,j=v.as;c.default.useEffect((function(){if(t&&l&&a&&a.tagName&&(0,i.isLocalURL)(g)&&!f[g+"%"+j])return d(a,(function(){p(h,g,j)}))}),[t,a,g,j,h]);var x=e.children,y=e.replace,b=e.shallow,O=e.scroll,w=e.locale;"string"===typeof x&&(x=c.default.createElement("a",null,x));var k=c.Children.only(x),C={ref:function(e){e&&u(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,j,y,b,O,w)}};return t&&(C.onMouseEnter=function(e){(0,i.isLocalURL)(g)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),p(h,g,j,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(C.href=(0,i.addBasePath)((0,i.addLocale)(j,"undefined"!==typeof w?w:h&&h.locale,h&&h.defaultLocale))),c.default.cloneElement(k,C)};t.default=h},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vOmp:function(e,t,n){"use strict";var r=n("nKUr"),o=n("q1tI"),a=n("vOnD"),c=a.b.div.withConfig({displayName:"styles__Container",componentId:"f690kn-0"})(["position:fixed;z-index:99;top:0;left:0;right:0;padding:"," 40px;width:100%;display:flex;align-items:center;justify-content:space-between;transition:all ease-in-out 0.5s;background:",";box-shadow:",";"],(function(e){return e.toggleBackground?"15px":"25px"}),(function(e){return e.toggleBackground?"#FFFFFF":""}),(function(e){return e.toggleBackground?"0 2px 2px rgba(0, 0, 0, 0.08)":""})),i=a.b.img.withConfig({displayName:"styles__Logo",componentId:"f690kn-1"})(["cursor:pointer;width:min(50vw,220px);"]),s=a.b.nav.withConfig({displayName:"styles__Navigation",componentId:"f690kn-2"})(["width:100%;max-width:500px;display:flex;align-items:center;justify-content:flex-end;> a{color:#000;text-decoration:none;font-size:18px;font-weight:500;transition:0.2s ease;:not(:nth-child(4)){opacity:0.5;}:hover{opacity:1;}& + a{margin-left:30px;}}@media (max-width:900px){display:none;}"]),u=a.b.a.withConfig({displayName:"styles__NavigateToProducts",componentId:"f690kn-3"})(["background:#4c71fb;padding:15px 28px;color:#f5feff !important;font-size:15px;cursor:pointer;transition:0.2s ease;:hover{box-shadow:0 5px 20px rgb(76,113,251,0.8);}"]),l=a.b.button.withConfig({displayName:"styles__ButtonMenu",componentId:"f690kn-4"})(["display:none;background:none;border:0;cursor:pointer;z-index:5;@media (max-width:900px){display:unset;}"]),f=n("YFqc"),d=n.n(f),p=n("Lnxd");function h(e){return Object(p.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function m(e){return Object(p.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}var v=n("nOHt"),g=a.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1ir01em-0"})(["position:fixed;z-index:4;height:100vh;width:100vw;background:#4c71fb;"]),j=a.b.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1ir01em-1"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%;> a{color:#fff;text-decoration:none;font-size:18px;padding:20px;font-weight:500;}"]),x=function(e){var t=e.handleSelectOptionNavBar;return Object(r.jsx)(g,{children:Object(r.jsxs)(j,{children:[Object(r.jsx)(d.a,{href:"/#quemsomos",children:Object(r.jsx)("a",{onClick:t,children:"Quem somos"})}),Object(r.jsx)(d.a,{href:"/#servicos",children:Object(r.jsx)("a",{onClick:t,children:"Servi\xe7os"})}),Object(r.jsx)(d.a,{href:"/#contato",children:Object(r.jsx)("a",{onClick:t,children:"Contato"})}),Object(r.jsx)(d.a,{href:"https://cloud.uperttech.com",children:Object(r.jsx)("a",{onClick:t,children:"Solu\xe7\xf5es"})})]})})};t.a=function(){var e=Object(v.useRouter)().pathname,t=Object(o.useState)(!1),n=t[0],a=t[1],f=Object(o.useState)(!1),p=f[0],g=f[1],j=Object(o.useCallback)((function(){g(!1)}),[]);return Object(o.useEffect)((function(){if("/orcamento"===e){var t=function(){window.scrollY>100?a(!0):a(!1)};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}var n=function(){return window.scrollY>50?a(!0):a(!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),Object(r.jsxs)(r.Fragment,{children:[p&&Object(r.jsx)(x,{handleSelectOptionNavBar:j}),Object(r.jsxs)(c,{toggleBackground:n,children:[Object(r.jsx)(d.a,{href:"/",passHref:!0,children:Object(r.jsx)(i,{src:"/logo.png",alt:"Uperttech"})}),Object(r.jsxs)(s,{children:[Object(r.jsx)(d.a,{href:"/#quemsomos",children:Object(r.jsx)("a",{children:"Quem somos"})}),Object(r.jsx)(d.a,{href:"/#servicos",children:Object(r.jsx)("a",{children:"Servi\xe7os"})}),Object(r.jsx)(d.a,{href:"/#contato",children:Object(r.jsx)("a",{children:"Contato"})}),Object(r.jsx)(d.a,{href:"https://cloud.uperttech.com",passHref:!0,children:Object(r.jsx)(u,{children:"Solu\xe7\xf5es"})})]}),Object(r.jsx)(l,{onClick:function(){g((function(e){return!e}))},children:p?Object(r.jsx)(m,{size:30,color:n?"#4C71FB":"#FFF"}):Object(r.jsx)(h,{size:30,color:"#4c71fb"})})]})]})}}}]);