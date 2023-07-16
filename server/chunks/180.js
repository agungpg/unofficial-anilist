exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 4657:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8433))

/***/ }),

/***/ 8433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LayoutProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/integration/react.js
var react = __webpack_require__(7370);
// EXTERNAL MODULE: ./node_modules/@apollo/client/main.cjs
var main = __webpack_require__(6174);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/configs/ApolloClientProvider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const client = new main.ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new main.InMemoryCache()
});
function ApolloClientProvider({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(main.ApolloProvider, {
        client: client,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(668);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/index.js
var redux_persist_lib = __webpack_require__(7698);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/index.js
var storage = __webpack_require__(5292);
// EXTERNAL MODULE: ./src/app/collection/CollectionSlice.ts
var CollectionSlice = __webpack_require__(9747);
;// CONCATENATED MODULE: ./src/store/root-reducer.ts


/* harmony default export */ const root_reducer = ((0,redux_toolkit_cjs_production_min.combineReducers)({
    collections: CollectionSlice/* default */.ZP
}));

;// CONCATENATED MODULE: ./src/store/index.ts


 // Choose the storage solution you want to use

const persistConfig = {
    key: "root-anilist",
    storage: storage/* default */.Z
};
const persistedReducer = (0,redux_persist_lib.persistReducer)(persistConfig, root_reducer);
const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: persistedReducer
});
const persistor = (0,redux_persist_lib.persistStore)(store);

;// CONCATENATED MODULE: ./src/app/LayoutProvider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function LayoutProvider({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react/* PersistGate */.r, {
            loading: null,
            persistor: persistor,
            children: /*#__PURE__*/ jsx_runtime_.jsx(ApolloClientProvider, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 9747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BL: () => (/* binding */ createCollection),
/* harmony export */   C5: () => (/* binding */ removeCollection),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fd: () => (/* binding */ removeAnimeFromCollection),
/* harmony export */   xo: () => (/* binding */ addToCollection)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialCollectState = [
    {
        name: "naruto movie",
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString(),
        animeList: [
            {
                coverImage: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png",
                description: "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
                id: 1,
                releaseDate: "03/4/1998",
                status: "FINISHED",
                title: "Cowboy Bebop"
            }
        ]
    }
];
const collectionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "collectionList",
    initialState: initialCollectState,
    reducers: {
        addToCollection: (state, action)=>{
            const { collectionList, animeList } = action.payload;
            const animeId = animeList.reduce((result, anime)=>{
                result[anime.id] = true;
                return result;
            }, {});
            state.forEach((collection, index)=>{
                state[index] = {
                    ...collection,
                    animeList: collection.animeList.filter((anime)=>!animeId[anime.id])
                };
            });
            state.forEach((collection, index)=>{
                if (collectionList.includes(collection.name)) {
                    state[index] = {
                        ...collection,
                        animeList: collection.animeList.concat(animeList)
                    };
                }
            });
        },
        createCollection: (state, action)=>{
            const { collection } = action.payload;
            state = [
                ...state,
                collection
            ];
            return state;
        },
        removeCollection: (state, action)=>{
            const { collectionName } = action.payload;
            return state.filter((collect)=>collect.name != collectionName);
        },
        removeAnimeFromCollection: (state, action)=>{
            const { animeId, collectionName } = action.payload;
            const collectionIdx = state.findIndex((col)=>col.name == collectionName);
            state[collectionIdx].animeList = state[collectionIdx].animeList.filter((anime)=>anime.id != animeId);
        }
    }
});
const { addToCollection, removeAnimeFromCollection, createCollection, removeCollection } = collectionSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collectionSlice.reducer);


/***/ }),

/***/ 8556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A0: () => (/* binding */ FlexWrapper),
/* harmony export */   Ee: () => (/* binding */ Image),
/* harmony export */   XU: () => (/* binding */ InfoText),
/* harmony export */   a6: () => (/* binding */ VerticalInfoWrapper),
/* harmony export */   dC: () => (/* binding */ AppTitle),
/* harmony export */   l2: () => (/* binding */ NavBar),
/* harmony export */   oI: () => (/* binding */ ListItemCard),
/* harmony export */   xv: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7563);

const NavBar = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.div`
  diplay: flex !important;
  align-items: center !important;
  gap: 16px;
  widht: 100%;
  background: #0d70df;
  padding: 8px;
`;
const AppTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.h2`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
`;
const ListItemCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.div`
  padding: ${(props)=>props.padding || "12px"};
  height: ${(props)=>props.height || "170px"};
  width: ${(props)=>props.width || "100%"};
  display: flex;
  align-items: start;
  gap: 12px;
  background-color: ${(props)=>props.backgroundColor || "#222222"};
  border-bottom: #f9f9f9 1px solid;
  color: white;
  position: relative;

  @media only screen and (max-width: 768px) {
    max-height: 270px;
  }
`;
const InfoText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.span`
  font-size: 14px;
  color: #b5b5b5;
`;
const Image = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.img`
  width: ${(props)=>props.width ? props.width : "100px"};
  height: ${(props)=>props.height ? props.height : "120px"};
`;
const VerticalInfoWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.div`
  display: flex;
  flex-direction: column;
  gap: ${(props)=>props?.gap || "8px"};
  width: ${(props)=>props?.width || "100%"};
  height: ${(props)=>props?.height || "100%"};
`;
const FlexWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.div`
  display: flex !important;
  flex-direction: ${(props)=>props.direction || "row"};
  align-items: ${(props)=>props.alignItems || "center"};
  justify-content: ${(props)=>props.justifyContent || "space-between"};
  gap: ${(props)=>props.gap || "0"};
  ${(props)=>props.wrap && `flex-wrap: ${props.wrap};`}
  width: ${(props)=>props.width || "100%"};
  height: ${(props)=>props.height || "100%"};
  margin: ${(props)=>props.margin || "0"};
  padding: ${(props)=>props.padding || "0"};
  overflow: ${(props)=>props.overflow || "none"};
  ${(props)=>props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${(props)=>props.border && `border: ${props.border};`}

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    ${(props)=>props.smDirection && `flex-direction: ${props.smDirection};`}
    ${(props)=>props.smAlignItems && `align-items: ${props.smAlignItems};`}
    ${(props)=>props.smJustifyContent && `justify-content: ${props.smJustifyContent};`}
    ${(props)=>props.smGap && `gap: ${props.smGap};`}
    ${(props)=>props.smWidth && `width: ${props.smWidth};`}
    ${(props)=>props.smHeight && `height: ${props.smHeight};`}
    ${(props)=>props.smOverflow && `overflow: ${props.smOverflow};`}
  }

  /* Extra medium devices (phones, 600px and down) */
  @media (min-width: 601px) and (max-width: 768px) {
    ${(props)=>props.mdDirection && `flex-direction: ${props.mdDirection};`}
    ${(props)=>props.mdAlignItems && `align-items: ${props.mdAlignItems};`}
    ${(props)=>props.mdJustifyContent && `justify-content: ${props.mdJustifyContent};`}
    ${(props)=>props.mdGap && `gap: ${props.mdGap};`}
    ${(props)=>props.mdWidth && `width: ${props.mdWidth};`}
    ${(props)=>props.mdHeight && `height: ${props.mdHeight};`}
    ${(props)=>props.mdOverflow && `overflow: ${props.mdOverflow};`}
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media (min-width: 769px) and (max-width: 992px) {
    ${(props)=>props.lgDirection && `flex-direction: ${props.lgDirection};`}
    ${(props)=>props.lgAlignItems && `align-items: ${props.lgAlignItems};`}
    ${(props)=>props.lgJustifyContent && `justify-content: ${props.lgJustifyContent};`}
    ${(props)=>props.lgGap && `gap: ${props.lgGap};`}
    ${(props)=>props.lgWidth && `width: ${props.lgWidth};`}
    ${(props)=>props.lgHeight && `height: ${props.lgHeight};`}
    ${(props)=>props.lgOverflow && `overflow: ${props.lgOverflow};`}
  }
`;
const Text = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.span`
  font-size: ${(props)=>props.fontSize ? `${props.fontSize}` : "14px"};
  color: ${(props)=>props.color ? `${props.color}` : "#b5b5b5"};
  ${(props)=>props.fontFamily ? `font-family: ${props.fontFamily}` : ""}
  ${(props)=>props.fontWeight ? `font-weight: ${props.fontWeight}` : ""}
 ${(props)=>props.fontStyle ? `font-style: ${props.fontStyle}` : ""}
 ${(props)=>props.textAlign ? `text-align: ${props.textAlign}` : ""}
`;


/***/ }),

/***/ 1419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hv: () => (/* binding */ AnimeCardCover),
/* harmony export */   Ln: () => (/* binding */ AnimeCardDescriptionText),
/* harmony export */   YA: () => (/* binding */ AnimeCardInfoWrapper),
/* harmony export */   af: () => (/* binding */ AnimeCardMetaInfoText),
/* harmony export */   gk: () => (/* binding */ AnimeCardDiv),
/* harmony export */   jK: () => (/* binding */ AnimeCardTitle),
/* harmony export */   oj: () => (/* binding */ AnimeCardMetaInfoWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7563);

const AnimeCardDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.div`
  padding: 12px;
  min-height: 170px;
  width: 100%;
  display: flex;
  align-items: start;
  gap: 12px;
  background-color: #222222;
  border-bottom: #f9f9f9 1px solid;
  color: white;
  position: relative;

  @media only screen and (max-width: 768px) {
    max-height: 270px;
  }
`;
const AnimeCardCover = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.img`
  width: 100px;
  height: 100%;
  max-height: 120px;
`;
const AnimeCardInfoWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.div`
  width: 100%;
  height: 100%;
`;
const AnimeCardTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.h3`
  font-size: 18px;
  font-weight: bold;
`;
const AnimeCardMetaInfoWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.div`
  display: flex;
  align-items: center;
  gap: 0 5%;
  width: 100%;
  color: #b5b5b5;
`;
const AnimeCardMetaInfoText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.span`
  font-size: 14px;
  color: #b5b5b5;
`;
const AnimeCardDescriptionText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.p`
  font-size: 12px;
  color: #b5b5b5;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
  white-space: wrap;
`;


/***/ }),

/***/ 4567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(6708);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1913);
;// CONCATENATED MODULE: ./src/app/LayoutProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/agungpg/projects/test/tokopedia/unofficial-anilist/src/app/LayoutProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const LayoutProvider = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx




function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutProvider, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;