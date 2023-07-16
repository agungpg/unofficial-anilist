"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 3032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_styeled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8556);



const InfoItem = ({ label, value })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_styeled__WEBPACK_IMPORTED_MODULE_2__/* .InfoText */ .XU, {
        className: "item-info-wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "point"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "description",
                children: [
                    ": ",
                    value
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(InfoItem));


/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7563);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2251);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_styeled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8556);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7553);
/* harmony import */ var _CollectionSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9747);








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
const CollectionTextInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.input`
  width: 100%;
  min-width: 300px;
  height: 40px;
  border: #ddd 1px solid;
  border-radius: 4px;
  padding: 8px;
`;
function ModalCreateCollection({ isOpen, closeModal, collections, createCollection }) {
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const onSave = ()=>{
        const isValid = validation();
        if (!isValid) return;
        createCollection({
            collection: {
                name,
                createdAt: new Date().toUTCString(),
                updatedAt: new Date().toUTCString(),
                animeList: []
            }
        });
        closeModal();
    };
    const validation = ()=>{
        setError("");
        if (!name) {
            setError("Name is required.");
            return false;
        }
        const noSpecialChar = (0,_utils_common__WEBPACK_IMPORTED_MODULE_7__/* .validateNoSpecialChar */ .XF)(name);
        if (!noSpecialChar) {
            setError("Name can not contains special characters.");
            return false;
        }
        const collectionNameIndex = collections.findIndex((collection)=>collection.name == name);
        if (collectionNameIndex > -1) {
            setError("Collection name is already exist");
            return false;
        }
        return true;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
        ariaHideApp: false,
        isOpen: isOpen,
        style: customStyles,
        contentLabel: "Example Modal",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_styeled__WEBPACK_IMPORTED_MODULE_5__/* .FlexWrapper */ .A0, {
            direction: "column",
            gap: "16px",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_styeled__WEBPACK_IMPORTED_MODULE_5__/* .FlexWrapper */ .A0, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    wrap: "wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Add New Collection"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: closeModal,
                            children: "X"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app_styeled__WEBPACK_IMPORTED_MODULE_5__/* .FlexWrapper */ .A0, {
                    justifyContent: "space-between",
                    alignItems: "left",
                    direction: "column",
                    gap: "4px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CollectionTextInput, {
                            value: name,
                            onChange: (e)=>setName(e.target.value)
                        }),
                        error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_styeled__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .xv, {
                            fontSize: "14px",
                            color: "#ED4337",
                            children: error
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_styeled__WEBPACK_IMPORTED_MODULE_5__/* .FlexWrapper */ .A0, {
                    direction: "row-reverse",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: onSave,
                        children: "SAVE"
                    })
                })
            ]
        })
    });
}
function mapDispatchToProps(dispatch) {
    return {
        createCollection: (payload)=>dispatch((0,_CollectionSlice__WEBPACK_IMPORTED_MODULE_6__/* .createCollection */ .BL)(payload))
    };
}
function mapStateToProps(state) {
    return {
        collections: state.collections
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(ModalCreateCollection)));


/***/ }),

/***/ 7330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 7553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gh: () => (/* binding */ findCollectionNameByAnimeId),
/* harmony export */   XF: () => (/* binding */ validateNoSpecialChar),
/* harmony export */   hS: () => (/* binding */ arrayRange)
/* harmony export */ });
const arrayRange = (start, stop, step)=>Array.from({
        length: (stop - start) / step + 1
    }, (value, index)=>start + index * step);
const findCollectionNameByAnimeId = (collections, animeId)=>{
    return collections.reduce((result, collection)=>{
        const isAnimeExist = collection.animeList.findIndex((anime)=>anime.id == animeId);
        if (isAnimeExist > -1) result.push(collection.name);
        return result;
    }, []);
};
const validateNoSpecialChar = (value)=>{
    const regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(value);
};


/***/ })

};
;