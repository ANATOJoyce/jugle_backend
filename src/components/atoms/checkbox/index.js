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
var Checkbox = react_1.default.forwardRef(function (_a, ref) {
    var label = _a.label, value = _a.value, className = _a.className, id = _a.id, rest = __rest(_a, ["label", "value", "className", "id"]);
    var checkboxRef = react_1.default.useRef(null);
    (0, react_1.useImperativeHandle)(ref, function () { return checkboxRef.current; });
    return (<label className={(0, clsx_1.default)("flex items-center cursor-pointer", className)} htmlFor={id}>
        <input type="checkbox" ref={checkboxRef} className="form-checkbox w-[20px] h-[20px] rounded-base text-violet-60 focus:ring-0 mr-small border-grey-30" value={value} id={id} {...rest}/>
        {label}
      </label>);
});
exports.default = Checkbox;
