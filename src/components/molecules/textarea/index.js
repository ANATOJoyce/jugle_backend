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
var input_container_1 = require("../../fundamentals/input-container");
var input_header_1 = require("../../fundamentals/input-header");
var Textarea = react_1.default.forwardRef(function (_a, ref) {
    var placeholder = _a.placeholder, label = _a.label, name = _a.name, key = _a.key, required = _a.required, _b = _a.withTooltip, withTooltip = _b === void 0 ? false : _b, tooltipText = _a.tooltipText, _c = _a.tooltipProps, tooltipProps = _c === void 0 ? {} : _c, containerProps = _a.containerProps, className = _a.className, _d = _a.enableEmoji, enableEmoji = _d === void 0 ? false : _d, _e = _a.rows, rows = _e === void 0 ? 2 : _e, children = _a.children, props = __rest(_a, ["placeholder", "label", "name", "key", "required", "withTooltip", "tooltipText", "tooltipProps", "containerProps", "className", "enableEmoji", "rows", "children"]);
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, function () { return inputRef.current; });
    var scrollToTop = function () {
        if (inputRef.current) {
            inputRef.current.scrollTop = 0;
        }
    };
    var handleAddEmoji = function (e) {
        var _a;
        console.log(e);
        console.log((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.selectionStart);
    };
    return (<input_container_1.default className={className} key={name} onClick={function () { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }} {...containerProps}>
        {label && (<input_header_1.default {...{ label: label, required: required, withTooltip: withTooltip, tooltipText: tooltipText, tooltipProps: tooltipProps }}/>)}
        <div className="w-full flex mt-1">
          <textarea className={(0, clsx_1.default)("relative text-justify overflow-hidden focus:overflow-auto resize-none bg-inherit outline-none outline-0", "w-full remove-number-spinner leading-base text-grey-90 font-normal caret-violet-60 placeholder-grey-40", "line-clamp-[var(--lines)] focus:line-clamp-none")} style={{
            "--lines": rows,
        }} ref={inputRef} autoComplete="off" name={name} key={key || name} placeholder={placeholder || "Placeholder"} onBlur={scrollToTop} rows={rows} {...props}/>
        </div>
        {children}
      </input_container_1.default>);
});
exports.default = Textarea;
