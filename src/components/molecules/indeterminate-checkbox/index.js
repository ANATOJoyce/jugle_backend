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
var check_icon_1 = require("../../fundamentals/icons/check-icon");
var IndeterminateCheckbox = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.indeterminate, indeterminate = _b === void 0 ? false : _b, className = _a.className, checked = _a.checked, rest = __rest(_a, ["indeterminate", "className", "checked"]);
    var innerRef = react_1.default.useRef(null);
    (0, react_1.useImperativeHandle)(ref, function () { return innerRef.current; });
    react_1.default.useEffect(function () {
        if (innerRef.current) {
            innerRef.current.indeterminate = indeterminate;
        }
    }, [innerRef, indeterminate]);
    var handleClick = function () {
        if (innerRef.current) {
            innerRef.current.click();
        }
    };
    return (<div className="items-center h-full flex">
      <div onClick={handleClick} className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border cursor-pointer rounded-base ".concat(checked && "bg-violet-60")}>
        <span className="self-center">
          {checked && <check_icon_1.default size={16}/>}
        </span>
      </div>
      <input type="checkbox" className={(0, clsx_1.default)("hidden", className)} checked={checked} ref={innerRef} {...rest}/>
    </div>);
});
exports.default = IndeterminateCheckbox;
