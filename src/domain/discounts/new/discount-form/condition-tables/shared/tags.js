"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRow = exports.TagHeader = exports.TagColumns = void 0;
var react_1 = require("react");
var sorting_icon_1 = require("../../../../../../components/fundamentals/icons/sorting-icon");
var table_1 = require("../../../../../../components/molecules/table");
exports.TagColumns = [
    {
        Header: function () { return (<div className="flex items-center gap-1">
        Tag <sorting_icon_1.default size={16}/>
      </div>); },
        accessor: "value",
        Cell: function (_a) {
            var original = _a.row.original;
            return (<div className="w-[220px]">
          <span className="bg-grey-10 px-2 py-0.5 rounded-rounded">
            #{original.value}
          </span>
        </div>);
        },
    },
];
var TagHeader = function (_a) {
    var headerGroup = _a.headerGroup;
    return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell {...col.getHeaderProps(col.getSortByToggleProps())} className="w-[20px]">
          {col.render("Header")}
        </table_1.default.HeadCell>); })}
    </table_1.default.HeadRow>);
};
exports.TagHeader = TagHeader;
var TagRow = function (_a) {
    var row = _a.row;
    return (<table_1.default.Row {...row.getRowProps()}>
      {row.cells.map(function (cell) {
            return (<table_1.default.Cell {...cell.getCellProps()}>
            {cell.render("Cell")}
          </table_1.default.Cell>);
        })}
    </table_1.default.Row>);
};
exports.TagRow = TagRow;
