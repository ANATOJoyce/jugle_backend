"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_table_1 = require("react-table");
var gatsby_1 = require("gatsby");
var config_1 = require("./config");
var table_1 = require("../../molecules/table");
var details_icon_1 = require("../../fundamentals/details-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
/* ********************************************* */
/* ************** TABLE COMPONENTS ************* */
/* ********************************************* */
/*
 * Renders customer group customers list header row.
 */
function CustomersListTableHeaderRow(props) {
    var headerGroup = props.headerGroup;
    return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
      {props.headerGroup.headers.map(function (col, index) {
            var render = col.render, getHeaderProps = col.getHeaderProps, getSortByToggleProps = col.getSortByToggleProps;
            var className = index ? "w-[100px]" : "w-[60px]";
            return (<table_1.default.HeadCell className={className} {...getHeaderProps(getSortByToggleProps())}>
            {render("Header")}
          </table_1.default.HeadCell>);
        })}
    </table_1.default.HeadRow>);
}
/*
 * Renders customer group customers list table row.
 */
function CustomersListTableRow(props) {
    var row = props.row, removeCustomers = props.removeCustomers;
    var actions = [
        {
            label: "Details",
            onClick: function () { return (0, gatsby_1.navigate)("/a/customers/".concat(row.original.id)); },
            icon: <details_icon_1.default size={20}/>,
        },
        // {
        //   label: "Send an email",
        //   onClick: () => window.open(`mailto:${row.original.email}`),
        //   icon: <MailIcon size={20} />,
        // },
        {
            label: "Delete from the group",
            variant: "danger",
            onClick: function () {
                return removeCustomers({
                    customer_ids: [{ id: row.original.id }],
                });
            },
            icon: <trash_icon_1.default size={20}/>,
        },
    ];
    return (<table_1.default.Row color={"inherit"} actions={actions} linkTo={"/a/customers/".concat(props.row.original.id)} {...props.row.getRowProps()}>
      {props.row.cells.map(function (cell, index) { return (<table_1.default.Cell {...cell.getCellProps()}>
          {cell.render("Cell", { index: index })}
        </table_1.default.Cell>); })}
    </table_1.default.Row>);
}
/*
 * Render a list of customers that belong to a customer group.
 */
function CustomersListTable(props) {
    var _a;
    var customers = props.customers, removeCustomers = props.removeCustomers, setQuery = props.setQuery, paginate = props.paginate, filteringOptions = props.filteringOptions, query = props.query, queryObject = props.queryObject, count = props.count;
    var tableConfig = {
        data: customers,
        columns: config_1.CUSTOMER_GROUPS_CUSTOMERS_LIST_TABLE_COLUMNS,
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
    return (<>
      <table_1.default enableSearch handleSearch={handleSearch} searchValue={query} filteringOptions={filteringOptions} {...table.getTableProps()}>
        <table_1.default.Head>
          {(_a = table.headerGroups) === null || _a === void 0 ? void 0 : _a.map(function (headerGroup, index) { return (<CustomersListTableHeaderRow key={index} headerGroup={headerGroup}/>); })}
        </table_1.default.Head>

        <table_1.default.Body {...table.getTableBodyProps()}>
          {table.rows.map(function (row) {
            table.prepareRow(row);
            return (<CustomersListTableRow row={row} key={row.id} removeCustomers={removeCustomers}/>);
        })}
        </table_1.default.Body>
      </table_1.default>

      <table_1.TablePagination count={count} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + table.rows.length} title="Customer Groups" currentPage={table.state.pageIndex + 1} pageCount={table.pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={table.canNextPage} hasPrev={table.canPreviousPage}/>
    </>);
}
exports.default = CustomersListTable;
