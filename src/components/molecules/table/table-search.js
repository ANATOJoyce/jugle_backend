"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var search_icon_1 = require("../../fundamentals/icons/search-icon");
var TableSearch = function (_a) {
    var autoFocus = _a.autoFocus, onSearch = _a.onSearch, _b = _a.placeholder, placeholder = _b === void 0 ? "Search" : _b, searchValue = _a.searchValue, className = _a.className, props = __rest(_a, ["autoFocus", "onSearch", "placeholder", "searchValue", "className"]);
    var ref = (0, react_1.useRef)(null);
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (inputRef && inputRef.current) {
            inputRef.current.size =
                ((_b = (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.placeholder) === null || _b === void 0 ? void 0 : _b.replace(/\s+/g, "").length) || 20;
        }
    }, []);
    return (<div className={(0, clsx_1.default)("inter-small-regular mt-1 transition-color transition-width duration-150 ease-in-out flex text-grey-50 flex items-center mb-1 pl-1 py-1.5 rounded-rounded border border-grey-0 min-w-content focus-within:mr-1 focus-within:w-60 focus-within:shadow-input focus-within:border-violet-60 focus-within:bg-grey-5", className)} {...props}>
      <span className="px-2.5 py-0.5">
        <search_icon_1.default size={16}/>
      </span>
      <span ref={ref} className="hidden inline-block">
        {placeholder}
      </span>
      <input autoFocus={autoFocus} type="text" ref={inputRef} value={searchValue} className={(0, clsx_1.default)("focus:outline-none focus:border-none inter-small-regular w-full focus:w-50 focus:bg-grey-5 focus:text-grey-90 caret-violet-60")} placeholder={placeholder} onChange={function (e) {
            onSearch(e.target.value);
        }}/>
    </div>);
};
exports.default = TableSearch;
