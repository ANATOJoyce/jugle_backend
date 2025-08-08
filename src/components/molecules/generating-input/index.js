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
var generate_promotion_code_1 = require("../../../utils/generate-promotion-code");
var refresh_icon_1 = require("../../fundamentals/icons/refresh-icon");
var input_container_1 = require("../../fundamentals/input-container");
var input_header_1 = require("../../fundamentals/input-header");
var GeneratingInput = react_1.default.forwardRef(function (_a, ref) {
    var placeholder = _a.placeholder, label = _a.label, name = _a.name, required = _a.required, deletable = _a.deletable, onDelete = _a.onDelete, onChange = _a.onChange, onFocus = _a.onFocus, tooltipContent = _a.tooltipContent, tooltip = _a.tooltip, props = _a.props, className = _a.className, valueProp = _a.value, fieldProps = __rest(_a, ["placeholder", "label", "name", "required", "deletable", "onDelete", "onChange", "onFocus", "tooltipContent", "tooltip", "props", "className", "value"]);
    var _b = (0, react_1.useState)(valueProp || ""), value = _b[0], setValue = _b[1];
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, function () { return inputRef.current; });
    var generateCode = function () {
        setValue((0, generate_promotion_code_1.generatePromotionCode)());
    };
    var handleChange = function (e) {
        setValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };
    return (<input_container_1.default className={className} key={name} onClick={function () { var _a; return !fieldProps.disabled && ((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus()); }} {...props}>
        <div className="flex">
          <input_header_1.default {...{ label: label, required: required, tooltipContent: tooltipContent, tooltip: tooltip }}/>
          {!value && (<button onClick={generateCode} className="inter-small-semibold text-violet-50">
              Generate
            </button>)}
        </div>
        <div className="flex">
          <input ref={inputRef} value={value} onChange={handleChange} className="bg-inherit outline-none outline-0 w-full remove-number-spinner leading-base text-grey-90 font-normal caret-violet-60 placeholder-grey-40" placeholder={placeholder} autoComplete="off" name={name} onFocus={onFocus} required={required} {...fieldProps}/>
          {value && (<button onClick={generateCode}>
              <refresh_icon_1.default size={16} className="text-grey-50"/>
            </button>)}
        </div>
      </input_container_1.default>);
});
exports.default = GeneratingInput;
