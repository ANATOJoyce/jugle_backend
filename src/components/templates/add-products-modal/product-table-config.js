"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductHeader = exports.ProductRow = exports.columns = void 0;
var React = require("react");
var table_1 = require("../../molecules/table");
var image_placeholder_icon_1 = require("../../fundamentals/icons/image-placeholder-icon");
var utils_1 = require("../collection-product-table/utils");
var clsx_1 = require("clsx");
exports.columns = [
    {
        Header: <table_1.default.HeadCell className="pl-4">Product Details</table_1.default.HeadCell>,
        accessor: "title",
        Cell: function (_a) {
            var original = _a.row.original;
            return (<div className="pl-4 flex items-center w-[400px]">
        <div className="h-[40px] w-[30px] my-1.5 flex items-center mr-4">
          {original.thumbnail ? (<img src={original.thumbnail} className="h-full object-cover rounded-soft"/>) : (<div className="flex items-center justify-center w-full h-full rounded-soft bg-grey-10">
              <image_placeholder_icon_1.default size={16}/>
            </div>)}
        </div>
        <div className="flex flex-col">
          <span>
            {original.title}{" "}
            {original.subtitle && (<span className="text-grey-50">({original.subtitle})</span>)}
          </span>
        </div>
      </div>);
        },
    },
    {
        Header: <table_1.default.HeadCell>Status</table_1.default.HeadCell>,
        accessor: "status",
        Cell: function (_a) {
            var value = _a.cell.value;
            return (<table_1.default.Cell className="w-[10%] pr-base">
        <div className="flex items-center">{(0, utils_1.decideStatus)(value)}</div>
      </table_1.default.Cell>);
        },
    },
    {
        Header: (<table_1.default.HeadCell className="flex justify-end items-center pr-4">
        Variants
      </table_1.default.HeadCell>),
        accessor: "variants",
        Cell: function (_a) {
            var original = _a.row.original;
            return (<table_1.default.Cell className="flex justify-end items-center pr-4">
        {original.variants.length}
      </table_1.default.Cell>);
        },
    },
];
var ProductRow = function (_a) {
    var row = _a.row;
    var isSelected = row.isSelected;
    return (<table_1.default.Row {...row.getRowProps()} className={(0, clsx_1.default)({ "bg-grey-5": isSelected })}>
      {row.cells.map(function (cell) {
            return (<table_1.default.Cell {...cell.getCellProps()}>
            {cell.render("Cell")}
          </table_1.default.Cell>);
        })}
    </table_1.default.Row>);
};
exports.ProductRow = ProductRow;
var ProductHeader = function (_a) {
    var headerGroup = _a.headerGroup;
    return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell {...col.getHeaderProps(col.getSortByToggleProps())}>
          {col.render("Header")}
        </table_1.default.HeadCell>); })}
    </table_1.default.HeadRow>);
};
exports.ProductHeader = ProductHeader;
