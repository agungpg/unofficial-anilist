"use strict";
exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 2500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mc: () => (/* binding */ AnimeLoadingList),
/* harmony export */   jc: () => (/* binding */ DescriptionLineLoading)
/* harmony export */ });
/* unused harmony export AnimeLoadingCard */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6536);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7749);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnimeCard_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1419);





const DescriptionLineLoading = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        style: {
            height: "10px",
            width: "95%",
            borderRadius: "8px"
        }
    });
const AnimeLoadingCard = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AnimeCard_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_3__/* .AnimeCardDiv */ .gk, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                style: {
                    height: "130px",
                    width: "100px",
                    borderRadius: 0
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AnimeCard_AnimeCard_styled__WEBPACK_IMPORTED_MODULE_3__/* .AnimeCardInfoWrapper */ .YA, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        style: {
                            height: "18px",
                            width: "30%",
                            borderRadius: "8px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        style: {
                            height: "16px",
                            width: "20%",
                            borderRadius: "8px"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "gap-y-[0px] mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DescriptionLineLoading, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DescriptionLineLoading, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DescriptionLineLoading, {})
                        ]
                    })
                ]
            })
        ]
    });
const AnimeLoadingList = ({ total })=>Array.from(Array(total).keys()).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimeLoadingCard, {}, item * Math.random()));


/***/ }),

/***/ 8322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ GET_ANIMELIST),
/* harmony export */   e: () => (/* binding */ GET_ANIMEDETAIL)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6174);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_ANIMELIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query ($page: Int, $perPage: Int, $isAdult: Boolean) {
    result: Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      list: media(isAdult: $isAdult) {
        id
        coverImage {
          medium
        }
        title {
          romaji
        }
        description
        startDate {
          year
          month
          day
        }
        status
      }
    }
  }
`;
const GET_ANIMEDETAIL = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query ($id: Int, $isAdult: Boolean) {
    Media(id: $id, isAdult: $isAdult) {
      id
      coverImage {
        medium
      }
      title {
        romaji
      }
      studios {
        edges {
          id
          isMain
          node {
            name
          }
        }
      }
      duration
      updatedAt
      genres
      averageScore
      description
      episodes
      startDate {
        year
        month
        day
      }
      status
      reviews {
        edges {
          node {
            id
            rating
          }
        }
      }
    }
  }
`;


/***/ }),

/***/ 6949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mapAnimeDetailData),
/* harmony export */   r: () => (/* binding */ mapAnimeListItemData)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1053);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const mapAnimeListItemData = ({ id, title, description, startDate, status, coverImage })=>({
        id,
        status,
        description,
        title: title.romaji,
        releaseDate: moment__WEBPACK_IMPORTED_MODULE_0___default()((startDate.day > 9 ? startDate.day : "0" + startDate.day) + "/" + startDate.month + "/" + startDate.year).format("DD MMM YYYY"),
        coverImage: coverImage.medium
    });
const mapAnimeDetailData = ({ id, title, description, startDate, status, coverImage, studios, duration, updatedAt, genres, episodes, reviews })=>({
        id,
        status,
        description,
        updatedAt: moment__WEBPACK_IMPORTED_MODULE_0___default()(updatedAt).format("DD MMM YYYY"),
        genres,
        title: title.romaji,
        releaseDate: moment__WEBPACK_IMPORTED_MODULE_0___default()((startDate.day > 9 ? startDate.day : "0" + startDate.day) + "/" + startDate.month + "/" + startDate.year).format("DD MMM YYYY"),
        coverImage: coverImage.medium,
        studio: studios.edges.find((stud)=>stud.isMain)?.node?.name || "-",
        duration: duration + " minutes",
        totalEpisodes: episodes,
        rating: getAverageRatingInFive(reviews)
    });
const timeStamptoDate = (timestamp)=>{
    const date = new Date(timestamp);
    return date.toLocaleString("en-ID") // 👉️ "1/20/2022, 9:50:15 AM"
    ;
};
const getAverageRatingInFive = (reviews)=>{
    if (reviews?.edges?.length == 0) return 0;
    const averageRatingInHundred = reviews?.edges.reduce((result, item)=>result += item.node.rating, 0) / reviews?.edges.length;
    const ratingInFive = averageRatingInHundred / 20;
    return roundToTwo(ratingInFive);
};
function roundToTwo(num) {
    return +(Math.round(parseFloat(num + "e+2")) + "e-2");
}


/***/ })

};
;