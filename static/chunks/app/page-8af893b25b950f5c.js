(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2040:function(n,t,e){"use strict";var r,i;n.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(i=e.g.process)?void 0:i.env)?e.g.process:e(6003)},4614:function(n,t,e){Promise.resolve().then(e.bind(e,8331))},8331:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return j}});var r=e(9268),i=e(5576),o=e(3805),a=e.n(o),c=e(5846),s=e.n(c),l=e(6006),u=e(5234),d=e(3498),f=l.memo(n=>{let{data:t,isLoading:e}=n;return e?(0,r.jsx)(d.Mc,{total:5}):(0,r.jsx)(l.Fragment,{children:t.map(n=>(0,r.jsx)(u.Z,{data:n},n.id))})}),p=e(9810),h=e(2805),g=e(3837);function m(){let n=(0,h._)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px;\n  color: white;\n\n  .item {\n    color: #fff;\n    border: #fff 1px solid;\n    border-radius: 2px;\n    padding: 0px 8px;\n    min-width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n"]);return m=function(){return n},n}let x=g.Z.div(m());var v=l.memo(n=>{let{totalPage:t,currentPage:e,onPageChange:i}=n,o=[];return o=e<2?(0,p.hS)(e,e+3,1):t-1>e?(0,p.hS)(e-1,e+2,1):(0,p.hS)(e-3,t,1),(0,r.jsxs)(x,{children:[e>1&&(0,r.jsx)("div",{onClick:()=>i(e-1),className:"item",children:"<"}),e>2&&(0,r.jsx)("div",{onClick:()=>i(1),className:"item",children:1}),e>3&&(0,r.jsx)("span",{children:".."}),o.map((n,t)=>(0,r.jsx)("div",{onClick:()=>i(n),className:"item",children:n},n*t)),e<=t-3&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:".."}),(0,r.jsx)("div",{onClick:()=>i(t),className:"item",children:t})]}),e<t&&(0,r.jsx)("div",{onClick:()=>i(e+1),className:"item",children:">"})]})}),y=e(5233),w=e(7434),b=e(8901);function j(){let[n,t]=(0,l.useState)({total:0,currentPage:1,lastPage:1,hasNextPage:!1,perPage:10,isSetFromBE:!1}),[e,o]=(0,l.useState)([]),{loading:c,data:u}=(0,i.a)(y.N,{variables:{page:n.currentPage,perPage:n.perPage,isAdult:!1}});return(0,l.useEffect)(()=>{u&&(o(u.result.list.map(n=>(0,w.r)(n))),n.isSetFromBE||t({...u.result.pageInfo,isSetFromBE:!0}))},[u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"ANIME LIST"})}),(0,r.jsx)("main",{className:"flex min-h-screen bg-[#1A1A1A] flex-col items-center justify-between  lg:py-10 md:py-10",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(b.l2,{children:(0,r.jsxs)(b.A0,{wrap:"wrap",gap:"12px",padding:"8px",justifyContent:"space-between",smJustifyContent:"space-evenly",alignItems:"center",children:[(0,r.jsx)(b.dC,{children:"UNOFFICIAL ANILIST"}),(0,r.jsx)(s(),{href:"/collection",children:(0,r.jsx)(b.zx,{children:"List Collection"})})]})}),(0,r.jsx)(f,{data:e,isLoading:c}),n.total>1&&(0,r.jsx)(v,{totalPage:n.total,currentPage:n.currentPage,onPageChange:n=>t(t=>({...t,currentPage:n}))})]})})]})}},8901:function(n,t,e){"use strict";e.d(t,{A0:function(){return b},Ee:function(){return y},XU:function(){return v},a6:function(){return w},dC:function(){return m},l2:function(){return g},oI:function(){return x},xv:function(){return j},zx:function(){return _}});var r=e(2805),i=e(3837);function o(){let n=(0,r._)(["\n  diplay: flex !important;\n  align-items: center !important;\n  gap: 16px;\n  widht: 100%;\n  background: #0d70df;\n  padding: 8px;\n"]);return o=function(){return n},n}function a(){let n=(0,r._)(["\n  font-size: 28px;\n  font-weight: 600;\n  color: #fff;\n"]);return a=function(){return n},n}function c(){let n=(0,r._)(["\n  padding: ",";\n  height: ",";\n  width: ",";\n  display: flex;\n  align-items: start;\n  gap: 12px;\n  background-color: ",";\n  border-bottom: #f9f9f9 1px solid;\n  color: white;\n  position: relative;\n\n  @media only screen and (max-width: 768px) {\n    max-height: 270px;\n  }\n"]);return c=function(){return n},n}function s(){let n=(0,r._)(["\n  font-size: 14px;\n  color: #b5b5b5;\n"]);return s=function(){return n},n}function l(){let n=(0,r._)(["\n  width: ",";\n  height: ",";\n"]);return l=function(){return n},n}function u(){let n=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  width: ",";\n  height: ",";\n"]);return u=function(){return n},n}function d(){let n=(0,r._)(["\n  display: flex !important;\n  flex-direction: ",";\n  align-items: ",";\n  justify-content: ",";\n  gap: ",";\n  ","\n  width: ",";\n  height: ",";\n  margin: ",";\n  padding: ",";\n  overflow: ",";\n  ","\n  ","\n\n\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n\n  /* Extra medium devices (phones, 600px and down) */\n  @media (min-width: 601px) and (max-width: 768px) {\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n\n  /* Large devices (laptops/desktops, 992px and up) */\n  @media (min-width: 769px) and (max-width: 992px) {\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n"]);return d=function(){return n},n}function f(){let n=(0,r._)(["\n  font-size: ",";\n  color: ",";\n  ","\n  ","\n ","\n ","\n"]);return f=function(){return n},n}function p(){let n=(0,r._)(["\n  background-color: ",";\n  border: ",";\n  padding: ",";\n  color: ",";\n  border-radius: ",";\n  cursor: pointer;\n"]);return p=function(){return n},n}function h(){let n=(0,r._)(["\n  position: absolute;\n  ","\n  ","\n  ","\n  ","\n"]);return h=function(){return n},n}let g=i.Z.div(o()),m=i.Z.h1(a()),x=i.Z.div(c(),n=>n.padding||"12px",n=>n.height||"170px",n=>n.width||"100%",n=>n.backgroundColor||"#222222"),v=i.Z.span(s()),y=i.Z.img(l(),n=>n.width?n.width:"100px",n=>n.height?n.height:"120px"),w=i.Z.div(u(),n=>(null==n?void 0:n.gap)||"8px",n=>(null==n?void 0:n.width)||"100%",n=>(null==n?void 0:n.height)||"100%"),b=i.Z.div(d(),n=>n.direction||"row",n=>n.alignItems||"center",n=>n.justifyContent||"space-between",n=>n.gap||"0",n=>n.wrap&&"flex-wrap: ".concat(n.wrap,";"),n=>n.width||"100%",n=>n.height||"100%",n=>n.margin||"0",n=>n.padding||"0",n=>n.overflow||"none",n=>n.backgroundColor&&"background-color: ".concat(n.backgroundColor,";"),n=>n.border&&"border: ".concat(n.border,";"),n=>n.smDirection&&"flex-direction: ".concat(n.smDirection,";"),n=>n.smAlignItems&&"align-items: ".concat(n.smAlignItems,";"),n=>n.smJustifyContent&&"justify-content: ".concat(n.smJustifyContent,";"),n=>n.smGap&&"gap: ".concat(n.smGap,";"),n=>n.smWidth&&"width: ".concat(n.smWidth,";"),n=>n.smHeight&&"height: ".concat(n.smHeight,";"),n=>n.smOverflow&&"overflow: ".concat(n.smOverflow,";"),n=>n.mdDirection&&"flex-direction: ".concat(n.mdDirection,";"),n=>n.mdAlignItems&&"align-items: ".concat(n.mdAlignItems,";"),n=>n.mdJustifyContent&&"justify-content: ".concat(n.mdJustifyContent,";"),n=>n.mdGap&&"gap: ".concat(n.mdGap,";"),n=>n.mdWidth&&"width: ".concat(n.mdWidth,";"),n=>n.mdHeight&&"height: ".concat(n.mdHeight,";"),n=>n.mdOverflow&&"overflow: ".concat(n.mdOverflow,";"),n=>n.lgDirection&&"flex-direction: ".concat(n.lgDirection,";"),n=>n.lgAlignItems&&"align-items: ".concat(n.lgAlignItems,";"),n=>n.lgJustifyContent&&"justify-content: ".concat(n.lgJustifyContent,";"),n=>n.lgGap&&"gap: ".concat(n.lgGap,";"),n=>n.lgWidth&&"width: ".concat(n.lgWidth,";"),n=>n.lgHeight&&"height: ".concat(n.lgHeight,";"),n=>n.lgOverflow&&"overflow: ".concat(n.lgOverflow,";")),j=i.Z.span(f(),n=>n.fontSize?"".concat(n.fontSize):"14px",n=>n.color?"".concat(n.color):"#b5b5b5",n=>n.fontFamily?"font-family: ".concat(n.fontFamily):"",n=>n.fontWeight?"font-weight: ".concat(n.fontWeight):"",n=>n.fontStyle?"font-style: ".concat(n.fontStyle):"",n=>n.textAlign?"text-align: ".concat(n.textAlign):""),_=i.Z.b(p(),n=>n.bgColor?"".concat(n.bgColor):"none",n=>n.border?"".concat(n.border):"1px solid #fff",n=>n.padding?"".concat(n.padding):" 8px 12px",n=>n.color?"".concat(n.color):"#fff",n=>n.borderRadius?"".concat(n.borderRadius):"4px");i.Z.div(h(),n=>n.top?"top: ".concat(n.top," !important"):"",n=>n.left?"left: ".concat(n.left," !important;"):"",n=>n.right?"right: ".concat(n.right," !important;"):"",n=>n.bottom?"bottom: ".concat(n.bottom," !important"):"")},3599:function(n,t,e){"use strict";var r=e(9268);e(6006),t.Z=n=>{let{width:t,height:e,fill:i,className:o}=n;return(0,r.jsx)("svg",{width:t||24,height:e||24,fill:"none",viewBox:"0 0 24 24",className:o,xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z",fill:i||"#FF5E5E"})})}},306:function(n,t,e){"use strict";e.d(t,{Hv:function(){return p},Ln:function(){return v},YA:function(){return h},af:function(){return x},gk:function(){return f},jK:function(){return g},oj:function(){return m}});var r=e(2805),i=e(3837);function o(){let n=(0,r._)(["\n  padding: 12px;\n  min-height: 170px;\n  width: 100%;\n  display: flex;\n  align-items: start;\n  gap: 12px;\n  background-color: #222222;\n  border-bottom: #f9f9f9 1px solid;\n  color: white;\n  position: relative;\n\n  @media only screen and (max-width: 768px) {\n    max-height: 270px;\n  }\n"]);return o=function(){return n},n}function a(){let n=(0,r._)(["\n  width: 100px;\n  height: 100%;\n  max-height: 120px;\n"]);return a=function(){return n},n}function c(){let n=(0,r._)(["\n  width: 100%;\n  height: 100%;\n"]);return c=function(){return n},n}function s(){let n=(0,r._)(["\n  font-size: 18px;\n  font-weight: bold;\n"]);return s=function(){return n},n}function l(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  gap: 0 5%;\n  width: 100%;\n  color: #b5b5b5;\n"]);return l=function(){return n},n}function u(){let n=(0,r._)(["\n  font-size: 14px;\n  color: #b5b5b5;\n"]);return u=function(){return n},n}function d(){let n=(0,r._)(["\n  font-size: 12px;\n  color: #b5b5b5;\n\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */\n  white-space: wrap;\n"]);return d=function(){return n},n}let f=i.Z.div(o()),p=i.Z.img(a()),h=i.Z.div(c()),g=i.Z.h2(s()),m=i.Z.div(l()),x=i.Z.span(u()),v=i.Z.p(d())},5234:function(n,t,e){"use strict";var r=e(9268),i=e(5846),o=e.n(i),a=e(6006),c=e(8901),s=e(3599),l=e(306);t.Z=a.memo(n=>{let{data:t,onDelete:e}=n;return(0,r.jsxs)(l.gk,{children:[(0,r.jsx)(o(),{href:"/anime?id=".concat(t.id),children:(0,r.jsx)(l.Hv,{alt:"cover anime",src:null==t?void 0:t.coverImage})}),(0,r.jsxs)(c.a6,{gap:"4px",children:[(0,r.jsx)(o(),{href:"/anime?id=".concat(t.id),children:(0,r.jsx)(l.jK,{children:null==t?void 0:t.title})}),(0,r.jsxs)(l.oj,{children:[(0,r.jsxs)(l.af,{children:[(0,r.jsx)("b",{children:"Release Date"}),": ",null==t?void 0:t.releaseDate]}),(0,r.jsxs)(l.af,{children:[(0,r.jsx)("b",{children:"Status"}),": ",null==t?void 0:t.status]})]}),(0,r.jsx)(l.Ln,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.description}})]}),e&&(0,r.jsx)(c.zx,{border:"none",onClick:()=>e(t.id),children:(0,r.jsx)(s.Z,{})})]})})},3498:function(n,t,e){"use strict";e.d(t,{Mc:function(){return s},jc:function(){return a}});var r=e(9268);e(6006);var i=e(661);e(8829);var o=e(306);let a=()=>(0,r.jsx)(i.Z,{style:{height:"10px",width:"95%",borderRadius:"8px"}}),c=()=>(0,r.jsxs)(o.gk,{children:[(0,r.jsx)(i.Z,{style:{height:"130px",width:"100px",borderRadius:0}}),(0,r.jsxs)(o.YA,{children:[(0,r.jsx)(i.Z,{style:{height:"18px",width:"30%",borderRadius:"8px"}}),(0,r.jsx)(i.Z,{style:{height:"16px",width:"20%",borderRadius:"8px"}}),(0,r.jsxs)("div",{className:"gap-y-[0px] mt-2",children:[(0,r.jsx)(a,{}),(0,r.jsx)(a,{}),(0,r.jsx)(a,{})]})]})]}),s=n=>{let{total:t}=n;return Array.from(Array(t).keys()).map(n=>(0,r.jsx)(c,{},n*Math.random()))}},5233:function(n,t,e){"use strict";e.d(t,{N:function(){return c},e:function(){return s}});var r=e(2805),i=e(7056);function o(){let n=(0,r._)(["\n  query ($page: Int, $perPage: Int, $isAdult: Boolean) {\n    result: Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        currentPage\n        lastPage\n        hasNextPage\n        perPage\n      }\n      list: media(isAdult: $isAdult) {\n        id\n        coverImage {\n          medium\n        }\n        title {\n          romaji\n        }\n        description\n        startDate {\n          year\n          month\n          day\n        }\n        status\n      }\n    }\n  }\n"]);return o=function(){return n},n}function a(){let n=(0,r._)(["\n  query ($id: Int, $isAdult: Boolean) {\n    Media(id: $id, isAdult: $isAdult) {\n      id\n      coverImage {\n        large\n      }\n      title {\n        romaji\n      }\n      studios {\n        edges {\n          id\n          isMain\n          node {\n            name\n          }\n        }\n      }\n      duration\n      updatedAt\n      genres\n      averageScore\n      description\n      episodes\n      startDate {\n        year\n        month\n        day\n      }\n      status\n      reviews {\n        edges {\n          node {\n            id\n            rating\n          }\n        }\n      }\n    }\n  }\n"]);return a=function(){return n},n}let c=(0,i.Ps)(o()),s=(0,i.Ps)(a())},7434:function(n,t,e){"use strict";e.d(t,{U:function(){return a},r:function(){return o}});var r=e(5326),i=e.n(r);let o=n=>{let{id:t,title:e,description:r,startDate:o,status:a,coverImage:c}=n;return{id:t,status:a,description:r,title:e.romaji,releaseDate:i()((o.day>9?o.day:"0"+o.day)+"/"+o.month+"/"+o.year).format("DD MMM YYYY"),coverImage:c.medium}},a=n=>{var t,e;let{id:r,title:o,description:a,startDate:s,status:l,coverImage:u,studios:d,duration:f,updatedAt:p,genres:h,episodes:g,reviews:m}=n;return{id:r,status:l,description:a,updatedAt:i()(p).format("DD MMM YYYY"),genres:h,title:o.romaji,releaseDate:i()((s.day>9?s.day:"0"+s.day)+"/"+s.month+"/"+s.year).format("DD MMM YYYY"),coverImage:(null==u?void 0:u.large)||"",studio:(null===(e=d.edges.find(n=>n.isMain))||void 0===e?void 0:null===(t=e.node)||void 0===t?void 0:t.name)||"-",duration:f+" minutes",totalEpisodes:g,rating:c(m)}},c=n=>{var t;if((null==n?void 0:null===(t=n.edges)||void 0===t?void 0:t.length)==0)return 0;let e=(null==n?void 0:n.edges.reduce((n,t)=>n+=t.node.rating,0))/(null==n?void 0:n.edges.length);return+(Math.round(parseFloat(e/20+"e+2"))+"e-2")}},9810:function(n,t,e){"use strict";e.d(t,{Gh:function(){return i},XF:function(){return o},hS:function(){return r}});let r=(n,t,e)=>Array.from({length:(t-n)/e+1},(t,r)=>n+r*e),i=(n,t)=>n.reduce((n,e)=>{let r=e.animeList.findIndex(n=>n.id==t);return r>-1&&n.push(e.name),n},[]),o=n=>/^[a-zA-Z0-9\s]+$/.test(n)},6003:function(n){!function(){var t={229:function(n){var t,e,r,i=n.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function c(n){if(t===setTimeout)return setTimeout(n,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(n){t=o}try{e="function"==typeof clearTimeout?clearTimeout:a}catch(n){e=a}}();var s=[],l=!1,u=-1;function d(){l&&r&&(l=!1,r.length?s=r.concat(s):u=-1,s.length&&f())}function f(){if(!l){var n=c(d);l=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,l=!1,function(n){if(e===clearTimeout)return clearTimeout(n);if((e===a||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(n);try{e(n)}catch(t){try{return e.call(null,n)}catch(t){return e.call(this,n)}}}(n)}}function p(n,t){this.fun=n,this.array=t}function h(){}i.nextTick=function(n){var t=Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];s.push(new p(n,t)),1!==s.length||l||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(n){return[]},i.binding=function(n){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}},a=!0;try{t[n](o,o.exports,r),a=!1}finally{a&&delete e[n]}return o.exports}r.ab="//";var i=r(229);n.exports=i}()},3177:function(n,t,e){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=e(6006),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(n,t,e){var r,o={},l=null,u=null;for(r in void 0!==e&&(l=""+e),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(n&&n.defaultProps)for(r in t=n.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:n,key:l,ref:u,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},9268:function(n,t,e){"use strict";n.exports=e(3177)},431:function(n,t,e){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,{Z:function(){return r}})}},function(n){n.O(0,[550,448,87,545,253,698,744],function(){return n(n.s=4614)}),_N_E=n.O()}]);