"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimensions = void 0;
var react_1 = require("react");
var useWindowDimensions = function () {
    var _a = (0, react_1.useState)({
        height: window.innerHeight,
        width: window.innerWidth,
    }), dimensions = _a[0], setDimensions = _a[1];
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return dimensions;
};
exports.useWindowDimensions = useWindowDimensions;
