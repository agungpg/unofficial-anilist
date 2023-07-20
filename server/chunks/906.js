exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 1043:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4139))

/***/ }),

/***/ 4943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(1053);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(8312);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./src/assets/icons/BackIcon.tsx
var BackIcon = __webpack_require__(7330);
// EXTERNAL MODULE: ./src/components/AnimeCard/AnimeCard.tsx
var AnimeCard = __webpack_require__(5632);
// EXTERNAL MODULE: ./src/app/styeled.tsx
var styeled = __webpack_require__(8556);
;// CONCATENATED MODULE: ./src/components/InfoItem.tsx



const InfoItem = ({ label, value, isVertical, textAlign })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styeled/* Text */.xv, {
        textAlign: textAlign,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                children: label
            }),
            ": ",
            isVertical && /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            value
        ]
    });
/* harmony default export */ const components_InfoItem = (/*#__PURE__*/react_default().memo(InfoItem));

// EXTERNAL MODULE: ./src/components/ModalDeleteConfirmation.tsx + 1 modules
var ModalDeleteConfirmation = __webpack_require__(7119);
// EXTERNAL MODULE: ./src/app/collection/CollectionSlice.ts
var CollectionSlice = __webpack_require__(9747);
// EXTERNAL MODULE: ./src/assets/images/collection-default.png
var collection_default = __webpack_require__(2315);
;// CONCATENATED MODULE: ./src/app/collection/[id]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












function CollectionDetail() {
    const [collection, setCollection] = (0,react_.useState)();
    const dispatch = (0,lib.useDispatch)();
    const router = (0,navigation.useRouter)();
    const searchParams = (0,navigation.useSearchParams)();
    const name = searchParams?.get("name");
    const collections = (0,lib.useSelector)((state)=>state.collections);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = (0,react_.useState)(false);
    const [animeSelected, setAnimeSelected] = (0,react_.useState)(null);
    (0,react_.useEffect)(()=>{
        const col = collections.find((col)=>col.name.replaceAll(" ", "-") === name);
        if (col) setCollection(col);
    }, [
        name,
        collections
    ]);
    const onDelete = (anime)=>{
        setAnimeSelected(anime);
        setIsModalDeleteOpen(true);
    };
    const onDeleteConfirm = ()=>{
        if (!animeSelected?.id) return;
        dispatch((0,CollectionSlice/* removeAnimeFromCollection */.fd)({
            animeId: animeSelected.id,
            collectionName: collection?.name || ""
        }));
        setIsModalDeleteOpen(false);
        setAnimeSelected(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((noop_head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "COLLECTION DETAIL"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styeled/* NavBar */.l2, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styeled/* FlexWrapper */.A0, {
                    justifyContent: "left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(styeled/* Button */.zx, {
                            onClick: router.back,
                            border: "none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BackIcon/* default */.Z, {
                                width: "32px",
                                height: "32px",
                                color: "#fff"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(styeled/* AppTitle */.dC, {
                            children: "COLLECTION DETAIL"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styeled/* FlexWrapper */.A0, {
                wrap: "wrap",
                margin: "16px 0 0 0",
                direction: "row",
                alignItems: "top",
                justifyContent: "start",
                gap: "2%",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styeled/* FlexWrapper */.A0, {
                        backgroundColor: "#222222",
                        padding: "12px",
                        smWidth: "100% !important",
                        mdWidth: "100% !important",
                        lgWidth: "40% !important",
                        width: "25% !important",
                        direction: "column",
                        gap: "8px",
                        height: "70%",
                        justifyContent: "center",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styeled/* Image */.Ee, {
                                alt: "cover collection",
                                height: "200px",
                                width: "160px",
                                src: collection_default/* default */.Z.src
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(styeled/* Text */.xv, {
                                color: "#fff",
                                fontSize: "24px",
                                fontWeight: "bold",
                                children: collection?.name || ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_InfoItem, {
                                textAlign: "center",
                                isVertical: true,
                                label: "Create Date",
                                value: moment_default()(collection?.createdAt).format("DD MMM YYYY") || "-"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_InfoItem, {
                                textAlign: "center",
                                isVertical: true,
                                label: "Last Update",
                                value: moment_default()(collection?.updatedAt).format("DD MMM YYYY") || "-"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_InfoItem, {
                                textAlign: "center",
                                isVertical: true,
                                label: "Total Collections",
                                value: String(collection?.animeList?.length || 0)
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(styeled/* FlexWrapper */.A0, {
                        backgroundColor: "#222222",
                        smWidth: "100% !important",
                        mdWidth: "100% !important",
                        lgWidth: "58% !important",
                        width: "73% !important",
                        direction: "column",
                        children: collection?.animeList?.map((anime)=>/*#__PURE__*/ jsx_runtime_.jsx(AnimeCard/* default */.Z, {
                                onDelete: ()=>onDelete(anime),
                                data: anime
                            }, anime.title))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalDeleteConfirmation/* default */.Z, {
                isOpen: isModalDeleteOpen,
                closeModal: ()=>setIsModalDeleteOpen(false),
                onConfirm: onDeleteConfirm,
                title: `Are you sure you want to delete "${animeSelected?.title}"?`
            })
        ]
    });
}
/* harmony default export */ const page = (CollectionDetail);


/***/ }),

/***/ 4139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "flex min-h-screen bg-[#1A1A1A] flex-col items-center justify-between  lg:py-10 md:py-10",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: children
        })
    });
});


/***/ }),

/***/ 7330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const BackIcon = ({ width, height, color })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width || "32px",
        height: height || "32px",
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: color || "#000000",
                d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: color || "#000000",
                d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(BackIcon));


/***/ }),

/***/ 7119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ModalDeleteConfirmation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(2251);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./src/app/styeled.tsx
var styeled = __webpack_require__(8556);
;// CONCATENATED MODULE: ./src/assets/icons/WarningIcon.tsx


const WarnigIcon = ({ width, height, fill, className })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width || 34,
        height: height || 34,
        fill: "none",
        viewBox: "0 0 34 34",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15.334 22H18.6673V25.3334H15.334V22ZM15.334 8.66671H18.6673V18.6667H15.334V8.66671ZM17.0007 0.333374C7.78398 0.333374 0.333984 7.83337 0.333984 17C0.333984 21.4203 2.08993 25.6595 5.21554 28.7852C6.76318 30.3328 8.6005 31.5605 10.6226 32.398C12.6447 33.2356 14.812 33.6667 17.0007 33.6667C21.4209 33.6667 25.6602 31.9108 28.7858 28.7852C31.9114 25.6595 33.6673 21.4203 33.6673 17C33.6673 14.8113 33.2362 12.6441 32.3986 10.622C31.5611 8.59989 30.3334 6.76257 28.7858 5.21493C27.2381 3.66728 25.4008 2.43963 23.3787 1.60205C21.3566 0.76447 19.1893 0.333374 17.0007 0.333374ZM17.0007 30.3334C13.4644 30.3334 10.073 28.9286 7.57256 26.4281C5.07208 23.9276 3.66732 20.5363 3.66732 17C3.66732 13.4638 5.07208 10.0724 7.57256 7.57195C10.073 5.07147 13.4644 3.66671 17.0007 3.66671C20.5369 3.66671 23.9283 5.07147 26.4287 7.57195C28.9292 10.0724 30.334 13.4638 30.334 17C30.334 20.5363 28.9292 23.9276 26.4287 26.4281C23.9283 28.9286 20.5369 30.3334 17.0007 30.3334Z",
            fill: fill || "#000"
        })
    });
};
/* harmony default export */ const WarningIcon = (WarnigIcon);

// EXTERNAL MODULE: ./src/app/collection/CollectionSlice.ts
var CollectionSlice = __webpack_require__(9747);
;// CONCATENATED MODULE: ./src/components/ModalDeleteConfirmation.tsx







const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    }
};
function ModalCreateCollection({ isOpen, closeModal, onConfirm, title }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((lib_default()), {
        ariaHideApp: false,
        isOpen: isOpen,
        style: customStyles,
        contentLabel: "Example Modal",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styeled/* FlexWrapper */.A0, {
            direction: "column",
            gap: "16px",
            width: "300px",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(styeled/* FlexWrapper */.A0, {
                    justifyContent: "center",
                    alignItems: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(WarningIcon, {
                        width: 100,
                        height: 100
                    })
                }),
                title && /*#__PURE__*/ jsx_runtime_.jsx(styeled/* Text */.xv, {
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "16px",
                    textAlign: "center",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(styeled/* FlexWrapper */.A0, {
                    justifyContent: "space-between",
                    alignItems: "left",
                    direction: "column",
                    gap: "4px"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styeled/* FlexWrapper */.A0, {
                    direction: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: closeModal,
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(styeled/* Text */.xv, {
                                    color: "#000",
                                    fontWeight: "500",
                                    fontSize: "18px",
                                    children: "CANCEL"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: onConfirm,
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(styeled/* Text */.xv, {
                                    color: "#ED4337",
                                    fontWeight: "500",
                                    fontSize: "18px",
                                    children: "YES"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function mapDispatchToProps(dispatch) {
    return {
        createCollection: (payload)=>dispatch((0,CollectionSlice/* createCollection */.BL)(payload))
    };
}
function mapStateToProps(state) {
    return {
        collections: state.collections
    };
}
/* harmony default export */ const ModalDeleteConfirmation = (/*#__PURE__*/react_default().memo((0,react_redux_lib.connect)(mapStateToProps, mapDispatchToProps)(ModalCreateCollection)));


/***/ }),

/***/ 1008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/agungpg/projects/test/tokopedia/unofficial-anilist/src/app/collection/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/collection-default.5c53a23a.png","height":248,"width":203,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAbFBMVEWHdHONhYDh2dHp3+He3N2XkKSmlp18a2W7wsGwo6OKbaebgopWKRePgWeqpK6JdFTFt6ZqdXTSxsWCX2Waa2u4opFmODs0NBwwHh1nPUX06+J+YT9OKjvAr7zNxc9+V05hRnCYkJjJno2sh4rZ8sRAAAAACXBIWXMAAA7zAAAO8wEcU5k6AAAAQUlEQVR4nAXBBQLAIAwEsANaSoG5u/3/j0sAsZMZG8iiM3pF2nUbOgYFqteW4C8fnSmR8hMPAb7sb64K2NfxGcIPWwkC7CvDtiAAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});

/***/ })

};
;