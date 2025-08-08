"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALES_CHANNEL_PRODUCTS_TABLE_COLUMNS = void 0;
var react_1 = require("react");
var indeterminate_checkbox_1 = require("../../../components/molecules/indeterminate-checkbox");
var image_placeholder_1 = require("../../../components/fundamentals/image-placeholder");
exports.SALES_CHANNEL_PRODUCTS_TABLE_COLUMNS = [
    {
        width: 30,
        id: "selection",
        Header: function (_a) {
            var getToggleAllPageRowsSelectedProps = _a.getToggleAllPageRowsSelectedProps;
            return (<span className="flex justify-center">
        <indeterminate_checkbox_1.default {...getToggleAllPageRowsSelectedProps()}/>
      </span>);
        },
        Cell: function (_a) {
            var row = _a.row;
            return (<span onClick={function (e) { return e.stopPropagation(); }} className="flex justify-center">
          <indeterminate_checkbox_1.default {...row.getToggleRowSelectedProps()}/>
        </span>);
        },
    },
    {
        Header: "Name",
        accessor: "title",
        Cell: function (_a) {
            var original = _a.row.original;
            return (<div className="flex items-center">
          <div className="h-[40px] w-[30px] my-1.5 flex items-center mr-4">
            {original.thumbnail ? (<img src={original.thumbnail} className="h-full object-cover rounded-soft"/>) : (<div className="flex items-center justify-center w-full h-full rounded-soft bg-grey-10">
                <image_placeholder_1.default size={16}/>
              </div>)}
          </div>
          {original.title}
        </div>);
        },
    },
    {
        Header: "Collection",
        accessor: "collection",
        Cell: function (_a) {
            var value = _a.cell.value;
            return <div>{(value === null || value === void 0 ? void 0 : value.title) || "-"}</div>;
        },
    },
];
