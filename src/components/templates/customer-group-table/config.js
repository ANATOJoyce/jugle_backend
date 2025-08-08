"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOMER_GROUPS_CUSTOMERS_LIST_TABLE_COLUMNS = exports.CUSTOMER_GROUPS_CUSTOMERS_TABLE_COLUMNS = exports.CUSTOMER_GROUPS_TABLE_COLUMNS = void 0;
var react_1 = require("react");
var customer_avatar_item_1 = require("../../molecules/customer-avatar-item");
var color_1 = require("../../../utils/color");
var sorting_icon_1 = require("../../fundamentals/icons/sorting-icon");
var customers_groups_summary_1 = require("../../molecules/customers-groups-summary");
var indeterminate_checkbox_1 = require("../../molecules/indeterminate-checkbox");
var table_1 = require("../../molecules/table");
exports.CUSTOMER_GROUPS_TABLE_COLUMNS = [
    {
        Header: function () { return (<div className="flex items-center gap-1">
        Title <sorting_icon_1.default size={16}/>
      </div>); },
        accessor: "name",
    },
    {
        Header: function () { return (<div className="flex items-center gap-1">
        Members <sorting_icon_1.default size={16}/>
      </div>); },
        id: "members",
        accessor: function (r) { var _a; return (_a = r.customers) === null || _a === void 0 ? void 0 : _a.length; },
    },
];
exports.CUSTOMER_GROUPS_CUSTOMERS_TABLE_COLUMNS = [
    {
        id: "selection",
        Header: function (_a) {
            var getToggleAllPageRowsSelectedProps = _a.getToggleAllPageRowsSelectedProps;
            return (<indeterminate_checkbox_1.default {...getToggleAllPageRowsSelectedProps()}/>);
        },
        Cell: function (_a) {
            var row = _a.row;
            return (<table_1.default.Cell onClick={function (e) { return e.stopPropagation(); }} className="w-[100px]">
          <indeterminate_checkbox_1.default {...row.getToggleRowSelectedProps()}/>
        </table_1.default.Cell>);
        },
    },
    {
        Header: function () { return (<div className="flex items-center gap-1">
        Name <sorting_icon_1.default size={16}/>
      </div>); },
        accessor: "customer",
        Cell: function (_a) {
            var row = _a.row;
            return (<customer_avatar_item_1.default customer={row.original} color={(0, color_1.getColor)(row.index)}/>);
        },
    },
    {
        Header: function () { return (<div className="flex items-center gap-1">
        Email <sorting_icon_1.default size={16}/>
      </div>); },
        accessor: "email",
    },
    {
        accessor: "groups",
        Header: function () { return <div className="text-left">Segments</div>; },
        Cell: function (_a) {
            var value = _a.cell.value;
            return <customers_groups_summary_1.default groups={value}/>;
        },
    },
];
exports.CUSTOMER_GROUPS_CUSTOMERS_LIST_TABLE_COLUMNS = [
    {
        Header: function () { return (<div className="flex items-center gap-1">
        Name <sorting_icon_1.default size={16}/>
      </div>); },
        accessor: "customer",
        Cell: function (_a) {
            var row = _a.row;
            return (<customer_avatar_item_1.default customer={row.original} color={(0, color_1.getColor)(row.index)}/>);
        },
    },
    {
        Header: function () { return (<div className="flex items-center gap-1">
        Email <sorting_icon_1.default size={16}/>
      </div>); },
        accessor: "email",
    },
    {
        accessor: "groups",
        disableSortBy: true,
        Header: "Groups",
        Cell: function (_a) {
            var value = _a.cell.value;
            return <customers_groups_summary_1.default groups={value}/>;
        },
    },
    {
        Header: "",
        id: "settings-col",
    },
];
