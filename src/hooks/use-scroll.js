"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScroll = void 0;
var react_1 = require("react");
var useScroll = function (_a) {
    var _b = _a.threshold, threshold = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(false), isScrolled = _c[0], setIsScrolled = _c[1];
    var scrollListener = function (e) {
        var currentScrollY = e.target.scrollTop;
        if (currentScrollY > threshold) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    };
    return { isScrolled: isScrolled, scrollListener: scrollListener };
};
exports.useScroll = useScroll;
