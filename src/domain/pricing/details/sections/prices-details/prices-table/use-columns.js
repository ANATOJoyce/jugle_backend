"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var image_placeholder_1 = require("../../../../../../components/fundamentals/image-placeholder");
var table_1 = require("../../../../../../components/molecules/table");
var usePricesColumns = function () {
    var columns = React.useMemo(function () { return [
        {
            Header: <table_1.default.HeadCell className="pl-4">Name</table_1.default.HeadCell>,
            accessor: "title",
            Cell: function (_a) {
                var original = _a.row.original;
                return (<div className="pl-4 flex items-center">
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
            Header: (<table_1.default.HeadCell className="w-[400px]">Collection</table_1.default.HeadCell>),
            accessor: "collection",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<table_1.default.Cell>
            {(value === null || value === void 0 ? void 0 : value.title) ? (value.title) : (<span className="text-grey-40">No collection</span>)}
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Variants",
            Cell: function (_a) {
                var original = _a.row.original;
                return (<table_1.default.Cell>{original.variants.length}</table_1.default.Cell>);
            },
        },
    ]; }, []);
    return columns;
};
exports.default = usePricesColumns;
