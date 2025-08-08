"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGroupColumns = exports.CustomerGroupsRow = exports.CustomerGroupsHeader = void 0;
var react_1 = require("react");
var sorting_icon_1 = require("../../../../../../components/fundamentals/icons/sorting-icon");
var table_1 = require("../../../../../../components/molecules/table");
var CustomerGroupsHeader = function (_a) {
    var headerGroup = _a.headerGroup;
    return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell className="w-[100px]" {...col.getHeaderProps(col.getSortByToggleProps())}>
          {col.render("Header")}
        </table_1.default.HeadCell>); })}
    </table_1.default.HeadRow>);
};
exports.CustomerGroupsHeader = CustomerGroupsHeader;
var CustomerGroupsRow = function (_a) {
    var row = _a.row;
    return (<table_1.default.Row {...row.getRowProps()}>
      {row.cells.map(function (cell) {
            return (<table_1.default.Cell {...cell.getCellProps()}>
            {cell.render("Cell")}
          </table_1.default.Cell>);
        })}
    </table_1.default.Row>);
};
exports.CustomerGroupsRow = CustomerGroupsRow;
var useGroupColumns = function () {
    var columns = (0, react_1.useMemo)(function () {
        return [
            {
                Header: function () { return (<div className="flex items-center gap-1 min-w-[540px]">
            Title <sorting_icon_1.default size={16}/>
          </div>); },
                accessor: "name",
            },
            {
                Header: function () { return (<div className="flex justify-end items-center gap-1">
            Members <sorting_icon_1.default size={16}/>
          </div>); },
                id: "members",
                accessor: function (r) { var _a; return (_a = r.customers) === null || _a === void 0 ? void 0 : _a.length; },
                Cell: function (_a) {
                    var value = _a.cell.value;
                    return <div className="text-right">{value}</div>;
                },
            },
        ];
    }, []);
    return columns;
};
exports.useGroupColumns = useGroupColumns;
