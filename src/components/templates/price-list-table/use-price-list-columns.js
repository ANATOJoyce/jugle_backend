"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePriceListTableColumns = void 0;
var lodash_1 = require("lodash");
var react_1 = require("react");
var actionables_1 = require("../../molecules/actionables");
var table_1 = require("../../molecules/table");
var use_price_list_actions_1 = require("./use-price-list-actions");
var utils_1 = require("./utils");
var usePriceListTableColumns = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: <table_1.default.HeadCell>Name</table_1.default.HeadCell>,
            accessor: "name",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<table_1.default.Cell>
            <span className="inter-small-regular">{value}</span>
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Description",
            accessor: "description",
            Cell: function (_a) {
                var value = _a.cell.value;
                return <table_1.default.Cell>{value}</table_1.default.Cell>;
            },
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: function (_a) {
                var original = _a.row.original;
                return (<table_1.default.Cell>{(0, utils_1.getPriceListStatus)(original)}</table_1.default.Cell>);
            },
        },
        {
            Header: function () { return <div className="">Groups</div>; },
            accessor: "customer_groups",
            Cell: function (_a) {
                var value = _a.cell.value;
                var groups = (0, lodash_1.isArray)(value)
                    ? value.map(function (v) { return v.name; })
                    : [];
                var _b = (0, utils_1.formatPriceListGroups)(groups), group = _b[0], other = _b[1];
                return (<table_1.default.Cell>
              {group}
              {other && <span className="text-grey-40"> + {other} more</span>}
            </table_1.default.Cell>);
            },
        },
        {
            accessor: "created_at",
            Cell: function (_a) {
                var priceList = _a.row.original;
                var getActions = (0, use_price_list_actions_1.default)(priceList).getActions;
                return (<table_1.default.Cell onClick={function (e) { return e.stopPropagation(); }} className="w-full flex justify-end">
              <div className="justify-end">
                <actionables_1.default forceDropdown actions={getActions()}/>
              </div>
            </table_1.default.Cell>);
            },
        },
    ]; }, []);
    return [columns];
};
exports.usePriceListTableColumns = usePriceListTableColumns;
