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
var lodash_1 = require("lodash");
var medusa_react_1 = require("medusa-react");
var qs_1 = require("qs");
var react_1 = require("react");
var react_table_1 = require("react-table");
var spinner_1 = require("../../atoms/spinner");
var table_1 = require("../../molecules/table");
var discount_filter_dropdown_1 = require("../discount-filter-dropdown");
var use_promotion_columns_1 = require("./use-promotion-columns");
var use_promotion_filters_1 = require("./use-promotion-filters");
var use_promotion_row_actions_1 = require("./use-promotion-row-actions");
var DEFAULT_PAGE_SIZE = 15;
var defaultQueryProps = {};
var DiscountTable = function () {
    var _a;
    var _b = (0, use_promotion_filters_1.usePromotionFilters)(location.search, defaultQueryProps), removeTab = _b.removeTab, setTab = _b.setTab, saveTab = _b.saveTab, filterTabs = _b.availableTabs, activeFilterTab = _b.activeFilterTab, reset = _b.reset, paginate = _b.paginate, setFilters = _b.setFilters, filters = _b.filters, setFreeText = _b.setQuery, queryObject = _b.queryObject, representationObject = _b.representationObject;
    var offs = parseInt(queryObject === null || queryObject === void 0 ? void 0 : queryObject.offset) || 0;
    var lim = parseInt(queryObject.limit) || DEFAULT_PAGE_SIZE;
    var _c = (0, medusa_react_1.useAdminDiscounts)(__assign({ is_dynamic: false, expand: "rule,rule.conditions,rule.conditions.products" }, queryObject)), discounts = _c.discounts, isLoading = _c.isLoading, count = _c.count;
    var _d = (0, react_1.useState)(""), query = _d[0], setQuery = _d[1];
    var _e = (0, react_1.useState)(0), numPages = _e[0], setNumPages = _e[1];
    (0, react_1.useEffect)(function () {
        if (count && queryObject.limit) {
            var controlledPageCount = Math.ceil(count / queryObject.limit);
            if (controlledPageCount !== numPages) {
                setNumPages(controlledPageCount);
            }
        }
    }, [count, queryObject.limit]);
    var columns = (0, use_promotion_columns_1.usePromotionTableColumns)()[0];
    var _f = (0, react_table_1.useTable)({
        columns: columns,
        data: discounts || [],
        manualPagination: true,
        initialState: {
            pageSize: lim,
            pageIndex: offs / lim,
        },
        pageCount: numPages,
        autoResetPage: false,
    }, react_table_1.usePagination), getTableProps = _f.getTableProps, getTableBodyProps = _f.getTableBodyProps, headerGroups = _f.headerGroups, rows = _f.rows, prepareRow = _f.prepareRow, canPreviousPage = _f.canPreviousPage, canNextPage = _f.canNextPage, pageCount = _f.pageCount, gotoPage = _f.gotoPage, nextPage = _f.nextPage, previousPage = _f.previousPage, pageIndex = _f.state.pageIndex;
    // Debounced search
    (0, react_1.useEffect)(function () {
        var delayDebounceFn = setTimeout(function () {
            if (query) {
                setFreeText(query);
                gotoPage(0);
            }
            else {
                // if we delete query string, we reset the table view
                reset();
            }
        }, 400);
        return function () { return clearTimeout(delayDebounceFn); };
    }, [query]);
    var handleNext = function () {
        if (canNextPage) {
            paginate(1);
            nextPage();
        }
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            paginate(-1);
            previousPage();
        }
    };
    var updateUrlFromFilter = function (obj) {
        if (obj === void 0) { obj = {}; }
        var stringified = qs_1.default.stringify(obj);
        window.history.replaceState("/a/discounts", "", "".concat("?".concat(stringified)));
    };
    var refreshWithFilters = function () {
        var filterObj = representationObject;
        if ((0, lodash_1.isEmpty)(filterObj)) {
            updateUrlFromFilter({ offset: 0, limit: DEFAULT_PAGE_SIZE });
        }
        else {
            updateUrlFromFilter(filterObj);
        }
    };
    var clearFilters = function () {
        reset();
        setQuery("");
    };
    (0, react_1.useEffect)(function () {
        refreshWithFilters();
    }, [representationObject]);
    return (<div className="w-full overflow-y-auto flex flex-col justify-between min-h-[300px] h-full ">
      <table_1.default filteringOptions={<discount_filter_dropdown_1.default filters={filters} submitFilters={setFilters} clearFilters={clearFilters} tabs={filterTabs} onTabClick={setTab} activeTab={activeFilterTab} onRemoveTab={removeTab} onSaveTab={saveTab}/>} enableSearch handleSearch={setQuery} searchPlaceholder="Search by code or description..." searchValue={query} {...getTableProps()} className={(0, clsx_1.default)((_a = {}, _a["relative"] = isLoading, _a))}>
        <table_1.default.Head>
          {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup, index) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(function (col, headerIndex) { return (<table_1.default.HeadCell {...col.getHeaderProps()}>
                  {col.render("Header")}
                </table_1.default.HeadCell>); })}
            </table_1.default.HeadRow>); })}
        </table_1.default.Head>
        {isLoading || !discounts ? (<div className="flex w-full h-full absolute items-center justify-center mt-10">
            <div className="">
              <spinner_1.default size={"large"} variant={"secondary"}/>
            </div>
          </div>) : (<table_1.default.Body {...getTableBodyProps()}>
            {rows.map(function (row, rowIndex) {
                prepareRow(row);
                return <PromotionRow row={row}/>;
            })}
          </table_1.default.Body>)}
      </table_1.default>
      <table_1.TablePagination count={count} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + rows.length} title="Discounts" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
    </div>);
};
var PromotionRow = function (_a) {
    var row = _a.row;
    var promotion = row.original;
    var getRowActions = (0, use_promotion_row_actions_1.default)(promotion).getRowActions;
    return (<table_1.default.Row color={"inherit"} linkTo={row.original.id} {...row.getRowProps()} actions={getRowActions()} className="group">
      {row.cells.map(function (cell, index) {
            return cell.render("Cell", { index: index });
        })}
    </table_1.default.Row>);
};
exports.default = DiscountTable;
