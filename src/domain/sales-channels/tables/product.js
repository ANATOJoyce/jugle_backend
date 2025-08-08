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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.ProductTable = void 0;
exports.SalesChannelProductsSelectModal = SalesChannelProductsSelectModal;
exports.SalesChannelProductsTable = SalesChannelProductsTable;
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_table_1 = require("react-table");
var placeholder_1 = require("./placeholder");
var button_1 = require("../../../components/fundamentals/button");
var filter_dropdown_1 = require("../../../domain/products/filter-dropdown");
var details_icon_1 = require("../../../components/fundamentals/details-icon");
var cross_icon_1 = require("../../../components/fundamentals/icons/cross-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var table_1 = require("../../../components/molecules/table");
var config_1 = require("./config");
var use_query_filters_1 = require("../../../hooks/use-query-filters");
var use_filter_tabs_1 = require("../../../components/templates/product-table/use-filter-tabs");
var use_notification_1 = require("../../../hooks/use-notification");
var modal_1 = require("../../../components/molecules/modal");
/* ****************************************** */
/* ************** TABLE CONFIG ************** */
/* ****************************************** */
var DEFAULT_PAGE_SIZE = 12;
/**
 * Default filtering config for querying products endpoint.
 */
var defaultQueryProps = {
    additionalFilters: {
        expand: "collection,sales_channels",
        fields: "id,title,type,thumbnail,status",
    },
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
};
/**
 * Renders a table of sales channel products.
 */
exports.ProductTable = (0, react_1.forwardRef)(function (props, ref) {
    var tableActions = props.tableActions, currentSalesChannelId = props.currentSalesChannelId, _a = props.productFilters, setTab = _a.setTab, saveTab = _a.saveTab, removeTab = _a.removeTab, filterTabs = _a.availableTabs, activeFilterTab = _a.activeFilterTab, setFilters = _a.setFilters, filters = _a.filters, reset = _a.reset, paginate = props.paginate, setFreeText = props.setQuery, queryObject = props.queryObject, 
    // CONTAINER props
    isAddTable = props.isAddTable, count = props.count, products = props.products, setSelectedRowIds = props.setSelectedRowIds, removeProductFromSalesChannel = props.removeProductFromSalesChannel;
    var offs = parseInt(queryObject.offset) || 0;
    var limit = parseInt(queryObject.limit);
    var _b = (0, react_1.useState)(queryObject.query), query = _b[0], setQuery = _b[1];
    var _c = (0, react_1.useState)(0), numPages = _c[0], setNumPages = _c[1];
    var clearFilters = function () {
        reset();
        setQuery("");
    };
    (0, react_1.useEffect)(function () {
        if (typeof count !== "undefined") {
            var controlledPageCount = Math.ceil(count / limit);
            setNumPages(controlledPageCount);
        }
    }, [count]);
    var _d = (0, react_table_1.useTable)({
        columns: config_1.SALES_CHANNEL_PRODUCTS_TABLE_COLUMNS,
        data: products || [],
        manualPagination: true,
        initialState: {
            pageIndex: Math.floor(offs / limit),
            pageSize: limit,
        },
        pageCount: numPages,
        autoResetPage: false,
        autoResetSelectedRows: false,
        getRowId: function (row) { return row.id; },
        stateReducer: function (newState, action) {
            switch (action.type) {
                case "toggleAllRowsSelected":
                    return __assign(__assign({}, newState), { selectedRowIds: {} });
                default:
                    return newState;
            }
        },
    }, react_table_1.usePagination, react_table_1.useRowSelect), getTableProps = _d.getTableProps, getTableBodyProps = _d.getTableBodyProps, headerGroups = _d.headerGroups, rows = _d.rows, prepareRow = _d.prepareRow, gotoPage = _d.gotoPage, canPreviousPage = _d.canPreviousPage, canNextPage = _d.canNextPage, pageCount = _d.pageCount, nextPage = _d.nextPage, previousPage = _d.previousPage, toggleAllRowsSelected = _d.toggleAllRowsSelected, toggleRowSelected = _d.toggleRowSelected, 
    // Get the state from the instance
    _e = _d.state, pageIndex = _e.pageIndex, pageSize = _e.pageSize, state = __rest(_e, ["pageIndex", "pageSize"]);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        toggleAllRowsSelected: toggleAllRowsSelected,
    }); });
    (0, react_1.useEffect)(function () {
        setSelectedRowIds(Object.keys(state.selectedRowIds));
    }, [state.selectedRowIds]);
    (0, react_1.useEffect)(function () {
        var delayDebounceFn = setTimeout(function () {
            if (query) {
                setFreeText(query);
                gotoPage(0);
            }
            else {
                if (typeof query !== "undefined") {
                    // if we delete query string, we reset the table view
                    setFreeText("");
                }
            }
        }, 400);
        return function () { return clearTimeout(delayDebounceFn); };
    }, [query]);
    var handleNext = function () {
        if (canNextPage) {
            paginate(1);
            nextPage();
        }
    };
    var handlePrev = function () {
        if (canPreviousPage) {
            paginate(-1);
            previousPage();
        }
    };
    var getActions = function (id) { return [
        {
            label: "Details",
            onClick: function () { return (0, gatsby_1.navigate)("/a/products/".concat(id)); },
            icon: <details_icon_1.default size={20}/>,
        },
        {
            label: "Remove from the channel",
            variant: "danger",
            onClick: function () { return removeProductFromSalesChannel(id); },
            icon: <trash_icon_1.default size={20}/>,
        },
    ]; };
    return (<div className="w-full h-[880px] overflow-y-auto flex flex-col">
        <table_1.default tableActions={tableActions} containerClassName="flex-1" filteringOptions={filters && (<filter_dropdown_1.default filters={filters} submitFilters={setFilters} clearFilters={clearFilters} tabs={filterTabs} onTabClick={setTab} activeTab={activeFilterTab} onRemoveTab={removeTab} onSaveTab={saveTab}/>)} enableSearch={isAddTable} handleSearch={setQuery} {...getTableProps()}>
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
            return (<ProductRow onClick={function () { return toggleRowSelected(row.id); }} disabled={!!row.original.sales_channels.find(function (sc) { return sc.id === currentSalesChannelId; })} row={row} actions={!isAddTable ? getActions(row.original.id) : undefined}/>);
        })}
          </table_1.default.Body>
        </table_1.default>
        <table_1.TablePagination count={count} limit={limit} offset={offs} pageSize={offs + rows.length} title="Products" currentPage={pageIndex + 1} pageCount={pageCount} nextPage={handleNext} prevPage={handlePrev} hasNext={canNextPage} hasPrev={canPreviousPage}/>
      </div>);
});
/**
 * Renders product table row.
 */
var ProductRow = function (_a) {
    var row = _a.row, actions = _a.actions, onClick = _a.onClick, disabled = _a.disabled;
    return (<table_1.default.Row onClick={!disabled && onClick} color={"inherit"} className={(0, clsx_1.default)("cursor-pointer", {
            "bg-grey-5 cursor-pointer": row.isSelected,
            "opacity-40 cursor-not-allowed pointer-events-none": disabled,
        })} actions={actions} {...row.getRowProps()}>
      {row.cells.map(function (cell, index) {
            return (<table_1.default.Cell {...cell.getCellProps()}>
            {cell.render("Cell", { index: index })}
          </table_1.default.Cell>);
        })}
    </table_1.default.Row>);
};
/**
 * Popup for removing selected products from a sales channel.
 */
function RemoveProductsPopup(_a) {
    var onClose = _a.onClose, onRemove = _a.onRemove, total = _a.total;
    var classes = {
        "translate-y-1 opacity-0": !total,
        "translate-y-0 opacity-100": total,
    };
    return (<div className={(0, clsx_1.default)("absolute w-full bottom-1 flex justify-center transition-all duration-200 pointer-events-none", classes)}>
      <div className="h-[48px] min-w-[224px] rounded-lg border shadow-toaster flex items-center justify-around gap-3 px-4 py-3 pointer-events-auto">
        <span className="text-small text-grey-50">{total} selected</span>
        <div className="w-[1px] h-[20px] bg-grey-20"/>
        <button_1.default variant="danger" size="small" onClick={onRemove}>
          Remove
        </button_1.default>
        <button onClick={onClose} className="text-grey-50 cursor-pointer">
          <cross_icon_1.default size={20}/>
        </button>
      </div>
    </div>);
}
/**
 * Sales channel products table container.
 */
function SalesChannelProductsTable(props) {
    var _this = this;
    var tableRef = (0, react_1.useRef)();
    var salesChannelId = props.salesChannelId, showAddModal = props.showAddModal;
    var _a = (0, react_1.useState)([]), selectedRowIds = _a[0], setSelectedRowIds = _a[1];
    var notification = (0, use_notification_1.default)();
    var params = (0, use_query_filters_1.default)(defaultQueryProps);
    var filters = (0, use_filter_tabs_1.useProductFilters)();
    var deleteProductsFromSalesChannel = (0, medusa_react_1.useAdminDeleteProductsFromSalesChannel)(salesChannelId).mutate;
    var _b = (0, medusa_react_1.useAdminProducts)(__assign(__assign(__assign({}, params.queryObject), filters.queryObject), { sales_channel_id: [props.salesChannelId] })), products = _b.products, count = _b.count, isLoading = _b.isLoading;
    var resetSelection = function () {
        var _a;
        setSelectedRowIds([]);
        (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.toggleAllRowsSelected(false);
    };
    (0, react_1.useEffect)(function () {
        resetSelection();
    }, [products, salesChannelId]);
    var removeProductFromSalesChannel = function (id) {
        deleteProductsFromSalesChannel({ product_ids: [{ id: id }] });
        notification("Success", "Product successfully removed", "success");
    };
    var removeSelectedProducts = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteProductsFromSalesChannel({
                        product_ids: selectedRowIds.map(function (id) { return ({ id: id }); }),
                    })];
                case 1:
                    _a.sent();
                    notification("Success", "Products successfully removed from the sales channel", "success");
                    resetSelection();
                    return [2 /*return*/];
            }
        });
    }); };
    var isFilterOn = Object.keys(filters.queryObject).length;
    var hasSearchTerm = params.queryObject.q;
    if (!(products === null || products === void 0 ? void 0 : products.length) && !isLoading && !isFilterOn && !hasSearchTerm) {
        return <placeholder_1.default showAddModal={showAddModal}/>;
    }
    var toBeRemoveCount = selectedRowIds.length;
    return (<div className="relative h-[880px]">
      <exports.ProductTable ref={tableRef} count={count} products={products} removeProductFromSalesChannel={removeProductFromSalesChannel} setSelectedRowIds={setSelectedRowIds} productFilters={filters} {...params}/>
      <RemoveProductsPopup total={toBeRemoveCount} onRemove={removeSelectedProducts} onClose={resetSelection}/>
    </div>);
}
/**
 * Sales channels products add container.
 * Renders product table for adding/editing sales channel products
 * in a modal.
 */
function SalesChannelProductsSelectModal(props) {
    var handleClose = props.handleClose, salesChannel = props.salesChannel;
    var _a = (0, react_1.useState)([]), selectedRowIds = _a[0], setSelectedRowIds = _a[1];
    var notification = (0, use_notification_1.default)();
    var params = (0, use_query_filters_1.default)(defaultQueryProps);
    var filters = (0, use_filter_tabs_1.useProductFilters)();
    var _b = (0, medusa_react_1.useAdminProducts)(__assign(__assign(__assign({}, params.queryObject), filters.queryObject), { expand: "sales_channels" })), products = _b.products, count = _b.count;
    var addProductsBatch = (0, medusa_react_1.useAdminAddProductsToSalesChannel)(salesChannel.id).mutate;
    var handleSubmit = function () {
        addProductsBatch({ product_ids: selectedRowIds.map(function (i) { return ({ id: i }); }) });
        handleClose();
        notification("Success", "Products successfully added to the sales channel", "success");
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Add products</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <exports.ProductTable isAddTable products={products || []} count={count} setSelectedRowIds={setSelectedRowIds} productFilters={filters} currentSalesChannelId={salesChannel.id} {...params}/>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="w-full flex justify-end">
            <button_1.default variant="ghost" size="small" onClick={handleClose} className="mr-2">
              Close
            </button_1.default>
            <button_1.default variant="primary" className="min-w-[100px]" size="small" onClick={handleSubmit}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
}
