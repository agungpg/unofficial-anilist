(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{8683:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(n=(function(){return i}).apply(t,[]))&&(e.exports=n)}()},5129:function(e,t,n){Promise.resolve().then(n.bind(n,3721))},8275:function(e,t,n){"use strict";var r=n(9268),i=n(6006),a=n(8901);t.Z=i.memo(e=>{let{label:t,value:n}=e;return(0,r.jsxs)(a.XU,{className:"item-info-wrapper",children:[(0,r.jsx)("div",{className:"point"}),(0,r.jsx)("b",{children:t}),(0,r.jsxs)("span",{className:"description",children:[": ",n]})]})})},3721:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J},generateStaticParams:function(){return G}});var r=n(9268),i=n(5576),a=n(5846),o=n.n(a),l=n(6006),s=n(8901),d=l.memo(e=>{let{width:t,height:n,color:i}=e;return(0,r.jsxs)("svg",{width:t||"32px",height:n||"32px",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fill:i||"#000000",d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"}),(0,r.jsx)("path",{fill:i||"#000000",d:"m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"})]})}),c=n(5233),u=n(7434),p=n(2005),f=n(58),g=n(2698),h=n.n(g),m=n(8275),x={src:"/_next/static/media/collection-cover-default.48befa1c.jpg",height:998,width:1500,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwMFAAAAAAAAAAAAAAACAAERAwQhBRIVgbH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABkRAAIDAQAAAAAAAAAAAAAAAAABAgMhof/aAAwDAQACEQMRAD8AhcOVfRCdrswzuhhnPs9oiJ7rjhPV803vEf/Z",blurWidth:8,blurHeight:5},v=n(306),y=l.memo(e=>{var t,n;let{data:i,selected:a,onSelect:o}=e,l=(null==i?void 0:null===(t=i.animeList[0])||void 0===t?void 0:t.coverImage)||x.src;return(0,r.jsxs)(s.oI,{height:"84px",backgroundColor:"#f0f0f0",onClick:()=>o(null==i?void 0:i.name),children:[(0,r.jsx)(s.Ee,{width:"60px",height:"60px",src:l}),(0,r.jsxs)(s.A0,{margin:"0 0 0 10px",direction:"column",alignItems:"left",justifyContent:"top",children:[(0,r.jsx)(v.jK,{children:null==i?void 0:i.name}),(0,r.jsx)(m.Z,{label:"Total",value:null===(n=i.animeList)||void 0===n?void 0:n.length})]}),(0,r.jsx)("input",{onChange:()=>o(null==i?void 0:i.name),checked:a,type:"checkbox"})]})}),w=n(2653);let b={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.7)"}};var A=l.memo((0,p.$j)(function(e){return{collections:e.collections}},function(e){return{addToCollection:t=>e((0,w.xo)(t))}})(function(e){let{isOpen:t,closeModal:n,data:i,collections:a,addToCollection:o,collectionsNameSelected:d,onAddNewCollection:c}=e,[u,p]=(0,l.useState)([]),f=e=>{let t=g(e);t?p(t=>t.filter(t=>t!=e)):p(t=>[...t,e])},g=e=>{let t=u.findIndex(t=>e==t);return t>-1},m=e=>a.filter(t=>e.includes(t.name)),x=()=>{let e=m(u);for(let t of e){let e=!0;for(let n of t.animeList)if(e=n.id==i.id)break;if(!e)return!1}return!0};return(0,l.useEffect)(()=>{d&&p(d)},[d]),console.log("collectionsL ",a),(0,r.jsx)(h(),{ariaHideApp:!1,isOpen:t,style:b,contentLabel:"Example Modal",children:(0,r.jsxs)(s.A0,{direction:"column",gap:"16px",children:[(0,r.jsxs)(s.A0,{justifyContent:"space-between",alignItems:"center",wrap:"wrap",children:[(0,r.jsx)("h3",{children:"List Collection"}),(0,r.jsx)("button",{onClick:n,children:"X"})]}),(0,r.jsx)(s.A0,{justifyContent:"flex-start",alignItems:"left",direction:"column",gap:"8px",overflow:"auto",height:"400px",children:a.map(e=>{let t=g(e.name);return(0,r.jsx)(y,{data:e,selected:t,onSelect:f},e.name)})}),(0,r.jsxs)(s.A0,{direction:"row",children:[(0,r.jsx)("button",{onClick:c,children:"Add New"}),(0,r.jsx)("button",{onClick:()=>{o({collectionList:u,animeList:[i]});let e=x();e&&n()},children:"SAVE"})]})]})})})),j=n(2805),S=n(3837),C=n(9810);function I(){let e=(0,j._)(["\n  width: 100%;\n  min-width: 300px;\n  height: 40px;\n  border: #ddd 1px solid;\n  border-radius: 4px;\n  padding: 8px;\n"]);return I=function(){return e},e}let E={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.7)"}},k=S.Z.input(I());var O=l.memo((0,p.$j)(function(e){return{collections:e.collections}},function(e){return{createCollection:t=>e((0,w.BL)(t))}})(function(e){let{isOpen:t,closeModal:n,collections:i,createCollection:a}=e,[o,d]=(0,l.useState)(""),[c,u]=(0,l.useState)(""),p=()=>{if(u(""),!o)return u("Name is required."),!1;let e=(0,C.XF)(o);if(!e)return u("Name can not contains special characters."),!1;let t=i.findIndex(e=>e.name==o);return!(t>-1)||(u("Collection name is already exist"),!1)};return(0,r.jsx)(h(),{ariaHideApp:!1,isOpen:t,style:E,contentLabel:"Example Modal",children:(0,r.jsxs)(s.A0,{direction:"column",gap:"16px",children:[(0,r.jsxs)(s.A0,{justifyContent:"space-between",alignItems:"center",wrap:"wrap",children:[(0,r.jsx)("h3",{children:"Add New Collection"}),(0,r.jsx)("button",{onClick:n,children:"X"})]}),(0,r.jsxs)(s.A0,{justifyContent:"space-between",alignItems:"left",direction:"column",gap:"4px",children:[(0,r.jsx)(k,{value:o,onChange:e=>d(e.target.value)}),c&&(0,r.jsx)(s.xv,{fontSize:"14px",color:"#ED4337",children:c})]}),(0,r.jsx)(s.A0,{direction:"row-reverse",children:(0,r.jsx)("button",{onClick:()=>{let e=p();e&&(a({collection:{name:o,createdAt:new Date().toUTCString(),updatedAt:new Date().toUTCString(),animeList:[]}}),n())},children:"SAVE"})})]})})})),R=l.memo(e=>{let{width:t,height:n,color:i}=e;return(0,r.jsxs)("svg",{fill:i||"#000000",width:t||"64px",height:n||"64px",viewBox:"-4.74 0 29.588 29.588",id:"_17_-_Add_Bookmark",children:[(0,r.jsx)("path",{id:"Path_196","data-name":"Path 196",d:"M26.059,4a3,3,0,0,0-3-3H8.941a3,3,0,0,0-3,3V27.588a3,3,0,0,0,4.628,2.52L16,26.6l5.431,3.509a3,3,0,0,0,4.628-2.52Zm-2,0V27.588a1,1,0,0,1-1.543.84l-5.973-3.859a1,1,0,0,0-1.086,0L9.484,28.428a1,1,0,0,1-1.543-.84V4a1,1,0,0,1,1-1H23.059a1,1,0,0,1,1,1Z",transform:"translate(-5.941 -1)"}),(0,r.jsx)("path",{id:"Path_197","data-name":"Path 197",d:"M14.6,6.578v5.4a1,1,0,1,0,2,0V6.578a1,1,0,0,0-2,0Z",transform:"translate(-5.941 -1)"}),(0,r.jsx)("path",{id:"Path_198","data-name":"Path 198",d:"M18.3,8.28H12.9a1,1,0,0,0,0,2H18.3a1,1,0,0,0,0-2Z",transform:"translate(-5.941 -1)"})]})});function _(){let e=(0,j._)(["\n  padding: 16px;\n  width: 100%;\n  height: 200%;\n  display: grid;\n  grid-template-areas:\n    'cover body '\n    'rating-wrapper body';\n\n  grid-template-columns: 200px auto;\n  gap: 12px;\n  background-color: #222222;\n\n  .sub-info-wrapper-loading {\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 8px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    grid-template-areas:\n      'cover'\n      'body'\n      'rating-wrapper';\n\n    grid-template-columns: 100%;\n  }\n  @media only screen and (max-width: 600px) {\n    .item-info-wrapper {\n      width: 100% !important;\n      justify-content: center;\n    }\n    .sub-info-wrapper {\n      display: flex !important;\n      justify-content: center !important;\n      align-items: center !important;\n      position: relative;\n      width: 100%;\n    }\n    .title {\n      text-align: center;\n    }\n    .description {\n      text-align: center;\n    }\n    .title-wrapper {\n      margin-left: 20%;\n      width: 100%;\n    }\n  }\n\n  .rating-wrapper {\n    background-color: #111;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px 0;\n    color: #fff;\n    grid-area: rating-wrapper;\n    span {\n      display: block;\n      font-weight: 500;\n      font-size: 16px;\n    }\n  }\n\n  .title {\n    font-size: 1.7em;\n    font-weight: 500;\n    line-height: normal;\n    color: #fff;\n  }\n\n  .sub-title {\n    font-size: 14px;\n    font-weight: 500;\n    color: #ccc;\n  }\n  .description {\n    font-size: 12px;\n    font-weight: 300;\n    color: #ccc;\n  }\n  .cover-image-wrapper {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-area: cover;\n  }\n  .cover-image {\n    width: 165px;\n    height: 230px;\n  }\n  .w-full {\n    width: 100%;\n  }\n  .flex-column-wrapper {\n    display: flex;\n    flex-direction: column;\n    row-gap: 12px;\n    grid-area: body;\n  }\n  .sub-info-wrapper {\n    width: 100%;\n    display: flex;\n    flex-flow: wrap;\n    position: relative;\n  }\n  .item-info-wrapper {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 2px 0;\n    color: #fff;\n\n    .point {\n      width: 10px;\n      height: 10px;\n      border-radius: 4px;\n      background-color: #0d70df;\n    }\n  }\n  .genre-wrapper {\n    width: 100%;\n    display: flex;\n    flex-flow: wrap;\n  }\n  .genre {\n    margin: 4px 8px 4px 0;\n    border: 0.5px solid #0c70de;\n    padding: 4px 8px;\n    border-radius: 3px;\n    color: #ccc;\n    font-size: 12px;\n  }\n\n  .collect-btn {\n    text-align: center;\n    background: #0c70de;\n    font-size: 18px;\n    color: #fff;\n    border-radius: 5px;\n    padding: 8px 5px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n  }\n"]);return _=function(){return e},e}function N(){let e=(0,j._)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 8px;\n\n  @media only screen and (max-width: 600px) {\n    display: grid;\n    grid-template-columns: auto;\n    gap: 8px;\n  }\n"]);return N=function(){return e},e}function P(){let e=(0,j._)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));\n  width: 100%;\n  justify-items: center;\n  align-items: center;\n  @media only screen and (max-width: 600px) {\n    justify-items: center !important;\n  }\n"]);return P=function(){return e},e}function H(){let e=(0,j._)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n  grid-area: body;\n  width: 100%;\n"]);return H=function(){return e},e}let L=S.Z.div(_()),Z=S.Z.div(N()),D=S.Z.div(P()),z=S.Z.div(H());var M=n(661),q=n(3498);let B=[{key:"status",label:"Status"},{key:"studio",label:"Studio"},{key:"releaseDate",label:"Release Date"},{key:"updatedAt",label:"Last Update"},{key:"totalEpisodes",label:"Total Episodes"},{key:"duration",label:"Duration"}];var F=l.memo(()=>(0,r.jsxs)(L,{children:[(0,r.jsx)("div",{className:"cover-image-wrapper",children:(0,r.jsx)(M.Z,{className:"cover-image"})}),(0,r.jsxs)("div",{className:"rating-wrapper",children:[(0,r.jsx)(M.Z,{style:{width:100,height:18}}),(0,r.jsx)("div",{className:"flex",children:(0,r.jsx)(f.Z,{rating:0,starRatedColor:"#FEC702",starSpacing:"2px",numberOfStars:5,starDimension:"24px",name:"rating"})})]}),(0,r.jsx)(M.Z,{style:{width:"100%",height:32}}),(0,r.jsxs)(z,{children:[(0,r.jsx)("div",{className:"title-wrapper",children:(0,r.jsx)(M.Z,{style:{width:"60%",height:24}})}),(0,r.jsx)(Z,{children:B.map(e=>(0,r.jsx)(M.Z,{style:{width:"100%",height:"24px",margin:"0 12px 0 0"}},e.key))}),(0,r.jsx)(D,{children:[1,2,3,4,5].map(e=>(0,r.jsx)(M.Z,{style:{width:"40px",height:"24px",margin:"4px"}},e*Math.random()))}),(0,r.jsx)("div",{children:[1,2,3].map(e=>(0,r.jsx)(q.jc,{},e*Math.random()))})]})]})),V=l.memo(e=>{let{name:t}=e;return(0,r.jsx)("div",{className:"genre",children:t})}),T=l.memo((0,p.$j)(function(e){return{collections:e.collections}})(e=>{let{data:t,isLoading:n,collections:i}=e,[a,d]=(0,l.useState)(!1),[c,u]=(0,l.useState)(!1),[p,g]=(0,l.useState)([]);return((0,l.useEffect)(()=>{if(!i||!(null==t?void 0:t.id))return;let e=(0,C.Gh)(i,t.id);e&&g(e)},[i,t]),n||!t)?(0,r.jsx)(F,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(L,{children:[(0,r.jsx)("div",{className:"cover-image-wrapper",children:(0,r.jsx)("img",{className:"cover-image",src:t.coverImage})}),(0,r.jsxs)("div",{className:"rating-wrapper",children:[(0,r.jsxs)("span",{children:["Rating ",t.rating]}),(0,r.jsx)("div",{className:"flex",children:(0,r.jsx)(f.Z,{rating:t.rating,starRatedColor:"#FEC702",starSpacing:"2px",numberOfStars:5,starDimension:"24px",name:"rating"})})]}),(0,r.jsxs)("button",{className:"collect-btn",onClick:()=>d(!0),children:[(0,r.jsx)(R,{width:"24px",height:"24px",color:"#fff"}),(0,r.jsx)("span",{children:"COLLECT"})]}),(0,r.jsxs)("div",{className:"flex-column-wrapper w-full",children:[(0,r.jsx)("h3",{className:"title",children:t.title}),(0,r.jsx)("div",{className:"sub-info-wrapper",children:B.map(e=>(0,r.jsx)(m.Z,{label:e.label,value:t[e.key]||"-"},e.key))}),(0,r.jsxs)(s.A0,{direction:"column",gap:"2px",alignItems:"start",children:[(0,r.jsx)(s.xv,{fontSize:"16px",color:"#fff",fontWeight:"600",children:"Genre"}),(0,r.jsx)(s.A0,{wrap:"wrap",direction:"row",justifyContent:"left",gap:"4px",alignItems:"start",children:t.genres.map(e=>(0,r.jsx)(V,{name:e},e))})]}),(0,r.jsxs)(s.A0,{direction:"column",gap:"2px",alignItems:"start",children:[(0,r.jsx)(s.xv,{fontSize:"16px",color:"#fff",fontWeight:"600",children:"Collections"}),(0,r.jsx)(s.A0,{direction:"row",gap:"4px",justifyContent:"left",alignItems:"center",wrap:"wrap",children:p.map(e=>(0,r.jsx)(o(),{href:"/collection/".concat(e.replaceAll(" ","-")),children:(0,r.jsx)(V,{name:e})},e))})]}),(0,r.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:null==t?void 0:t.description}})]})]}),(0,r.jsx)(A,{collectionsNameSelected:p,data:t,isOpen:a,onAddNewCollection:()=>{d(!1),u(!0)},closeModal:()=>d(!1)}),(0,r.jsx)(O,{isOpen:c,closeModal:()=>u(!1)})]})})),W=n(6350);let $=async e=>{let{data:t,loading:n,error:r}=await W.L.query({query:c.N,variables:{page:e,perPage:10,isAdult:!1}});return t};async function G(){let e=await Promise.all(Array.from({length:50},(e,t)=>t).map(e=>$(e+1))),t=null==e?void 0:e.reduce((e,t)=>{let n=t.result.list.map(e=>({id:e.id}));return e=[...e,...n]},[]);return console.log("paramsList: ",t),t}function J(e){let{params:{id:t}}=e,[n,a]=(0,l.useState)(null),[p,f]=(0,l.useState)(null),{loading:g,error:h,data:m}=(0,i.a)(c.e,{variables:{id:t||0,isAdult:!1}});return(0,l.useEffect)(()=>{if(m){console.log("data detail: ",m);let e=(0,u.U)(m.Media);a(e)}},[m]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.l2,{className:"flex",children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)(d,{width:"32px",height:"32px",color:"#fff"})}),(0,r.jsx)(s.dC,{children:"ANIME DETAIL"})]}),(0,r.jsx)(T,{data:n,isLoading:g})]})}},2653:function(e,t,n){"use strict";n.d(t,{BL:function(){return s},C5:function(){return d},fd:function(){return l},xo:function(){return o}});var r=n(1803);let i=[{name:"naruto movie",createdAt:new Date().toUTCString(),updatedAt:new Date().toUTCString(),animeList:[{coverImage:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png",description:"Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",id:1,releaseDate:"03/4/1998",status:"FINISHED",title:"Cowboy Bebop"}]}],a=(0,r.oM)({name:"collectionList",initialState:i,reducers:{addToCollection:(e,t)=>{let{collectionList:n,animeList:r}=t.payload,i=r.reduce((e,t)=>(e[t.id]=!0,e),{});e.forEach((t,n)=>{e[n]={...t,animeList:t.animeList.filter(e=>!i[e.id])}}),e.forEach((t,i)=>{n.includes(t.name)&&(e[i]={...t,animeList:t.animeList.concat(r)})})},createCollection:(e,t)=>{let{collection:n}=t.payload;return e=[...e,n]},removeCollection:(e,t)=>{let{collectionName:n}=t.payload;return e.filter(e=>e.name!=n)},removeAnimeFromCollection:(e,t)=>{let{animeId:n,collectionName:r}=t.payload,i=e.findIndex(e=>e.name==r);e[i].animeList=e[i].animeList.filter(e=>e.id!=n)}}}),{addToCollection:o,removeAnimeFromCollection:l,createCollection:s,removeCollection:d}=a.actions;t.ZP=a.reducer},8901:function(e,t,n){"use strict";n.d(t,{A0:function(){return y},Ee:function(){return x},XU:function(){return m},a6:function(){return v},dC:function(){return g},l2:function(){return f},oI:function(){return h},xv:function(){return w}});var r=n(2805),i=n(3837);function a(){let e=(0,r._)(["\n  diplay: flex !important;\n  align-items: center !important;\n  gap: 16px;\n  widht: 100%;\n  background: #0d70df;\n  padding: 8px;\n"]);return a=function(){return e},e}function o(){let e=(0,r._)(["\n  font-size: 28px;\n  font-weight: 600;\n  color: #fff;\n"]);return o=function(){return e},e}function l(){let e=(0,r._)(["\n  padding: ",";\n  height: ",";\n  width: ",";\n  display: flex;\n  align-items: start;\n  gap: 12px;\n  background-color: ",";\n  border-bottom: #f9f9f9 1px solid;\n  color: white;\n  position: relative;\n\n  @media only screen and (max-width: 768px) {\n    max-height: 270px;\n  }\n"]);return l=function(){return e},e}function s(){let e=(0,r._)(["\n  font-size: 14px;\n  color: #b5b5b5;\n"]);return s=function(){return e},e}function d(){let e=(0,r._)(["\n  width: ",";\n  height: ",";\n"]);return d=function(){return e},e}function c(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  width: ",";\n  height: ",";\n"]);return c=function(){return e},e}function u(){let e=(0,r._)(["\n  display: flex !important;\n  flex-direction: ",";\n  align-items: ",";\n  justify-content: ",";\n  gap: ",";\n  ","\n  width: ",";\n  height: ",";\n  margin: ",";\n  padding: ",";\n  overflow: ",";\n  ","\n  ","\n\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n\n  /* Extra medium devices (phones, 600px and down) */\n  @media (min-width: 601px) and (max-width: 768px) {\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n\n  /* Large devices (laptops/desktops, 992px and up) */\n  @media (min-width: 769px) and (max-width: 992px) {\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n"]);return u=function(){return e},e}function p(){let e=(0,r._)(["\n  font-size: ",";\n  color: ",";\n  ","\n  ","\n ","\n ","\n"]);return p=function(){return e},e}let f=i.Z.div(a()),g=i.Z.h2(o()),h=i.Z.div(l(),e=>e.padding||"12px",e=>e.height||"170px",e=>e.width||"100%",e=>e.backgroundColor||"#222222"),m=i.Z.span(s()),x=i.Z.img(d(),e=>e.width?e.width:"100px",e=>e.height?e.height:"120px"),v=i.Z.div(c(),e=>(null==e?void 0:e.gap)||"8px",e=>(null==e?void 0:e.width)||"100%",e=>(null==e?void 0:e.height)||"100%"),y=i.Z.div(u(),e=>e.direction||"row",e=>e.alignItems||"center",e=>e.justifyContent||"space-between",e=>e.gap||"0",e=>e.wrap&&"flex-wrap: ".concat(e.wrap,";"),e=>e.width||"100%",e=>e.height||"100%",e=>e.margin||"0",e=>e.padding||"0",e=>e.overflow||"none",e=>e.backgroundColor&&"background-color: ".concat(e.backgroundColor,";"),e=>e.border&&"border: ".concat(e.border,";"),e=>e.smDirection&&"flex-direction: ".concat(e.smDirection,";"),e=>e.smAlignItems&&"align-items: ".concat(e.smAlignItems,";"),e=>e.smJustifyContent&&"justify-content: ".concat(e.smJustifyContent,";"),e=>e.smGap&&"gap: ".concat(e.smGap,";"),e=>e.smWidth&&"width: ".concat(e.smWidth,";"),e=>e.smHeight&&"height: ".concat(e.smHeight,";"),e=>e.smOverflow&&"overflow: ".concat(e.smOverflow,";"),e=>e.mdDirection&&"flex-direction: ".concat(e.mdDirection,";"),e=>e.mdAlignItems&&"align-items: ".concat(e.mdAlignItems,";"),e=>e.mdJustifyContent&&"justify-content: ".concat(e.mdJustifyContent,";"),e=>e.mdGap&&"gap: ".concat(e.mdGap,";"),e=>e.mdWidth&&"width: ".concat(e.mdWidth,";"),e=>e.mdHeight&&"height: ".concat(e.mdHeight,";"),e=>e.mdOverflow&&"overflow: ".concat(e.mdOverflow,";"),e=>e.lgDirection&&"flex-direction: ".concat(e.lgDirection,";"),e=>e.lgAlignItems&&"align-items: ".concat(e.lgAlignItems,";"),e=>e.lgJustifyContent&&"justify-content: ".concat(e.lgJustifyContent,";"),e=>e.lgGap&&"gap: ".concat(e.lgGap,";"),e=>e.lgWidth&&"width: ".concat(e.lgWidth,";"),e=>e.lgHeight&&"height: ".concat(e.lgHeight,";"),e=>e.lgOverflow&&"overflow: ".concat(e.lgOverflow,";")),w=i.Z.span(p(),e=>e.fontSize?"".concat(e.fontSize):"14px",e=>e.color?"".concat(e.color):"#b5b5b5",e=>e.fontFamily?"font-family: ".concat(e.fontFamily):"",e=>e.fontWeight?"font-weight: ".concat(e.fontWeight):"",e=>e.fontStyle?"font-style: ".concat(e.fontStyle):"",e=>e.textAlign?"text-align: ".concat(e.textAlign):"")},306:function(e,t,n){"use strict";n.d(t,{Hv:function(){return f},Ln:function(){return v},YA:function(){return g},af:function(){return x},gk:function(){return p},jK:function(){return h},oj:function(){return m}});var r=n(2805),i=n(3837);function a(){let e=(0,r._)(["\n  padding: 12px;\n  min-height: 170px;\n  width: 100%;\n  display: flex;\n  align-items: start;\n  gap: 12px;\n  background-color: #222222;\n  border-bottom: #f9f9f9 1px solid;\n  color: white;\n  position: relative;\n\n  @media only screen and (max-width: 768px) {\n    max-height: 270px;\n  }\n"]);return a=function(){return e},e}function o(){let e=(0,r._)(["\n  width: 100px;\n  height: 100%;\n  max-height: 120px;\n"]);return o=function(){return e},e}function l(){let e=(0,r._)(["\n  width: 100%;\n  height: 100%;\n"]);return l=function(){return e},e}function s(){let e=(0,r._)(["\n  font-size: 18px;\n  font-weight: bold;\n"]);return s=function(){return e},e}function d(){let e=(0,r._)(["\n  display: flex;\n  align-items: center;\n  gap: 0 5%;\n  width: 100%;\n  color: #b5b5b5;\n"]);return d=function(){return e},e}function c(){let e=(0,r._)(["\n  font-size: 14px;\n  color: #b5b5b5;\n"]);return c=function(){return e},e}function u(){let e=(0,r._)(["\n  font-size: 12px;\n  color: #b5b5b5;\n\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */\n  white-space: wrap;\n"]);return u=function(){return e},e}let p=i.Z.div(a()),f=i.Z.img(o()),g=i.Z.div(l()),h=i.Z.h3(s()),m=i.Z.div(d()),x=i.Z.span(c()),v=i.Z.p(u())},3498:function(e,t,n){"use strict";n.d(t,{Mc:function(){return s},jc:function(){return o}});var r=n(9268);n(6006);var i=n(661);n(8829);var a=n(306);let o=()=>(0,r.jsx)(i.Z,{style:{height:"10px",width:"95%",borderRadius:"8px"}}),l=()=>(0,r.jsxs)(a.gk,{children:[(0,r.jsx)(i.Z,{style:{height:"130px",width:"100px",borderRadius:0}}),(0,r.jsxs)(a.YA,{children:[(0,r.jsx)(i.Z,{style:{height:"18px",width:"30%",borderRadius:"8px"}}),(0,r.jsx)(i.Z,{style:{height:"16px",width:"20%",borderRadius:"8px"}}),(0,r.jsxs)("div",{className:"gap-y-[0px] mt-2",children:[(0,r.jsx)(o,{}),(0,r.jsx)(o,{}),(0,r.jsx)(o,{})]})]})]}),s=e=>{let{total:t}=e;return Array.from(Array(t).keys()).map(e=>(0,r.jsx)(l,{},e*Math.random()))}},6350:function(e,t,n){"use strict";n.d(t,{L:function(){return l},Z:function(){return s}});var r=n(9268),i=n(3382),a=n(1730),o=n(4387);n(6006);let l=new i.f({uri:"https://graphql.anilist.co",cache:new a.h});function s(e){let{children:t}=e;return(0,r.jsx)(o.e,{client:l,children:t})}},5233:function(e,t,n){"use strict";n.d(t,{N:function(){return l},e:function(){return s}});var r=n(2805),i=n(7056);function a(){let e=(0,r._)(["\n  query ($page: Int, $perPage: Int, $isAdult: Boolean) {\n    result: Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        currentPage\n        lastPage\n        hasNextPage\n        perPage\n      }\n      list: media(isAdult: $isAdult) {\n        id\n        coverImage {\n          medium\n        }\n        title {\n          romaji\n        }\n        description\n        startDate {\n          year\n          month\n          day\n        }\n        status\n      }\n    }\n  }\n"]);return a=function(){return e},e}function o(){let e=(0,r._)(["\n  query ($id: Int, $isAdult: Boolean) {\n    Media(id: $id, isAdult: $isAdult) {\n      id\n      coverImage {\n        medium\n      }\n      title {\n        romaji\n      }\n      studios {\n        edges {\n          id\n          isMain\n          node {\n            name\n          }\n        }\n      }\n      duration\n      updatedAt\n      genres\n      averageScore\n      description\n      episodes\n      startDate {\n        year\n        month\n        day\n      }\n      status\n      reviews {\n        edges {\n          node {\n            id\n            rating\n          }\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}let l=(0,i.Ps)(a()),s=(0,i.Ps)(o())},7434:function(e,t,n){"use strict";n.d(t,{U:function(){return i},r:function(){return r}});let r=e=>{let{id:t,title:n,description:r,startDate:i,status:a,coverImage:o}=e;return{id:t,status:a,description:r,title:n.romaji,releaseDate:(i.day>9?i.day:"0"+i.day)+"/"+i.month+"/"+i.year,coverImage:o.medium}},i=e=>{var t,n;let{id:r,title:i,description:l,startDate:s,status:d,coverImage:c,studios:u,duration:p,updatedAt:f,genres:g,episodes:h,averageScore:m,reviews:x}=e;return{id:r,status:d,description:l,updatedAt:a(f),genres:g,title:i.romaji,releaseDate:(s.day>9?s.day:"0"+s.day)+"/"+s.month+"/"+s.year,coverImage:c.medium,studio:(null===(n=u.edges.find(e=>e.isMain))||void 0===n?void 0:null===(t=n.node)||void 0===t?void 0:t.name)||"-",duration:p+" minutes",totalEpisodes:h,rating:o(x)}},a=e=>{let t=new Date(e);return t.toLocaleString("en-ID")},o=e=>{var t;if((null==e?void 0:null===(t=e.edges)||void 0===t?void 0:t.length)==0)return 0;let n=(null==e?void 0:e.edges.reduce((e,t)=>e+=t.node.rating,0))/(null==e?void 0:e.edges.length);return+(Math.round(parseFloat(n/20+"e+2"))+"e-2")}},9810:function(e,t,n){"use strict";n.d(t,{Gh:function(){return i},XF:function(){return a},hS:function(){return r}});let r=(e,t,n)=>Array.from({length:(t-e)/n+1},(t,r)=>e+r*n),i=(e,t)=>e.reduce((e,n)=>{let r=n.animeList.findIndex(e=>e.id==t);return r>-1&&e.push(n.name),e},[]),a=e=>/^[a-zA-Z0-9\s]+$/.test(e)},58:function(e,t,n){"use strict";var r,i=(r=n(3079))&&r.__esModule?r:{default:r};Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.Z=i.default},3079:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(6006)),a=l(n(9497)),o=l(n(1537));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);for(var e,n,r,i=arguments.length,a=Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={highestStarHovered:-1/0},r.fillId="starGrad"+Math.random().toFixed(15).slice(2),r.hoverOverStar=function(e){return function(){r.setState({highestStarHovered:e})}},r.unHoverOverStar=function(){r.setState({highestStarHovered:-1/0})},s(r,n)}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"stopColorStyle",value:function(e){return this.props.ignoreInlineStyles?{}:{stopColor:e,stopOpacity:"1"}}},{key:"render",value:function(){var e=this.props,t=e.starRatedColor,n=e.starEmptyColor;return i.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},i.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},i.default.createElement("defs",null,i.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},i.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(t)}),i.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(t)}),i.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(n)}),i.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(n)})))),this.renderStars)}},{key:"starRatingsStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"relative",boxSizing:"border-box",display:"inline-block"}}},{key:"starGradientStyle",get:function(){return this.props.ignoreInlineStyles?{}:{position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"}}},{key:"titleText",get:function(){var e=this.props,t=e.typeOfWidget,n=e.rating,r=this.state.highestStarHovered,i=r>0?r:n,a=parseFloat(i.toFixed(2)).toString();Number.isInteger(i)&&(a=String(i));var o=t+"s";return"1"===a&&(o=t),a+" "+o}},{key:"offsetValue",get:function(){var e=this.props.rating,t=Number.isInteger(e),n="0%";return t||(n=e.toFixed(2).split(".")[1].slice(0,2)+"%"),n}},{key:"renderStars",get:function(){var e=this,t=this.props,n=t.changeRating,r=t.rating,a=t.numberOfStars,l=t.starDimension,s=t.starSpacing,d=t.starRatedColor,c=t.starEmptyColor,u=t.starHoverColor,p=t.gradientPathName,f=t.ignoreInlineStyles,g=t.svgIconPath,h=t.svgIconViewBox,m=t.name,x=this.state.highestStarHovered;return Array.apply(null,Array(a)).map(function(t,v){var y=v+1,w=y<=r,b=y<=x,A=y===x,j=y>r&&y-1<r,S=1===y,C=y===a;return i.default.createElement(o.default,{key:y,fillId:e.fillId,changeRating:n?function(){return n(y,m)}:null,hoverOverStar:n?e.hoverOverStar(y):null,unHoverOverStar:n?e.unHoverOverStar:null,isStarred:w,isPartiallyFullStar:j,isHovered:b,hoverMode:x>0,isCurrentHoveredStar:A,isFirstStar:S,isLastStar:C,starDimension:l,starSpacing:s,starHoverColor:u,starRatedColor:d,starEmptyColor:c,gradientPathName:p,ignoreInlineStyles:f,svgIconPath:g,svgIconViewBox:h})})}}]),t}(i.default.Component);d.propTypes={rating:a.default.number.isRequired,numberOfStars:a.default.number.isRequired,changeRating:a.default.func,starHoverColor:a.default.string.isRequired,starRatedColor:a.default.string.isRequired,starEmptyColor:a.default.string.isRequired,starDimension:a.default.string.isRequired,starSpacing:a.default.string.isRequired,gradientPathName:a.default.string.isRequired,ignoreInlineStyles:a.default.bool.isRequired,svgIconPath:a.default.string.isRequired,svgIconViewBox:a.default.string.isRequired,name:a.default.string},d.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:!1,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"},t.default=d},1537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(6006)),a=l(n(8683)),o=l(n(9497));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.changeRating,n=e.hoverOverStar,r=e.unHoverOverStar,a=e.svgIconViewBox,o=e.svgIconPath;return i.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:n,onMouseLeave:r,onClick:t},i.default.createElement("svg",{viewBox:a,className:this.starClasses,style:this.starSvgStyle},i.default.createElement("path",{className:"star",style:this.pathStyle,d:o})))}},{key:"starContainerStyle",get:function(){var e=this.props,t=e.changeRating,n=e.starSpacing,r=e.isFirstStar,i=e.isLastStar;return e.ignoreInlineStyles?{}:{position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:r?void 0:n,paddingRight:i?void 0:n,cursor:t?"pointer":void 0}}},{key:"starSvgStyle",get:function(){var e=this.props,t=e.ignoreInlineStyles,n=e.isCurrentHoveredStar,r=e.starDimension;return t?{}:{width:r,height:r,transition:"transform .2s ease-in-out",transform:n?"scale(1.1)":void 0}}},{key:"pathStyle",get:function(){var e=this.props,t=e.isStarred,n=e.isPartiallyFullStar,r=e.isHovered,i=e.hoverMode,a=e.starEmptyColor,o=e.starRatedColor,l=e.starHoverColor,s=e.gradientPathName,d=e.fillId;return e.ignoreInlineStyles?{}:{fill:i?r?l:a:n?"url('"+s+"#"+d+"')":t?o:a,transition:"fill .2s ease-in-out"}}},{key:"starClasses",get:function(){var e=this.props,t=e.isSelected,n=e.isPartiallyFullStar,r=e.isHovered,i=e.isCurrentHoveredStar,o=e.ignoreInlineStyles,l=(0,a.default)({"widget-svg":!0,"widget-selected":t,"multi-widget-selected":n,hovered:r,"current-hovered":i});return o?{}:l}}]),t}(i.default.Component);s.propTypes={fillId:o.default.string.isRequired,changeRating:o.default.func,hoverOverStar:o.default.func,unHoverOverStar:o.default.func,isStarred:o.default.bool.isRequired,isPartiallyFullStar:o.default.bool.isRequired,isHovered:o.default.bool.isRequired,hoverMode:o.default.bool.isRequired,isCurrentHoveredStar:o.default.bool.isRequired,isFirstStar:o.default.bool.isRequired,isLastStar:o.default.bool.isRequired,starDimension:o.default.string.isRequired,starSpacing:o.default.string.isRequired,starHoverColor:o.default.string.isRequired,starRatedColor:o.default.string.isRequired,starEmptyColor:o.default.string.isRequired,gradientPathName:o.default.string.isRequired,ignoreInlineStyles:o.default.bool.isRequired,svgIconPath:o.default.string.isRequired,svgIconViewBox:o.default.string.isRequired},t.default=s}},function(e){e.O(0,[517,735,94,87,586,545,253,698,744],function(){return e(e.s=5129)}),_N_E=e.O()}]);