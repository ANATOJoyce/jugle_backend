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
var AccordionPrimitive = require("@radix-ui/react-accordion");
var clsx_1 = require("clsx");
var react_1 = require("react");
var icon_tooltip_1 = require("../../molecules/icon-tooltip");
var Accordion = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (<AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>);
};
var Item = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, description = _a.description, required = _a.required, tooltip = _a.tooltip, children = _a.children, className = _a.className, _b = _a.headingSize, headingSize = _b === void 0 ? "large" : _b, _c = _a.customTrigger, customTrigger = _c === void 0 ? undefined : _c, _d = _a.forceMountContent, forceMountContent = _d === void 0 ? undefined : _d, props = __rest(_a, ["title", "subtitle", "description", "required", "tooltip", "children", "className", "headingSize", "customTrigger", "forceMountContent"]);
    var headerClass = (0, clsx_1.default)({
        "inter-small-semibold": headingSize === "small",
        "inter-base-semibold": headingSize === "medium",
        "inter-large-semibold": headingSize === "large",
    });
    var paddingClasses = (0, clsx_1.default)({
        "pb-0 mb-6 ": headingSize === "medium",
        "pb-5 radix-state-open:pb-5xlarge mb-5 ": headingSize === "large",
    });
    return (<AccordionPrimitive.Item {...props} className={(0, clsx_1.default)("border-b border-grey-20 last:mb-0 group", { "opacity-30": props.disabled }, paddingClasses, className)}>
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger className="w-full" asChild>
          <div className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-x-2xsmall">
                <span className={headerClass}>
                  {title}
                  {required && <span className="text-rose-50">*</span>}
                </span>
                {tooltip && <icon_tooltip_1.default content={tooltip}/>}
              </div>
              {customTrigger || <MorphingTrigger />}
            </div>
            {subtitle && (<span className="inter-small-regular text-grey-50 mt-1">
                {subtitle}
              </span>)}
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content forceMount={forceMountContent} className={(0, clsx_1.default)("overflow-hidden radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open px-px")}>
        <div className="inter-base-regular group-radix-state-closed:animate-accordion-close">
          {description && <p className="text-grey-50 ">{description}</p>}
          <div className="w-full">{children}</div>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>);
};
Accordion.Item = Item;
var MorphingTrigger = function () {
    return (<div className="p-[6px] relative group btn-ghost">
      <div className="w-5 h-5">
        <span className="absolute bg-grey-50 rounded-circle inset-y-[31.75%] left-[48%] right-1/2 w-[1.5px] group-radix-state-open:rotate-90 duration-300"/>
        <span className="absolute bg-grey-50 rounded-circle inset-x-[31.75%] top-[48%] bottom-1/2 h-[1.5px] group-radix-state-open:rotate-90 group-radix-state-open:left-1/2 group-radix-state-open:right-1/2 duration-300"/>
      </div>
    </div>);
};
exports.default = Accordion;
