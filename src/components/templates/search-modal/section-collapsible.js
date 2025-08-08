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
var RadixCollapsible = require("@radix-ui/react-collapsible");
var react_1 = require("react");
var chevron_down_1 = require("../../fundamentals/icons/chevron-down");
var chevron_up_1 = require("../../fundamentals/icons/chevron-up");
var SectionCollapsible = function (_a) {
    var title = _a.title, length = _a.length, children = _a.children, props = __rest(_a, ["title", "length", "children"]);
    var _b = react_1.default.useState(true), open = _b[0], setOpen = _b[1];
    return (<RadixCollapsible.Root open={open} onOpenChange={setOpen} {...props}>
      <RadixCollapsible.Trigger asChild>
        <button className="px-base py-small w-full justify-between flex items-center bg-grey-10 rounded-rounded">
          <h6 className="inter-base-semibold text-grey-90">
            {title}
            <span className="inter-base-regular text-grey-40"> ({length})</span>
          </h6>
          {open ? (<chevron_down_1.default className="text-grey-40"/>) : (<chevron_up_1.default className="text-grey-40"/>)}
        </button>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content>{children}</RadixCollapsible.Content>
    </RadixCollapsible.Root>);
};
exports.default = SectionCollapsible;
