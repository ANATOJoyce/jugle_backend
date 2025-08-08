"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RadixCollapsible = require("@radix-ui/react-collapsible");
var clsx_1 = require("clsx");
var react_1 = require("react");
var arrow_down_icon_1 = require("../../fundamentals/icons/arrow-down-icon");
var arrow_up_icon_1 = require("../../fundamentals/icons/arrow-up-icon");
var DetailsCollapsible = function (_a) {
    var _b;
    var rootProps = _a.rootProps, triggerProps = _a.triggerProps, contentProps = _a.contentProps, children = _a.children;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var Icon = open ? arrow_up_icon_1.default : arrow_down_icon_1.default;
    var label = open ? "Hide additional details" : "Show additional details";
    return (<RadixCollapsible.Root {...rootProps} onOpenChange={function (state) { return setOpen(state); }}>
      <RadixCollapsible.Trigger {...triggerProps} type="button" // needed to prevent from tampering with form submission
     className={(0, clsx_1.default)((_b = {}, _b["mb-6"] = open, _b), triggerProps === null || triggerProps === void 0 ? void 0 : triggerProps.className)}>
        <div className="flex items-center">
          <Icon size={"20"}/>
          <div className="ml-1">{label}</div>
        </div>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content {...contentProps} className={(0, clsx_1.default)({ hidden: (contentProps === null || contentProps === void 0 ? void 0 : contentProps.forceMount) && !open })}>
        {children}
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>);
};
exports.default = DetailsCollapsible;
