"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var react_1 = require("react");
var color_1 = require("../../../utils/color");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var customer_avatar_item_1 = require("../../molecules/customer-avatar-item");
var table_1 = require("../../molecules/table");
var useDraftOrderTableColumns = function () {
    var decideStatus = function (status) {
        switch (status) {
            case "completed":
                return <status_indicator_1.default variant="success" title={"Completed"}/>;
            default:
                return <status_indicator_1.default variant="primary" title={"Open"}/>;
        }
    };
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: "Draft",
            accessor: "display_id",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index} className="pl-2">{"#".concat(value)}</table_1.default.Cell>);
            },
        },
        {
            Header: "Order",
            accessor: "order_display_id",
            Cell: function (_a, index) {
                var _b, _c;
                var row = _a.row;
                return (<table_1.default.Cell key={index}>
            {((_b = row.original.order) === null || _b === void 0 ? void 0 : _b.display_id)
                        ? "#".concat((_c = row.original.order) === null || _c === void 0 ? void 0 : _c.display_id)
                        : ""}
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Date added",
            accessor: "created_at",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>
            {(0, moment_1.default)(value).format("DD MMM YYYY")}
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Customer",
            accessor: "shipping_address",
            Cell: function (_a) {
                var row = _a.row, value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>
            <customer_avatar_item_1.default customer={{
                        first_name: (value === null || value === void 0 ? void 0 : value.first_name) || "",
                        last_name: (value === null || value === void 0 ? void 0 : value.last_name) || "",
                    }} color={(0, color_1.getColor)(row.index)}/>
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index} className="pr-2">
            {decideStatus(value)}
          </table_1.default.Cell>);
            },
        },
    ]; }, []);
    return [columns];
};
exports.default = useDraftOrderTableColumns;
