exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 1043:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4139))

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

/***/ 9849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DeleteIcon = ({ width, height, fill, className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width || 24,
        height: height || 24,
        fill: "none",
        viewBox: "0 0 24 24",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z",
            fill: fill || "#FF5E5E"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteIcon);


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
                    fontSize: "18px",
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