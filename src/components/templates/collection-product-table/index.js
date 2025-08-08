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
var indeterminate_checkbox_1 = require("../../molecules/indeterminate-checkbox");
var table_1 = require("../../molecules/table");
var use_collection_product_columns_1 = require("./use-collection-product-columns");
var CollectionProductTable = function (_a) {
    var addedProducts = _a.addedProducts, setProducts = _a.setProducts;
    var _b = (0, react_1.useState)(""), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(10), limit = _c[0], setLimit = _c[1];
    var _d = (0, react_1.useState)(0), offset = _d[0], setOffset = _d[1];
    var _e = (0, react_1.useState)(0), numPages = _e[0], setNumPages = _e[1];
    var _f = (0, react_1.useState)(0), currentPage = _f[0], setCurrentPage = _f[1];
    var _g = (0, react_1.useState)([]), filteringOptions = _g[0], setFilteringOptions = _g[1];
    var _h = (0, react_1.useState)([]), selectedProducts = _h[0], setSelectedProducts = _h[1];
    var debouncedSearchTerm = (0, use_debounce_1.useDebounce)(query, 500);
    var _j = (0, medusa_react_1.useAdminProducts)({
        q: debouncedSearchTerm,
        limit: limit,
        offset: offset,
    }), isLoading = _j.isLoading, count = _j.count, products = _j.products;
    (0, react_1.useEffect)(function () {
        setFilteringOptions([
            {
                title: "Sort by",
                options: [
                    {
                        title: "All",
                        onClick: function () { },
                    },
                    {
                        title: "Newest",
                        onClick: function () { },
                    },
                    {
                        title: "Oldest",
                        onClick: function () { },
                    },
                ],
            },
        ]);
    }, [products]);
    var columns = (0, use_collection_product_columns_1.default)();
    var _k = (0, react_table_1.useTable)({
        data: products || [],
        columns: columns,
        manualPagination: true,
        initialState: {
            pageIndex: currentPage,
            pageSize: limit,
            selectedRowIds: addedProducts === null || addedProducts === void 0 ? void 0 : addedProducts.reduce(function (prev, _a) {
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
    }), rows = _k.rows, prepareRow = _k.prepareRow, getTableBodyProps = _k.getTableBodyProps, getTableProps = _k.getTableProps, canPreviousPage = _k.canPreviousPage, canNextPage = _k.canNextPage, pageCount = _k.pageCount, nextPage = _k.nextPage, previousPage = _k.previousPage, 
    // Get the state from the instance
    _l = _k.state, pageIndex = _l.pageIndex, pageSize = _l.pageSize, selectedRowIds = _l.selectedRowIds;
    (0, react_1.useEffect)(function () {
        setSelectedProducts(function (selectedProducts) { return __spreadArray(__spreadArray([], selectedProducts.filter(function (sv) { return Object.keys(selectedRowIds).findIndex(function (id) { return id === sv.id; }) > -1; }), true), ((products === null || products === void 0 ? void 0 : products.filter(function (p) {
            return selectedProducts.findIndex(function (sv) { return sv.id === p.id; }) < 0 &&
                Object.keys(selectedRowIds).findIndex(function (id) { return id === p.id; }) > -1;
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
            setOffset(function (old) { return old - pageSize; });
            setCurrentPage(function (old) { return old - 1; });
            previousPage();
        }
    };
    var handleSearch = function (q) {
        setOffset(0);
        setQuery(q);
    };
    (0, react_1.useEffect)(function () {
        console.log("products", selectedProducts);
    }, [selectedProducts]);
    return (<div className="w-full h-full flex flex-col justify-between overflow-y-auto">
      <table_1.default enableSearch handleSearch={handleSearch} searchPlaceholder="Search Products" filteringOptions={filteringOptions} {...getTableProps()} className="h-full">
        {isLoading || !products ? null : (<table_1.default.Body {...getTableBodyProps()}>
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
      <table_1.TablePagination count={count} limit={limit} offset={offset} pageSize={offset + rows.length} title="Products" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
    </div>);
};
exports.default = CollectionProductTable;
