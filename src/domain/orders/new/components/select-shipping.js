"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var alert_icon_1 = require("../../../../components/fundamentals/icons/alert-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var stepped_modal_1 = require("../../../../components/molecules/modal/stepped-modal");
var select_1 = require("../../../../components/molecules/select");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var prices_1 = require("../../../../utils/prices");
var SelectShippingMethod = function (_a) {
    var shippingOptions = _a.shippingOptions, handleOptionSelect = _a.handleOptionSelect, shippingOption = _a.shippingOption, showCustomPrice = _a.showCustomPrice, setShowCustomPrice = _a.setShowCustomPrice, setCustomOptionPrice = _a.setCustomOptionPrice, customOptionPrice = _a.customOptionPrice, region = _a.region;
    var _b = (0, react_1.useContext)(stepped_modal_1.SteppedContext), disableNextPage = _b.disableNextPage, enableNextPage = _b.enableNextPage;
    (0, react_1.useEffect)(function () {
        if (!shippingOption) {
            disableNextPage();
        }
    }, []);
    return (<div className="min-h-[705px]">
      <span className="inter-base-semibold">
        Shipping method{" "}
        <span className="inter-base-regular text-grey-50">
          (To {region.name})
        </span>
      </span>

      {!(shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.length) ? (<div className="inter-small-regular mt-6 p-4 text-orange-50 bg-orange-5 rounded-rounded flex text-grey-50">
          <div className="h-full mr-3">
            <alert_icon_1.default size={20}/>
          </div>
          <div className="flex flex-col">
            <span className="inter-small-semibold">Attention!</span>
            You don't have any options for orders without shipping. Please add
            one (e.g. "In-store fulfillment") with "Show on website" unchecked
            in region settings and continue.
          </div>
        </div>) : (<div className="mt-4">
          <select_1.default label="Choose a shipping method" onChange={function (so) {
                handleOptionSelect(so);
                enableNextPage();
            }} value={shippingOption
                ? {
                    value: shippingOption.id,
                    label: "".concat(shippingOption.name, " - ").concat((0, prices_1.extractOptionPrice)(shippingOption.amount, region)),
                }
                : null} //
         options={(shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.map(function (so) { return ({
                value: so.id,
                label: "".concat(so.name, " - ").concat((0, prices_1.extractOptionPrice)(so.amount, region)),
            }); })) || []}/>
          <div className="mt-4">
            {!showCustomPrice && (<div className="w-full flex justify-end">
                <button_1.default variant="ghost" size="small" className="w-[125px] border border-grey-20" disabled={!shippingOption} onClick={function () { return setShowCustomPrice(true); }}>
                  Set custom price
                </button_1.default>
              </div>)}
            {showCustomPrice && (<div className="flex items-center">
                <div className="w-full">
                  <currency_input_1.default readOnly size="small" currentCurrency={region.currency_code}>
                    <currency_input_1.default.AmountInput label="Custom Price" value={customOptionPrice} onChange={function (value) { return setCustomOptionPrice(value); }}/>
                  </currency_input_1.default>
                </div>
                <button_1.default variant="ghost" size="small" onClick={function () { return setShowCustomPrice(false); }} className="ml-8 text-grey-40 w-8 h-8">
                  <trash_icon_1.default size={20}/>
                </button_1.default>
              </div>)}
          </div>
        </div>)}
    </div>);
};
exports.default = SelectShippingMethod;
