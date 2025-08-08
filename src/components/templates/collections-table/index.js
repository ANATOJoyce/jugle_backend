"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var use_debounce_1 = require("../../../hooks/use-debounce");
var spinner_1 = require("../../atoms/spinner");
var table_1 = require("../../molecules/table");
var use_collection_actions_1 = require("./use-collection-actions");
var use_collection_column_1 = require("./use-collection-column");
var DEFAULT_PAGE_SIZE = 15;
var CollectionsTable = function () {
    var _a = (0, react_1.useState)([]), filteringOptions = _a[0], setFilteringOptions = _a[1];
    var _b = (0, react_1.useState)(0), offset = _b[0], setOffset = _b[1];
    var limit = DEFAULT_PAGE_SIZE;
    var _c = (0, react_1.useState)(""), query = _c[0], setQuery = _c[1];
    var _d = (0, react_1.useState)(0), numPages = _d[0], setNumPages = _d[1];
    var debouncedSearchTerm = (0, use_debounce_1.useDebounce)(query, 500);
    var _e = (0, medusa_react_1.useAdminCollections)({
        q: debouncedSearchTerm,
        offset: offset,
        limit: limit,
    }), collections = _e.collections, isLoading = _e.isLoading, isRefetching = _e.isRefetching, count = _e.count;
    (0, react_1.useEffect)(function () {
        if (typeof count !== "undefined") {
            var controlledPageCount = Math.ceil(count / limit);
            setNumPages(controlledPageCount);
        }
    }, [count]);
    var columns = (0, use_collection_column_1.default)()[0];
    var _f = (0, react_table_1.useTable)({
        columns: columns,
        data: collections || [],
        manualPagination: true,
        initialState: {
            pageIndex: Math.floor(offset / limit),
            pageSize: limit,
        },
        pageCount: numPages,
        autoResetPage: false,
    }, react_table_1.usePagination), getTableProps = _f.getTableProps, getTableBodyProps = _f.getTableBodyProps, headerGroups = _f.headerGroups, rows = _f.rows, prepareRow = _f.prepareRow, canPreviousPage = _f.canPreviousPage, canNextPage = _f.canNextPage, pageCount = _f.pageCount, nextPage = _f.nextPage, previousPage = _f.previousPage, pageIndex = _f.state.pageIndex;
    var handleNext = function () {
        if (canNextPage) {
            setOffset(offset + limit);
            nextPage();
        }
    };
    var handleSearch = function (q) {
        setOffset(0);
        setQuery(q);
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            setOffset(offset - limit);
            previousPage();
        }
    };
    (0, react_1.useEffect)(function () {
        setFilteringOptions([
            {
                title: "Sort",
                options: [
                    {
                        title: "All",
                        count: (collections === null || collections === void 0 ? void 0 : collections.length) || 0,
                        onClick: function () { return console.log("Not implemented yet"); },
                    },
                ],
            },
        ]);
    }, [collections]);
    return (<div className="w-full h-full overflow-y-auto">
      <table_1.default enableSearch handleSearch={handleSearch} searchPlaceholder="Search Collections" filteringOptions={filteringOptions} {...getTableProps()}>
        <table_1.default.Head>
          {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell className="min-w-[100px]" {...col.getHeaderProps()}>
                  {col.render("Header")}
                </table_1.default.HeadCell>); })}
            </table_1.default.HeadRow>); })}
        </table_1.default.Head>
        {isLoading || isRefetching || !collections ? (<div className="w-full pt-2xlarge flex items-center justify-center">
            <spinner_1.default size={"large"} variant={"secondary"}/>
          </div>) : (<table_1.default.Body {...getTableBodyProps()}>
            {rows.map(function (row) {
                prepareRow(row);
                return <CollectionRow row={row}/>;
            })}
          </table_1.default.Body>)}
      </table_1.default>
      <table_1.TablePagination count={count} limit={limit} offset={offset} pageSize={offset + rows.length} title="Collections" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
    </div>);
};
var CollectionRow = function (_a) {
    var row = _a.row;
    var collection = row.original;
    var getActions = (0, use_collection_actions_1.default)(collection).getActions;
    return (<table_1.default.Row color={"inherit"} linkTo={"/a/collections/".concat(collection.id)} actions={getActions(collection)} {...row.getRowProps()}>
      {" "}
      {row.cells.map(function (cell, index) {
            return (<table_1.default.Cell {...cell.getCellProps()}>
            {" "}
            {cell.render("Cell", { index: index })}{" "}
          </table_1.default.Cell>);
        })}{" "}
    </table_1.default.Row>);
};
exports.default = CollectionsTable;
