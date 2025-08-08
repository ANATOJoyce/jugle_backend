"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProductColumns = exports.ProductsHeader = exports.ProductRow = void 0;
var react_1 = require("react");
var sorting_icon_1 = require("../../../../../../components/fundamentals/icons/sorting-icon");
var image_placeholder_1 = require("../../../../../../components/fundamentals/image-placeholder");
var status_indicator_1 = require("../../../../../../components/fundamentals/status-indicator");
var table_1 = require("../../../../../../components/molecules/table");
var getProductStatusVariant = function (status) {
    switch (status) {
        case "proposed":
            return "warning";
        case "published":
            return "success";
        case "rejected":
            return "danger";
        case "draft":
        default:
            return "default";
    }
};
var ProductRow = function (_a) {
    var row = _a.row;
    return (<table_1.default.Row {...row.getRowProps()}>
      {row.cells.map(function (cell) {
            return (<table_1.default.Cell {...cell.getCellProps()}>
            {cell.render("Cell")}
          </table_1.default.Cell>);
        })}
    </table_1.default.Row>);
};
exports.ProductRow = ProductRow;
var ProductsHeader = function (_a) {
    var headerGroup = _a.headerGroup;
    return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell className="w-[100px]" {...col.getHeaderProps(col.getSortByToggleProps())}>
          {col.render("Header")}
        </table_1.default.HeadCell>); })}
    </table_1.default.HeadRow>);
};
exports.ProductsHeader = ProductsHeader;
var useProductColumns = function () {
    var columns = (0, react_1.useMemo)(function () {
        return [
            {
                Header: function () { return (<div className="flex items-center gap-1 min-w-[443px]">
            Title <sorting_icon_1.default size={16}/>
          </div>); },
                accessor: "title",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return (<div className="flex items-center">
              <div className="h-[40px] w-[30px] my-1.5 flex items-center mr-4">
                {original.thumbnail ? (<img src={original.thumbnail} className="h-full object-cover rounded-soft"/>) : (<div className="flex items-center justify-center w-full h-full rounded-soft bg-grey-10">
                    <image_placeholder_1.default size={16}/>
                  </div>)}
              </div>
              <div className="flex flex-col">
                <span>{original.title}</span>
              </div>
            </div>);
                },
            },
            {
                Header: function () { return (<div className="flex items-center gap-1">
            Status <sorting_icon_1.default size={16}/>
          </div>); },
                accessor: "status",
                Cell: function (_a) {
                    var original = _a.row.original;
                    return (<status_indicator_1.default title={"".concat(original.status
                            .charAt(0)
                            .toUpperCase()).concat(original.status.slice(1))} variant={getProductStatusVariant(original.status)}/>);
                },
            },
            {
                Header: function () { return (<div className="flex justify-end items-center gap-1">
            Variants <sorting_icon_1.default size={16}/>
          </div>); },
                id: "variants",
                accessor: function (row) { return row.variants.length; },
                Cell: function (_a) {
                    var value = _a.cell.value;
                    return <div className="text-right">{value}</div>;
                },
            },
        ];
    }, []);
    return columns;
};
exports.useProductColumns = useProductColumns;
