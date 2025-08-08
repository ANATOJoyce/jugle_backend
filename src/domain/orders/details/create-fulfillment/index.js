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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var check_icon_1 = require("../../../../components/fundamentals/icons/check-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var modal_1 = require("../../../../components/molecules/modal");
var metadata_1 = require("../../../../components/organisms/metadata");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var item_table_1 = require("./item-table");
var CreateFulfillmentModal = function (_a) {
    var handleCancel = _a.handleCancel, orderToFulfill = _a.orderToFulfill, orderId = _a.orderId;
    var _b = (0, react_1.useState)([]), toFulfill = _b[0], setToFulfill = _b[1];
    var _c = (0, react_1.useState)({}), quantities = _c[0], setQuantities = _c[1];
    var _d = (0, react_1.useState)(false), noNotis = _d[0], setNoNotis = _d[1];
    var _e = (0, react_1.useState)([
        { key: "", value: "" },
    ]), metadata = _e[0], setMetadata = _e[1];
    var items = "items" in orderToFulfill
        ? orderToFulfill.items
        : orderToFulfill.additional_items;
    var createOrderFulfillment = (0, medusa_react_1.useAdminCreateFulfillment)(orderId);
    var createSwapFulfillment = (0, medusa_react_1.useAdminFulfillSwap)(orderId);
    var createClaimFulfillment = (0, medusa_react_1.useAdminFulfillClaim)(orderId);
    var notification = (0, use_notification_1.default)();
    var createFulfillment = function () {
        var type = orderToFulfill.id.split("_")[0];
        var action = createOrderFulfillment;
        var successText = "Successfully fulfilled order";
        var requestObj;
        var preparedMetadata = metadata.reduce(function (acc, next) {
            var _a;
            if (next.key) {
                return __assign(__assign({}, acc), (_a = {}, _a[next.key] = next.value, _a));
            }
            else {
                return acc;
            }
        }, {});
        switch (type) {
            case "swap":
                action = createSwapFulfillment;
                successText = "Successfully fulfilled swap";
                requestObj = {
                    swap_id: orderToFulfill.id,
                    metadata: preparedMetadata,
                    no_notification: noNotis,
                };
                break;
            case "claim":
                action = createClaimFulfillment;
                successText = "Successfully fulfilled claim";
                requestObj = {
                    claim_id: orderToFulfill.id,
                    metadata: preparedMetadata,
                    no_notification: noNotis,
                };
                break;
            default:
                requestObj = {
                    metadata: preparedMetadata,
                    no_notification: noNotis,
                };
                requestObj.items = toFulfill
                    .map(function (itemId) { return ({ item_id: itemId, quantity: quantities[itemId] }); })
                    .filter(function (t) { return !!t; });
                break;
        }
        action.mutate(requestObj, {
            onSuccess: function () {
                notification("Success", successText, "success");
                handleCancel();
            },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    return (<modal_1.default handleClose={handleCancel}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleCancel}>
          <span className="inter-xlarge-semibold">Create Fulfillment</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="flex flex-col">
            <span className="inter-base-semibold mb-2">Items</span>
            <item_table_1.default items={items} toFulfill={toFulfill} setToFulfill={setToFulfill} quantities={quantities} setQuantities={setQuantities}/>
            <div className="mt-4">
              <metadata_1.default metadata={metadata} setMetadata={setMetadata}/>
            </div>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-between">
            <div className="items-center h-full flex cursor-pointer" onClick={function () { return setNoNotis(!noNotis); }}>
              <div className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base ".concat(!noNotis && "bg-violet-60")}>
                <span className="self-center">
                  {!noNotis && <check_icon_1.default size={16}/>}
                </span>
              </div>
              <input id="noNotification" className="hidden" name="noNotification" checked={!noNotis} type="checkbox"/>
              <span className="ml-3 flex items-center text-grey-90 gap-x-xsmall">
                Send notifications
                <icon_tooltip_1.default content=""/>
              </span>
            </div>
            <div className="flex">
              <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={handleCancel}>
                Cancel
              </button_1.default>
              <button_1.default size="large" className="w-32 text-small justify-center" variant="primary" disabled={!(toFulfill === null || toFulfill === void 0 ? void 0 : toFulfill.length)} onClick={createFulfillment}>
                Complete
              </button_1.default>
            </div>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = CreateFulfillmentModal;
