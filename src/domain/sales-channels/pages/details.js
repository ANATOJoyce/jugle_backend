"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var medusa_react_1 = require("medusa-react");
var edit_sales_channel_1 = require("../form/edit-sales-channel");
var add_sales_channel_1 = require("../form/add-sales-channel");
var actionables_1 = require("../../../components/molecules/actionables");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var edit_icon_1 = require("../../../components/fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var search_icon_1 = require("../../../components/fundamentals/icons/search-icon");
var product_1 = require("../tables/product");
var cross_icon_1 = require("../../../components/fundamentals/icons/cross-icon");
var status_selector_1 = require("../../../components/molecules/status-selector");
var two_split_pane_1 = require("../../../components/templates/two-split-pane");
var fade_wrapper_1 = require("../../../components/atoms/fade-wrapper");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var use_toggle_state_1 = require("../../../hooks/use-toggle-state");
/**
 * Sales channels list indicator component.
 */
function ListIndicator(props) {
    var isActive = props.isActive;
    return (<div className={(0, clsx_1.default)("flex justify-center items-center flex-shrink-0 w-[18px] h-[18px] bg-white border rounded-circle", {
            "border-2 border-violet-60": isActive,
        })}>
      {isActive && (<div className="w-[10px] h-[10px] bg-violet-60 rounded-circle"/>)}
    </div>);
}
/**
 * List indicator for disabled SC.
 */
function DisabledLabel() {
    return (<div className="
      w-[54px] h-[28px]
      rounded-xl
      bg-grey-10
      flex items-center justify-center
      text-grey-50 text-small font-semibold">
      Draft
    </div>);
}
/**
 * Sales channels list tile component.
 */
function SalesChannelTile(props) {
    var salesChannel = props.salesChannel, isSelected = props.isSelected, onClick = props.onClick, isDisabled = props.isDisabled;
    return (<div onClick={onClick} className={(0, clsx_1.default)("mb-2 p-4 cursor-pointer rounded-lg border flex justify-between h-[83px]", {
            "border-2 border-violet-60": isSelected,
        })}>
      <div className="flex gap-2 overflow-hidden">
        <ListIndicator isActive={isSelected}/>
        <div className="overflow-hidden block truncate">
          <h3 className="font-semibold text-grey-90 leading-5 mb-1">
            {salesChannel.name}
          </h3>
          <span title={salesChannel.description} className="text-small text-grey-50 ">
            {salesChannel.description}
          </span>
        </div>
      </div>
      {isDisabled && (<div className="flex flex-col justify-center flex-shrink-0">
          <DisabledLabel />
        </div>)}
    </div>);
}
/**
 * Sales channel header.
 */
function SalesChannelsHeader(props) {
    var openCreateModal = props.openCreateModal, filterText = props.filterText, setFilterText = props.setFilterText;
    var _a = (0, react_1.useState)(false), showFilter = _a[0], setShowFilter = _a[1];
    var inputRef = (0, react_1.useRef)();
    var classes = {
        "translate-y-[-50px]": showFilter,
        "translate-y-[0px]": !showFilter,
    };
    var hideFilter = function () {
        setShowFilter(false);
        setFilterText("");
    };
    return (<div className="h-[55px] mb-6 overflow-hidden">
      <div className={(0, clsx_1.default)("transition-all duration-200", classes)}>
        <div className="h-[55px]">
          <div className="flex justify-between items-center mb-1">
            <h2 className="font-semibold text-xlarge text-grey-90">
              Sales channels
            </h2>
            <div className="flex justify-between items-center gap-4">
              <search_icon_1.default size={15} onClick={function () { return setShowFilter(true); }} className="cursor-pointer"/>
              <plus_icon_1.default size={15} onClick={openCreateModal} className="cursor-pointer"/>
            </div>
          </div>
          <div className="text-grey-50 text-small mb-6 block overflow-hidden truncate max-w-[100%]">
            Control which products are available in which channels
          </div>
        </div>

        <div className="h-[40px] my-[5px] w-full flex items-center justify-around gap-2 text-grey-40 bg-grey-5 px-4 rounded-xl border">
          <search_icon_1.default size={20}/>
          <input ref={inputRef} value={filterText} onChange={function (e) { return setFilterText(e.target.value); }} placeholder="Search by title or description" className="bg-inherit outline-none outline-0 w-full remove-number-spinner leading-base text-grey-90 font-normal caret-violet-60 placeholder-grey-40" onBlur={function () { return setShowFilter(!!filterText); }} autoComplete="off"/>
          <cross_icon_1.default onClick={hideFilter} className="cursor-pointer"/>
        </div>
      </div>
    </div>);
}
/**
 * Sales channels list.
 */
function SalesChannelsList(props) {
    var activeChannelId = props.activeChannelId, openCreateModal = props.openCreateModal, setActiveSalesChannelId = props.setActiveSalesChannelId, salesChannels = props.salesChannels, filterText = props.filterText, setFilterText = props.setFilterText;
    return (<div className="col-span-1 rounded-lg border bg-grey-0 border-grey-20 px-8 py-6 h-[968px]">
      <SalesChannelsHeader filterText={filterText} setFilterText={setFilterText} openCreateModal={openCreateModal}/>
      <div>
        {salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.map(function (s) { return (<SalesChannelTile salesChannel={s} isDisabled={s.is_disabled} isSelected={activeChannelId === s.id} onClick={function () { return setActiveSalesChannelId(s.id); }}/>); })}
      </div>
    </div>);
}
/**
 * Sales channels details header.
 */
function SalesChannelDetailsHeader(props) {
    var _this = this;
    var salesChannel = props.salesChannel, openUpdateModal = props.openUpdateModal, resetDetails = props.resetDetails, showProductsAdd = props.showProductsAdd;
    var deleteSalesChannel = (0, medusa_react_1.useAdminDeleteSalesChannel)(salesChannel.id).mutate;
    var updateSalesChannel = (0, medusa_react_1.useAdminUpdateSalesChannel)(salesChannel.id).mutate;
    var _a = (0, react_1.useState)(false), showDelete = _a[0], setShowDelete = _a[1];
    var actions = [
        {
            label: "Edit general info",
            icon: <edit_icon_1.default size="20"/>,
            onClick: openUpdateModal,
        },
        {
            label: "Add products",
            icon: <plus_icon_1.default />,
            onClick: function () { return showProductsAdd(); },
        },
        {
            label: "Delete channel",
            icon: <trash_icon_1.default size={20}/>,
            variant: "danger",
            onClick: function () { return setShowDelete(true); },
        },
    ];
    return (<div className="flex justify-between items-center">
      <h2 className="font-semibold text-xlarge text-grey-90 mb-4">
        {salesChannel.name}
      </h2>
      <div className="flex justify-between items-center gap-4">
        <status_selector_1.default onChange={function () {
            return updateSalesChannel({ is_disabled: !salesChannel.is_disabled });
        }} isDraft={salesChannel.is_disabled} draftState="Disabled" activeState="Enabled"/>
        <actionables_1.default forceDropdown={true} actions={actions}/>
      </div>

      {showDelete && (<delete_prompt_1.default handleClose={function () { return setShowDelete(false); }} onDelete={function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    deleteSalesChannel();
                    resetDetails();
                    return [2 /*return*/];
                });
            }); }} confirmText="Yes, delete" successText="Sales channel deleted" text={"Are you sure you want to delete \"".concat(salesChannel.name, "\" sales channel?")} heading="Delete channel"/>)}
    </div>);
}
/**
 * Sales channels details container.
 */
function SalesChannelDetails(props) {
    var resetDetails = props.resetDetails, salesChannel = props.salesChannel;
    var _a = (0, use_toggle_state_1.default)(false), showUpdateModal = _a[0], openUpdateModal = _a[1], closeUpdateModal = _a[2];
    var _b = (0, use_toggle_state_1.default)(false), showAddProducts = _b[0], showProductsAdd = _b[1], hideProductsAdd = _b[2];
    return (<div className="col-span-2 rounded-rounded border bg-grey-0 border-grey-20 px-8 py-6 h-[968px]">
      <SalesChannelDetailsHeader resetDetails={resetDetails} salesChannel={salesChannel} openUpdateModal={openUpdateModal} showProductsAdd={showProductsAdd}/>

      <product_1.SalesChannelProductsTable salesChannelId={salesChannel.id} showAddModal={showProductsAdd}/>

      {showUpdateModal && (<edit_sales_channel_1.default handleClose={closeUpdateModal} salesChannel={salesChannel}/>)}

      {showAddProducts && (<product_1.SalesChannelProductsSelectModal salesChannel={salesChannel} handleClose={hideProductsAdd}/>)}
    </div>);
}
/**
 * Sales channels details page container.
 */
function Details(props) {
    var routeSalesChannelId = props.id;
    var _a = (0, react_1.useState)(), filterText = _a[0], setFilterText = _a[1];
    var _b = (0, react_1.useState)(false), showCreateModal = _b[0], setShowCreateModal = _b[1];
    var _c = (0, react_1.useState)(), activeSalesChannel = _c[0], setActiveSalesChannel = _c[1];
    var store = (0, medusa_react_1.useAdminStore)().store;
    var sales_channels = (0, medusa_react_1.useAdminSalesChannels)().sales_channels;
    var setActiveSalesChannelId = function (scId) {
        (0, gatsby_1.navigate)("/a/sales-channels/".concat(scId));
    };
    (0, react_1.useEffect)(function () {
        if (sales_channels && store) {
            if (!activeSalesChannel) {
                setActiveSalesChannelId(store.default_sales_channel_id);
            }
            else {
                setActiveSalesChannelId(activeSalesChannel.id);
            }
        }
    }, [sales_channels, store, activeSalesChannel === null || activeSalesChannel === void 0 ? void 0 : activeSalesChannel.id]);
    (0, react_1.useEffect)(function () {
        if (routeSalesChannelId !== (activeSalesChannel === null || activeSalesChannel === void 0 ? void 0 : activeSalesChannel.id)) {
            var activeChannel = sales_channels === null || sales_channels === void 0 ? void 0 : sales_channels.find(function (sc) { return sc.id === routeSalesChannelId; });
            setActiveSalesChannel(activeChannel);
        }
    }, [routeSalesChannelId, activeSalesChannel, sales_channels]);
    var openCreateModal = function () { return setShowCreateModal(true); };
    var closeCreateModal = function (scId) {
        setActiveSalesChannelId(scId);
        setShowCreateModal(false);
    };
    var resetDetails = function () {
        setActiveSalesChannelId(store.default_sales_channel_id);
    };
    function defaultChannelsSorter(sc1, sc2) {
        if (sc1.id === (store === null || store === void 0 ? void 0 : store.default_sales_channel_id)) {
            return -1;
        }
        if (sc2.id === (store === null || store === void 0 ? void 0 : store.default_sales_channel_id)) {
            return 1;
        }
        return sc1.name.localeCompare(sc2.name);
    }
    function filterSalesChannels(channels) {
        if (!filterText) {
            return channels;
        }
        return channels.filter(function (ch) {
            var _a;
            var filter = filterText.toLowerCase();
            return (!!ch.name.toLowerCase().match(filter) ||
                !!((_a = ch.description) === null || _a === void 0 ? void 0 : _a.toLowerCase().match(filter)));
        });
    }
    if (!sales_channels || !activeSalesChannel) {
        return null;
    }
    return (<div>
      <breadcrumb_1.default currentPage={"Sales channels"} previousBreadcrumb={"Settings"} previousRoute="/a/settings"/>

      <two_split_pane_1.default threeCols>
        <SalesChannelsList filterText={filterText} setFilterText={setFilterText} openCreateModal={openCreateModal} activeChannelId={activeSalesChannel.id} setActiveSalesChannelId={setActiveSalesChannelId} salesChannels={filterSalesChannels(sales_channels).sort(defaultChannelsSorter)}/>
        {activeSalesChannel && (<SalesChannelDetails salesChannel={sales_channels.find(function (sc) { return sc.id === activeSalesChannel.id; })} resetDetails={resetDetails}/>)}
      </two_split_pane_1.default>

      <fade_wrapper_1.default isVisible={showCreateModal} isFullScreen={true}>
        <add_sales_channel_1.default onClose={closeCreateModal}/>
      </fade_wrapper_1.default>
    </div>);
}
exports.default = Details;
