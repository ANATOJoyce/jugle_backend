"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var countries_1 = require("../../utils/countries");
var input_1 = require("../molecules/input");
var select_1 = require("../molecules/select");
var AddressForm = function (_a) {
    var _b = _a.form, form = _b === void 0 ? {} : _b, country = _a.country, allowedCountries = _a.allowedCountries, _c = _a.type, type = _c === void 0 ? "address" : _c;
    var countryOptions = countries_1.countries
        .map(function (c) {
        if (allowedCountries) {
            var clean = allowedCountries.map(function (c) { return c.toLowerCase(); });
            if (clean.includes(c.alpha2.toLowerCase())) {
                return { label: c.name, value: c.alpha2.toLowerCase() };
            }
            else {
                return null;
            }
        }
        else {
            return { label: c.name, value: c.alpha2.toLowerCase() };
        }
    })
        .filter(Boolean);
    var _d = (0, react_1.useState)(countryOptions.find(function (o) { return o.value === country; })), selectedCountry = _d[0], setSelectedCountry = _d[1];
    form.register("".concat(type, ".country_code"));
    var setCountry = function (value) {
        if (value) {
            setSelectedCountry(value);
            form.setValue("".concat(type, ".country_code"), value.value);
        }
    };
    (0, react_1.useEffect)(function () {
        if (country && !form.getValues("".concat([type].country_code))) {
            form.setValue("".concat([type].country_code), country);
        }
    }, []);
    return (<div>
      <span className="inter-base-semibold">General</span>
      <div className="grid grid-cols-2 gap-x-base gap-y-base mt-4 mb-8">
        <input_1.default ref={form.register({
            required: true,
        })} placeholder="First Name" label="First Name" required={true} name={"".concat([type], ".first_name")}/>
        <input_1.default ref={form.register({
            required: true,
        })} placeholder="Last Name" label="Last Name" required={true} name={"".concat([type], ".last_name")}/>
        <input_1.default ref={form.register({
            required: true,
        })} placeholder="Email" label="Email" type="email" required={true} name={"email"}/>
        <input_1.default ref={form.register({
            required: true,
        })} placeholder="Phone" label="Phone" required={true} name={"".concat([type], ".phone")}/>
      </div>

      <span className="inter-base-semibold">{"".concat(type !== "address"
            ? "".concat(type.charAt(0).toUpperCase()).concat(type.slice(1), " ")
            : "", "Address")}</span>
      <div className="mt-4">
        <input_1.default ref={form.register({
            required: true,
        })} placeholder="Address 1" label="Address 1" required={true} name={"".concat([type], ".address_1")}/>
        <div className="grid grid-cols-2 gap-x-base gap-y-base mt-4">
          <input_1.default ref={form.register} placeholder="Province" label="Province" name={"".concat([type], ".province")}/>
          <input_1.default ref={form.register({
            required: true,
        })} placeholder="Postal code" label="Postal code" required={true} name={"".concat([type], ".postal_code")}/>
          <input_1.default ref={form.register({
            required: true,
        })} placeholder="City" label="City" required={true} name={"".concat([type], ".city")}/>
          <select_1.default ref={form.register} name={"".concat([type], ".country_code")} label="Country" required value={country || null} options={countryOptions} onChange={setCountry} value={selectedCountry} defaultValue="Choose a country"/>
        </div>
      </div>
    </div>);
};
exports.default = AddressForm;
