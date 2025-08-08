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
var clsx_1 = require("clsx");
var react_1 = require("react");
var use_scroll_1 = require("../../hooks/use-scroll");
var button_1 = require("../fundamentals/button");
var actionables_1 = require("../molecules/actionables");
var BodyCard = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, events = _a.events, actionables = _a.actionables, _b = _a.forceDropdown, forceDropdown = _b === void 0 ? false : _b, customActionable = _a.customActionable, status = _a.status, customHeader = _a.customHeader, className = _a.className, children = _a.children, rest = __rest(_a, ["title", "subtitle", "events", "actionables", "forceDropdown", "customActionable", "status", "customHeader", "className", "children"]);
    var _c = (0, use_scroll_1.useScroll)({ threshold: 16 }), isScrolled = _c.isScrolled, scrollListener = _c.scrollListener;
    return (<div className={(0, clsx_1.default)("rounded-rounded border bg-grey-0 border-grey-20 h-full overflow-hidden flex flex-col min-h-[350px] w-full", className)} {...rest}>
      <div className="relative">
        {isScrolled && (<div className="absolute rounded-t-rounded top-0 left-0 right-0 bg-gradient-to-b from-grey-0 to-[rgba(255,255,255,0)] h-xlarge z-10"/>)}
      </div>
      <div className="pt-medium px-xlarge flex flex-col grow overflow-y-auto" onScroll={scrollListener}>
        <div className="flex items-center justify-between mt-6 h-xlarge">
          {customHeader ? (<div>{customHeader}</div>) : title ? (<h1 className="inter-xlarge-semibold text-grey-90">{title}</h1>) : (<div />)}

          <div className="flex items-center space-x-2">
            {status && status}
            <actionables_1.default actions={actionables} forceDropdown={forceDropdown} customTrigger={customActionable}/>
          </div>
        </div>
        {subtitle && (<h3 className="inter-small-regular pt-1.5 text-grey-50">
            {subtitle}
          </h3>)}
        {children && (<div className="flex flex-col grow my-large">{children}</div>)}
      </div>
      {events && events.length > 0 ? (<div className="pb-large pt-base px-xlarge border-t border-grey-20">
          <div className="flex items-center flex-row-reverse">
            {events.map(function (event, i) {
                return (<button_1.default key={i} onClick={event.onClick} className="first:ml-xsmall min-w-[130px] justify-center" variant={i === 0 ? "primary" : "ghost"} size={"small"} type={event.type}>
                  {event.label}
                </button_1.default>);
            })}
          </div>
        </div>) : (<div className="min-h-[24px]"/>)}
    </div>);
};
exports.default = BodyCard;
