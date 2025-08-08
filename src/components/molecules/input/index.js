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
var react_1 = require("react");
var minus_icon_1 = require("../../fundamentals/icons/minus-icon");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var input_container_1 = require("../../fundamentals/input-container");
var input_header_1 = require("../../fundamentals/input-header");
var InputField = react_1.default.forwardRef(function (_a, ref) {
    var placeholder = _a.placeholder, label = _a.label, name = _a.name, key = _a.key, required = _a.required, deletable = _a.deletable, onDelete = _a.onDelete, onChange = _a.onChange, onFocus = _a.onFocus, tooltipContent = _a.tooltipContent, tooltip = _a.tooltip, prefix = _a.prefix, props = _a.props, className = _a.className, startAdornment = _a.startAdornment, fieldProps = __rest(_a, ["placeholder", "label", "name", "key", "required", "deletable", "onDelete", "onChange", "onFocus", "tooltipContent", "tooltip", "prefix", "props", "className", "startAdornment"]);
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, function () { return inputRef.current; });
    var onClickChevronUp = function () {
        var _a, _b;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.stepUp();
        if (onChange) {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new InputEvent("change", {
                view: window,
                bubbles: true,
                cancelable: false,
            }));
        }
    };
    var onClickChevronDown = function () {
        var _a, _b;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.stepDown();
        if (onChange) {
            (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new InputEvent("change", {
                view: window,
                bubbles: true,
                cancelable: false,
            }));
        }
    };
    return (<input_container_1.default className={className} key={name} onClick={function () { var _a; return !fieldProps.disabled && ((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus()); }} {...props}>
        {label && (<input_header_1.default {...{ label: label, required: required, tooltipContent: tooltipContent, tooltip: tooltip }}/>)}
        <div className="w-full flex items-center mt-1">
          {startAdornment ? (<div className="text-grey-40 mr-1.5">{startAdornment}</div>) : prefix ? (<span className="text-grey-40 mr-2xsmall">{prefix}</span>) : null}
          <input className="bg-inherit outline-none outline-0 w-full remove-number-spinner leading-base text-grey-90 font-normal caret-violet-60 placeholder-grey-40" ref={inputRef} autoComplete="off" name={name} key={key || name} placeholder={placeholder || "Placeholder"} onChange={onChange} onFocus={onFocus} required={required} {...fieldProps}/>

          {deletable && (<span onClick={onDelete} className="cursor-pointer ml-2">
              &times;
            </span>)}

          {fieldProps.type === "number" && (<div className="flex self-end">
              <span onClick={onClickChevronDown} onMouseDown={function (e) { return e.preventDefault(); }} className="mr-2 text-grey-50 w-4 h-4 hover:bg-grey-10 rounded-soft cursor-pointer">
                <minus_icon_1.default size={16}/>
              </span>
              <span onMouseDown={function (e) { return e.preventDefault(); }} onClick={onClickChevronUp} className="text-grey-50 w-4 h-4 hover:bg-grey-10 rounded-soft cursor-pointer">
                <plus_icon_1.default size={16}/>
              </span>
            </div>)}
        </div>
      </input_container_1.default>);
});
exports.default = InputField;
