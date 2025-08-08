"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var button_1 = require("../../../../../../components/fundamentals/button");
var chevron_right_icon_1 = require("../../../../../../components/fundamentals/icons/chevron-right-icon");
var ProductVariantLeaf = function (_a) {
    var variant = _a.variant, prices = _a.prices, onClick = _a.onClick;
    var title = variant.title, sku = variant.sku;
    var hasPrices = prices.length > 0;
    return (<div className="flex flex-1 items-center">
      <div className="truncate">
        <span>{title}</span>
        {sku && <span className="text-grey-50 ml-xsmall">(SKU: {sku})</span>}
      </div>
      <div className="flex items-center text-grey-50 flex-1 justify-end">
        <div className="text-grey-50 mr-xsmall">
          {hasPrices ? (<span>{"".concat(prices.length, " price").concat(prices.length > 1 ? "s" : "")}</span>) : (<span className="inter-small-semibold text-orange-40">
              Add prices
            </span>)}
        </div>
        <button_1.default variant="ghost" size="small" className="w-[32px] h-[32px]" onClick={onClick}>
          <chevron_right_icon_1.default className="text-grey-40"/>
        </button_1.default>
      </div>
    </div>);
};
exports.default = ProductVariantLeaf;
