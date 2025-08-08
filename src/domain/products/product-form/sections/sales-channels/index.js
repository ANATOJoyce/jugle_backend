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
var medusa_react_1 = require("medusa-react");
var badge_1 = require("../../../../../components/fundamentals/badge");
var button_1 = require("../../../../../components/fundamentals/button");
var channels_icon_1 = require("../../../../../components/fundamentals/icons/channels-icon");
var body_card_1 = require("../../../../../components/organisms/body-card");
var use_toggle_state_1 = require("../../../../../hooks/use-toggle-state");
var product_availability_modal_1 = require("./product-availability-modal");
var spinner_1 = require("../../../../../components/atoms/spinner");
var product_form_context_1 = require("../../form/product-form-context");
var cross_icon_1 = require("../../../../../components/fundamentals/icons/cross-icon");
var SalesChannels = function (_a) {
    var _b = _a.isEdit, isEdit = _b === void 0 ? false : _b, product = _a.product;
    var _c = (0, use_toggle_state_1.default)(), isScModalOpen = _c.state, openScModal = _c.open, closeScModal = _c.close;
    var _d = (0, product_form_context_1.useProductForm)(), salesChannels = _d.salesChannels, setSalesChannels = _d.setSalesChannels, additionalDirtyState = _d.additionalDirtyState;
    var _e = (0, medusa_react_1.useAdminSalesChannels)(), count = _e.count, isLoadingSalesChannels = _e.isLoading;
    var _f = (0, medusa_react_1.useAdminStore)(), store = _f.store, isLoadingStore = _f.isLoading;
    var isLoading = isLoadingSalesChannels || isLoadingStore;
    (0, react_1.useEffect)(function () {
        if (!isEdit &&
            !isLoadingStore &&
            (store === null || store === void 0 ? void 0 : store.default_sales_channel) &&
            !additionalDirtyState.salesChannels) {
            setSalesChannels([store.default_sales_channel], false);
        }
    }, [isLoadingStore, additionalDirtyState.salesChannels]);
    var remainder = Math.max(salesChannels.length - 3, 0);
    return (<>
      <body_card_1.default title="Sales Channels" subtitle="This product will only be available in the default sales channel if left untouched." className="min-h-[200px]">
        {isLoading ? (<spinner_1.default />) : (<>
            <div className="flex space-x-2">
              <div className="flex space-x-2 max-w-[600px] overflow-clip">
                {salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.slice(0, 3).map(function (sc, idx) {
                return (<SalesChannelBadge channel={sc} onRemove={function () {
                        var newSalesChannels = __spreadArray([], salesChannels, true);
                        newSalesChannels.splice(idx, 1);
                        setSalesChannels(newSalesChannels);
                    }}/>);
            })}
              </div>
              {remainder > 0 && (<badge_1.default variant="ghost">
                  <div className="flex px-2 items-center h-full inter-base-regular text-grey-50">
                    + {remainder} more
                  </div>
                </badge_1.default>)}
            </div>
            <span className="inter-base-regular text-grey-50 mb-large mt-base">
              Available in{" "}
              <span className="inter-base-semibold text-grey-90">
                {salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.length}
              </span>{" "}
              out of{" "}
              <span className="inter-base-semibold text-grey-90">{count}</span>{" "}
              Sales Channels
            </span>

            <div>
              <button_1.default variant="ghost" size="small" className="border border-grey-20" onClick={openScModal}>
                <channels_icon_1.default size={20}/>
                Change availability
              </button_1.default>
            </div>
          </>)}
      </body_card_1.default>
      {isScModalOpen && !isLoading && (<product_availability_modal_1.default storeSelectedSalesChannels={setSalesChannels} salesChannels={salesChannels} onClose={closeScModal}/>)}
    </>);
};
var SalesChannelBadge = function (_a) {
    var channel = _a.channel, onRemove = _a.onRemove;
    return (<badge_1.default variant="ghost" className="">
      <div className="flex py-1.5 pl-2 pr-1 space-x-xsmall items-center">
        <span className="inter-base-regular text-grey-90">{channel.name}</span>
        <button_1.default variant="ghost" className="h-5 w-5 p-0 text-grey-50" onClick={onRemove}>
          <cross_icon_1.default size={16}/>
        </button_1.default>
      </div>
    </badge_1.default>);
};
exports.default = SalesChannels;
