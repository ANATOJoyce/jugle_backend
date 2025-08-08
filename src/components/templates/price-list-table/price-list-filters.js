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
var clsx_1 = require("clsx");
var react_1 = require("react");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var container_1 = require("../../../components/molecules/filter-dropdown/container");
var item_1 = require("../../../components/molecules/filter-dropdown/item");
var save_field_1 = require("../../../components/molecules/filter-dropdown/save-field");
var filter_tab_1 = require("../../../components/molecules/filter-tab");
var statusFilters = ["active", "draft"];
var typeFilters = ["sale", "override"];
var PriceListsFilter = function (_a) {
    var filters = _a.filters, submitFilters = _a.submitFilters, clearFilters = _a.clearFilters, tabs = _a.tabs, onTabClick = _a.onTabClick, activeTab = _a.activeTab, onRemoveTab = _a.onRemoveTab, onSaveTab = _a.onSaveTab;
    var _b = (0, react_1.useState)(filters), tempState = _b[0], setTempState = _b[1];
    var _c = (0, react_1.useState)(""), name = _c[0], setName = _c[1];
    var handleRemoveTab = function (val) {
        if (onRemoveTab) {
            onRemoveTab(val);
        }
    };
    var handleSaveTab = function () {
        if (onSaveTab) {
            onSaveTab(name, tempState);
        }
    };
    var handleTabClick = function (tabName) {
        if (onTabClick) {
            onTabClick(tabName);
        }
    };
    (0, react_1.useEffect)(function () {
        setTempState(filters);
    }, [filters]);
    var onSubmit = function () {
        submitFilters(tempState);
    };
    var onClear = function () {
        clearFilters();
    };
    var numberOfFilters = (0, react_1.useMemo)(function () {
        return Object.entries(filters).reduce(function (acc, _a) {
            var value = _a[1];
            if (value === null || value === void 0 ? void 0 : value.open) {
                acc = acc + 1;
            }
            return acc;
        }, 0);
    }, [filters]);
    var setSingleFilter = function (filterKey, filterVal) {
        setTempState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[filterKey] = filterVal, _a)));
        });
    };
    return (<div className="flex space-x-1">
      <container_1.default submitFilters={onSubmit} clearFilters={onClear} triggerElement={<button className={(0, clsx_1.default)("flex rounded-rounded items-center space-x-1 focus-visible:outline-none focus-visible:shadow-input focus-visible:border-violet-60")}>
            <div className="flex rounded-rounded items-center bg-grey-5 border border-grey-20 inter-small-semibold px-2 h-6">
              Filters
              <div className="text-grey-40 ml-1 flex items-center rounded">
                <span className="text-violet-60 inter-small-semibold">
                  {numberOfFilters ? numberOfFilters : "0"}
                </span>
              </div>
            </div>
            <div className="flex items-center rounded-rounded bg-grey-5 border border-grey-20 inter-small-semibold p-1">
              <plus_icon_1.default size={14}/>
            </div>
          </button>}>
        <item_1.default filterTitle="Status" options={statusFilters} filters={tempState.status.filter} open={tempState.status.open} setFilter={function (v) { return setSingleFilter("status", v); }}/>
        <item_1.default filterTitle="Type" options={typeFilters} filters={tempState.type.filter} open={tempState.type.open} setFilter={function (v) { return setSingleFilter("type", v); }}/>
        <save_field_1.default saveFilter={handleSaveTab} name={name} setName={setName}/>
      </container_1.default>
      {tabs &&
            tabs.map(function (t) { return (<filter_tab_1.default key={t.value} onClick={function () { return handleTabClick(t.value); }} label={t.label} isActive={activeTab === t.value} removable={!!t.removable} onRemove={function () { return handleRemoveTab(t.value); }}/>); })}
    </div>);
};
exports.default = PriceListsFilter;
