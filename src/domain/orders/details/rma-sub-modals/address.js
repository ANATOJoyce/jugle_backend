"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var address_form_1 = require("../address-form");
var react_hook_form_1 = require("react-hook-form");
var RMAEditAddressSubModal = function (_a) {
    var onSubmit = _a.onSubmit, address = _a.address, order = _a.order, countries = _a.countries, _b = _a.isLargeModal, isLargeModal = _b === void 0 ? true : _b;
    var pop = (0, react_1.useContext)(layered_modal_1.LayeredModalContext).pop;
    var addressForm = (0, react_hook_form_1.useForm)();
    var handleSubmit = function (data) {
        onSubmit(data.address);
        pop();
    };
    return (<>
      <modal_1.default.Content isLargeModal={isLargeModal}>
        <div className="h-full">
          <h2 className="inter-base-semibold mb-4">Search for additional </h2>
        </div>{" "}
        <address_form_1.default address={address} country={order.shipping_address.country_code} allowedCountries={countries} form={addressForm}/>
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal={isLargeModal}>
        <div className="flex w-full justify-end gap-x-xsmall">
          <button_1.default variant="ghost" size="small" className="w-[112px]" onClick={function () { return pop(); }}>
            Back
          </button_1.default>
          <button_1.default variant="primary" className="w-[112px]" size="small" onClick={addressForm.handleSubmit(handleSubmit)}>
            Add
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </>);
};
exports.default = RMAEditAddressSubModal;
