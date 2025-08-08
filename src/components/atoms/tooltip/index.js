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
var RadixTooltip = require("@radix-ui/react-tooltip");
var clsx_1 = require("clsx");
var react_1 = require("react");
var Tooltip = function (_a) {
    var children = _a.children, content = _a.content, open = _a.open, defaultOpen = _a.defaultOpen, onOpenChange = _a.onOpenChange, delayDuration = _a.delayDuration, className = _a.className, side = _a.side, onClick = _a.onClick, props = __rest(_a, ["children", "content", "open", "defaultOpen", "onOpenChange", "delayDuration", "className", "side", "onClick"]);
    return (<RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} delayDuration={delayDuration}>
        <RadixTooltip.Trigger onClick={onClick} asChild={true}>
          <span>{children}</span>
        </RadixTooltip.Trigger>
        <RadixTooltip.Content side={side !== null && side !== void 0 ? side : "bottom"} sideOffset={8} align="center" className={(0, clsx_1.default)("inter-small-semibold text-grey-50", "bg-grey-5 py-[6px] px-[12px] shadow-dropdown rounded", "border border-solid border-grey-20", "max-w-[220px]", className)} {...props}>
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>);
};
exports.default = Tooltip;
