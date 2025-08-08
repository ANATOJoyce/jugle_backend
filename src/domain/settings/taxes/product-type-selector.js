"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeSelector = void 0;
var react_1 = require("react");
var medusa_react_1 = require("medusa-react");
var selectable_table_1 = require("./selectable-table");
var ProductTypeSelector = function (_a) {
    var items = _a.items, onChange = _a.onChange;
    var PAGE_SIZE = 12;
    var _b = (0, react_1.useState)({
        limit: PAGE_SIZE,
        offset: 0,
    }), pagination = _b[0], setPagination = _b[1];
    var _c = (0, medusa_react_1.useAdminProductTypes)(pagination), isLoading = _c.isLoading, count = _c.count, product_types = _c.product_types;
    var columns = (0, react_1.useMemo)(function () {
        return [
            {
                Header: "Name",
                accessor: "value",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return <div className="w-[200px]">{original.value}</div>;
                },
            },
        ];
    }, []);
    return (<selectable_table_1.SelectableTable showSearch={false} label="Select Product Types" objectName="Product Types" totalCount={count} pagination={pagination} onPaginationChange={setPagination} selectedIds={items} data={product_types} columns={columns} isLoading={isLoading} onChange={onChange}/>);
};
exports.ProductTypeSelector = ProductTypeSelector;
