"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var react_hook_form_1 = require("react-hook-form");
var input_1 = require("../../../../components/molecules/input");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var CustomItemSubModal = function (_a) {
    var onSubmit = _a.onSubmit, region = _a.region, _b = _a.isLargeModal, isLargeModal = _b === void 0 ? true : _b;
    var _c = (0, react_1.useState)(0), amount = _c[0], setAmount = _c[1];
    var pop = (0, react_1.useContext)(layered_modal_1.LayeredModalContext).pop;
    var _d = (0, react_hook_form_1.useForm)(), register = _d.register, handleSubmit = _d.handleSubmit;
    var onSubmitItem = function (data) {
        var title = data.title, quantity = data.quantity;
        onSubmit(title, quantity, amount);
        pop();
    };
    return (<>
      <modal_1.default.Content isLargeModal={isLargeModal}>
        <div className="min-h-[705px] gap-y-xsmall">
          <input_1.default placeholder="E.g. Gift wrapping" label="Title" name="title" className="my-4" required ref={register({ required: true })}/>
          <currency_input_1.default currentCurrency={region.currency_code} size="small" readOnly>
            <currency_input_1.default.AmountInput required label="Price" amount={amount} onChange={function (value) { return setAmount(value || 0); }}/>
          </currency_input_1.default>
          <input_1.default className="my-4" label="Quantity" name="quantity" type="number" required ref={register({ required: true })}/>
        </div>
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal={isLargeModal}>
        <div className="flex w-full justify-end gap-x-xsmall">
          <button_1.default variant="ghost" size="small" className="w-[112px]" onClick={function () { return pop(); }}>
            Back
          </button_1.default>
          <button_1.default variant="primary" className="w-[112px]" size="small" onClick={handleSubmit(onSubmitItem)}>
            Add
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </>);
};
exports.default = CustomItemSubModal;
