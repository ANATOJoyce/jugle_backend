"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var table_1 = require("../../molecules/table");
var utils_1 = require("./utils");
var useCollectionProductColumns = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            accessor: "thumbnail",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<table_1.default.Cell className="w-[5%]">
            <div className="h-[40px] w-[30px] bg-grey-5 rounded-soft overflow-hidden my-xsmall">
              {value ? (<img src={value} alt="Thumbnail" className="h-full w-full object-cover"/>) : null}
            </div>
          </table_1.default.Cell>);
            },
        },
        {
            accessor: "title",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<table_1.default.Cell className="w-3/6">{value}</table_1.default.Cell>);
            },
        },
        {
            accessor: "status",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<table_1.default.Cell className="w-[10%] pr-base">
            <div className="flex items-center justify-end">
              {(0, utils_1.decideStatus)(value)}
            </div>
          </table_1.default.Cell>);
            },
        },
    ]; }, []);
    return columns;
};
exports.default = useCollectionProductColumns;
