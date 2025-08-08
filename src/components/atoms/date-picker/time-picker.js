"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var PopoverPrimitive = require("@radix-ui/react-popover");
var clsx_1 = require("clsx");
var moment_1 = require("moment");
var react_1 = require("react");
var arrow_down_icon_1 = require("../../fundamentals/icons/arrow-down-icon");
var clock_icon_1 = require("../../fundamentals/icons/clock-icon");
var input_container_1 = require("../../fundamentals/input-container");
var input_header_1 = require("../../fundamentals/input-header");
var number_scroller_1 = require("../number-scroller");
var lodash_1 = require("lodash");
var TimePicker = function (_a) {
    var _b, _c;
    var date = _a.date, onSubmitDate = _a.onSubmitDate, _d = _a.label, label = _d === void 0 ? "start date" : _d, _e = _a.required, required = _e === void 0 ? false : _e, tooltipContent = _a.tooltipContent, tooltip = _a.tooltip;
    var _f = (0, react_1.useState)((_b = new Date(date)) === null || _b === void 0 ? void 0 : _b.getUTCMinutes()), selectedMinute = _f[0], setSelectedMinute = _f[1];
    var _g = (0, react_1.useState)((_c = new Date(date)) === null || _c === void 0 ? void 0 : _c.getUTCHours()), selectedHour = _g[0], setSelectedHour = _g[1];
    (0, react_1.useEffect)(function () {
        var _a, _b;
        setSelectedMinute((_a = new Date(date)) === null || _a === void 0 ? void 0 : _a.getUTCMinutes());
        setSelectedHour((_b = new Date(date)) === null || _b === void 0 ? void 0 : _b.getUTCHours());
    }, [date]);
    (0, react_1.useEffect)(function () {
        if (date && !(0, lodash_1.isNil)(selectedHour) && !(0, lodash_1.isNil)(selectedMinute)) {
            var newDate = new Date(new Date(date).getTime());
            newDate.setUTCHours(selectedHour);
            newDate.setUTCMinutes(selectedMinute);
            onSubmitDate(newDate);
        }
    }, [selectedMinute, selectedHour]);
    var _h = (0, react_1.useState)(false), isOpen = _h[0], setIsOpen = _h[1];
    var minuteNumbers = __spreadArray([], Array(60).keys(), true);
    var hourNumbers = __spreadArray([], Array(24).keys(), true);
    return (<div className="w-full">
      <PopoverPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button className={(0, clsx_1.default)("w-full rounded-rounded border ", {
            "shadow-input border-violet-60": isOpen,
            "border-grey-20": !isOpen,
        })}>
            <input_container_1.default className="border-0 shadown-none focus-within:shadow-none">
              <div className="w-full flex text-grey-50 pr-0.5 justify-between">
                <input_header_1.default {...{
        label: label,
        required: required,
        tooltipContent: tooltipContent,
        tooltip: tooltip,
    }}/>
                <arrow_down_icon_1.default size={16}/>
              </div>
              <div className="w-full items-center flex text-left text-grey-40">
                <clock_icon_1.default size={16}/>
                <span className="mx-1">UTC</span>
                <span className="text-grey-90">
                  {moment_1.default.utc(date).format("HH:mm")}
                </span>
              </div>
            </input_container_1.default>
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content side="top" sideOffset={8} className="rounded-rounded scrollbar-hide border px-6 pt-6 pb-4 border-grey-20 bg-grey-0 w-full flex shadow-dropdown">
          <number_scroller_1.default numbers={hourNumbers} selected={selectedHour} onSelect={function (n) { return setSelectedHour(n); }} className="pr-4"/>
          <number_scroller_1.default numbers={minuteNumbers} selected={selectedMinute} onSelect={function (n) { return setSelectedMinute(n); }}/>
          <div className="absolute bottom-4 left-0 right-0 bg-gradient-to-b from-transparent to-grey-0 h-xlarge z-10"/>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </div>);
};
exports.default = TimePicker;
