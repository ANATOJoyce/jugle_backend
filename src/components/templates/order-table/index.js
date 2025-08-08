"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var clsx_1 = require("clsx");
var lodash_1 = require("lodash");
var medusa_react_1 = require("medusa-react");
var qs_1 = require("qs");
var react_1 = require("react");
var react_table_1 = require("react-table");
var feature_flag_1 = require("../../../context/feature-flag");
var spinner_1 = require("../../atoms/spinner");
var table_1 = require("../../molecules/table");
var order_filter_dropdown_1 = require("../order-filter-dropdown");
var use_order_column_1 = require("./use-order-column");
var use_order_filters_1 = require("./use-order-filters");
var DEFAULT_PAGE_SIZE = 15;
var defaultQueryProps = {
    expand: "shipping_address",
    fields: "id,status,display_id,created_at,email,fulfillment_status,payment_status,total,currency_code",
};
var OrderTable = function () {
    var _a;
    var location = (0, router_1.useLocation)();
    var isFeatureEnabled = react_1.default.useContext(feature_flag_1.FeatureFlagContext).isFeatureEnabled;
    var hiddenColumns = ["sales_channel"];
    if (isFeatureEnabled("sales_channels")) {
        defaultQueryProps.expand = "shipping_address,sales_channel";
        hiddenColumns = [];
    }
    var _b = (0, use_order_filters_1.useOrderFilters)(location.search, defaultQueryProps), removeTab = _b.removeTab, setTab = _b.setTab, saveTab = _b.saveTab, filterTabs = _b.availableTabs, activeFilterTab = _b.activeFilterTab, reset = _b.reset, paginate = _b.paginate, setFilters = _b.setFilters, filters = _b.filters, setFreeText = _b.setQuery, queryObject = _b.queryObject, representationObject = _b.representationObject;
    var filtersOnLoad = queryObject;
    var offs = parseInt(filtersOnLoad === null || filtersOnLoad === void 0 ? void 0 : filtersOnLoad.offset) || 0;
    var lim = parseInt(filtersOnLoad.limit) || DEFAULT_PAGE_SIZE;
    var _c = (0, react_1.useState)(filtersOnLoad === null || filtersOnLoad === void 0 ? void 0 : filtersOnLoad.query), query = _c[0], setQuery = _c[1];
    var _d = (0, react_1.useState)(0), numPages = _d[0], setNumPages = _d[1];
    var _e = (0, medusa_react_1.useAdminOrders)(queryObject), orders = _e.orders, isLoading = _e.isLoading, count = _e.count;
    (0, react_1.useEffect)(function () {
        var controlledPageCount = Math.ceil(count / queryObject.limit);
        setNumPages(controlledPageCount);
    }, [orders]);
    var columns = (0, use_order_column_1.default)()[0];
    var _f = (0, react_table_1.useTable)({
        columns: columns,
        data: orders || [],
        manualPagination: true,
        initialState: {
            pageSize: lim,
            pageIndex: offs / lim,
            hiddenColumns: hiddenColumns,
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
        window.history.replaceState("/a/orders", "", "".concat("?".concat(stringified)));
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
      <table_1.default filteringOptions={<order_filter_dropdown_1.default filters={filters} submitFilters={setFilters} clearFilters={clearFilters} tabs={filterTabs} onTabClick={setTab} activeTab={activeFilterTab} onRemoveTab={removeTab} onSaveTab={saveTab}/>} enableSearch handleSearch={setQuery} searchValue={query} {...getTableProps()} className={(0, clsx_1.default)((_a = {}, _a["relative"] = isLoading, _a))}>
        <table_1.default.Head>
          {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup, index) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(function (col, headerIndex) { return (<table_1.default.HeadCell {...col.getHeaderProps()}>
                  {col.render("Header")}
                </table_1.default.HeadCell>); })}
            </table_1.default.HeadRow>); })}
        </table_1.default.Head>
        {isLoading || !orders ? (<div className="flex w-full h-full absolute items-center justify-center mt-10">
            <div className="">
              <spinner_1.default size={"large"} variant={"secondary"}/>
            </div>
          </div>) : (<table_1.default.Body {...getTableBodyProps()}>
            {rows.map(function (row) {
                prepareRow(row);
                return (<table_1.default.Row color={"inherit"} linkTo={row.original.id} {...row.getRowProps()} className="group">
                  {row.cells.map(function (cell, index) {
                        return cell.render("Cell", { index: index });
                    })}
                </table_1.default.Row>);
            })}
          </table_1.default.Body>)}
      </table_1.default>
      <table_1.TablePagination count={count} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + rows.length} title="Orders" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
    </div>);
};
exports.default = OrderTable;
