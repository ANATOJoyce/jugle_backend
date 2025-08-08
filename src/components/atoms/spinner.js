"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "large" : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c;
    return (<div className={(0, clsx_1.default)("flex items-center justify-center", { "h-[24px] w-[24px]": size === "large" }, { "h-[20px] w-[20px]": size === "medium" }, { "h-[16px] w-[16px]": size === "small" })}>
      <div className="inline-block relative w-full h-full">
        <div className={(0, clsx_1.default)("animate-ring border-2 h-4/5 w-4/5 rounded-circle border-transparent", { "border-t-grey-0": variant === "primary" }, { "border-t-violet-60": variant === "secondary" })}/>
      </div>
    </div>);
};
exports.default = Spinner;
