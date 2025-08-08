"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var customer_group_context_1 = require("../../../domain/customers/groups/context/customer-group-context");
var use_query_filters_1 = require("../../../hooks/use-query-filters");
var use_set_search_params_1 = require("../../../hooks/use-set-search-params");
var details_icon_1 = require("../../fundamentals/details-icon");
var edit_icon_1 = require("../../fundamentals/icons/edit-icon");
var table_1 = require("../../molecules/table");
var config_1 = require("./config");
/**
 * Default filtering config for querying customer groups endpoint.
 */
var defaultQueryProps = {
    additionalFilters: { expand: "customers" },
    limit: 15,
    offset: 0,
};
/*
 * Customer groups empty state.
 */
function CustomerGroupsPlaceholder() {
    return (<div className="h-full flex center justify-center items-center min-h-[756px]">
      <span className="text-xs text-gray-400">No customer groups yet</span>
    </div>);
}
/*
 * Renders react-table cell for the customer groups table.
 */
function CustomerGroupsTableHeaderCell(props) {
    return (<table_1.default.HeadCell className="w-[100px]" {...props.col.getHeaderProps(props.col.getSortByToggleProps())}>
      {props.col.render("Header")}
    </table_1.default.HeadCell>);
}
/*
 * Renders react-table header row for the customer groups table.
 */
function CustomerGroupsTableHeaderRow(props) {
    return (<table_1.default.HeadRow {...props.headerGroup.getHeaderGroupProps()}>
      {props.headerGroup.headers.map(function (col) { return (<CustomerGroupsTableHeaderCell key={col.id} col={col}/>); })}
    </table_1.default.HeadRow>);
}
/*
 * Render react-table row for the customer groups table.
 */
function CustomerGroupsTableRow(props) {
    var row = props.row;
    var showModal = (0, react_1.useContext)(customer_group_context_1.default).showModal;
    var actions = [
        {
            label: "Edit",
            onClick: showModal,
            icon: <edit_icon_1.default size={20}/>,
        },
        {
            label: "Details",
            onClick: function () { return (0, gatsby_1.navigate)(row.original.id); },
            icon: <details_icon_1.default size={20}/>,
        },
    ];
    return (<table_1.default.Row color={"inherit"} actions={actions} linkTo={props.row.original.id} {...props.row.getRowProps()}>
      {props.row.cells.map(function (cell, index) { return (<table_1.default.Cell {...cell.getCellProps()}>
          {cell.render("Cell", { index: index })}
        </table_1.default.Cell>); })}
    </table_1.default.Row>);
}
/*
 * Root component of the customer groups table.
 */
function CustomerGroupsTable(props) {
    var _a;
    var customerGroups = props.customerGroups, queryObject = props.queryObject, count = props.count, paginate = props.paginate, setQuery = props.setQuery;
    var tableConfig = {
        columns: config_1.CUSTOMER_GROUPS_TABLE_COLUMNS,
        data: customerGroups || [],
        initialState: {
            pageSize: queryObject.limit,
            pageIndex: queryObject.offset / queryObject.limit,
        },
        pageCount: Math.ceil(count / queryObject.limit),
        manualPagination: true,
        autoResetPage: false,
    };
    var table = (0, react_table_1.useTable)(tableConfig, react_table_1.useSortBy, react_table_1.usePagination);
    // ********* HANDLERS *********
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
    // ********* RENDER *********
    return (<div className="w-full h-full overflow-y-auto flex flex-col justify-between">
      <table_1.default enableSearch handleSearch={handleSearch} searchValue={queryObject.q} {...table.getTableProps()}>
        {/* HEAD */}
        <table_1.default.Head>
          {(_a = table.headerGroups) === null || _a === void 0 ? void 0 : _a.map(function (headerGroup, ind) { return (<CustomerGroupsTableHeaderRow key={ind} headerGroup={headerGroup}/>); })}
        </table_1.default.Head>

        {/* BODY */}
        <table_1.default.Body {...table.getTableBodyProps()}>
          {table.rows.map(function (row) {
            table.prepareRow(row);
            return (<customer_group_context_1.CustomerGroupContextContainer key={row.id} group={row.original}>
                <CustomerGroupsTableRow row={row}/>
              </customer_group_context_1.CustomerGroupContextContainer>);
        })}
        </table_1.default.Body>
      </table_1.default>

      {/* PAGINATION */}
      <table_1.TablePagination count={count} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + table.rows.length} title="Customers" currentPage={table.state.pageIndex + 1} pageCount={table.pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={table.canNextPage} hasPrev={table.canPreviousPage}/>
    </div>);
}
/*
 * A container component for the customers group table.
 * Handles data fetching and query params persistence.
 */
function CustomerGroupsTableContainer() {
    var params = (0, use_query_filters_1.default)(defaultQueryProps);
    var _a = (0, medusa_react_1.useAdminCustomerGroups)(params.queryObject), customer_groups = _a.customer_groups, isLoading = _a.isLoading, _b = _a.count, count = _b === void 0 ? 0 : _b;
    (0, use_set_search_params_1.default)(params.representationObject);
    var showPlaceholder = !(customer_groups === null || customer_groups === void 0 ? void 0 : customer_groups.length) && !params.queryObject.q;
    if (showPlaceholder) {
        if (!isLoading) {
            return <CustomerGroupsPlaceholder />;
        }
        else {
            return null;
        }
    }
    return (<CustomerGroupsTable count={count} customerGroups={customer_groups || []} {...params}/>);
}
exports.default = CustomerGroupsTableContainer;
