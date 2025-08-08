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
var address_form_1 = require("../../../../components/templates/address-form");
var check_icon_1 = require("../../../../components/fundamentals/icons/check-icon");
var Billing = function (_a) {
    var _b;
    var form = _a.form, region = _a.region;
    var _c = (0, react_1.useState)(false), useShipping = _c[0], setUseShipping = _c[1];
    var shipping = form.watch(["shipping"]).shipping;
    (0, react_1.useEffect)(function () {
        if (!useShipping) {
            form.setValue("billing", {});
        }
    }, [useShipping]);
    var onUseShipping = function () {
        setUseShipping(!useShipping);
        form.setValue("billing", __assign({}, shipping));
    };
    return (<div className="min-h-[705px]">
      <span className="inter-base-semibold">Billing Address</span>
      <div className="items-center flex mt-4 mb-6 cursor-pointer" onClick={function () { return onUseShipping(); }}>
        <div className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base ".concat(useShipping && "bg-violet-60")}>
          <span className="self-center">
            {useShipping && <check_icon_1.default size={16}/>}
          </span>
        </div>
        <input className="hidden" type="checkbox" onChange={function () { return onUseShipping(); }} checked={useShipping} tabIndex={-1}/>
        <span className="ml-3 text-grey-90">Use same as shipping</span>
      </div>
      {!useShipping && (<address_form_1.default allowedCountries={((_b = region.countries) === null || _b === void 0 ? void 0 : _b.map(function (c) { return c.iso_2; })) || []} form={form} country={shipping.country_code} type="billing"/>)}
    </div>);
};
exports.default = Billing;
