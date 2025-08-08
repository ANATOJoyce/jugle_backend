"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var react_1 = require("react");
var react_country_flag_1 = require("react-country-flag");
var color_1 = require("../../../utils/color");
var countries_1 = require("../../../utils/countries");
var prices_1 = require("../../../utils/prices");
var tooltip_1 = require("../../atoms/tooltip");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var customer_avatar_item_1 = require("../../molecules/customer-avatar-item");
var table_1 = require("../../molecules/table");
var useOrderTableColums = function () {
    var decideStatus = function (status) {
        switch (status) {
            case "captured":
                return <status_indicator_1.default variant="success" title={"Paid"}/>;
            case "awaiting":
                return <status_indicator_1.default variant="default" title={"Awaiting"}/>;
            case "requires_action":
                return <status_indicator_1.default variant="danger" title={"Requires action"}/>;
            case "canceled":
                return <status_indicator_1.default variant="warning" title={"Canceled"}/>;
            default:
                return <status_indicator_1.default variant="primary" title={"N/A"}/>;
        }
    };
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: <table_1.default.HeadCell className="pl-2">Order</table_1.default.HeadCell>,
            accessor: "display_id",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index} className="text-grey-90 group-hover:text-violet-60 min-w-[100px] pl-2">{"#".concat(value)}</table_1.default.Cell>);
            },
        },
        {
            Header: "Date added",
            accessor: "created_at",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>
            <tooltip_1.default content={(0, moment_1.default)(value).format("DD MMM YYYY hh:mm a")}>
              {(0, moment_1.default)(value).format("DD MMM YYYY")}
            </tooltip_1.default>
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
                        first_name: value.first_name,
                        last_name: value.last_name,
                    }} color={(0, color_1.getColor)(row.index)}/>
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Fulfillment",
            accessor: "fulfillment_status",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>{value}</table_1.default.Cell>);
            },
        },
        {
            Header: "Payment status",
            accessor: "payment_status",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>{decideStatus(value)}</table_1.default.Cell>);
            },
        },
        {
            Header: "Sales Channel",
            accessor: "sales_channel",
            Cell: function (_a) {
                var _b;
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>{(_b = value === null || value === void 0 ? void 0 : value.name) !== null && _b !== void 0 ? _b : "N/A"}</table_1.default.Cell>);
            },
        },
        {
            Header: function () { return <div className="text-right">Total</div>; },
            accessor: "total",
            Cell: function (_a) {
                var row = _a.row, value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>
            <div className="text-right">
              {(0, prices_1.formatAmountWithSymbol)({
                        amount: value,
                        currency: row.original.currency_code,
                        digits: 2,
                    })}
            </div>
          </table_1.default.Cell>);
            },
        },
        {
            Header: "",
            accessor: "currency_code",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index} className="w-[5%]">
            <div className="text-right text-grey-40">{value.toUpperCase()}</div>
          </table_1.default.Cell>);
            },
        },
        {
            Header: "",
            accessor: "country_code",
            Cell: function (_a) {
                var row = _a.row, index = _a.index;
                return (<table_1.default.Cell className="w-[5%] pr-2" key={index}>
            <div className="flex rounded-rounded w-full justify-end">
              <tooltip_1.default content={countries_1.isoAlpha2Countries[row.original.shipping_address.country_code.toUpperCase()] || row.original.shipping_address.country_code.toUpperCase()}>
                <react_country_flag_1.default className={"rounded"} svg countryCode={row.original.shipping_address.country_code}/>
              </tooltip_1.default>
            </div>
          </table_1.default.Cell>);
            },
        },
    ]; }, []);
    return [columns];
};
exports.default = useOrderTableColums;
