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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var button_1 = require("../../fundamentals/button");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var icon_tooltip_1 = require("../../molecules/icon-tooltip");
var modal_1 = require("../../molecules/modal");
var currency_input_1 = require("../currency-input");
var use_values_field_array_1 = require("./use-values-field-array");
var AddDenominationModal = function (_a) {
    var giftCard = _a.giftCard, storeCurrency = _a.storeCurrency, currencyCodes = _a.currencyCodes, handleClose = _a.handleClose;
    var _b = (0, react_hook_form_1.useForm)(), watch = _b.watch, handleSubmit = _b.handleSubmit, control = _b.control;
    var notification = (0, use_notification_1.default)();
    var createVariant = (0, medusa_react_1.useAdminCreateVariant)(giftCard.id);
    // passed to useValuesFieldArray so new prices are intialized with the currenct default price
    var defaultValue = watch("default_price", 10000);
    var _c = (0, use_values_field_array_1.useValuesFieldArray)(currencyCodes, {
        control: control,
        name: "prices",
        keyName: "indexId",
    }, {
        defaultAmount: defaultValue,
        defaultCurrencyCode: storeCurrency,
    }), fields = _c.fields, appendPrice = _c.appendPrice, deletePrice = _c.deletePrice, availableCurrencies = _c.availableCurrencies;
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var prices;
        return __generator(this, function (_a) {
            prices = [
                {
                    amount: data.default_price,
                    currency_code: storeCurrency,
                },
            ];
            if (data.prices) {
                data.prices.forEach(function (p) {
                    prices.push({
                        amount: p.price.amount,
                        currency_code: p.price.currency_code,
                    });
                });
            }
            createVariant.mutate({
                title: "".concat(giftCard.variants.length),
                options: [
                    {
                        value: "".concat(data.default_price),
                        option_id: giftCard.options[0].id,
                    },
                ],
                prices: prices,
                inventory_quantity: 0,
                manage_inventory: false,
            }, {
                onSuccess: function () {
                    notification("Success", "Denomination added successfully", "success");
                    handleClose();
                },
                onError: function (error) {
                    var errorMessage = function () {
                        var _a, _b;
                        // @ts-ignore
                        if (((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.type) === "duplicate_error") {
                            return "A denomination with that default value already exists";
                        }
                        else {
                            return (0, error_messages_1.getErrorMessage)(error);
                        }
                    };
                    notification("Error", errorMessage(), "error");
                },
            });
            return [2 /*return*/];
        });
    }); };
    return (<modal_1.default handleClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <modal_1.default.Body isLargeModal>
          <modal_1.default.Header handleClose={handleClose}>
            <span className="inter-xlarge-semibold">Add Denomination</span>
          </modal_1.default.Header>
          <modal_1.default.Content>
            <div className="flex-1 mb-xlarge">
              <div className="flex gap-x-2 mb-base">
                <h3 className="inter-base-semibold">Default Value</h3>
                <icon_tooltip_1.default content="This is the denomination in your store's default currency"/>
              </div>
              <react_hook_form_1.Controller control={control} name="default_price" render={function (_a) {
            var onChange = _a.onChange, value = _a.value;
            return (<currency_input_1.default currentCurrency={storeCurrency} readOnly size="medium">
                      <currency_input_1.default.AmountInput label="Amount" amount={value} onChange={onChange}/>
                    </currency_input_1.default>);
        }}/>
            </div>
            <div>
              <div className="flex gap-x-2 mb-base">
                <h3 className="inter-base-semibold">Other Values</h3>
                <icon_tooltip_1.default content="Here you can add values in other currencies"/>
              </div>
              <div className="flex items-center gap-y-xsmall">
                {fields.map(function (field, index) {
            return (<div key={field.indexId} className="last:mb-0 mb-xsmall flex items-center">
                      <div className="flex-1">
                        <react_hook_form_1.Controller control={control} key={field.indexId} name={"prices[".concat(index, "].price")} defaultValue={field.price} render={function (_a) {
                    var onChange = _a.onChange, value = _a.value;
                    var codes = __spreadArray([
                        value === null || value === void 0 ? void 0 : value.currency_code
                    ], availableCurrencies, true);
                    codes.sort();
                    return (<currency_input_1.default currencyCodes={codes} currentCurrency={value === null || value === void 0 ? void 0 : value.currency_code} size="medium" readOnly={index === 0} onChange={function (code) {
                            return onChange(__assign(__assign({}, value), { currency_code: code }));
                        }}>
                                <currency_input_1.default.AmountInput label="Amount" onChange={function (amount) {
                            return onChange(__assign(__assign({}, value), { amount: amount }));
                        }} amount={value === null || value === void 0 ? void 0 : value.amount}/>
                              </currency_input_1.default>);
                }}/>
                      </div>

                      <button className="ml-large">
                        <trash_icon_1.default onClick={deletePrice(index)} className="text-grey-40" size="20"/>
                      </button>
                    </div>);
        })}
              </div>
              <div className="mt-large mb-small">
                <button_1.default onClick={appendPrice} type="button" variant="ghost" size="small" disabled={(availableCurrencies === null || availableCurrencies === void 0 ? void 0 : availableCurrencies.length) === 0}>
                  <plus_icon_1.default size={20}/>
                  Add a price
                </button_1.default>
              </div>
            </div>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="w-full flex justify-end">
              <button_1.default variant="ghost" size="small" onClick={handleClose} className="mr-2 min-w-[130px] justify-center">
                Cancel
              </button_1.default>
              <button_1.default variant="primary" size="small" className="mr-2 min-w-[130px] justify-center" type="submit">
                Save
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
exports.default = AddDenominationModal;
