"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var spinner_1 = require("../../atoms/spinner");
var table_1 = require("../../molecules/table");
var use_draft_order_column_1 = require("./use-draft-order-column");
var use_draft_order_filters_1 = require("./use-draft-order-filters");
var DEFAULT_PAGE_SIZE = 15;
var DraftOrderTable = function () {
    var location = (0, router_1.useLocation)();
    var _a = (0, use_draft_order_filters_1.useDraftOrderFilters)(location.search, {}), reset = _a.reset, paginate = _a.paginate, setFreeText = _a.setQuery, queryObject = _a.queryObject;
    var filtersOnLoad = queryObject;
    var offs = parseInt(filtersOnLoad === null || filtersOnLoad === void 0 ? void 0 : filtersOnLoad.offset) || 0;
    var lim = parseInt(filtersOnLoad === null || filtersOnLoad === void 0 ? void 0 : filtersOnLoad.limit) || DEFAULT_PAGE_SIZE;
    var _b = (0, react_1.useState)(filtersOnLoad === null || filtersOnLoad === void 0 ? void 0 : filtersOnLoad.query), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(0), numPages = _c[0], setNumPages = _c[1];
    var _d = (0, medusa_react_1.useAdminDraftOrders)(queryObject), draft_orders = _d.draft_orders, isLoading = _d.isLoading, isRefetching = _d.isRefetching, count = _d.count;
    (0, react_1.useEffect)(function () {
        var controlledPageCount = Math.ceil(count / queryObject.limit);
        setNumPages(controlledPageCount);
    }, [count, queryObject]);
    var columns = (0, use_draft_order_column_1.default)()[0];
    var _e = (0, react_table_1.useTable)({
        columns: columns,
        data: draft_orders || [],
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
    return (<div className="w-full h-full overflow-y-auto flex flex-col justify-between">
      {isLoading || isRefetching || !draft_orders ? (<div className="w-full pt-2xlarge flex items-center justify-center">
          <spinner_1.default size={"large"} variant={"secondary"}/>
        </div>) : (<>
          <table_1.default filteringOptions={[]} enableSearch handleSearch={setQuery} searchValue={query} {...getTableProps()}>
            <table_1.default.Head>
              {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup, index) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(function (col, headerIndex) { return (<table_1.default.HeadCell className="w-[100px]" {...col.getHeaderProps()}>
                      {col.render("Header")}
                    </table_1.default.HeadCell>); })}
                </table_1.default.HeadRow>); })}
            </table_1.default.Head>
            <table_1.default.Body {...getTableBodyProps()}>
              {rows.map(function (row) {
                prepareRow(row);
                return (<table_1.default.Row color={"inherit"} linkTo={"/a/draft-orders/".concat(row.original.id)} {...row.getRowProps()}>
                    {row.cells.map(function (cell, index) {
                        return cell.render("Cell", { index: index });
                    })}
                  </table_1.default.Row>);
            })}
            </table_1.default.Body>
          </table_1.default>
          <table_1.TablePagination count={count} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + rows.length} title="Draft Orders" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
        </>)}
    </div>);
};
exports.default = DraftOrderTable;
