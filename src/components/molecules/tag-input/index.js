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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var tooltip_1 = require("../../atoms/tooltip");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var input_container_1 = require("../../fundamentals/input-container");
var input_header_1 = require("../../fundamentals/input-header");
var ENTER_KEY = 13;
var TAB_KEY = 9;
var BACKSPACE_KEY = 8;
var ARROW_LEFT_KEY = 37;
var ARROW_RIGHT_KEY = 39;
var TagInput = function (_a) {
    var _b;
    var onChange = _a.onChange, onValidate = _a.onValidate, _c = _a.values, values = _c === void 0 ? [] : _c, label = _a.label, _d = _a.showLabel, showLabel = _d === void 0 ? true : _d, containerProps = _a.containerProps, className = _a.className, required = _a.required, placeholder = _a.placeholder, _e = _a.withTooltip, withTooltip = _e === void 0 ? false : _e, tooltipContent = _a.tooltipContent, tooltip = _a.tooltip, props = __rest(_a, ["onChange", "onValidate", "values", "label", "showLabel", "containerProps", "className", "required", "placeholder", "withTooltip", "tooltipContent", "tooltip"]);
    var _f = (0, react_1.useState)(false), invalid = _f[0], setInvalid = _f[1];
    var _g = (0, react_1.useState)(-1), highlighted = _g[0], setHighlighted = _g[1];
    var inputRef = (0, react_1.useRef)(null);
    var handleAddValue = function (newVal) {
        var update = newVal;
        if (typeof onValidate !== "undefined") {
            update = onValidate(newVal);
        }
        if (update) {
            onChange(__spreadArray(__spreadArray([], values, true), [update], false));
            if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) {
                inputRef.current.value = "";
            }
        }
        else {
            setInvalid(true);
        }
    };
    var handleKeyDown = function (e) {
        if (invalid) {
            setInvalid(false);
        }
        if (!(inputRef === null || inputRef === void 0 ? void 0 : inputRef.current)) {
            return;
        }
        var _a = inputRef.current, value = _a.value, selectionStart = _a.selectionStart;
        switch (e.keyCode) {
            case ARROW_LEFT_KEY:
                if (highlighted !== -1) {
                    // highlight previous element
                    if (highlighted > 0) {
                        setHighlighted(highlighted - 1);
                    }
                }
                else if (!selectionStart) {
                    // else highlight last element
                    setHighlighted(values.length - 1);
                    e.preventDefault();
                }
                break;
            case ARROW_RIGHT_KEY:
                if (highlighted !== -1) {
                    // highlight next element
                    if (highlighted < values.length - 1) {
                        setHighlighted(highlighted + 1);
                        e.preventDefault();
                    }
                    else {
                        // else remove highlighting entirely
                        setHighlighted(-1);
                    }
                }
                break;
            case ENTER_KEY: // Fall through
                e.preventDefault();
                break;
            case TAB_KEY: // Creates new tag
                if (value) {
                    handleAddValue(value);
                    e.preventDefault();
                }
                break;
            case BACKSPACE_KEY: // Removes tag
                // if no element is currently highlighted, highlight last element
                if (!inputRef.current.selectionStart && highlighted === -1) {
                    setHighlighted(values.length - 1);
                    e.preventDefault();
                }
                // if element is highlighted, remove it
                if (highlighted !== -1) {
                    var newValues = __spreadArray([], values, true);
                    newValues.splice(highlighted, 1);
                    onChange(newValues);
                    setHighlighted(-1);
                }
                break;
            default:
                // Remove highlight from any tag
                setHighlighted(-1);
        }
    };
    var handleRemove = function (index) {
        var newValues = __spreadArray([], values, true);
        newValues.splice(index, 1);
        onChange(newValues);
    };
    var handleBlur = function (e) {
        var _a;
        var value = (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.value;
        setHighlighted(-1);
        if (value) {
            handleAddValue(value);
        }
    };
    var handleOnContainerFocus = function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var handleInput = function () {
        if (!(inputRef === null || inputRef === void 0 ? void 0 : inputRef.current)) {
            return;
        }
        var value = inputRef.current.value;
        if (value === null || value === void 0 ? void 0 : value.endsWith(",")) {
            inputRef.current.value = value.slice(0, -1);
            handleAddValue(value.slice(0, -1));
        }
    };
    return (<input_container_1.default className={(0, clsx_1.default)("flex flex-wrap relative", className)} onFocus={handleOnContainerFocus}>
      {showLabel && (<input_header_1.default label={label || "Tags (comma separated)"} {...{ required: required, tooltipContent: tooltipContent, tooltip: tooltip }}/>)}

      <tooltip_1.default open={invalid} side={"top"} content={"".concat((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.value, " is not a valid tag")}>
        <div className="w-full gap-x-2 gap-y-1 flex mt-1 ml-0 flex-wrap">
          {values.map(function (v, index) {
            var _a;
            return (<div key={index} className={(0, clsx_1.default)("items-center justify-center whitespace-nowrap w-max bg-grey-90 rounded", "px-2 leading-6", (_a = {},
                    _a["bg-grey-70"] = index === highlighted,
                    _a))}>
              <div className="inline-block text-grey-0 h-full inter-small-semibold mr-1">
                {v}
              </div>
              <cross_icon_1.default className="inline cursor-pointer" size="16" color="#9CA3AF" onClick={function () { return handleRemove(index); }}/>
            </div>);
        })}
          <input id="tag-input" ref={inputRef} onBlur={handleBlur} onKeyDown={handleKeyDown} onChange={handleInput} className={(0, clsx_1.default)("bg-grey-5 focus:outline-none")} placeholder={(values === null || values === void 0 ? void 0 : values.length) ? "" : placeholder} // only visible if no tags exist
     {...props}/>
        </div>
      </tooltip_1.default>
    </input_container_1.default>);
};
exports.default = TagInput;
