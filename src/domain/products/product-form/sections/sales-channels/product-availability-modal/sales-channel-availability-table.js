"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesChannelTableActions = exports.useAvailableChannelsModalTableColumns = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var button_1 = require("../../../../../../components/fundamentals/button");
var plus_icon_1 = require("../../../../../../components/fundamentals/icons/plus-icon");
var indeterminate_checkbox_1 = require("../../../../../../components/molecules/indeterminate-checkbox");
var layered_modal_1 = require("../../../../../../components/molecules/modal/layered-modal");
var table_1 = require("../../../../../../components/molecules/table");
var add_channels_modal_screen_1 = require("./add-channels-modal-screen");
var useAvailableChannelsModalTableColumns = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            width: 30,
            id: "selection",
            Header: function (_a) {
                var getToggleAllPageRowsSelectedProps = _a.getToggleAllPageRowsSelectedProps;
                return (<span className="flex justify-center w-[30px]">
            <indeterminate_checkbox_1.default {...getToggleAllPageRowsSelectedProps()}/>
          </span>);
            },
            Cell: function (_a) {
                var row = _a.row;
                return (<span onClick={function (e) { return e.stopPropagation(); }} className="flex justify-center w-[30px]">
              <indeterminate_checkbox_1.default {...row.getToggleRowSelectedProps()}/>
            </span>);
            },
        },
        {
            Header: "Title",
            accessor: "name",
        },
        {
            Header: "Description",
            accessor: "description",
        },
    ]; }, []);
    return [columns];
};
exports.useAvailableChannelsModalTableColumns = useAvailableChannelsModalTableColumns;
var SalesChannelAvailabilityTable = function (_a) {
    var salesChannels = _a.salesChannels, limit = _a.limit, offset = _a.offset, setOffset = _a.setOffset, setQuery = _a.setQuery, tableState = _a.tableState, setSelectedRowIds = _a.setSelectedRowIds, tableAction = _a.tableAction;
    var getTableProps = tableState.getTableProps, getTableBodyProps = tableState.getTableBodyProps, headerGroups = tableState.headerGroups, rows = tableState.rows, prepareRow = tableState.prepareRow, canPreviousPage = tableState.canPreviousPage, canNextPage = tableState.canNextPage, pageCount = tableState.pageCount, nextPage = tableState.nextPage, previousPage = tableState.previousPage, 
    // Get the state from the instance
    _b = tableState.state, pageIndex = _b.pageIndex, state = __rest(_b, ["pageIndex"]);
    react_1.default.useEffect(function () {
        if (setSelectedRowIds) {
            setSelectedRowIds(Object.keys(state.selectedRowIds));
        }
    }, [Object.keys(state.selectedRowIds).length]);
    var handleNext = function () {
        if (canNextPage) {
            setOffset(offset + limit);
            nextPage();
        }
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            setOffset(Math.max(offset - limit, 0));
            previousPage();
        }
    };
    return (<div className="min-h-[350px] flex flex-col justify-between">
      <table_1.default {...getTableProps()} enableSearch handleSearch={setQuery} tableActions={tableAction}>
        <table_1.default.Head>
          {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell {...col.getHeaderProps()}>
                  {col.render("Header")}
                </table_1.default.HeadCell>); })}
            </table_1.default.HeadRow>); })}
        </table_1.default.Head>
        <table_1.default.Body {...getTableBodyProps()}>
          {rows.map(function (row) {
            prepareRow(row);
            return (<table_1.default.Row color={"inherit"} {...row.getRowProps()}>
                {row.cells.map(function (cell) {
                    return (<table_1.default.Cell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </table_1.default.Cell>);
                })}
              </table_1.default.Row>);
        })}
        </table_1.default.Body>
      </table_1.default>
      <table_1.TablePagination count={salesChannels.length} limit={limit} offset={offset} pageSize={offset + rows.length} title="Sales Channels" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
    </div>);
};
var SalesChannelTableActions = function (_a) {
    var numberOfSelectedRows = _a.numberOfSelectedRows, availableChannelIds = _a.availableChannelIds, onAddSalesChannelsToAvailableChannels = _a.onAddSalesChannelsToAvailableChannels, onDeselect = _a.onDeselect, onRemove = _a.onRemove;
    var addChannelModalScreen = (0, add_channels_modal_screen_1.useAddChannelsModalScreen)(availableChannelIds, onAddSalesChannelsToAvailableChannels);
    var showAddChannels = !!numberOfSelectedRows;
    var classes = {
        "translate-y-[-42px]": !showAddChannels,
        "translate-y-[0px]": showAddChannels,
    };
    var push = react_1.default.useContext(layered_modal_1.LayeredModalContext).push;
    return (<div className="flex space-x-xsmall h-[34px] overflow-hidden">
      <div className={(0, clsx_1.default)("transition-all duration-200", classes)}>
        <div className="divide-x flex items-center h-[34px] mb-2">
          <span className="mr-3 inter-small-regular text-grey-50">
            {numberOfSelectedRows} selected
          </span>
          <div className="flex space-x-xsmall pl-3">
            <button_1.default onClick={onDeselect} size="small" variant="ghost" className="border border-grey-20">
              Deselect
            </button_1.default>
            <button_1.default onClick={onRemove} size="small" variant="ghost" className="border border-grey-20 text-rose-50">
              Remove
            </button_1.default>
          </div>
        </div>
        <div className="flex justify-end h-[34px]">
          <button_1.default size="small" variant="ghost" className="border border-grey-20" onClick={function () { return push(addChannelModalScreen); }}>
            <plus_icon_1.default size={20}/> Add Channels
          </button_1.default>
        </div>
      </div>
    </div>);
};
exports.SalesChannelTableActions = SalesChannelTableActions;
exports.default = SalesChannelAvailabilityTable;
