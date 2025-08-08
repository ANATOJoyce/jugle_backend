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
var use_debounce_1 = require("../../../hooks/use-debounce");
var spinner_1 = require("../../atoms/spinner");
var button_1 = require("../../fundamentals/button");
var indeterminate_checkbox_1 = require("../../molecules/indeterminate-checkbox");
var modal_1 = require("../../molecules/modal");
var table_1 = require("../../molecules/table");
var use_collection_product_columns_1 = require("./use-collection-product-columns");
var AddProductsTable = function (_a) {
    var existingRelations = _a.existingRelations, onSubmit = _a.onSubmit, onClose = _a.onClose;
    var PAGE_SIZE = 10;
    var _b = (0, react_1.useState)(""), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(0), offset = _c[0], setOffset = _c[1];
    var _d = (0, react_1.useState)(0), numPages = _d[0], setNumPages = _d[1];
    var _e = (0, react_1.useState)(0), currentPage = _e[0], setCurrentPage = _e[1];
    var _f = (0, react_1.useState)([]), selectedProducts = _f[0], setSelectedProducts = _f[1];
    var _g = (0, react_1.useState)([]), removedProducts = _g[0], setRemovedProducts = _g[1];
    var debouncedSearchTerm = (0, use_debounce_1.useDebounce)(query, 500);
    var _h = (0, medusa_react_1.useAdminProducts)({
        q: debouncedSearchTerm,
        limit: PAGE_SIZE,
        offset: offset,
    }), isLoading = _h.isLoading, count = _h.count, products = _h.products;
    var columns = (0, use_collection_product_columns_1.default)();
    var _j = (0, react_table_1.useTable)({
        data: products || [],
        columns: columns,
        manualPagination: true,
        initialState: {
            pageIndex: currentPage,
            pageSize: PAGE_SIZE,
            selectedRowIds: existingRelations.reduce(function (prev, _a) {
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
            {
                id: "selection",
                Cell: function (_a) {
                    var row = _a.row;
                    return (<table_1.default.Cell className="w-[5%] pl-base">
                <indeterminate_checkbox_1.default {...row.getToggleRowSelectedProps()}/>
              </table_1.default.Cell>);
                },
            }
        ], columns, true); });
    }), rows = _j.rows, prepareRow = _j.prepareRow, getTableBodyProps = _j.getTableBodyProps, getTableProps = _j.getTableProps, canPreviousPage = _j.canPreviousPage, canNextPage = _j.canNextPage, pageCount = _j.pageCount, nextPage = _j.nextPage, previousPage = _j.previousPage, _k = _j.state, pageIndex = _k.pageIndex, pageSize = _k.pageSize, selectedRowIds = _k.selectedRowIds;
    (0, react_1.useEffect)(function () {
        setSelectedProducts(function (selectedProducts) {
            return __spreadArray(__spreadArray([], selectedProducts.filter(function (sv) {
                return Object.keys(selectedRowIds).findIndex(function (id) { return id === sv.id; }) > -1;
            }), true), ((products === null || products === void 0 ? void 0 : products.filter(function (p) {
                return selectedProducts.findIndex(function (sv) { return sv.id === p.id; }) < 0 &&
                    Object.keys(selectedRowIds).findIndex(function (id) { return id === p.id; }) > -1;
            })) || []), true).filter(function (p) { return existingRelations.findIndex(function (ap) { return ap.id === p.id; }) < 0; });
        });
        setRemovedProducts(__spreadArray([], existingRelations.filter(function (ap) { return Object.keys(selectedRowIds).findIndex(function (id) { return id === ap.id; }) < 0; }), true));
    }, [selectedRowIds]);
    (0, react_1.useEffect)(function () {
        var controlledPageCount = Math.ceil(count / PAGE_SIZE);
        setNumPages(controlledPageCount);
    }, [products, count, PAGE_SIZE]);
    var handleNext = function () {
        if (canNextPage) {
            setOffset(function (old) { return old + pageSize; });
            setCurrentPage(function (old) { return old + 1; });
            nextPage();
        }
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            setOffset(function (old) { return old - pageSize; });
            setCurrentPage(function (old) { return old - 1; });
            previousPage();
        }
    };
    var handleSearch = function (q) {
        setOffset(0);
        setQuery(q);
    };
    var _l = (0, react_1.useState)(true), disabled = _l[0], setDisabled = _l[1];
    (0, react_1.useEffect)(function () {
        if (selectedProducts.length > 0 || removedProducts.length > 0) {
            setDisabled(false);
            return;
        }
        setDisabled(true);
    }, [selectedProducts, removedProducts]);
    var handleSubmit = function () {
        onSubmit(selectedProducts.map(function (p) { return p.id; }), removedProducts.map(function (p) { return p.id; }));
    };
    return (<modal_1.default handleClose={onClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onClose}>
          <h3 className="inter-xlarge-semibold">Add Products</h3>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="w-full flex flex-col justify-between h-[650px]">
            <table_1.default enableSearch handleSearch={handleSearch} searchPlaceholder="Search Products" {...getTableProps()} className="flex-grow">
              {isLoading || !products ? (<div className="inter-small-regular text-grey-40 flex flex-grow justify-center items-center">
                  <spinner_1.default size="large" variant="secondary"/>
                </div>) : (<table_1.default.Body {...getTableBodyProps()}>
                  {rows.map(function (row) {
                prepareRow(row);
                return (<table_1.default.Row color={"inherit"} {...row.getRowProps()} className="px-base">
                        {row.cells.map(function (cell, index) {
                        return cell.render("Cell", { index: index });
                    })}
                      </table_1.default.Row>);
            })}
                </table_1.default.Body>)}
            </table_1.default>
            <table_1.TablePagination count={count} limit={PAGE_SIZE} offset={offset} pageSize={offset + rows.length} title="Products" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex items-center justify-end gap-x-xsmall w-full">
            <button_1.default variant="ghost" size="small" className="w-eventButton" onClick={onClose}>
              Cancel
            </button_1.default>
            <button_1.default variant="primary" size="small" className="w-eventButton" onClick={handleSubmit} disabled={disabled}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = AddProductsTable;
