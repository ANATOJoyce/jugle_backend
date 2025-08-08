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
var RadioGroupPrimitive = require("@radix-ui/react-radio-group");
var clsx_1 = require("clsx");
var react_1 = require("react");
var tooltip_1 = require("../../atoms/tooltip");
var lock_icon_1 = require("../../fundamentals/icons/lock-icon");
var Root = RadioGroupPrimitive.Root;
var Item = function (_a) {
    var label = _a.label, sublabel = _a.sublabel, description = _a.description, className = _a.className, disabled = _a.disabled, disabledTooltip = _a.disabledTooltip, rest = __rest(_a, ["label", "sublabel", "description", "className", "disabled", "disabledTooltip"]);
    return (<label className={(0, clsx_1.default)("rounded-rounded relative border border-grey-20 p-base flex items-start mb-xsmall gap-base cursor-pointer", { "bg-grey-5 text-grey-40": disabled }, className)} htmlFor={rest.value}>
      {!disabled ? (<RadioGroupPrimitive.Item {...rest} id={rest.value} disabled={disabled} className={(0, clsx_1.default)("radio-outer-ring outline-0", "shrink-0 w-[20px] h-[20px] shadow-[0_0_0_1px] shadow-grey-20 rounded-circle")}>
          <RadioGroupPrimitive.Indicator className={(0, clsx_1.default)("indicator flex items-center justify-center w-full h-full relative", "after:absolute after:inset-0 after:m-auto after:block after:w-[12px] after:h-[12px] after:bg-violet-60 after:rounded-circle")}/>
          {/* Outline indicator: purely stylistical */}
          <RadioGroupPrimitive.Indicator 
        //  we want to hide this indicator from screen readers because the previous one is enough
        aria-hidden="true" className={(0, clsx_1.default)("absolute inset-0 shadow-violet-60 shadow-[0_0_0_2px] rounded-rounded")}/>
        </RadioGroupPrimitive.Item>) : (<tooltip_1.default content={disabledTooltip}>
          <lock_icon_1.default size={20} className="text-grey-40"/>
        </tooltip_1.default>)}
      <div className="truncate">
        <div className="flex items-center">
          <p className="inter-base-semibold truncate">
            {label}{" "}
            {sublabel ? (<span className="inter-small-regular">{sublabel}</span>) : null}
          </p>
        </div>
        {description && (<p className={(0, clsx_1.default)("inter-small-regular text-grey-50 mt-2xsmall truncate", {
                "text-grey-40": disabled,
            })}>
            {description}
          </p>)}
      </div>
    </label>);
};
var SimpleItem = function (_a) {
    var _b;
    var label = _a.label, description = _a.description, className = _a.className, rest = __rest(_a, ["label", "description", "className"]);
    return (<label className={(0, clsx_1.default)("flex items-center mr-large last:mr-0", (_b = {},
            _b["opacity-50 select-none pointer-events-none"] = rest.disabled,
            _b), className)} htmlFor={rest.value}>
      <RadioGroupPrimitive.Item {...rest} id={rest.value} className={(0, clsx_1.default)("radio-outer-ring outline-0", "shrink-0 w-[20px] h-[20px] shadow-[0_0_0_1px] shadow-[#D1D5DB] rounded-circle")}>
        <RadioGroupPrimitive.Indicator className={(0, clsx_1.default)("flex items-center justify-center w-full h-full relative indicator", "after:absolute after:inset-0 after:m-auto after:block after:w-[12px] after:h-[12px] after:bg-violet-60 after:rounded-circle")}/>
      </RadioGroupPrimitive.Item>
      <div className="ml-small inter-base-regular cursor-pointer w-full">
        <span className="ml-small inter-base-regular cursor-pointer">
          {label && label}
        </span>
        <span className="ml-small inter-base-regular cursor-pointer">
          {description && description}
        </span>
      </div>
    </label>);
};
exports.default = { Root: Root, Item: Item, SimpleItem: SimpleItem };
