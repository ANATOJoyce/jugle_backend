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
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../components/fundamentals/button");
var input_1 = require("../../../components/molecules/input");
var modal_1 = require("../../../components/molecules/modal");
var select_1 = require("../../../components/molecules/select");
var AddressModal = function (_a) {
    var address = _a.address, _b = _a.allowedCountries, allowedCountries = _b === void 0 ? [] : _b, handleClose = _a.handleClose, handleSave = _a.handleSave, type = _a.type;
    var _c = (0, react_hook_form_1.useForm)({
        defaultValues: __assign({}, address),
    }), register = _c.register, handleSubmit = _c.handleSubmit, setValue = _c.setValue;
    register("country_code");
    var countryOptions = allowedCountries
        .map(function (c) { return ({ label: c.display_name, value: c.iso_2 }); })
        .filter(Boolean);
    var _d = (0, react_1.useState)(countryOptions.find(function (o) { return o.value === (address === null || address === void 0 ? void 0 : address.country_code); })), selectedCountry = _d[0], setSelectedCountry = _d[1];
    var setCountry = function (value) {
        if (!value) {
            setSelectedCountry(undefined);
        }
        else {
            setSelectedCountry(value);
            setValue("country_code", value.value);
        }
    };
    var submit = function (data) {
        return handleSave({ data: data, type: type });
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">
            {type === "billing" ? "Billing" : "Shipping"} Address
          </span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="space-y-4">
            <span className="inter-base-semibold">General</span>
            <div className="flex space-x-4">
              <input_1.default label="First name" name="first_name" placeholder="First name" ref={register}/>
              <input_1.default label="Last name" name="last_name" placeholder="Last name" ref={register}/>
            </div>
            <div className="flex mt-4 space-x-4">
              <input_1.default label="Phone" name="phone" ref={register} placeholder="Phone"/>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <span className="inter-base-semibold">Address</span>
            <div className="flex space-x-4">
              <input_1.default label="Address" name="address_1" ref={register} placeholder="Address 1"/>
              <input_1.default label="Address 2" name="address_2" ref={register} placeholder="Address 2"/>
            </div>
            <div className="flex space-x-4">
              <input_1.default label="State" name="province" ref={register} placeholder="State or province"/>
              <input_1.default label="Postal code" name="postal_code" ref={register} placeholder="Postal code"/>
            </div>
            <div className="flex space-x-4">
              <input_1.default label="City" name="city" ref={register} placeholder="City"/>
              <select_1.default ref={register} name="country_code" label="Country" options={countryOptions} onChange={setCountry} value={selectedCountry}/>
            </div>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={handleClose}>
              Cancel
            </button_1.default>
            <button_1.default size="large" className="w-32 text-small justify-center" variant="primary" onClick={handleSubmit(submit)}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = AddressModal;
