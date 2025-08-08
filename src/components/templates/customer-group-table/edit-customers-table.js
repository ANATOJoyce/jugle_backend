"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var use_query_filters_1 = require("../../../hooks/use-query-filters");
var button_1 = require("../../fundamentals/button");
var modal_1 = require("../../molecules/modal");
var table_1 = require("../../molecules/table");
var config_1 = require("./config");
/**
 * Default filtering config for querying customers endpoint.
 */
var defaultQueryProps = {
    additionalFilters: { expand: "groups" },
    limit: 15,
};
/*
 * Edit customers table header row.
 */
function EditCustomersTableHeaderRow(props) {
    var headerGroup = props.headerGroup;
    return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(function (col, index) { return (<table_1.default.HeadCell className="w-[100px]" {...col.getHeaderProps()}>
          {col.render("Header")}
        </table_1.default.HeadCell>); })}
    </table_1.default.HeadRow>);
}
/*
 * Edit customers table row.
 */
function EditCustomersTableRow(props) {
    return (<table_1.default.Row color={"inherit"} linkTo={"/a/customers/".concat(props.row.original.id)} {...props.row.getRowProps()}>
      {props.row.cells.map(function (cell, index) { return (<table_1.default.Cell {...cell.getCellProps()}>
          {cell.render("Cell", { index: index })}
        </table_1.default.Cell>); })}
    </table_1.default.Row>);
}
/*
 * Container for the "edit customers" table.
 */
function EditCustomersTable(props) {
    var _a;
    var setSelectedCustomerIds = props.setSelectedCustomerIds, selectedCustomerIds = props.selectedCustomerIds, handleSubmit = props.handleSubmit, onClose = props.onClose;
    var _b = (0, use_query_filters_1.default)(defaultQueryProps), paginate = _b.paginate, setQuery = _b.setQuery, setFilters = _b.setFilters, filters = _b.filters, queryObject = _b.queryObject;
    var _c = (0, react_1.useState)(0), numPages = _c[0], setNumPages = _c[1];
    var _d = (0, react_1.useState)(), activeGroupId = _d[0], setActiveGroupId = _d[1];
    var customer_groups = (0, medusa_react_1.useAdminCustomerGroups)({ expand: "customers" }).customer_groups;
    var _e = (0, medusa_react_1.useAdminCustomers)(__assign(__assign({}, queryObject), { groups: activeGroupId ? [activeGroupId] : null })), _f = _e.customers, customers = _f === void 0 ? [] : _f, _g = _e.count, count = _g === void 0 ? 0 : _g;
    (0, react_1.useEffect)(function () {
        if (typeof count !== "undefined") {
            var controlledPageCount = Math.ceil(count / queryObject.limit);
            setNumPages(controlledPageCount);
        }
    }, [count]);
    var tableConfig = {
        columns: config_1.CUSTOMER_GROUPS_CUSTOMERS_TABLE_COLUMNS,
        data: customers,
        initialState: {
            pageSize: queryObject.limit,
            pageIndex: queryObject.offset / queryObject.limit,
            selectedRowIds: selectedCustomerIds.reduce(function (prev, id) {
                prev[id] = true;
                return prev;
            }, {}),
        },
        pageCount: numPages,
        autoResetSelectedRows: false,
        manualPagination: true,
        autoResetPage: false,
        getRowId: function (row) { return row.id; },
    };
    var table = (0, react_table_1.useTable)(tableConfig, react_table_1.usePagination, react_table_1.useRowSelect);
    (0, react_1.useEffect)(function () {
        setSelectedCustomerIds(Object.keys(table.state.selectedRowIds));
    }, [table.state.selectedRowIds]);
    (0, react_1.useEffect)(function () {
        setFilters("offset", 0);
        table.gotoPage(0);
    }, [activeGroupId]);
    var filteringOptions = [
        {
            title: "Groups",
            options: __spreadArray([
                {
                    title: "All",
                    onClick: function () { return setActiveGroupId(null); },
                }
            ], (customer_groups || []).map(function (g) { return ({
                title: g.name,
                count: g.customers.length,
                onClick: function () { return setActiveGroupId(g.id); },
            }); }), true),
        },
    ];
    var handleNext = function () {
        if (!table.canNextPage) {
            return;
        }
        paginate(1);
        table.nextPage();
    };
    var handlePrev = function () {
        if (!table.canPreviousPage) {
            return;
        }
        paginate(-1);
        table.previousPage();
    };
    var handleSearch = function (text) {
        setQuery(text);
        if (text) {
            table.gotoPage(0);
        }
    };
    return (<modal_1.default handleClose={onClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onClose}>
          <h3 className="inter-xlarge-semibold">Edit Customers</h3>
        </modal_1.default.Header>

        <modal_1.default.Content>
          <div className="w-full flex flex-col justify-between h-[650px]">
            <table_1.default filteringOptions={filteringOptions} enableSearch handleSearch={handleSearch} searchValue={queryObject.q} {...table.getTableProps()}>
              <table_1.default.Head>
                {(_a = table.headerGroups) === null || _a === void 0 ? void 0 : _a.map(function (headerGroup) { return (<EditCustomersTableHeaderRow headerGroup={headerGroup}/>); })}
              </table_1.default.Head>

              <table_1.default.Body {...table.getTableBodyProps()}>
                {table.rows.map(function (row) {
            table.prepareRow(row);
            return <EditCustomersTableRow row={row}/>;
        })}
              </table_1.default.Body>
            </table_1.default>

            <table_1.TablePagination count={count} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + table.rows.length} title="Customers" currentPage={table.state.pageIndex + 1} pageCount={table.pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={table.canNextPage} hasPrev={table.canPreviousPage}/>
          </div>
        </modal_1.default.Content>

        <modal_1.default.Footer>
          <div className="flex items-center justify-end gap-x-xsmall w-full">
            <button_1.default variant="ghost" size="small" className="w-eventButton" onClick={onClose}>
              Cancel
            </button_1.default>
            <button_1.default variant="primary" size="small" className="w-eventButton" onClick={handleSubmit}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
}
exports.default = EditCustomersTable;
