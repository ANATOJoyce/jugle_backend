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
var moment_1 = require("moment");
var react_1 = require("react");
var spinner_1 = require("../../../components/atoms/spinner");
var badge_1 = require("../../../components/fundamentals/badge");
var dollar_sign_icon_1 = require("../../../components/fundamentals/icons/dollar-sign-icon");
var edit_icon_1 = require("../../../components/fundamentals/icons/edit-icon");
var publish_icon_1 = require("../../../components/fundamentals/icons/publish-icon");
var unpublish_icon_1 = require("../../../components/fundamentals/icons/unpublish-icon");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var status_selector_1 = require("../../../components/molecules/status-selector");
var body_card_1 = require("../../../components/organisms/body-card");
var raw_json_1 = require("../../../components/organisms/raw-json");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var prices_1 = require("../../../utils/prices");
var edit_gift_card_modal_1 = require("./edit-gift-card-modal");
var update_balance_modal_1 = require("./update-balance-modal");
var GiftCardDetails = function (_a) {
    var _b, _c;
    var id = _a.id;
    var _d = (0, medusa_react_1.useAdminGiftCard)(id, {
        enabled: !!id,
    }), gift_card = _d.gift_card, isLoading = _d.isLoading;
    var regions = (0, medusa_react_1.useAdminRegions)().regions;
    var updateGiftCard = (0, medusa_react_1.useAdminUpdateGiftCard)(gift_card === null || gift_card === void 0 ? void 0 : gift_card.id);
    var notification = (0, use_notification_1.default)();
    var _e = (0, react_1.useState)(false), showUpdateBalance = _e[0], setShowUpdateBalance = _e[1];
    var _f = (0, react_1.useState)(false), showEdit = _f[0], setShowEdit = _f[1];
    var actions = [
        {
            label: "Edit",
            onClick: function () { return setShowEdit(true); },
            icon: <edit_icon_1.default size={20}/>,
        },
        {
            label: "".concat((gift_card === null || gift_card === void 0 ? void 0 : gift_card.is_disabled) ? "Activate" : "Disable"),
            onClick: function () { return handleUpdate({ is_disabled: !(gift_card === null || gift_card === void 0 ? void 0 : gift_card.is_disabled) }); },
            icon: (gift_card === null || gift_card === void 0 ? void 0 : gift_card.is_disabled) ? (<publish_icon_1.default size={20}/>) : (<unpublish_icon_1.default size={20}/>),
        },
        {
            label: "Update balance",
            onClick: function () { return setShowUpdateBalance(true); },
            icon: <dollar_sign_icon_1.default size={20}/>,
        },
    ];
    var handleUpdate = function (data) {
        updateGiftCard.mutate(__assign({}, data), {
            onSuccess: function () {
                notification("Success", "Succesfully updated Gift Card", "success");
                setShowEdit(false);
                setShowUpdateBalance(false);
            },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    return (<div>
      <breadcrumb_1.default currentPage={"Gift Card Details"} previousBreadcrumb={"Gift Cards"} previousRoute="/a/gift-cards"/>
      {isLoading || !gift_card ? (<div className="w-full bg-grey-0 border border-grey-20 rounded-rounded py-xlarge flex items-center justify-center">
          <spinner_1.default size={"large"} variant={"secondary"}/>
        </div>) : (<>
          <body_card_1.default className={"h-auto min-h-0 w-full"} title={"".concat(gift_card === null || gift_card === void 0 ? void 0 : gift_card.code)} subtitle={"Gift Card id: ".concat(gift_card === null || gift_card === void 0 ? void 0 : gift_card.id)} status={<status_selector_1.default isDraft={!!(gift_card === null || gift_card === void 0 ? void 0 : gift_card.is_disabled)} activeState={"Active"} draftState={"Disable"} onChange={function () {
                    return handleUpdate({ is_disabled: !(gift_card === null || gift_card === void 0 ? void 0 : gift_card.is_disabled) });
                }}/>} actionables={actions}>
            <div className="flex justify-between">
              <div className="flex mt-6 space-x-6 divide-x">
                <div className="flex flex-col">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Original amount
                  </div>
                  <div>
                    {(0, prices_1.formatAmountWithSymbol)({
                amount: gift_card === null || gift_card === void 0 ? void 0 : gift_card.value,
                currency: gift_card === null || gift_card === void 0 ? void 0 : gift_card.region.currency_code,
            })}
                  </div>
                </div>
                <div className="flex flex-col pl-6">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Balance
                  </div>
                  <div>
                    {(0, prices_1.formatAmountWithSymbol)({
                amount: gift_card === null || gift_card === void 0 ? void 0 : gift_card.balance,
                currency: gift_card === null || gift_card === void 0 ? void 0 : gift_card.region.currency_code,
            })}
                  </div>
                </div>
                <div className="flex flex-col pl-6">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Created
                  </div>
                  <div>
                    {(0, moment_1.default)(gift_card === null || gift_card === void 0 ? void 0 : gift_card.created_at).format("DD MMM YYYY")}
                  </div>
                </div>
              </div>
              <div className="flex items-end">
                <badge_1.default variant="default">{(_b = gift_card === null || gift_card === void 0 ? void 0 : gift_card.region) === null || _b === void 0 ? void 0 : _b.name}</badge_1.default>
              </div>
            </div>
          </body_card_1.default>
          <div className="mt-large">
            <raw_json_1.default data={gift_card} title="Raw gift card"/>
          </div>
        </>)}
      {showUpdateBalance && (<update_balance_modal_1.default giftCard={gift_card} currencyCode={(_c = gift_card === null || gift_card === void 0 ? void 0 : gift_card.region) === null || _c === void 0 ? void 0 : _c.currency_code} handleClose={function () { return setShowUpdateBalance(false); }} handleSave={handleUpdate} updating={updateGiftCard.isLoading}/>)}
      {showEdit && (<edit_gift_card_modal_1.default handleClose={function () { return setShowEdit(false); }} handleSave={handleUpdate} regions={regions} region={gift_card === null || gift_card === void 0 ? void 0 : gift_card.region} updating={updateGiftCard.isLoading}/>)}
    </div>);
};
exports.default = GiftCardDetails;
