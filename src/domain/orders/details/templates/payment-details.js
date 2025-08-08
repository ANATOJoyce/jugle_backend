"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetails = void 0;
var react_1 = require("react");
var display_total_1 = require("./display-total");
var PaymentDetails = function (_a) {
    var currency = _a.currency, swapAmount = _a.swapAmount, manualRefund = _a.manualRefund, swapRefund = _a.swapRefund, returnRefund = _a.returnRefund, paidTotal = _a.paidTotal, refundedTotal = _a.refundedTotal;
    if (swapAmount + manualRefund + swapRefund + returnRefund === 0) {
        return null;
    }
    return (<>
      {!!swapAmount && (<display_total_1.DisplayTotal currency={currency} totalAmount={swapAmount} totalTitle={"Total for Swaps"}/>)}
      {!!swapRefund && (<display_total_1.DisplayTotal currency={currency} totalAmount={returnRefund} totalTitle={"Refunded for Swaps"}/>)}
      {!!returnRefund && (<display_total_1.DisplayTotal currency={currency} totalAmount={returnRefund} totalTitle={"Refunded for Returns"}/>)}
      {!!manualRefund && (<display_total_1.DisplayTotal currency={currency} totalAmount={manualRefund} totalTitle={"Manually refunded"}/>)}
      <display_total_1.DisplayTotal variant={"bold"} currency={currency} totalAmount={paidTotal - refundedTotal} totalTitle={"Net Total"}/>
    </>);
};
exports.PaymentDetails = PaymentDetails;
