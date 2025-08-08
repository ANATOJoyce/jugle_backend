"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypesColumns = exports.TypesHeader = exports.TypeRow = void 0;
var react_1 = require("react");
var sorting_icon_1 = require("../../../../../../components/fundamentals/icons/sorting-icon");
var table_1 = require("../../../../../../components/molecules/table");
var TypeRow = function (_a) {
    var row = _a.row;
    return (<table_1.default.Row {...row.getRowProps()}>
      {row.cells.map(function (cell) {
            return (<table_1.default.Cell {...cell.getCellProps()}>
            {cell.render("Cell")}
          </table_1.default.Cell>);
        })}
    </table_1.default.Row>);
};
exports.TypeRow = TypeRow;
var TypesHeader = function (_a) {
    var headerGroup = _a.headerGroup;
    return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell className="w-[100px]" {...col.getHeaderProps(col.getSortByToggleProps())}>
          {col.render("Header")}
        </table_1.default.HeadCell>); })}
    </table_1.default.HeadRow>);
};
exports.TypesHeader = TypesHeader;
var useTypesColumns = function () {
    var columns = (0, react_1.useMemo)(function () {
        return [
            {
                Header: function () { return (<div className="flex items-center gap-1 min-w-[626px]">
            Type <sorting_icon_1.default size={16}/>
          </div>); },
                accessor: "value",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return <span>{original.value}</span>;
                },
            },
        ];
    }, []);
    return columns;
};
exports.useTypesColumns = useTypesColumns;
