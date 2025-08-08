"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useOutsideClick = function (callback, ref) {
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (e) {
            if (!ref.current.contains(e.target)) {
                callback();
            }
        };
        document.addEventListener("click", handleClickOutside);
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
};
exports.default = useOutsideClick;
