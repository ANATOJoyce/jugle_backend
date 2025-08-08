"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterTab = void 0;
var react_1 = require("react");
var clsx_1 = require("clsx");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var FilterTab = function (_a) {
    var _b;
    var label = _a.label, isActive = _a.isActive, onClick = _a.onClick, removable = _a.removable, onRemove = _a.onRemove;
    var handleClick = function (e) {
        if (typeof onClick !== "undefined") {
            onClick(e);
        }
    };
    var handleRemove = function () {
        if (typeof onRemove !== "undefined") {
            onRemove();
        }
    };
    var handleKeyPress = function (e) {
        if (removable && onRemove) {
            if (e.key === "Backspace") {
                onRemove();
            }
        }
    };
    return (<button onKeyUp={handleKeyPress} onClick={handleClick} className={(0, clsx_1.default)("flex items-center bg-grey-5 border border-grey-20 inter-small-regular px-2 h-6 text-grey-50 rounded-rounded focus-visible:outline-none focus-visible:shadow-input focus-visible:border-violet-60 flex items-center space-x-1", (_b = {},
            _b["bg-violet-5 border-violet-60 text-violet-60 "] = isActive,
            _b))}>
      {label}
      {removable && (<div onClick={handleRemove} className={"ml-1 cursor-pointer"}>
          <cross_icon_1.default size={16}/>
        </div>)}
    </button>);
};
exports.FilterTab = FilterTab;
exports.default = exports.FilterTab;
