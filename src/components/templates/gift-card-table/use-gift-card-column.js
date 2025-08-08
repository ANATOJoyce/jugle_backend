"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var react_1 = require("react");
var icon_tooltip_1 = require("../../molecules/icon-tooltip");
var prices_1 = require("../../../utils/prices");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var table_1 = require("../../molecules/table");
var useGiftCardTableColums = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: <table_1.default.HeadCell className="pl-2">Code</table_1.default.HeadCell>,
            accessor: "code",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index} className="text-grey-90 group-hover:text-violet-60 w-[20%] pl-2">
            {value}
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Order",
            accessor: "order_id",
            Cell: function (_a) {
                var _b;
                var row = _a.row, value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index} className="text-grey-90 group-hover:text-violet-60 w-[10%] pl-2">
            {value ? ((_b = row.original.order) === null || _b === void 0 ? void 0 : _b.display_id) : (<span className="text-grey-90">-</span>)}
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Original Amount",
            accessor: "value",
            Cell: function (_a) {
                var row = _a.row, value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>
            {row.original.region ? ((0, prices_1.formatAmountWithSymbol)({
                        amount: value,
                        currency: row.original.region.currency_code,
                    })) : (<div className="flex items-center space-x-2">
                <span>N / A</span>
                <icon_tooltip_1.default content={"Region has been deleted"}/>
              </div>)}
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Balance",
            accessor: "balance",
            Cell: function (_a) {
                var row = _a.row, value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>
            {value ? (row.original.region ? ((0, prices_1.formatAmountWithSymbol)({
                        amount: value,
                        currency: row.original.region.currency_code,
                    })) : (<div className="flex items-center space-x-2">
                  <span>N / A</span>
                  <icon_tooltip_1.default content={"Region has been deleted"}/>
                </div>)) : (<status_indicator_1.default title="None" variant="danger"/>)}
          </table_1.default.Cell>);
            },
        },
        {
            Header: function () { return (<div className="pr-2 flex rounded-rounded w-full justify-end">
            Created
          </div>); },
            accessor: "created_at",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell className="pr-2" key={index}>
            <div className="flex rounded-rounded w-full justify-end">
              {(0, moment_1.default)(value).format("MMM Do YYYY")}
            </div>
          </table_1.default.Cell>);
            },
        },
    ]; }, []);
    return [columns];
};
exports.default = useGiftCardTableColums;
