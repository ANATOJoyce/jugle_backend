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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../components/fundamentals/button");
var input_1 = require("../../../components/molecules/input");
var modal_1 = require("../../../components/molecules/modal");
var currency_input_1 = require("../../../components/organisms/currency-input");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var EditShipping = function (_a) {
    var _b, _c, _d, _e;
    var shippingOption = _a.shippingOption, region = _a.region, onDone = _a.onDone, onClick = _a.onClick;
    var _f = (0, react_hook_form_1.useForm)(), register = _f.register, reset = _f.reset, handleSubmit = _f.handleSubmit, setValue = _f.setValue;
    var _g = (0, react_1.useState)(shippingOption === null || shippingOption === void 0 ? void 0 : shippingOption.admin_only), adminOnly = _g[0], setAdminOnly = _g[1];
    var _h = (0, react_1.useState)(false), showDelete = _h[0], setShowDelete = _h[1];
    var deleteOption = (0, medusa_react_1.useAdminDeleteShippingOption)(shippingOption.id);
    var updateOption = (0, medusa_react_1.useAdminUpdateShippingOption)(shippingOption.id);
    var notification = (0, use_notification_1.default)();
    (0, react_1.useEffect)(function () {
        var _a, _b, _c, _d;
        if (shippingOption.requirements) {
            var minSubtotal = shippingOption.requirements.find(function (req) { return req.type === "min_subtotal"; });
            if (minSubtotal) {
                shippingOption.requirements.min_subtotal = {
                    amount: minSubtotal.amount,
                    id: minSubtotal.id,
                };
            }
            var maxSubtotal = shippingOption.requirements.find(function (req) { return req.type === "max_subtotal"; });
            if (maxSubtotal) {
                shippingOption.requirements.max_subtotal = {
                    amount: maxSubtotal.amount,
                    id: maxSubtotal.id,
                };
            }
        }
        reset(__assign({}, shippingOption));
        register("amount");
        setValue("amount", shippingOption === null || shippingOption === void 0 ? void 0 : shippingOption.amount);
        register("requirements.min_subtotal.amount");
        setValue("requirements.min_subtotal.amount", (_b = (_a = shippingOption === null || shippingOption === void 0 ? void 0 : shippingOption.requirements) === null || _a === void 0 ? void 0 : _a.min_subtotal) === null || _b === void 0 ? void 0 : _b.amount);
        register("requirements.max_subtotal.amount");
        setValue("requirements.max_subtotal.amount", (_d = (_c = shippingOption === null || shippingOption === void 0 ? void 0 : shippingOption.requirements) === null || _c === void 0 ? void 0 : _c.max_subtotal) === null || _d === void 0 ? void 0 : _d.amount);
    }, [shippingOption]);
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            deleteOption.mutate(void {}, {
                onSuccess: function () {
                    onClick();
                    if (onDone) {
                        onDone();
                    }
                },
                onError: function (error) {
                    setShowDelete(false);
                    notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                },
            });
            return [2 /*return*/];
        });
    }); };
    var buildShippingRequirements = function (requirements) {
        if (!requirements) {
            return null;
        }
        return Object.entries(requirements).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value.amount && value.amount > 0) {
                var reqType = shippingOption.requirements.find(function (req) { return req.type === key; });
                if (reqType) {
                    acc.push({
                        type: key,
                        amount: value.amount,
                        id: reqType.id,
                    });
                }
                else {
                    acc.push({
                        type: key,
                        amount: value.amount,
                    });
                }
                return acc;
            }
            else {
                return acc;
            }
        }, []);
    };
    var handleMinChange = function (amount) {
        if (amount) {
            setValue("requirements.min_subtotal.amount", amount);
        }
    };
    var handleMaxChange = function (amount) {
        if (amount) {
            setValue("requirements.max_subtotal.amount", amount);
        }
    };
    var handleAmountChange = function (amount) {
        if (amount) {
            setValue("amount", amount);
        }
    };
    var handleSave = function (data) {
        var reqs = buildShippingRequirements(data.requirements);
        var payload = {
            name: data.name,
            amount: data.amount,
            requirements: reqs !== null && reqs !== void 0 ? reqs : [],
            admin_only: adminOnly,
        };
        // TODO: fix AdminPostShippingOptionsOptionReq type
        updateOption.mutate(payload, {
            onSuccess: function () {
                notification("Success", "Successfully updated shipping option", "success");
                if (onDone) {
                    onDone();
                }
                onClick();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    return (<>
      {showDelete ? (<delete_prompt_1.default text={"Are you sure you want to delete this shipping option?"} successText="Successfully deleted shipping option" handleClose={function () { return setShowDelete(false); }} onDelete={function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    handleDelete();
                    return [2 /*return*/];
                });
            }); }}/>) : (<modal_1.default handleClose={onClick}>
          <form onSubmit={handleSubmit(handleSave)}>
            <modal_1.default.Body>
              <modal_1.default.Header handleClose={onClick}>
                <div>
                  <h1 className="inter-xlarge-semibold">
                    {shippingOption.is_return
                ? "Edit Return Shipping Option"
                : "Edit Shipping Option"}
                  </h1>
                </div>
              </modal_1.default.Header>
              <modal_1.default.Content>
                <div className="mb-large">
                  <p className="inter-base-semibold">Fulfillment Method</p>
                  <p className="inter-base-regular text-grey-50">
                    {shippingOption.data.id} via {shippingOption.provider_id}
                  </p>
                </div>
                <div className="grid grid-cols-1 medium:grid-cols-2 gap-base">
                  <input_1.default label="Name" name="name" ref={register} placeholder="Shipping option name" className="flex-grow"/>
                  <currency_input_1.default readOnly currentCurrency={region.currency_code} size="small">
                    <currency_input_1.default.AmountInput amount={shippingOption.amount} label="Price" onChange={function (amount) { return handleAmountChange(amount); }}/>
                  </currency_input_1.default>
                </div>
                <div className="mt-large mb-xlarge">
                  <label className="inline-flex items-center inter-base-semibold">
                    <input type="checkbox" id="true" name="requires_shipping" value="true" checked={!adminOnly} onChange={function () { return setAdminOnly(!adminOnly); }} className="mr-small w-5 h-5 accent-violet-60 rounded-base"/>
                    Show on website
                  </label>
                </div>
                {!shippingOption.is_return && (<>
                    <p className="inter-base-semibold mb-base">Requirements</p>
                    <div className="grid grid-cols-1 medium:grid-cols-2 gap-base">
                      <currency_input_1.default readOnly currentCurrency={region.currency_code} size="small">
                        <currency_input_1.default.AmountInput amount={(_c = (_b = shippingOption.requirements) === null || _b === void 0 ? void 0 : _b.min_subtotal) === null || _c === void 0 ? void 0 : _c.amount} label="Min. subtotal" onChange={function (amount) { return handleMinChange(amount); }}/>
                      </currency_input_1.default>
                      <currency_input_1.default readOnly currentCurrency={region.currency_code} size="small">
                        <currency_input_1.default.AmountInput amount={(_e = (_d = shippingOption.requirements) === null || _d === void 0 ? void 0 : _d.max_subtotal) === null || _e === void 0 ? void 0 : _e.amount} label="Max. subtotal" onChange={function (amount) { return handleMaxChange(amount); }}/>
                      </currency_input_1.default>
                    </div>
                  </>)}
                <div className="mt-xlarge">
                  <p className="inter-base-semibold">Danger Zone</p>
                  <p className="inter-base-regular text-grey-50 mb-base">
                    This will permanently delete this option from your Medusa
                    Store
                  </p>
                  <button onClick={function () { return setShowDelete(true); }} className="text-rose-50 inter-base-semibold">
                    Delete
                  </button>
                </div>
              </modal_1.default.Content>
              <modal_1.default.Footer>
                <div className="flex items-center justify-end w-full gap-x-xsmall">
                  <button_1.default type="button" onClick={onClick} variant="secondary" size="small" className="w-eventButton justify-center">
                    Cancel changes
                  </button_1.default>
                  <button_1.default type="submit" variant="primary" size="small" className="w-eventButton justify-center">
                    Save
                  </button_1.default>
                </div>
              </modal_1.default.Footer>
            </modal_1.default.Body>
          </form>
        </modal_1.default>)}
    </>);
};
exports.default = EditShipping;
