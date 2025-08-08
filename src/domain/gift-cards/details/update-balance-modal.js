"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var tooltip_1 = require("../../../components/atoms/tooltip");
var button_1 = require("../../../components/fundamentals/button");
var modal_1 = require("../../../components/molecules/modal");
var currency_input_1 = require("../../../components/organisms/currency-input");
var UpdateBalanceModal = function (_a) {
    var handleClose = _a.handleClose, handleSave = _a.handleSave, currencyCode = _a.currencyCode, giftCard = _a.giftCard, updating = _a.updating;
    var _b = (0, react_1.useState)(giftCard.balance), balance = _b[0], setBalance = _b[1];
    var handleChange = function (amount) {
        if (typeof amount !== undefined) {
            setBalance(amount);
        }
    };
    var onSubmit = function () {
        if (handleSave) {
            handleSave({ balance: balance });
        }
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Update Balance</span>
          <span className={(0, clsx_1.default)("inter-small-regular text-rose-50 mt-2xsmall transition-display delay-75", {
            hidden: !(balance > giftCard.value),
        })}>
            Balance can't be updated to a value that is greater than the
            original amount
          </span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <currency_input_1.default readOnly currentCurrency={currencyCode} size="small">
            <currency_input_1.default.AmountInput amount={giftCard.balance} label="Price" onChange={handleChange}/>
          </currency_input_1.default>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="w-full flex justify-end">
            <button_1.default variant="ghost" size="small" onClick={handleClose} className="mr-2">
              Cancel
            </button_1.default>
            <button_1.default loading={updating} variant="primary" className="min-w-[100px]" size="small" onClick={onSubmit} disabled={balance > giftCard.value}>
              {balance > giftCard.value ? (<tooltip_1.default content="Balance is above original value">
                  Save
                </tooltip_1.default>) : ("Save")}
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = UpdateBalanceModal;
