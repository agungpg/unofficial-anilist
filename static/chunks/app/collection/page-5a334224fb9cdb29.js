(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306],{1069:function(e,n,t){Promise.resolve().then(t.bind(t,6332))},1049:function(e,n,t){"use strict";var l=t(9268),i=t(6006),r=t(8901);n.Z=i.memo(e=>{let{label:n,value:t}=e;return(0,l.jsxs)(r.XU,{className:"item-info-wrapper",children:[(0,l.jsx)("div",{className:"point"}),(0,l.jsx)("b",{children:n}),(0,l.jsxs)("span",{className:"description",children:[": ",t]})]})})},3443:function(e,n,t){"use strict";var l=t(2805),i=t(9268),r=t(3837),o=t(6006),s=t(2698),c=t.n(s),a=t(2005),d=t(8901),u=t(9810),x=t(2653);function h(){let e=(0,l._)(["\n  width: 100%;\n  min-width: 300px;\n  height: 40px;\n  border: #ddd 1px solid;\n  border-radius: 4px;\n  padding: 8px;\n"]);return h=function(){return e},e}let f={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.7)"}},m=r.Z.input(h());n.Z=o.memo((0,a.$j)(function(e){return{collections:e.collections}},function(e){return{createCollection:n=>e((0,x.BL)(n)),editCollection:n=>e((0,x.rA)(n))}})(function(e){let{isOpen:n,closeModal:t,collections:l,createCollection:r,collectionName:s,editCollection:a}=e,[x,h]=(0,o.useState)(""),[j,p]=(0,o.useState)(""),[C,v]=(0,o.useState)("");(0,o.useEffect)(()=>{v(s||""),h(s||"")},[s]);let g=()=>{if(p(""),!x)return p("Name is required."),!1;let e=(0,u.XF)(x);if(!e)return p("Name can not contains special characters."),!1;let n=l.findIndex(e=>e.name==x);return!(n>-1)||(p("Collection name is already exist"),!1)};return(0,i.jsx)(c(),{ariaHideApp:!1,isOpen:n,style:f,contentLabel:"Example Modal",children:(0,i.jsxs)(d.A0,{direction:"column",gap:"16px",children:[(0,i.jsxs)(d.A0,{justifyContent:"space-between",alignItems:"center",wrap:"wrap",children:[(0,i.jsxs)(d.xv,{color:"#000",fontSize:"18px",fontWeight:"600",children:[s?"Edit":"Add New"," Collection"]}),(0,i.jsx)(d.zx,{color:"#000",onClick:t,children:"X"})]}),(0,i.jsxs)(d.A0,{justifyContent:"space-between",alignItems:"left",direction:"column",gap:"4px",children:[(0,i.jsx)(m,{defaultValue:C,value:x,onChange:e=>h(e.target.value)}),j&&(0,i.jsx)(d.xv,{fontSize:"14px",color:"#ED4337",children:j})]}),(0,i.jsx)(d.A0,{direction:"row-reverse",children:(0,i.jsx)(d.zx,{color:"#000",border:"#000 1px solid",onClick:()=>{let e=g();e&&(C?a({collectionNameOrigin:C,collectionNameNew:x}):r({collection:{name:x,createdAt:new Date().toUTCString(),updatedAt:new Date().toUTCString(),animeList:[]}}),t())},children:"SAVE"})})]})})}))},6332:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var l=t(9268),i=t(3805),r=t.n(i),o=t(6008),s=t(6006),c=t(2005),a=t(9959),d=t(5846),u=t.n(d),x=t(1049),h=t(8901),f=t(3599),m=e=>{let{width:n,height:t,fill:i,className:r}=e;return(0,l.jsx)("svg",{width:n||24,height:t||24,fill:"none",viewBox:"0 0 24 24",className:r,xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M3.83992 21.7921C3.31192 21.7921 2.85976 21.6042 2.48344 21.2286C2.10712 20.8529 1.91928 20.4007 1.91992 19.8721V6.43207C1.91992 5.90407 2.10808 5.45191 2.4844 5.07559C2.86072 4.69927 3.31256 4.51143 3.83992 4.51207H12.4079L10.4879 6.43207H3.83992V19.8721H17.2799V13.2001L19.1999 11.2801V19.8721C19.1999 20.4001 19.0118 20.8522 18.6354 21.2286C18.2591 21.6049 17.8073 21.7927 17.2799 21.7921H3.83992ZM14.5679 5.06407L15.9359 6.40807L9.59992 12.7441V14.1121H10.9439L17.3039 7.75207L18.6719 9.09607L12.3119 15.4561C12.1359 15.6321 11.9318 15.7722 11.6994 15.8766C11.4671 15.9809 11.2233 16.0327 10.9679 16.0321H8.63992C8.36792 16.0321 8.13976 15.9399 7.95544 15.7556C7.77112 15.5713 7.67928 15.3434 7.67992 15.0721V12.7441C7.67992 12.4881 7.72792 12.2439 7.82392 12.0116C7.91992 11.7793 8.05592 11.5754 8.23192 11.4001L14.5679 5.06407ZM18.6719 9.09607L14.5679 5.06407L16.9679 2.66407C17.3519 2.28007 17.8121 2.08807 18.3484 2.08807C18.8847 2.08807 19.3366 2.28007 19.7039 2.66407L21.0479 4.03207C21.4159 4.40007 21.5999 4.84807 21.5999 5.37607C21.5999 5.90407 21.4159 6.35207 21.0479 6.72007L18.6719 9.09607Z",fill:i||"#38499A"})})},j=t(306),p=t(1925),C=s.memo(e=>{var n,t,i;let{data:r,onDelete:o,onEdit:s}=e;return(0,l.jsxs)(h.oI,{children:[(0,l.jsxs)(h.A0,{width:"140px",justifyContent:"center",alignItems:"center",direction:"column",gap:"8px",children:[(0,l.jsx)(u(),{href:"/collection?name=".concat(null==r?void 0:null===(n=r.name)||void 0===n?void 0:n.replaceAll(" ","-")),children:(0,l.jsx)(h.Ee,{src:(null==r?void 0:r.animeList.length)>0?null==r?void 0:r.animeList[0].coverImage:p.Z.src})}),(0,l.jsxs)(h.A0,{alignItems:"center",direction:"row",justifyContent:"space-around",gap:"8px",children:[(0,l.jsx)("button",{onClick:()=>o(null==r?void 0:r.name),children:(0,l.jsx)(f.Z,{fill:"#fff"})}),(0,l.jsx)("button",{onClick:()=>{s&&s(null==r?void 0:r.name)},children:(0,l.jsx)(m,{fill:"#fff"})})]})]}),(0,l.jsx)(h.A0,{justifyContent:"space-between",children:(0,l.jsxs)(h.a6,{width:"100%",gap:"8px",children:[(0,l.jsx)(u(),{href:"/collection?name=".concat(null==r?void 0:null===(t=r.name)||void 0===t?void 0:t.replaceAll(" ","-")),children:(0,l.jsx)(j.jK,{children:null==r?void 0:r.name})}),(0,l.jsxs)(h.a6,{gap:"0",children:[(0,l.jsx)(x.Z,{label:"Create Date",value:null==r?void 0:r.createdAt}),(0,l.jsx)(x.Z,{label:"Last Update",value:null==r?void 0:r.updatedAt}),(0,l.jsx)(x.Z,{label:"Total",value:String((null==r?void 0:null===(i=r.animeList)||void 0===i?void 0:i.length)||0)})]})]})})]})}),v=t(3443),g=t(499),w=t(2653),L=t(9358),A=s.memo(function(){let e=(0,o.useSearchParams)(),n=null==e?void 0:e.get("name"),[t,i]=(0,s.useState)(!1),[d,u]=(0,s.useState)(!1),[x,f]=(0,s.useState)(""),m=(0,c.I0)(),j=(0,o.useRouter)(),p=(0,c.v9)(e=>e.collections);if(n)return(0,l.jsx)(g.default,{});let A=e=>{f(e),i(!0)},b=e=>{f(e),u(!0)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r(),{children:(0,l.jsx)("title",{children:"COLLECTION LIST"})}),(0,l.jsx)(h.l2,{children:(0,l.jsxs)(h.A0,{children:[(0,l.jsxs)(h.A0,{width:"80%",justifyContent:"flex-start",children:[(0,l.jsx)(h.zx,{onClick:j.back,border:"none",children:(0,l.jsx)(a.Z,{width:"32px",height:"32px",color:"#fff"})}),(0,l.jsx)(h.dC,{children:"COLLECTION LIST"})]}),(0,l.jsx)(h.zx,{onClick:()=>u(!0),children:"Add New"})]})}),p.map(e=>(0,l.jsx)(C,{onEdit:b,onDelete:A,data:e},e.name)),(0,l.jsx)(L.Z,{onConfirm:()=>{m((0,w.C5)({collectionName:x})),i(!1),f("")},isOpen:t&&!!x,closeModal:()=>i(!1),title:'Are you sure want to delete "'.concat(x,'"?')}),(0,l.jsx)(v.Z,{collectionName:x,isOpen:d,closeModal:()=>{u(!1),f("")}})]})})},9810:function(e,n,t){"use strict";t.d(n,{Gh:function(){return i},XF:function(){return r},hS:function(){return l}});let l=(e,n,t)=>Array.from({length:(n-e)/t+1},(n,l)=>e+l*t),i=(e,n)=>e.reduce((e,t)=>{let l=t.animeList.findIndex(e=>e.id==n);return l>-1&&e.push(t.name),e},[]),r=e=>/^[a-zA-Z0-9\s]+$/.test(e)}},function(e){e.O(0,[550,517,448,666,499,253,698,744],function(){return e(e.s=1069)}),_N_E=e.O()}]);