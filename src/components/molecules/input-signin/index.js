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
var eye_icon_1 = require("../../fundamentals/icons/eye-icon");
var eye_off_icon_1 = require("../../fundamentals/icons/eye-off-icon");
var lock_icon_1 = require("../../fundamentals/icons/lock-icon");
var SigninInput = react_1.default.forwardRef(function (_a, ref) {
    var placeholder = _a.placeholder, name = _a.name, key = _a.key, required = _a.required, onChange = _a.onChange, onFocus = _a.onFocus, className = _a.className, type = _a.type, props = __rest(_a, ["placeholder", "name", "key", "required", "onChange", "onFocus", "className", "type"]);
    var inputRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), showPassword = _b[0], setShowPassword = _b[1];
    var _c = (0, react_1.useState)(type), inputType = _c[0], setInputType = _c[1];
    (0, react_1.useEffect)(function () {
        if (type === "password" && showPassword) {
            setInputType("text");
        }
        if (type === "password" && !showPassword) {
            setInputType("password");
        }
    }, [type, showPassword]);
    (0, react_1.useImperativeHandle)(ref, function () { return inputRef.current; });
    return (<div className={(0, clsx_1.default)("w-[320px] h-[48px] mb-xsmall last:mb-0 border rounded-rounded overflow-hidden", "bg-grey-5 inter-base-regular placeholder:text-grey-40", "focus-within:shadow-input focus-within:border-violet-60", "flex items-center", {
            "pointer-events-none focus-within:shadow-none focus-within:border-none text-grey-40": props.readOnly,
        }, className)}>
        {props.readOnly && (<lock_icon_1.default size={16} className="text-grey-40 ml-base"/>)}
        <input className={(0, clsx_1.default)("outline-none outline-0 remove-number-spinner leading-base bg-transparent w-full py-3 px-4", {
            "pl-xsmall": props.readOnly,
        })} ref={inputRef} name={name} key={key || name} placeholder={placeholder || "Placeholder"} onChange={onChange} onFocus={onFocus} type={inputType} {...props}/>
        {type === "password" && (<button type="button" onClick={function () { return setShowPassword(!showPassword); }} className="text-grey-40 px-4 focus:outline-none focus:text-violet-60">
            {showPassword ? <eye_icon_1.default /> : <eye_off_icon_1.default />}
          </button>)}
      </div>);
});
exports.default = SigninInput;
