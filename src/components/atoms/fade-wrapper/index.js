"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var Fade = function (_a) {
    var _b;
    var isVisible = _a.isVisible, start = _a.start, end = _a.end, classname = _a.classname, children = _a.children, _c = _a.isFullScreen, isFullScreen = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)(false), show = _d[0], setShow = _d[1];
    (0, react_1.useEffect)(function () {
        if (show && !isVisible) {
            setTimeout(function () { return setShow(false); }, 100);
        }
        else {
            setShow(isVisible);
        }
    });
    var classes = (_b = {},
        _b[start || "scale-[0.98] opacity-0"] = !isVisible,
        _b[end || "scale-100 opacity-100"] = isVisible,
        _b["absolute inset-0"] = show && isFullScreen,
        _b);
    return (<div className={(0, clsx_1.default)("transition-all duration-100 z-50", classes, classname)}>
      {show ? children : null}
    </div>);
};
exports.default = Fade;
