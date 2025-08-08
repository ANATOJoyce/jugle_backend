"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useObserveWidth = void 0;
var react_1 = require("react");
var useObserveWidth = function (ref) {
    var _a = (0, react_1.useState)(0), currentWidth = _a[0], setCurrentWidth = _a[1];
    var observer = (0, react_1.useRef)(new ResizeObserver(function (entries) {
        var width = entries[0].contentRect.width;
        setCurrentWidth(width);
    }));
    (0, react_1.useEffect)(function () {
        if ((observer === null || observer === void 0 ? void 0 : observer.current) && (ref === null || ref === void 0 ? void 0 : ref.current)) {
            observer.current.observe(ref.current);
        }
        return function () {
            if ((observer === null || observer === void 0 ? void 0 : observer.current) && (ref === null || ref === void 0 ? void 0 : ref.current)) {
                observer.current.unobserve(ref === null || ref === void 0 ? void 0 : ref.current);
            }
        };
    }, [ref, observer]);
    return currentWidth;
};
exports.useObserveWidth = useObserveWidth;
