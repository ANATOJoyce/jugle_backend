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
exports.CalendarComponent = void 0;
var PopoverPrimitive = require("@radix-ui/react-popover");
var clsx_1 = require("clsx");
var moment_1 = require("moment");
var react_1 = require("react");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var button_1 = require("../../fundamentals/button");
var arrow_down_icon_1 = require("../../fundamentals/icons/arrow-down-icon");
var input_container_1 = require("../../fundamentals/input-container");
var input_header_1 = require("../../fundamentals/input-header");
var custom_header_1 = require("./custom-header");
var getDateClassname = function (d, tempDate) {
    return (0, moment_1.default)(d).format("YY,MM,DD") === (0, moment_1.default)(tempDate).format("YY,MM,DD")
        ? "date chosen"
        : "date ".concat((0, moment_1.default)(d).format("YY,MM,DD") < (0, moment_1.default)(new Date()).format("YY,MM,DD")
            ? "past"
            : "");
};
var DatePicker = function (_a) {
    var date = _a.date, onSubmitDate = _a.onSubmitDate, _b = _a.label, label = _b === void 0 ? "start date" : _b, _c = _a.required, required = _c === void 0 ? false : _c, tooltipContent = _a.tooltipContent, tooltip = _a.tooltip;
    var _d = (0, react_1.useState)(date), tempDate = _d[0], setTempDate = _d[1];
    var _e = (0, react_1.useState)(false), isOpen = _e[0], setIsOpen = _e[1];
    (0, react_1.useEffect)(function () { return setTempDate(date); }, [isOpen]);
    var submitDate = function () {
        // update only date, month and year
        var newDate = new Date(date.getTime());
        newDate.setUTCDate(tempDate.getUTCDate());
        newDate.setUTCMonth(tempDate.getUTCMonth());
        newDate.setUTCFullYear(tempDate.getUTCFullYear());
        onSubmitDate(newDate);
        setIsOpen(false);
    };
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
              <label className="w-full text-left">
                {(0, moment_1.default)(date).format("ddd, DD MMM YYYY")}
              </label>
            </input_container_1.default>
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content side="top" sideOffset={8} className="rounded-rounded px-8  border border-grey-20 bg-grey-0 w-full shadow-dropdown">
          <exports.CalendarComponent date={tempDate} onChange={setTempDate}/>
          <div className="flex w-full mb-8 mt-5">
            <button_1.default variant="ghost" size="medium" onClick={function () { return setIsOpen(false); }} className="mr-2 w-1/3 flex justify-center border border-grey-20">
              Cancel
            </button_1.default>
            <button_1.default size="medium" variant="primary" onClick={function () { return submitDate(); }} className="w-2/3 flex justify-center">{"Set ".concat(label)}</button_1.default>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </div>);
};
var CalendarComponent = function (_a) {
    var date = _a.date, onChange = _a.onChange;
    return (<react_datepicker_1.default selected={date} inline onChange={onChange} calendarClassName="date-picker" dayClassName={function (d) { return getDateClassname(d, date); }} renderCustomHeader={function (_a) {
        var props = __rest(_a, []);
        return <custom_header_1.default {...props}/>;
    }}/>);
};
exports.CalendarComponent = CalendarComponent;
exports.default = DatePicker;
