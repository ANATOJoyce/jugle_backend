"use strict";
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
var react_1 = require("react");
var react_table_1 = require("react-table");
var sales_channel_availability_table_1 = require("./sales-channel-availability-table");
var LIMIT = 15;
var AvailableChannelsModalScreen = function (_a) {
    var availableChannels = _a.availableChannels, setAvailableChannels = _a.setAvailableChannels;
    var numPages = Math.ceil((availableChannels === null || availableChannels === void 0 ? void 0 : availableChannels.length) / LIMIT);
    var _b = (0, react_1.useState)(0), offset = _b[0], setOffset = _b[1];
    var _c = (0, react_1.useState)([]), selectedRowIds = _c[0], setSelectedRowIds = _c[1];
    var _d = (0, react_1.useState)(""), query = _d[0], setQuery = _d[1];
    var columns = (0, sales_channel_availability_table_1.useAvailableChannelsModalTableColumns)()[0];
    var tableState = (0, react_table_1.useTable)({
        columns: columns,
        data: filterSalesChannels(availableChannels),
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
    function filterSalesChannels(channels) {
        if (!query) {
            return channels;
        }
        return channels.filter(function (ch) {
            var _a;
            var filter = query.toLowerCase();
            return (!!ch.name.toLowerCase().match(filter) ||
                !!((_a = ch.description) === null || _a === void 0 ? void 0 : _a.toLowerCase().match(filter)));
        });
    }
    var onDeselect = function () {
        setSelectedRowIds([]);
        tableState.toggleAllRowsSelected(false);
    };
    var onAddSalesChannelsToAvailableChannels = function (selectedSalesChannels) {
        setAvailableChannels(__spreadArray(__spreadArray([], availableChannels, true), selectedSalesChannels, true));
        tableState.toggleAllRowsSelected(false);
    };
    var onRemove = function () {
        var remainingSalesChannels = availableChannels.filter(function (ch) { return !selectedRowIds.includes(ch.id); });
        setAvailableChannels(remainingSalesChannels);
        onDeselect();
    };
    return (<sales_channel_availability_table_1.default tableAction={<sales_channel_availability_table_1.SalesChannelTableActions numberOfSelectedRows={selectedRowIds.length} availableChannelIds={availableChannels.map(function (sc) { return sc.id; })} onAddSalesChannelsToAvailableChannels={onAddSalesChannelsToAvailableChannels} onDeselect={onDeselect} onRemove={onRemove}/>} salesChannels={availableChannels} setSelectedRowIds={setSelectedRowIds} limit={LIMIT} offset={offset} setOffset={setOffset} setQuery={setQuery} tableState={tableState}/>);
};
exports.default = AvailableChannelsModalScreen;
