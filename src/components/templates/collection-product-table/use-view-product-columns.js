"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var table_1 = require("../../molecules/table");
var utils_1 = require("./utils");
var useViewProductColumns = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            id: "selection",
            Cell: function (_a) {
                var row = _a.row;
                return (<table_1.default.Cell className="w-[0%] pl-base pr-large">
              <div>{row.index + 1}</div>
            </table_1.default.Cell>);
            },
        },
        {
            accessor: "thumbnail",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<table_1.default.Cell className="w-[0%] pr-base">
            <div className="h-[40px] w-[30px] bg-grey-5 rounded-soft overflow-hidden my-xsmall">
              {value ? (<img src={value} alt="Thumbnail" className="h-full w-full object-cover"/>) : null}
            </div>
          </table_1.default.Cell>);
            },
        },
        {
            accessor: "title",
            Cell: function (_a) {
                var _b = _a.cell, row = _b.row, value = _b.value;
                return (<table_1.default.Cell className="w-[20%]">
            <gatsby_1.Link to={"/a/products/".concat(row.original.id)}>{value}</gatsby_1.Link>
          </table_1.default.Cell>);
            },
        },
        {
            accessor: "status",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<table_1.default.Cell className="w-[50%] justify-start">
            {(0, utils_1.decideStatus)(value)}
          </table_1.default.Cell>);
            },
        },
    ]; }, []);
    return columns;
};
exports.default = useViewProductColumns;
