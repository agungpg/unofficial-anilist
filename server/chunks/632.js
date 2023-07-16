"use strict";
exports.id = 632;
exports.ids = [632];
exports.modules = {

/***/ 5632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_styeled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8556);
/* harmony import */ var _AnimeCard_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1419);





const AnimeCard = ({ data })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_4__/* .AnimeCardDiv */ .gk, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/anime?id=${data.id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_4__/* .AnimeCardCover */ .Hv, {
                    src: data?.coverImage
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_styeled__WEBPACK_IMPORTED_MODULE_3__/* .VerticalInfoWrapper */ .a6, {
                gap: "4px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/anime?id=${data.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_4__/* .AnimeCardTitle */ .jK, {
                            children: data?.title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_4__/* .AnimeCardMetaInfoWrapper */ .oj, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_4__/* .AnimeCardMetaInfoText */ .af, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Release Date"
                                    }),
                                    ": ",
                                    data?.releaseDate
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_4__/* .AnimeCardMetaInfoText */ .af, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "Status"
                                    }),
                                    ": ",
                                    data?.status
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_4__/* .AnimeCardDescriptionText */ .Ln, {
                        dangerouslySetInnerHTML: {
                            __html: data?.description
                        }
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(AnimeCard));


/***/ })

};
;