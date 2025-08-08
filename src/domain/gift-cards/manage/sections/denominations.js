"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var add_denomination_modal_1 = require("../../../../components/organisms/add-denomination-modal");
var body_card_1 = require("../../../../components/organisms/body-card");
var edit_denominations_modal_1 = require("../../../../components/organisms/edit-denominations-modal");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var denomination_table_1 = require("../denomination-table");
var Denominations = function (_a) {
    var giftCard = _a.giftCard;
    var _b = (0, react_1.useState)(null), editDenom = _b[0], setEditDenom = _b[1];
    var _c = (0, react_1.useState)(false), addDenom = _c[0], setAddDenom = _c[1];
    var store = (0, medusa_react_1.useAdminStore)().store;
    var updateGiftCardVariant = (0, medusa_react_1.useAdminUpdateVariant)(giftCard.id);
    var deleteGiftCardVariant = (0, medusa_react_1.useAdminDeleteVariant)(giftCard.id);
    var notification = (0, use_notification_1.default)();
    var currencyCodes = (store === null || store === void 0 ? void 0 : store.currencies.filter(function (currency) { return currency.code !== store.default_currency_code; }).map(function (currency) { return currency.code; })) || [];
    var submitDenomations = function (denoms) {
        if (!denoms.length) {
            // if a update would result in the variant having 0 prices, then we delete it instead
            deleteGiftCardVariant.mutate(editDenom.id, {
                onSuccess: function () {
                    notification("Success", "Successfully updated denominations", "success");
                    setEditDenom(null);
                },
                onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
            });
            return;
        }
        updateGiftCardVariant.mutate({
            variant_id: editDenom.id,
            prices: denoms.map(function (_a) {
                var amount = _a.amount, currency_code = _a.currency_code;
                return ({
                    amount: amount,
                    currency_code: currency_code,
                });
            }),
            title: editDenom.title,
            inventory_quantity: editDenom.inventory_quantity,
            options: editDenom.options.map(function (opt) { return ({
                option_id: opt.option_id,
                value: opt.value,
            }); }),
        }, {
            onSuccess: function () {
                notification("Success", "Successfully updated denominations", "success");
                setEditDenom(null);
            },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    return (<>
      <body_card_1.default title="Denominations" subtitle="Manage your denominations" className={"h-auto w-full"} actionables={[
            {
                label: "Add Denomination",
                onClick: function () { return setAddDenom(true); },
                icon: <plus_icon_1.default size={20}/>,
            },
        ]}>
        <denomination_table_1.default giftCardId={giftCard.id} denominations={giftCard.variants || []} defaultCurrency={(store === null || store === void 0 ? void 0 : store.default_currency_code) || ""} setEditDenom={setEditDenom}/>
      </body_card_1.default>
      {editDenom && (<edit_denominations_modal_1.default currencyCodes={store === null || store === void 0 ? void 0 : store.currencies.map(function (c) { return c.code; })} onSubmit={submitDenomations} defaultDenominations={editDenom.prices.map(function (p) { return ({
                amount: p.amount,
                currency_code: p.currency_code,
                id: p.id,
            }); })} handleClose={function () { return setEditDenom(null); }}/>)}
      {addDenom && (<add_denomination_modal_1.default giftCard={giftCard} handleClose={function () { return setAddDenom(false); }} storeCurrency={store === null || store === void 0 ? void 0 : store.default_currency_code} currencyCodes={currencyCodes}/>)}
    </>);
};
exports.default = Denominations;
