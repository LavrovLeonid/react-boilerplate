"use strict";
(self["webpackChunkreact_boilerplate"] = self["webpackChunkreact_boilerplate"] || []).push([["main"],{

/***/ "./src/client/index.tsx":
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/index */ "./src/shared/index.tsx");
/* harmony import */ var _shared_utils_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/history */ "./src/shared/utils/history.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/client/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _document$querySelect;







(0,_utils__WEBPACK_IMPORTED_MODULE_3__.prependDocument)();
var element = (_document$querySelect = document.querySelector('#root')) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.body;
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(element);
root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.unstable_HistoryRouter, {
  history: _shared_utils_history__WEBPACK_IMPORTED_MODULE_2__.history,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_index__WEBPACK_IMPORTED_MODULE_1__.Index, {})
}));

/***/ }),

/***/ "./src/client/utils/index.ts":
/*!***********************************!*\
  !*** ./src/client/utils/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prependDocument": () => (/* binding */ prependDocument)
/* harmony export */ });
var prependDocument = function prependDocument() {
  var _document$querySelect;

  (_document$querySelect = document.querySelector('#env')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
};

/***/ }),

/***/ "./src/shared/index.tsx":
/*!******************************!*\
  !*** ./src/shared/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Index": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var IndexPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() | index-page */[__webpack_require__.e("vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js"), __webpack_require__.e("index-page")]).then(__webpack_require__.bind(__webpack_require__, /*! @pages/index */ "./src/shared/pages/index.tsx"));
});
var NotFoundPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() | not-found-page */ "not-found-page").then(__webpack_require__.bind(__webpack_require__, /*! @pages/404 */ "./src/shared/pages/404.tsx"));
});
var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IndexPage, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "*",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NotFoundPage, {})
        })]
      })
    })
  });
};

/***/ }),

/***/ "./src/shared/utils/history.ts":
/*!*************************************!*\
  !*** ./src/shared/utils/history.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "history": () => (/* binding */ history)
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");

var history = (0,history__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ /* webpack/runtime/startup prefetch */
/******/ (() => {
/******/ 	__webpack_require__.O(0, ["main"], () => {
/******/ 		["vendors-node_modules_emotion_styled_dist_emotion-styled_browser_esm_js","index-page","not-found-page"].map(__webpack_require__.E);
/******/ 	}, 5);
/******/ })();
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["framework","vendors"], () => (__webpack_exec__("./src/client/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBSyx1REFBZTtBQUVmLElBQU1DLE9BQU8sNEJBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFILHlFQUFzQ0QsUUFBUSxDQUFDRSxJQUE1RDtBQUNBLElBQU1DLElBQUksR0FBR1YsNERBQVUsQ0FBQ00sT0FBRCxDQUF2QjtBQUVBSSxJQUFJLENBQUNDLE1BQUwsZUFDRSx1REFBQyxvRUFBRDtBQUFlLFNBQU8sRUFBRVAsMERBQXhCO0FBQUEseUJBQ0UsdURBQUMsZ0RBQUQ7QUFERixFQURGOzs7Ozs7Ozs7Ozs7OztBQ1hPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUNuQywyQkFBQUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLGlGQUFnQ0ksTUFBaEM7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBOzs7QUFFQSxJQUFNTSxTQUFTLGdCQUFHTCwyQ0FBSSxDQUNwQjtBQUFBLFNBQ0UsdVJBREY7QUFBQSxDQURvQixDQUF0QjtBQVNBLElBQU1NLFlBQVksZ0JBQUdOLDJDQUFJLENBQ3ZCO0FBQUEsU0FDRSw0S0FERjtBQUFBLENBRHVCLENBQXpCO0FBU08sSUFBTVYsS0FBUyxHQUFHLFNBQVpBLEtBQVk7QUFBQSxzQkFDdkIsdURBQUMsNkNBQUQ7QUFBQSwyQkFDRSx1REFBQywyQ0FBRDtBQUFVLGNBQVEsRUFBRSxJQUFwQjtBQUFBLDZCQUNFLHdEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsdURBQUMsbURBQUQ7QUFBTyxjQUFJLEVBQUMsR0FBWjtBQUFnQixpQkFBTyxlQUFFLHVEQUFDLFNBQUQ7QUFBekIsVUFERixlQUVFLHVEQUFDLG1EQUFEO0FBQU8sY0FBSSxFQUFDLEdBQVo7QUFBZ0IsaUJBQU8sZUFBRSx1REFBQyxZQUFEO0FBQXpCLFVBRkY7QUFBQTtBQURGO0FBREYsSUFEdUI7QUFBQSxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7O0FDckJQO0FBRU8sSUFBTUMsT0FBTyxHQUFHZ0IsNkRBQW9CLEVBQXBDOzs7Ozs7OztVQ0ZQO1VBQ0E7VUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvY2xpZW50L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9jbGllbnQvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtYm9pbGVycGxhdGUvLi9zcmMvc2hhcmVkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1ib2lsZXJwbGF0ZS8uL3NyYy9zaGFyZWQvdXRpbHMvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly9yZWFjdC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvc3RhcnR1cCBwcmVmZXRjaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgeyB1bnN0YWJsZV9IaXN0b3J5Um91dGVyIGFzIEhpc3RvcnlSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEluZGV4IH0gZnJvbSAnQHNoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAnQHNoYXJlZC91dGlscy9oaXN0b3J5JztcbmltcG9ydCB7IHByZXBlbmREb2N1bWVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5wcmVwZW5kRG9jdW1lbnQoKTtcblxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykgPz8gZG9jdW1lbnQuYm9keTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGVsZW1lbnQpO1xuXG5yb290LnJlbmRlcihcbiAgPEhpc3RvcnlSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgPEluZGV4IC8+XG4gIDwvSGlzdG9yeVJvdXRlcj4sXG4pO1xuIiwiZXhwb3J0IGNvbnN0IHByZXBlbmREb2N1bWVudCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudicpPy5yZW1vdmUoKTtcbn07XG4iLCJpbXBvcnQgeyBGQywgbGF6eSwgU3RyaWN0TW9kZSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IEluZGV4UGFnZSA9IGxhenkoXG4gICgpID0+XG4gICAgaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJpbmRleC1wYWdlXCIgKi9cbiAgICAgIC8qIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSAqL1xuICAgICAgJ0BwYWdlcy9pbmRleCdcbiAgICApLFxuKTtcblxuY29uc3QgTm90Rm91bmRQYWdlID0gbGF6eShcbiAgKCkgPT5cbiAgICBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm5vdC1mb3VuZC1wYWdlXCIgKi9cbiAgICAgIC8qIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSAqL1xuICAgICAgJ0BwYWdlcy80MDQnXG4gICAgKSxcbik7XG5cbmV4cG9ydCBjb25zdCBJbmRleDogRkMgPSAoKSA9PiAoXG4gIDxTdHJpY3RNb2RlPlxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICA8Um91dGVzPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SW5kZXhQYWdlIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmRQYWdlIC8+fSAvPlxuICAgICAgPC9Sb3V0ZXM+XG4gICAgPC9TdXNwZW5zZT5cbiAgPC9TdHJpY3RNb2RlPlxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uTygwLCBbXCJtYWluXCJdLCAoKSA9PiB7XG5cdFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Vtb3Rpb25fc3R5bGVkX2Rpc3RfZW1vdGlvbi1zdHlsZWRfYnJvd3Nlcl9lc21fanNcIixcImluZGV4LXBhZ2VcIixcIm5vdC1mb3VuZC1wYWdlXCJdLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLkUpO1xufSwgNSk7Il0sIm5hbWVzIjpbImNyZWF0ZVJvb3QiLCJ1bnN0YWJsZV9IaXN0b3J5Um91dGVyIiwiSGlzdG9yeVJvdXRlciIsIkluZGV4IiwiaGlzdG9yeSIsInByZXBlbmREb2N1bWVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJib2R5Iiwicm9vdCIsInJlbmRlciIsInJlbW92ZSIsImxhenkiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJSb3V0ZSIsIlJvdXRlcyIsIkluZGV4UGFnZSIsIk5vdEZvdW5kUGFnZSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5Il0sInNvdXJjZVJvb3QiOiIifQ==