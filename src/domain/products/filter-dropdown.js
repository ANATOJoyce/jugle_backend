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
var medusa_react_1 = require("medusa-react");
var check_icon_1 = require("../../components/fundamentals/icons/check-icon");
var plus_icon_1 = require("../../components/fundamentals/icons/plus-icon");
var container_1 = require("../../components/molecules/filter-dropdown/container");
var item_1 = require("../../components/molecules/filter-dropdown/item");
var save_field_1 = require("../../components/molecules/filter-dropdown/save-field");
var tag_input_1 = require("../../components/molecules/tag-input");
var filter_tab_1 = require("../../components/molecules/filter-tab");
var statusFilters = ["proposed", "draft", "published", "rejected"];
var COLLECTION_PAGE_SIZE = 10;
var ProductsFilter = function (_a) {
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
        return Object.entries(filters || {}).reduce(function (acc, _a) {
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
    var _d = (0, react_1.useState)({
        offset: 0,
        limit: COLLECTION_PAGE_SIZE,
    }), collectionsPagination = _d[0], setCollectionsPagination = _d[1];
    var _e = (0, medusa_react_1.useAdminCollections)(collectionsPagination), collections = _e.collections, count = _e.count, isLoadingCollections = _e.isLoading;
    var product_tags = (0, medusa_react_1.useAdminProductTags)().product_tags;
    var handlePaginateCollections = function (direction) {
        if (direction > 0) {
            setCollectionsPagination(function (prev) { return (__assign(__assign({}, prev), { offset: prev.offset + prev.limit })); });
        }
        else if (direction < 0) {
            setCollectionsPagination(function (prev) { return (__assign(__assign({}, prev), { offset: Math.max(prev.offset - prev.limit, 0) })); });
        }
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
        <item_1.default filterTitle="Collection" options={(collections === null || collections === void 0 ? void 0 : collections.map(function (c) { return ({ value: c.id, label: c.title }); })) || []} isLoading={isLoadingCollections} hasPrev={collectionsPagination.offset > 0} hasMore={collectionsPagination.offset + collectionsPagination.limit <
            (count !== null && count !== void 0 ? count : 0)} onShowPrev={function () { return handlePaginateCollections(-1); }} onShowNext={function () { return handlePaginateCollections(1); }} filters={tempState.collection.filter} open={tempState.collection.open} setFilter={function (v) { return setSingleFilter("collection", v); }}/>
        <div className="flex flex-col w-full pb-2">
          <div className="flex w-full items-center px-3 mb-1 py-1.5 hover:bg-grey-5 rounded cursor-pointer" onClick={function () {
            setSingleFilter("tags", {
                open: !tempState.tags.open,
                filter: tempState.tags.filter,
            });
        }}>
            <div className={"w-5 h-5 flex justify-center border-grey-30 border text-grey-0 rounded-base ".concat(tempState.tags.open && "bg-violet-60")}>
              <span className="self-center">
                {tempState.tags.open && <check_icon_1.default size={16}/>}
              </span>
              <input type="checkbox" className="hidden" id="Tags" name="Tags" value="Tags" checked={tempState.tags.open}/>
            </div>
            <span className={(0, clsx_1.default)("text-grey-90 ml-2", {
            "inter-small-semibold": tempState.tags.open,
            "inter-small-regular": !tempState.tags.open,
        })}>
              Tags
            </span>
          </div>

          {tempState.tags.open && (<div data-tip={tempState.tags.invalidTagsMessage || ""} className="pl-6">
              <tag_input_1.default className="pt-0 pb-1" showLabel={false} placeholder="Spring, summer..." values={(tempState.tags.filter || [])
                .map(function (t) {
                var found = (product_tags || []).find(function (pt) { return pt.id === t; });
                return found && found.value;
            })
                .filter(Boolean)} onValidate={function (newVal) {
                var found = (product_tags || []).find(function (pt) { return pt.value.toLowerCase() === newVal.toLowerCase(); });
                return found && found.id;
            }} onChange={function (values) {
                setSingleFilter("tags", {
                    open: tempState.tags.open,
                    filter: values,
                });
            }}/>
            </div>)}
        </div>
        <save_field_1.default saveFilter={handleSaveTab} name={name} setName={setName}/>
      </container_1.default>
      {tabs &&
            tabs.map(function (t) { return (<filter_tab_1.default key={t.value} onClick={function () { return handleTabClick(t.value); }} label={t.label} isActive={activeTab === t.value} removable={!!t.removable} onRemove={function () { return handleRemoveTab(t.value); }}/>); })}
    </div>);
};
exports.default = ProductsFilter;
