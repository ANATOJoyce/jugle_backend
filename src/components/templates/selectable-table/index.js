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
exports.SelectableTable = void 0;
var lodash_1 = require("lodash");
var react_1 = require("react");
var react_table_1 = require("react-table");
var spinner_1 = require("../../atoms/spinner");
var indeterminate_checkbox_1 = require("../../molecules/indeterminate-checkbox");
var table_1 = require("../../molecules/table");
var SelectableTable = function (_a) {
    var _b;
    var label = _a.label, _c = _a.resourceName, resourceName = _c === void 0 ? "" : _c, _d = _a.selectedIds, selectedIds = _d === void 0 ? [] : _d, isLoading = _a.isLoading, _e = _a.totalCount, totalCount = _e === void 0 ? 0 : _e, data = _a.data, columns = _a.columns, onChange = _a.onChange, options = _a.options, renderRow = _a.renderRow, renderHeaderGroup = _a.renderHeaderGroup, setQuery = _a.setQuery, queryObject = _a.queryObject, paginate = _a.paginate;
    var table = (0, react_table_1.useTable)({
        columns: columns,
        data: data || [],
        manualPagination: true,
        initialState: {
            pageIndex: queryObject.offset / queryObject.limit,
            pageSize: queryObject.limit,
            selectedRowIds: selectedIds.reduce(function (prev, id) {
                prev[id] = true;
                return prev;
            }, {}),
        },
        pageCount: Math.ceil(totalCount / queryObject.limit),
        autoResetSelectedRows: false,
        autoResetPage: false,
        getRowId: function (row) { return row.id; },
    }, react_table_1.useSortBy, react_table_1.usePagination, react_table_1.useRowSelect, useSelectionColumn);
    (0, react_1.useEffect)(function () {
        if (onChange) {
            onChange(Object.keys(table.state.selectedRowIds));
        }
    }, [table.state.selectedRowIds]);
    var handleNext = function () {
        if (!table.canNextPage) {
            return;
        }
        paginate(1);
        table.nextPage();
    };
    var handlePrev = function () {
        if (!table.canPreviousPage) {
            return;
        }
        paginate(-1);
        table.previousPage();
    };
    var handleSearch = function (text) {
        setQuery(text);
        if (text) {
            table.gotoPage(0);
        }
    };
    var debouncedSearch = react_1.default.useMemo(function () { return (0, lodash_1.debounce)(handleSearch, 300); }, []);
    return (<div>
      {label && <div className="inter-base-semibold my-large">{label}</div>}
      <table_1.default {...options} {...table.getTableProps()} handleSearch={options.enableSearch ? debouncedSearch : undefined} className="min-h-[350px] relative">
        {renderHeaderGroup && (<table_1.default.Head>
            {(_b = table.headerGroups) === null || _b === void 0 ? void 0 : _b.map(function (headerGroup) {
                return renderHeaderGroup({ headerGroup: headerGroup });
            })}
          </table_1.default.Head>)}

        <table_1.default.Body {...table.getTableBodyProps()}>
          {isLoading ? (<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <spinner_1.default size="large" variant="secondary"/>
            </div>) : (table.rows.map(function (row) {
            table.prepareRow(row);
            return renderRow({ row: row });
        }))}
        </table_1.default.Body>
      </table_1.default>

      <table_1.TablePagination count={totalCount} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + table.rows.length} title={resourceName} currentPage={table.state.pageIndex + 1} pageCount={table.pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={table.canNextPage} hasPrev={table.canPreviousPage}/>
    </div>);
};
exports.SelectableTable = SelectableTable;
var useSelectionColumn = function (hooks) {
    hooks.visibleColumns.push(function (columns) { return __spreadArray([
        {
            id: "selection",
            Header: function (_a) {
                var getToggleAllRowsSelectedProps = _a.getToggleAllRowsSelectedProps;
                return (<div className="flex justify-center">
            <indeterminate_checkbox_1.default {...getToggleAllRowsSelectedProps()} onClick={function (e) { return e.stopPropagation(); }}/>
          </div>);
            },
            Cell: function (_a) {
                var row = _a.row;
                return (<div className="flex justify-center">
            <indeterminate_checkbox_1.default {...row.getToggleRowSelectedProps()} onClick={function (e) { return e.stopPropagation(); }}/>
          </div>);
            },
        }
    ], columns, true); });
};
