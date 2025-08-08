"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var switch_1 = require("../../atoms/switch");
var icon_tooltip_1 = require("../icon-tooltip");
var SwitchableItem = function (_a) {
    var title = _a.title, description = _a.description, tooltip = _a.tooltip, _b = _a.open, open = _b === void 0 ? false : _b, onSwitch = _a.onSwitch, children = _a.children;
    return (<div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2xsmall">
            <p className="inter-base-semibold">{title}</p>
            {tooltip && <icon_tooltip_1.default content={tooltip}/>}
          </div>
          <p className="inter-small-regular text-grey-50 mt-1">{description}</p>
        </div>
        <switch_1.default checked={open} onClick={onSwitch} type="button" className="cursor-pointer"/>
      </div>
      <div className={(0, clsx_1.default)("transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden", {
            "max-h-[1000px] opacity-100": open,
            "max-h-0 opacity-0": !open,
        })}>
        <div className="mt-base">{children}</div>
      </div>
    </div>);
};
exports.default = SwitchableItem;
