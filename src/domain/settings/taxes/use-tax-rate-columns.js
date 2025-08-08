"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var badge_1 = require("../../../components/fundamentals/badge");
var lock_icon_1 = require("../../../components/fundamentals/icons/lock-icon");
var table_1 = require("../../../components/molecules/table");
var useTaxRateColumns = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: <table_1.default.HeadCell className="pl-2">Name</table_1.default.HeadCell>,
            accessor: "name",
            Cell: function (_a) {
                var row = _a.row, value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index} className="text-grey-90 group-hover:text-violet-60 pl-2">
              {row.original.type === "region" ? (<div className="flex gap-x-xsmall text-grey-40 items-center">
                  <lock_icon_1.default size={"12"}/> {value}
                </div>) : value}
            </table_1.default.Cell>);
            },
        },
        {
            Header: "Code",
            accessor: "code",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>
            <badge_1.default variant="default">
            {value}</badge_1.default>
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Tax Rate",
            accessor: "rate",
            Cell: function (_a) {
                var row = _a.row, value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>{value} %</table_1.default.Cell>);
            },
        },
    ]; }, []);
    return [columns];
};
exports.default = useTaxRateColumns;
