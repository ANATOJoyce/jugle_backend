"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var react_1 = require("react");
var tooltip_1 = require("../../atoms/tooltip");
var useCollectionTableColumn = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: "Title",
            accessor: "title",
            Cell: function (_a) {
                var original = _a.row.original;
                return <div className="flex items-center">{original.title}</div>;
            },
        },
        {
            Header: "Handle",
            accessor: "handle",
            Cell: function (_a) {
                var value = _a.cell.value;
                return <div>/{value}</div>;
            },
        },
        {
            Header: "Created At",
            accessor: "created_at",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<tooltip_1.default content={(0, moment_1.default)(value).format("DD MMM YYYY hh:mm A")}>
            {(0, moment_1.default)(value).format("DD MMM YYYY")}
          </tooltip_1.default>);
            },
        },
        {
            Header: "Updated At",
            accessor: "updated_at",
            Cell: function (_a) {
                var value = _a.cell.value;
                return (<tooltip_1.default content={(0, moment_1.default)(value).format("DD MMM YYYY hh:mm A")}>
            {(0, moment_1.default)(value).format("DD MMM YYYY")}
          </tooltip_1.default>);
            },
        },
        {
            Header: "Products",
            accessor: "products",
            Cell: function (_a) {
                var value = _a.cell.value;
                return <div>{(value === null || value === void 0 ? void 0 : value.length) || "-"}</div>;
            },
        },
    ]; }, []);
    return [columns];
};
exports.default = useCollectionTableColumn;
