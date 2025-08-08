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
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var spinner_1 = require("../../../../components/atoms/spinner");
var button_1 = require("../../../../components/fundamentals/button");
var image_placeholder_1 = require("../../../../components/fundamentals/image-placeholder");
var status_indicator_1 = require("../../../../components/fundamentals/status-indicator");
var indeterminate_checkbox_1 = require("../../../../components/molecules/indeterminate-checkbox");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var table_1 = require("../../../../components/molecules/table");
var use_debounce_1 = require("../../../../hooks/use-debounce");
var getProductStatusVariant = function (status) {
    switch (status) {
        case "proposed":
            return "warning";
        case "published":
            return "success";
        case "rejected":
            return "danger";
        case "draft":
        default:
            return "default";
    }
};
var RMASelectProductSubModal = function (_a) {
    var onSubmit = _a.onSubmit, selectedItems = _a.selectedItems, _b = _a.isLargeModal, isLargeModal = _b === void 0 ? true : _b;
    var PAGE_SIZE = 12;
    var pop = (0, react_1.useContext)(layered_modal_1.LayeredModalContext).pop;
    var _c = (0, react_1.useState)(""), query = _c[0], setQuery = _c[1];
    var _d = (0, react_1.useState)(0), offset = _d[0], setOffset = _d[1];
    var _e = (0, react_1.useState)(0), numPages = _e[0], setNumPages = _e[1];
    var _f = (0, react_1.useState)(0), currentPage = _f[0], setCurrentPage = _f[1];
    var _g = (0, react_1.useState)([]), selectedVariants = _g[0], setSelectedVariants = _g[1];
    var debouncedSearchTerm = (0, use_debounce_1.useDebounce)(query, 500);
    var _h = (0, medusa_react_1.useAdminVariants)({
        q: debouncedSearchTerm,
        limit: PAGE_SIZE,
        offset: offset,
    }), isLoading = _h.isLoading, count = _h.count, variants = _h.variants;
    (0, react_1.useEffect)(function () {
        if (typeof count !== "undefined") {
            setNumPages(Math.ceil(count / PAGE_SIZE));
        }
    }, [count]);
    var columns = (0, react_1.useMemo)(function () {
        return [
            {
                Header: "Name",
                accessor: "title",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return (<div className="flex items-center">
              <div className="h-[40px] w-[30px] my-1.5 flex items-center mr-4">
                {original.product.thumbnail ? (<img src={original.product.thumbnail} className="h-full object-cover rounded-soft"/>) : (<div className="flex items-center justify-center w-full h-full rounded-soft bg-grey-10">
                    <image_placeholder_1.default size={16}/>
                  </div>)}
              </div>
              <div className="flex flex-col">
                <span>{original.product.title}</span>
                {original.title}
              </div>
            </div>);
                },
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return (<status_indicator_1.default title={"".concat(original.product.status
                            .charAt(0)
                            .toUpperCase()).concat(original.product.status.slice(1))} variant={getProductStatusVariant(original.product.status)}/>);
                },
            },
            {
                Header: <div className="text-right">In Stock</div>,
                accessor: "inventory_quantity",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return (<div className="text-right">{original.inventory_quantity}</div>);
                },
            },
        ];
    }, []);
    var _j = (0, react_table_1.useTable)({
        columns: columns,
        data: variants || [],
        manualPagination: true,
        initialState: {
            pageIndex: currentPage,
            pageSize: PAGE_SIZE,
            selectedRowIds: selectedItems.reduce(function (prev, _a) {
                var id = _a.id;
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
    }), getTableProps = _j.getTableProps, getTableBodyProps = _j.getTableBodyProps, rows = _j.rows, prepareRow = _j.prepareRow, canPreviousPage = _j.canPreviousPage, canNextPage = _j.canNextPage, pageCount = _j.pageCount, nextPage = _j.nextPage, previousPage = _j.previousPage, 
    // Get the state from the instance
    _k = _j.state, pageIndex = _k.pageIndex, pageSize = _k.pageSize, selectedRowIds = _k.selectedRowIds;
    (0, react_1.useEffect)(function () {
        setSelectedVariants(function (selectedVariants) { return __spreadArray(__spreadArray([], selectedVariants.filter(function (sv) { return Object.keys(selectedRowIds).findIndex(function (id) { return id === sv.id; }) > -1; }), true), ((variants === null || variants === void 0 ? void 0 : variants.filter(function (v) {
            return selectedVariants.findIndex(function (sv) { return sv.id === v.id; }) < 0 &&
                Object.keys(selectedRowIds).findIndex(function (id) { return id === v.id; }) > -1;
        })) || []), true); });
    }, [selectedRowIds]);
    var handleNext = function () {
        if (canNextPage) {
            setOffset(function (old) { return old + pageSize; });
            setCurrentPage(function (old) { return old + 1; });
            nextPage();
        }
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            setOffset(function (old) { return Math.max(old - pageSize, 0); });
            setCurrentPage(function (old) { return old - 1; });
            previousPage();
        }
    };
    var handleSearch = function (q) {
        setOffset(0);
        setCurrentPage(0);
        setQuery(q);
    };
    var handleSubmit = function () {
        onSubmit(selectedVariants);
        pop();
    };
    return (<>
      <modal_1.default.Content isLargeModal={isLargeModal}>
        <div className="min-h-[680px]">
          <table_1.default immediateSearchFocus enableSearch searchPlaceholder="Search Products.." handleSearch={handleSearch} {...getTableProps()}>
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
          <table_1.TablePagination count={count} limit={PAGE_SIZE} offset={offset} pageSize={offset + rows.length} title="Products" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
        </div>
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal={isLargeModal}>
        <div className="flex w-full justify-end gap-x-xsmall">
          <button_1.default variant="ghost" size="small" className="w-[112px]" onClick={function () { return pop(); }}>
            Back
          </button_1.default>
          <button_1.default variant="primary" className="w-[112px]" size="small" onClick={handleSubmit}>
            Add
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </>);
};
exports.default = RMASelectProductSubModal;
