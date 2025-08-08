"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var RadixCollapsible = require("@radix-ui/react-collapsible");
var RadixPopover = require("@radix-ui/react-popover");
var clsx_1 = require("clsx");
var moment_1 = require("moment");
var react_1 = require("react");
var filters_1 = require("../../../utils/filters");
var time_1 = require("../../../utils/time");
var date_picker_1 = require("../../atoms/date-picker/date-picker");
var spinner_1 = require("../../atoms/spinner");
var arrow_right_icon_1 = require("../../fundamentals/icons/arrow-right-icon");
var check_icon_1 = require("../../fundamentals/icons/check-icon");
var chevron_up_1 = require("../../fundamentals/icons/chevron-up");
var input_1 = require("../input");
var DAY_IN_SECONDS = 86400;
var FilterDropdownItem = function (_a) {
    var filterTitle = _a.filterTitle, options = _a.options, filters = _a.filters, open = _a.open, setFilter = _a.setFilter, isLoading = _a.isLoading, hasMore = _a.hasMore, hasPrev = _a.hasPrev, onShowNext = _a.onShowNext, onShowPrev = _a.onShowPrev;
    var prefilled = (0, react_1.useMemo)(function () {
        try {
            var toReturn = filters.reduce(function (acc, f) {
                acc[f] = true;
                return acc;
            }, {});
            return toReturn;
        }
        catch (e) {
            return {};
        }
    }, [filters]);
    var _b = (0, react_1.useState)(prefilled), checked = _b[0], setChecked = _b[1];
    var handlePrev = function () {
        if (onShowPrev) {
            onShowPrev();
        }
    };
    var handleNext = function () {
        if (onShowNext) {
            onShowNext();
        }
    };
    (0, react_1.useEffect)(function () {
        if (!open) {
            setChecked({});
        }
    }, [open]);
    var onCheck = function (filter) {
        var checkedState = checked;
        if (!checkedState[filter]) {
            checkedState[filter] = true;
        }
        else {
            checkedState[filter] = false;
        }
        var newFilter = Object.entries(checkedState).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value === true) {
                acc.push(key);
            }
            return acc;
        }, []);
        setChecked(checkedState);
        setFilter({ open: open, filter: newFilter });
    };
    return (<div className={(0, clsx_1.default)("w-full cursor-pointer", {
            "inter-small-semibold": open,
            "inter-small-regular": !open,
        })}>
      <RadixCollapsible.Root className="w-full" open={open} onOpenChange={function (open) { return setFilter({ filter: filters, open: open }); }}>
        <RadixCollapsible.Trigger className={(0, clsx_1.default)("py-1.5 px-3 flex w-full items-center hover:bg-grey-5 rounded justify-between", {
            "inter-small-semibold": open,
            "inter-small-regular": !open,
        })}>
          <div className="flex items-center">
            <div className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base ".concat(open && "bg-violet-60")}>
              <span className="self-center">
                {open && <check_icon_1.default size={16}/>}
              </span>
            </div>
            <input id={filterTitle} className="hidden" checked={open} type="checkbox"/>
            <span className="ml-2">{filterTitle}</span>
          </div>
          {open && (<span className="text-grey-50 self-end">
              <chevron_up_1.default size={20}/>
            </span>)}
        </RadixCollapsible.Trigger>
        <RadixCollapsible.Content className="w-full">
          {hasPrev && (<div className="py-2 pl-6 flex">
              <button onClick={handlePrev} className="font-semibold hover:text-violet-60 text-grey-90">
                Back
              </button>
            </div>)}
          {isLoading ? (<div className="py-1 flex justify-center items-center">
              <spinner_1.default size={"large"} variant={"secondary"}/>
            </div>) : filterTitle === "Date" ? (<DateFilter options={options} open={open} setFilter={setFilter} existingDate={filters} filterTitle={filterTitle}/>) : (options.map(function (el, i) {
            var value;
            var label;
            if (typeof el === "string") {
                value = el;
                label = el;
            }
            else {
                value = el.value;
                label = el.label;
            }
            return (<div className={(0, clsx_1.default)("w-full flex hover:bg-grey-20 my-1 py-1.5 pl-6 items-center rounded", {
                    "inter-small-semibold": checked[value],
                    "inter-small-regular": !checked[value],
                })} key={i} onClick={function () { return onCheck(value); }}>
                  <div className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border mr-2 rounded-base ".concat(checked[value] === true && "bg-violet-60")}>
                    <span className="self-center">
                      {checked[value] === true && <check_icon_1.default size={16}/>}
                    </span>
                  </div>
                  <input type="checkbox" className="hidden" id={value} name={label} value={value} checked={checked[value] === true} style={{ marginRight: "5px" }}/>
                  {label}
                </div>);
        }))}
          {hasMore && (<div className="py-2 pl-6 flex">
              <button onClick={handleNext} className="font-semibold hover:text-violet-60 text-grey-90">
                Show more
              </button>
            </div>)}
        </RadixCollapsible.Content>
      </RadixCollapsible.Root>
    </div>);
};
exports.default = FilterDropdownItem;
var parseDateFilter = function (filter) {
    if (!filter) {
        return {};
    }
    var dateEntries = Object.entries(filter);
    /**
     * From a query object we need to figure out which date filter that is
     * being used of the following:
     *
     * InTheLast: { gt: "x|[days|months]" }
     * OlderThan: { lt: "x|[days|months]" }
     * Between: { lt: [ts], gt: [ts] }
     * After: { gt: [ts] }
     * Before: { lt: [ts] },
     * EqualTo: { lt: [midnight], gt: [morning] }
     *
     */
    var flags = {
        sawGt: false,
        sawLt: false,
        sawGtRelative: false,
        sawLtRelative: false,
    };
    for (var _i = 0, dateEntries_1 = dateEntries; _i < dateEntries_1.length; _i++) {
        var _a = dateEntries_1[_i], key = _a[0], value = _a[1];
        switch (key) {
            case "gt": {
                flags.sawGt = true;
                flags.sawGtRelative = value.includes("|");
                break;
            }
            case "lt": {
                flags.sawLt = true;
                flags.sawLtRelative = value.includes("|");
                break;
            }
            default: {
                break;
            }
        }
    }
    if (flags.sawGt && flags.sawGtRelative) {
        var _b = filter.gt.split("|"), amount = _b[0], daysMonths = _b[1];
        return {
            filterType: filters_1.DateFilters.InTheLast,
            daysMonthsValue: daysMonths,
            relativeAmount: amount,
            value: null,
        };
    }
    if (flags.sawLt && flags.sawLtRelative) {
        var _c = filter.lt.split("|"), amount = _c[0], daysMonths = _c[1];
        return {
            filterType: filters_1.DateFilters.OlderThan,
            daysMonthsValue: daysMonths,
            relativeAmount: amount,
            value: null,
        };
    }
    if (flags.sawLt && flags.sawGt) {
        var startDate = filter.gt;
        var endDate = filter.lt;
        if (endDate - startDate === DAY_IN_SECONDS) {
            return {
                filterType: filters_1.DateFilters.EqualTo,
                value: moment_1.default.unix(startDate).toDate(),
            };
        }
    }
    if (flags.sawLt) {
        var endDate = filter.lt;
        return {
            filterType: filters_1.DateFilters.Before,
            value: moment_1.default.unix(endDate).toDate(),
        };
    }
    if (flags.sawGt) {
        var startDate = filter.gt;
        return {
            filterType: filters_1.DateFilters.After,
            value: moment_1.default.unix(startDate).toDate(),
        };
    }
    return {};
};
var DateFilter = function (_a) {
    var options = _a.options, open = _a.open, setFilter = _a.setFilter, existingDate = _a.existingDate, existingFilter = _a.existingFilter;
    var initialVals = (0, react_1.useMemo)(function () {
        var parsed = parseDateFilter(existingDate);
        return __assign({ filterType: options[0], value: null, relativeAmount: undefined, daysMonthsValue: "days" }, parsed);
    }, [existingDate]);
    var _b = (0, react_1.useState)(initialVals.filterType), currentFilter = _b[0], setCurrentFilter = _b[1];
    var _c = (0, react_1.useState)(initialVals.relativeAmount), relativeAmount = _c[0], setRelativeAmount = _c[1];
    var _d = (0, react_1.useState)(initialVals.daysMonthsValue), daysMonthsValue = _d[0], setDaysMonthsValue = _d[1];
    var _e = (0, react_1.useState)(initialVals.value), startDate = _e[0], setStartDate = _e[1];
    (0, react_1.useEffect)(function () {
        switch (currentFilter) {
            case filters_1.DateFilters.InTheLast:
            case filters_1.DateFilters.OlderThan:
                setFilter({
                    open: true,
                    filter: handleDateFormat(relativeAmount),
                });
                break;
            case filters_1.DateFilters.EqualTo:
                setFilter({
                    open: true,
                    filter: handleDateFormat(startDate),
                });
                break;
            default:
                setFilter({
                    open: true,
                    filter: handleDateFormat(startDate),
                });
        }
    }, [currentFilter, relativeAmount, daysMonthsValue, startDate]);
    var handleDateFormat = function (value) {
        switch (currentFilter) {
            case filters_1.DateFilters.InTheLast: {
                // Relative date
                return { gt: "".concat(value, "|").concat(daysMonthsValue) };
            }
            case filters_1.DateFilters.OlderThan: {
                // Relative date:
                return { lt: "".concat(value, "|").concat(daysMonthsValue) };
            }
            case filters_1.DateFilters.EqualTo: {
                var momentToSet = (0, time_1.atMidnight)(value);
                if (momentToSet) {
                    var day = (0, time_1.dateToUnixTimestamp)(momentToSet.toDate());
                    var nextDay = (0, time_1.dateToUnixTimestamp)((0, time_1.addHours)(momentToSet, 24).toDate());
                    return { gt: day, lt: nextDay };
                }
                else {
                    return {};
                }
            }
            case filters_1.DateFilters.After: {
                var momentToSet = (0, time_1.atMidnight)(value);
                if (momentToSet) {
                    return { gt: (0, time_1.dateToUnixTimestamp)(momentToSet.toDate()) };
                }
                else {
                    return {};
                }
            }
            case filters_1.DateFilters.Before: {
                var momentToSet = (0, time_1.atMidnight)(value);
                if (momentToSet) {
                    return { lt: (0, time_1.dateToUnixTimestamp)(momentToSet.toDate()) };
                }
                else {
                    return {};
                }
            }
            default: {
                return {};
            }
        }
    };
    var handleFilterContent = function () {
        switch (currentFilter) {
            case filters_1.DateFilters.InTheLast:
            case filters_1.DateFilters.OlderThan:
                return (<div className="flex flex-col w-full">
            <input_1.default className="pt-0 pb-1" type="number" placeholder="2" value={relativeAmount} onChange={function (e) {
                        setRelativeAmount(e.target.value);
                    }}/>
            <RightPopover trigger={<div className="flex w-full items-center justify-between bg-grey-5 border border-grey-20 rounded inter-small-semibold text-grey-90 px-3 py-1.5">
                  <label>{daysMonthsValue}</label>
                  <span className="text-grey-50">
                    <arrow_right_icon_1.default size={16}/>
                  </span>
                </div>}>
              <PopoverOptions options={["days", "months"]} onClick={setDaysMonthsValue} selectedItem={daysMonthsValue}/>
            </RightPopover>
          </div>);
            case filters_1.DateFilters.EqualTo:
            case filters_1.DateFilters.After:
            case filters_1.DateFilters.Before:
                return (<div className="flex flex-col w-full">
            <RightPopover trigger={<div className="flex w-full items-center justify-between bg-grey-5 border border-grey-20 rounded inter-small-semibold text-grey-90 px-3 py-1.5">
                  <label>
                    {startDate ? (0, moment_1.default)(startDate).format("MM.DD.YYYY") : "-"}
                  </label>
                  <span className="text-grey-50">
                    <arrow_right_icon_1.default size={16}/>
                  </span>
                </div>}>
              <date_picker_1.CalendarComponent date={startDate} onChange={function (date) {
                        setStartDate(date);
                    }}/>
            </RightPopover>
          </div>);
            default:
                return <span>{currentFilter} - coming soon!</span>;
        }
    };
    return (<div className="pl-9">
      <RightPopover trigger={<div className="flex w-full items-center justify-between bg-grey-5 border border-grey-20 rounded inter-small-semibold text-grey-90 px-3 py-1.5">
            <label>{currentFilter}</label>
            <span className="text-grey-50">
              <arrow_right_icon_1.default size={16}/>
            </span>
          </div>}>
        <PopoverOptions options={options} onClick={function (filter) { return setCurrentFilter(filter); }} selectedItem={currentFilter}/>
      </RightPopover>
      {currentFilter && <div className="w-full">{handleFilterContent()}</div>}
    </div>);
};
var PopoverOptions = function (_a) {
    var options = _a.options, onClick = _a.onClick, selectedItem = _a.selectedItem;
    return (<>
      {options.map(function (item) { return (<div onClick={function (e) {
                e.stopPropagation();
                onClick(item);
            }} className={(0, clsx_1.default)("px-3 py-1.5 my-1 flex items-center rounded hover:bg-grey-5 cursor-pointer", {
                "inter-small-semibold": item === selectedItem,
                "inter-small-regular": item !== selectedItem,
            })}>
          <div className={(0, clsx_1.default)("rounded-full flex items-center justify-center mr-2 w-4 h-4", {
                "border-2 border-violet-60": item === selectedItem,
                "border border-grey-30 ": item !== selectedItem,
            })}>
            {item === selectedItem && (<div className="rounded-full w-2 h-2 bg-violet-60"/>)}
          </div>
          {item}
        </div>); })}
    </>);
};
var RightPopover = function (_a) {
    var trigger = _a.trigger, children = _a.children;
    return (<RadixPopover.Root>
    <RadixPopover.Trigger className="w-full my-1">
      {trigger}
    </RadixPopover.Trigger>
    <RadixPopover.Content side="right" align="start" alignOffset={-8} sideOffset={20} className="flex flex-col bg-grey-0 rounded-rounded shadow-dropdown p-2 top-2/4">
      {children}
    </RadixPopover.Content>
  </RadixPopover.Root>);
};
