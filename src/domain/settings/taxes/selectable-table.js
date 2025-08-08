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
var react_1 = require("react");
var react_table_1 = require("react-table");
var table_1 = require("../../../components/molecules/table");
var indeterminate_checkbox_1 = require("../../../components/molecules/indeterminate-checkbox");
var spinner_1 = require("../../../components/atoms/spinner");
var SelectableTable = function (_a) {
    var _b = _a.showSearch, showSearch = _b === void 0 ? true : _b, label = _a.label, objectName = _a.objectName, _c = _a.selectedIds, selectedIds = _c === void 0 ? [] : _c, isLoading = _a.isLoading, pagination = _a.pagination, totalCount = _a.totalCount, data = _a.data, columns = _a.columns, onPaginationChange = _a.onPaginationChange, onChange = _a.onChange, onSearch = _a.onSearch;
    var handleQueryChange = function (newQuery) {
        onPaginationChange(newQuery);
    };
    var currentPage = (0, react_1.useMemo)(function () {
        return Math.floor(pagination.offset / pagination.limit);
    }, [pagination]);
    var numPages = (0, react_1.useMemo)(function () {
        if (totalCount && pagination.limit) {
            return Math.ceil(totalCount / pagination.limit);
        }
        return 0;
    }, [totalCount, pagination]);
    var _d = (0, react_table_1.useTable)({
        columns: columns,
        data: data || [],
        manualPagination: true,
        initialState: {
            pageIndex: currentPage,
            pageSize: pagination.limit,
            selectedRowIds: selectedIds.reduce(function (prev, id) {
                prev[id] = true;
                return prev;
            }, {}),
        },
        pageCount: numPages,
        autoResetSelectedRows: false,
        autoResetPage: false,
        getRowId: function (row) { return row.id; },
    }, react_table_1.usePagination, react_table_1.useRowSelect, function (hooks) {
        hooks.visibleColumns.push(function (columns) { return __spreadArray([
            // Let's make a column for selection
            {
                id: "selection",
                // The header can use the table's getToggleAllRowsSelectedProps method
                // to render a checkbox
                Header: function (_a) {
                    var getToggleAllRowsSelectedProps = _a.getToggleAllRowsSelectedProps;
                    return (<div>
                <indeterminate_checkbox_1.default {...getToggleAllRowsSelectedProps()}/>
              </div>);
                },
                // The cell can use the individual row's getToggleRowSelectedProps method
                // to the render a checkbox
                Cell: function (_a) {
                    var row = _a.row;
                    return (<div>
                <indeterminate_checkbox_1.default {...row.getToggleRowSelectedProps()}/>
              </div>);
                },
            }
        ], columns, true); });
    }), getTableProps = _d.getTableProps, getTableBodyProps = _d.getTableBodyProps, headerGroups = _d.headerGroups, rows = _d.rows, prepareRow = _d.prepareRow, canPreviousPage = _d.canPreviousPage, canNextPage = _d.canNextPage, pageCount = _d.pageCount, nextPage = _d.nextPage, previousPage = _d.previousPage, 
    // Get the state from the instance
    _e = _d.state, pageIndex = _e.pageIndex, pageSize = _e.pageSize, selectedRowIds = _e.selectedRowIds;
    (0, react_1.useEffect)(function () {
        onChange(Object.keys(selectedRowIds));
    }, [selectedRowIds]);
    var handleNext = function () {
        if (canNextPage) {
            handleQueryChange(__assign(__assign({}, pagination), { offset: pagination.offset + pagination.limit }));
            nextPage();
        }
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            handleQueryChange(__assign(__assign({}, pagination), { offset: Math.max(pagination.offset - pagination.limit, 0) }));
            previousPage();
        }
    };
    return (<div>
      <div className="inter-base-semibold my-large">{label}</div>
      <table_1.default immediateSearchFocus={showSearch} enableSearch={showSearch} searchPlaceholder="Search Products.." handleSearch={onSearch} {...getTableProps()}>
        <table_1.default.Body {...getTableBodyProps()}>
          {isLoading ? (<spinner_1.default size="large"/>) : (rows.map(function (row, i) {
            prepareRow(row);
            return (<table_1.default.Row {...row.getRowProps()}>
                  {row.cells.map(function (cell) {
                    return (<table_1.default.Cell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </table_1.default.Cell>);
                })}
                </table_1.default.Row>);
        }))}
        </table_1.default.Body>
      </table_1.default>
      <table_1.TablePagination count={totalCount} limit={pagination.limit} offset={pagination.offset} pageSize={pagination.offset + rows.length} title={objectName} currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
    </div>);
};
exports.SelectableTable = SelectableTable;
