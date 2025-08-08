"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingOptionSelector = void 0;
var react_1 = require("react");
var medusa_react_1 = require("medusa-react");
var selectable_table_1 = require("./selectable-table");
var ShippingOptionSelector = function (_a) {
    var regionId = _a.regionId, items = _a.items, onChange = _a.onChange;
    var PAGE_SIZE = 12;
    var _b = (0, react_1.useState)({
        limit: PAGE_SIZE,
        offset: 0,
    }), pagination = _b[0], setPagination = _b[1];
    var _c = (0, medusa_react_1.useAdminShippingOptions)({
        region_id: regionId,
    }), isLoading = _c.isLoading, count = _c.count, shipping_options = _c.shipping_options;
    var columns = (0, react_1.useMemo)(function () {
        return [
            {
                Header: "Name",
                accessor: "name",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return <div className="w-[200px]">{original.name}</div>;
                },
            },
        ];
    }, []);
    return (<selectable_table_1.SelectableTable showSearch={false} label="Select Shipping Option" objectName="Shipping Options" totalCount={count} pagination={pagination} onPaginationChange={setPagination} selectedIds={items} data={shipping_options} columns={columns} isLoading={isLoading} onChange={onChange}/>);
};
exports.ShippingOptionSelector = ShippingOptionSelector;
