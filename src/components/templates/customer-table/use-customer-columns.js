"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomerColumns = void 0;
var moment_1 = require("moment");
var react_1 = require("react");
var color_1 = require("../../../utils/color");
var customer_avatar_item_1 = require("../../molecules/customer-avatar-item");
var useCustomerColumns = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: "Date added",
            accessor: "created_at", // accessor is the "key" in the data
            Cell: function (_a) {
                var value = _a.cell.value;
                return (0, moment_1.default)(value).format("DD MMM YYYY");
            },
        },
        {
            Header: "Name",
            accessor: "customer",
            Cell: function (_a) {
                var row = _a.row;
                return (<customer_avatar_item_1.default customer={row.original} color={(0, color_1.getColor)(row.index)}/>);
            },
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "",
            accessor: "col",
        },
        {
            accessor: "orders",
            Header: function () { return <div className="text-right">Orders</div>; },
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<div className="text-right">{(value === null || value === void 0 ? void 0 : value.length) || 0}</div>);
            },
        },
        {
            Header: "",
            accessor: "col-2",
        },
    ]; }, []);
    return [columns];
};
exports.useCustomerColumns = useCustomerColumns;
