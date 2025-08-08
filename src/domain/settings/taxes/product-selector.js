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
exports.ProductSelector = void 0;
var react_1 = require("react");
var medusa_react_1 = require("medusa-react");
var use_debounce_1 = require("../../../hooks/use-debounce");
var selectable_table_1 = require("./selectable-table");
var ProductSelector = function (_a) {
    var items = _a.items, onChange = _a.onChange;
    var PAGE_SIZE = 12;
    var _b = (0, react_1.useState)({
        limit: PAGE_SIZE,
        offset: 0,
    }), pagination = _b[0], setPagination = _b[1];
    var _c = (0, react_1.useState)(""), query = _c[0], setQuery = _c[1];
    var debouncedSearchTerm = (0, use_debounce_1.useDebounce)(query, 500);
    var _d = (0, medusa_react_1.useAdminProducts)(__assign({ q: debouncedSearchTerm }, pagination)), isLoading = _d.isLoading, count = _d.count, products = _d.products;
    var handleSearch = function (q) {
        setPagination(function (p) {
            return __assign(__assign({}, p), { offset: 0 });
        });
        setQuery(q);
    };
    var columns = (0, react_1.useMemo)(function () {
        return [
            {
                Header: "Name",
                accessor: "title",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return (<div className="flex items-center">
              <div className="h-[40px] w-[30px] my-1.5 flex items-center mr-4">
                {original.thumbnail ? (<img src={original.thumbnail} className="h-full object-cover rounded-soft"/>) : (<></>)}
              </div>
              <div className="flex flex-col">
                <span>{original.title}</span>
              </div>
            </div>);
                },
            },
        ];
    }, []);
    return (<selectable_table_1.SelectableTable label="Select Products" objectName="Product" totalCount={count} pagination={pagination} onPaginationChange={setPagination} selectedIds={items} data={products} columns={columns} isLoading={isLoading} onSearch={handleSearch} onChange={onChange}/>);
};
exports.ProductSelector = ProductSelector;
