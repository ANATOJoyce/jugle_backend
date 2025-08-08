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
var RadixSelect = require("@radix-ui/react-select");
var clsx_1 = require("clsx");
var react_1 = require("react");
var check_icon_1 = require("../../fundamentals/icons/check-icon");
var chevron_down_1 = require("../../fundamentals/icons/chevron-down");
var chevron_up_1 = require("../../fundamentals/icons/chevron-up");
var ICON_SIZE = 16;
var NativeSelect = function (_a) {
    var children = _a.children, triggerProps = _a.triggerProps, props = __rest(_a, ["children", "triggerProps"]);
    return (<RadixSelect.Root {...props}>
      <RadixSelect.SelectTrigger className="flex items-center inter-base-semibold gap-3 px-2" {...triggerProps}>
        <RadixSelect.Value />
        <RadixSelect.Icon>
          <chevron_down_1.default size={ICON_SIZE}/>
        </RadixSelect.Icon>
      </RadixSelect.SelectTrigger>
      <RadixSelect.Content className="rounded-rounded scrollbar-hide border px-2 py-2 border-grey-20 bg-grey-0 w-full flex shadow-dropdown">
        <RadixSelect.ScrollUpButton className="h-[25px] flex items-center justify-center bg-gradient-to-b from-transparent to-grey-0">
          <chevron_up_1.default size={ICON_SIZE}/>
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="p-2">{children}</RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="h-[25px] flex items-center justify-center bg-gradient-to-b from-transparent to-grey-0">
          <chevron_down_1.default size={ICON_SIZE}/>
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Root>);
};
var Item = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (<RadixSelect.Item className={(0, clsx_1.default)("flex relative justify-start py-1.5 px-9 items-center inter-base-regular rounded hover:bg-grey-10")} {...props}>
    <RadixSelect.ItemIndicator className="bold-active-item absolute left-2.5 flex items-center justify-center pr-2.5">
      <check_icon_1.default size={ICON_SIZE}/>
    </RadixSelect.ItemIndicator>
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>);
};
NativeSelect.Item = Item;
exports.default = NativeSelect;
