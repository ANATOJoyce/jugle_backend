"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayTotal = void 0;
var react_1 = require("react");
var clsx_1 = require("clsx");
var prices_1 = require("../../../../utils/prices");
var DisplayTotal = function (_a) {
    var totalAmount = _a.totalAmount, totalTitle = _a.totalTitle, currency = _a.currency, _b = _a.variant, variant = _b === void 0 ? "regular" : _b, _c = _a.subtitle, subtitle = _c === void 0 ? "" : _c, _d = _a.totalColor, totalColor = _d === void 0 ? "text-grey-90" : _d;
    return (<div className="flex justify-between mt-4 items-center">
    <div className="flex flex-col">
      <div className={(0, clsx_1.default)("text-grey-90", {
            "inter-small-regular": variant === "regular",
            "inter-small-semibold": variant === "large" || variant === "bold",
        })}>
        {totalTitle}
      </div>
      {subtitle && (<div className="inter-small-regular text-grey-50 mt-1">{subtitle}</div>)}
    </div>
    <div className="flex">
      <div className={(0, clsx_1.default)(totalColor, {
            "inter-small-regular mr-3": variant === "regular",
            "inter-large-semibold": variant === "bold",
            "inter-xlarge-semibold": variant === "large",
        })}>
        {(0, prices_1.formatAmountWithSymbol)({
            amount: totalAmount,
            currency: currency,
        })}
      </div>
      {variant === "regular" && (<div className="inter-small-regular text-grey-50">
          {currency.toUpperCase()}
        </div>)}
    </div>
  </div>);
};
exports.DisplayTotal = DisplayTotal;
