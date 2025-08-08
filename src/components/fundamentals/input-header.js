"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var icon_tooltip_1 = require("../molecules/icon-tooltip");
var InputHeader = function (_a) {
    var label = _a.label, _b = _a.required, required = _b === void 0 ? false : _b, tooltipContent = _a.tooltipContent, tooltip = _a.tooltip;
    return (<div className="w-full flex inter-small-semibold text-grey-50 items-center">
      <label>{label}</label>
      {required && <div className="text-rose-50 "> *</div>}
      {tooltip || tooltipContent ? (<div className="flex ml-1.5">
          {tooltip || <icon_tooltip_1.default content={tooltipContent}/>}
        </div>) : null}
    </div>);
};
exports.default = InputHeader;
