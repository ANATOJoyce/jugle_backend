"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var query_string_1 = require("query-string");
var api_1 = require("../../../../services/api");
var spinner_1 = require("../../../../components/atoms/spinner");
var button_1 = require("../../../../components/fundamentals/button");
var address_form_1 = require("../../../../components/templates/address-form");
var select_1 = require("../../../../components/molecules/select");
var radio_group_1 = require("../../../../components/organisms/radio-group");
var stepped_modal_1 = require("../../../../components/molecules/modal/stepped-modal");
var ShippingDetails = function (_a) {
    var _b;
    var customerAddresses = _a.customerAddresses, region = _a.region, setCustomerAddresses = _a.setCustomerAddresses, form = _a.form;
    var _c = (0, react_1.useState)(false), addNew = _c[0], setAddNew = _c[1];
    var _d = (0, react_1.useState)(false), fetchingAddresses = _d[0], setFetchingAddresses = _d[1];
    var _e = (0, react_1.useContext)(stepped_modal_1.SteppedContext), disableNextPage = _e.disableNextPage, enableNextPage = _e.enableNextPage, nextStepEnabled = _e.nextStepEnabled;
    var _f = form.watch([
        "shipping",
        "customer",
        "requireShipping",
    ]), shipping = _f.shipping, selectedCustomer = _f.customer, requireShipping = _f.requireShipping;
    (0, react_1.useEffect)(function () {
        if (!(shipping === null || shipping === void 0 ? void 0 : shipping.first_name) ||
            !(shipping === null || shipping === void 0 ? void 0 : shipping.last_name) ||
            !(shipping === null || shipping === void 0 ? void 0 : shipping.address_1) ||
            !(shipping === null || shipping === void 0 ? void 0 : shipping.city) ||
            !(shipping === null || shipping === void 0 ? void 0 : shipping.country_code) ||
            !(shipping === null || shipping === void 0 ? void 0 : shipping.postal_code)) {
            if (nextStepEnabled) {
                disableNextPage();
            }
        }
        else if (!nextStepEnabled) {
            enableNextPage();
        }
    }, [shipping]);
    // "region",
    var debouncedFetch = function (filter) {
        var prepared = query_string_1.default.stringify({
            q: filter,
            offset: 0,
            limit: 10,
        }, { skipNull: true, skipEmptyString: true });
        return api_1.default.customers
            .list("?".concat(prepared))
            .then(function (_a) {
            var data = _a.data;
            return data.customers.map(function (_a) {
                var id = _a.id, first_name = _a.first_name, last_name = _a.last_name, email = _a.email;
                return ({
                    label: "".concat(first_name || "", " ").concat(last_name || "", " (").concat(email, ")"),
                    value: id,
                });
            });
        })
            .catch(function (error) { return []; });
    };
    var onCustomerSelect = function (val) { return __awaiter(void 0, void 0, void 0, function () {
        var email;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = /\(([^()]*)\)$/.exec(val === null || val === void 0 ? void 0 : val.label);
                    if (!val || !email) {
                        form.setValue("customer", "");
                        form.setValue("customerId", "");
                        setCustomerAddresses([]);
                        return [2 /*return*/];
                    }
                    form.setValue("customer", val);
                    form.setValue("email", email[1]);
                    form.setValue("customerId", val.value);
                    setFetchingAddresses(true);
                    return [4 /*yield*/, api_1.default.customers
                            .retrieve(val.value)
                            .then(function (_a) {
                            var data = _a.data;
                            form.setValue("shipping.first_name", data.customer.first_name);
                            form.setValue("shipping.last_name", data.customer.last_name);
                            form.setValue("shipping.email", data.customer.email);
                            form.setValue("shipping.phone", data.customer.phone);
                            var countries = region.countries.map(function (_a) {
                                var iso_2 = _a.iso_2;
                                return iso_2;
                            });
                            var inRegion = data.customer.shipping_addresses.filter(function (sa) {
                                return countries.includes(sa.country_code);
                            });
                            if (inRegion) {
                                setAddNew(false);
                            }
                            setCustomerAddresses(inRegion);
                        })
                            .catch(function (_) { return setCustomerAddresses([]); })];
                case 1:
                    _a.sent();
                    setFetchingAddresses(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var onCustomerCreate = function (val) {
        setCustomerAddresses([]);
        setAddNew(true);
        form.setValue("email", val);
        form.setValue("customer", { label: val, value: val });
        return { label: val, value: val };
    };
    var onCreateNew = function () {
        form.setValue("shipping.address_1", undefined);
        form.setValue("shipping.postal_code", undefined);
        form.setValue("shipping.city", undefined);
        form.setValue("shipping.province", undefined);
        setAddNew(true);
    };
    return (<div className="min-h-[705px]">
      <span className="inter-base-semibold">Customer and shipping details</span>
      <select_1.default className="mt-4" label="Find or create a customer" value={selectedCustomer} options={[]} enableSearch onChange={function (val) { return onCustomerSelect(val); }} filterOptions={debouncedFetch} isCreatable onCreateOption={function (val) {
            onCustomerCreate(val);
        }}/>

      {fetchingAddresses ? (<div>
          <spinner_1.default variant="primary"/>
        </div>) : customerAddresses.length && !addNew ? (<div className="mt-6">
          <span className="inter-base-semibold">Choose existing addresses</span>
          <radio_group_1.default.Root className="mt-4" value={shipping.id} onValueChange={function (value) {
                var address = customerAddresses.find(function (ca) { return ca.id === value; });
                form.setValue("shipping", address);
                form.setValue("billing", address);
            }}>
            {customerAddresses.map(function (sa, i) { return (<radio_group_1.default.Item label={"".concat(sa.first_name, " ").concat(sa.last_name)} checked={shipping && sa.id === shipping.id} description={"".concat(sa.address_1, ", ").concat(sa.address_2, " ").concat(sa.postal_code, " ").concat(sa.city, " ").concat(sa.country_code.toUpperCase())} value={sa.id} key={i}></radio_group_1.default.Item>); })}
          </radio_group_1.default.Root>
          <div className="mt-4 flex w-full justify-end">
            <button_1.default variant="ghost" size="small" className="border border-grey-20 w-[112px]" onClick={onCreateNew}>
              Create new
            </button_1.default>
          </div>
        </div>) : (<div className="mt-4">
          <address_form_1.default allowedCountries={((_b = region.countries) === null || _b === void 0 ? void 0 : _b.map(function (c) { return c.iso_2; })) || []} country={shipping === null || shipping === void 0 ? void 0 : shipping.country_code} form={form} type="shipping"/>
        </div>)}
    </div>);
};
exports.default = ShippingDetails;
