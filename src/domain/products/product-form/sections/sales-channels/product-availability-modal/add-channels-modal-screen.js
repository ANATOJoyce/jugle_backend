"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddChannelsModalScreen = void 0;
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var button_1 = require("../../../../../../components/fundamentals/button");
var modal_1 = require("../../../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../../../components/molecules/modal/layered-modal");
var sales_channel_availability_table_1 = require("./sales-channel-availability-table");
var useAddChannelsModalScreen = function (selectedRowIds, onAddSelectedToAvailableChannels) {
    var pop = react_1.default.useContext(layered_modal_1.LayeredModalContext).pop;
    return {
        title: "Add Sales Channels",
        onBack: pop,
        view: (<AddChannelsModalScreen selectedSalesChannelIds={selectedRowIds} onAddSelectedToAvailableChannels={onAddSelectedToAvailableChannels}/>),
    };
};
exports.useAddChannelsModalScreen = useAddChannelsModalScreen;
var LIMIT = 15;
var AddChannelsModalScreen = function (_a) {
    var onAddSelectedToAvailableChannels = _a.onAddSelectedToAvailableChannels, selectedSalesChannelIds = _a.selectedSalesChannelIds;
    var _b = (0, react_1.useState)(0), offset = _b[0], setOffset = _b[1];
    var _c = (0, react_1.useState)(""), query = _c[0], setQuery = _c[1];
    var _d = (0, react_1.useState)(""), freeText = _d[0], setFreeText = _d[1];
    var pop = react_1.default.useContext(layered_modal_1.LayeredModalContext).pop;
    var columns = (0, sales_channel_availability_table_1.useAvailableChannelsModalTableColumns)()[0];
    var _e = (0, medusa_react_1.useAdminSalesChannels)({
        q: freeText,
        limit: LIMIT,
        offset: offset,
    }), salesChannels = _e.sales_channels, count = _e.count;
    var numPages = Math.ceil((count || 0) / LIMIT);
    var filterSalesChannels = function (salesChannels) {
        return salesChannels.filter(function (salesChannel) {
            return !selectedSalesChannelIds.includes(salesChannel.id);
        });
    };
    var tableState = (0, react_table_1.useTable)({
        columns: columns,
        data: salesChannels ? filterSalesChannels(salesChannels) : [],
        manualPagination: true,
        initialState: {
            pageIndex: Math.floor(offset / LIMIT),
            pageSize: LIMIT,
        },
        autoResetPage: false,
        autoResetSelectedRows: false,
        getRowId: function (row) { return row.id; },
        pageCount: numPages,
    }, react_table_1.usePagination, react_table_1.useRowSelect);
    react_1.default.useEffect(function () {
        var delayDebounceFn = setTimeout(function () {
            setFreeText(query);
            if (query) {
                tableState.gotoPage(0);
            }
        }, 400);
        return function () { return clearTimeout(delayDebounceFn); };
    }, [query]);
    return (<>
      <modal_1.default.Content isLargeModal>
        <sales_channel_availability_table_1.default salesChannels={salesChannels || []} limit={LIMIT} offset={offset} setOffset={setOffset} setQuery={setQuery} tableState={tableState}/>
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal>
        <div className="flex justify-end w-full space-x-xsmall">
          <button_1.default variant="ghost" size="small" className="w-[112px]" onClick={pop}>
            Back
          </button_1.default>
          <button_1.default variant="primary" size="small" className="w-[128px]" onClick={function () {
            onAddSelectedToAvailableChannels(tableState.selectedFlatRows.map(function (row) { return row.original; }));
            pop();
        }}>
            Add and go back
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </>);
};
exports.default = AddChannelsModalScreen;
