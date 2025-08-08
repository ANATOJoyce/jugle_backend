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
var gatsby_1 = require("gatsby");
var lodash_1 = require("lodash");
var medusa_react_1 = require("medusa-react");
var qs_1 = require("qs");
var react_1 = require("react");
var react_table_1 = require("react-table");
var spinner_1 = require("../../atoms/spinner");
var details_icon_1 = require("../../fundamentals/details-icon");
var edit_icon_1 = require("../../fundamentals/icons/edit-icon");
var table_1 = require("../../molecules/table");
var use_customer_columns_1 = require("./use-customer-columns");
var use_customer_filters_1 = require("./use-customer-filters");
var DEFAULT_PAGE_SIZE = 15;
var defaultQueryProps = {
    expand: "orders",
};
var CustomerTable = function () {
    var _a = (0, use_customer_filters_1.useCustomerFilters)(location.search, defaultQueryProps), reset = _a.reset, paginate = _a.paginate, setFreeText = _a.setQuery, queryObject = _a.queryObject, representationObject = _a.representationObject;
    var offs = parseInt(queryObject.offset) || 0;
    var lim = parseInt(queryObject.limit) || DEFAULT_PAGE_SIZE;
    var _b = (0, medusa_react_1.useAdminCustomers)(__assign({}, queryObject)), customers = _b.customers, isLoading = _b.isLoading, count = _b.count;
    var _c = (0, react_1.useState)(queryObject.query), query = _c[0], setQuery = _c[1];
    var _d = (0, react_1.useState)(0), numPages = _d[0], setNumPages = _d[1];
    (0, react_1.useEffect)(function () {
        if (typeof count !== "undefined") {
            var controlledPageCount = Math.ceil(count / lim);
            setNumPages(controlledPageCount);
        }
    }, [count]);
    var columns = (0, use_customer_columns_1.useCustomerColumns)()[0];
    var _e = (0, react_table_1.useTable)({
        columns: columns,
        data: customers || [],
        manualPagination: true,
        initialState: {
            pageSize: lim,
            pageIndex: offs / lim,
        },
        pageCount: numPages,
        autoResetPage: false,
    }, react_table_1.usePagination), getTableProps = _e.getTableProps, getTableBodyProps = _e.getTableBodyProps, headerGroups = _e.headerGroups, rows = _e.rows, prepareRow = _e.prepareRow, canPreviousPage = _e.canPreviousPage, canNextPage = _e.canNextPage, pageCount = _e.pageCount, gotoPage = _e.gotoPage, nextPage = _e.nextPage, previousPage = _e.previousPage, pageIndex = _e.state.pageIndex;
    // Debounced search
    (0, react_1.useEffect)(function () {
        var delayDebounceFn = setTimeout(function () {
            if (query) {
                setFreeText(query);
                gotoPage(0);
            }
            else {
                if (typeof query !== "undefined") {
                    // if we delete query string, we reset the table view
                    reset();
                }
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
    (0, react_1.useEffect)(function () {
        refreshWithFilters();
    }, [representationObject]);
    return (<div className="w-full h-full overflow-y-auto flex flex-col justify-between">
      <table_1.default enableSearch handleSearch={setQuery} {...getTableProps()}>
        <table_1.default.Head>
          {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell className="w-[100px]" {...col.getHeaderProps()}>
                  {col.render("Header")}
                </table_1.default.HeadCell>); })}
            </table_1.default.HeadRow>); })}
        </table_1.default.Head>
        {isLoading || !customers ? (<div className="flex w-full h-full absolute items-center justify-center mt-10">
            <div className="">
              <spinner_1.default size={"large"} variant={"secondary"}/>
            </div>
          </div>) : (<table_1.default.Body {...getTableBodyProps()}>
            {rows.map(function (row) {
                prepareRow(row);
                return (<table_1.default.Row color={"inherit"} actions={[
                        {
                            label: "Edit",
                            onClick: function () { return (0, gatsby_1.navigate)(row.original.id); },
                            icon: <edit_icon_1.default size={20}/>,
                        },
                        {
                            label: "Details",
                            onClick: function () { return (0, gatsby_1.navigate)(row.original.id); },
                            icon: <details_icon_1.default size={20}/>,
                        },
                    ]} linkTo={row.original.id} {...row.getRowProps()}>
                  {row.cells.map(function (cell, index) {
                        return (<table_1.default.Cell {...cell.getCellProps()}>
                        {cell.render("Cell", { index: index })}
                      </table_1.default.Cell>);
                    })}
                </table_1.default.Row>);
            })}
          </table_1.default.Body>)}
      </table_1.default>
      <table_1.TablePagination count={count} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + rows.length} title="Customers" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
    </div>);
};
exports.default = CustomerTable;
