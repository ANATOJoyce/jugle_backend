"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceListTable = PriceListTable;
var lodash_1 = require("lodash");
var react_1 = require("react");
var react_table_1 = require("react-table");
var table_1 = require("../../molecules/table");
/*
 * Renders react-table cell for the price lists table.
 */
function PriceListTableHeaderCell(props) {
    return (<table_1.default.HeadCell className="w-[100px]" {...props.col.getHeaderProps(props.col.getSortByToggleProps())}>
      {props.col.render("Header")}
    </table_1.default.HeadCell>);
}
/*
 * Renders react-table header row for the price list table.
 */
function PriceListTableHeaderRow(props) {
    return (<table_1.default.HeadRow {...props.headerGroup.getHeaderGroupProps()}>
      {props.headerGroup.headers.map(function (col) { return (<PriceListTableHeaderCell key={col.id} col={col}/>); })}
    </table_1.default.HeadRow>);
}
/*
 * Render react-table row for the price lists table.
 */
function PriceListTableRow(props) {
    var row = props.row;
    return (<table_1.default.Row color={"inherit"} linkTo={row.original.id} id={row.original.id} className="group" {...row.getRowProps()}>
      {row.cells.map(function (cell, index) { return cell.render("Cell", { index: index }); })}
    </table_1.default.Row>);
}
/*
 * Root component of the price lists table.
 */
function PriceListTable(props) {
    var _a;
    var priceLists = props.priceLists, queryObject = props.queryObject, count = props.count, paginate = props.paginate, setQuery = props.setQuery, columns = props.columns, options = props.options;
    var tableConfig = {
        columns: columns,
        data: priceLists || [],
        initialState: {
            pageSize: queryObject.limit,
            pageIndex: queryObject.offset / queryObject.limit,
        },
        pageCount: Math.ceil(count / queryObject.limit),
        manualPagination: true,
        autoResetPage: false,
    };
    var table = (0, react_table_1.useTable)(tableConfig, react_table_1.useSortBy, react_table_1.usePagination, react_table_1.useRowSelect);
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
    var debouncedSearch = react_1.default.useMemo(function () { return (0, lodash_1.debounce)(handleSearch, 300); }, []);
    // ********* RENDER *********
    return (<>
      <table_1.default {...table.getTableProps()} {...options} enableSearch={options.enableSearch} handleSearch={options.enableSearch ? debouncedSearch : undefined} filteringOptions={options.filter}>
        {/* HEAD */}
        <table_1.default.Head>
          {(_a = table.headerGroups) === null || _a === void 0 ? void 0 : _a.map(function (headerGroup, ind) { return (<PriceListTableHeaderRow key={ind} headerGroup={headerGroup}/>); })}
        </table_1.default.Head>

        {/* BODY */}
        <table_1.default.Body {...table.getTableBodyProps()}>
          {table.rows.map(function (row) {
            table.prepareRow(row);
            return <PriceListTableRow row={row}/>;
        })}
        </table_1.default.Body>
      </table_1.default>

      {/* PAGINATION */}
      <table_1.TablePagination count={count} limit={queryObject.limit} offset={queryObject.offset} pageSize={queryObject.offset + table.rows.length} title="Price Lists" currentPage={table.state.pageIndex + 1} pageCount={table.pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={table.canNextPage} hasPrev={table.canPreviousPage}/>
    </>);
}
