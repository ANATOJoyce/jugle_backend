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
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var breadcrumb_1 = require("../../components/molecules/breadcrumb");
var select_1 = require("../../components/molecules/select");
var body_card_1 = require("../../components/organisms/body-card");
var two_split_pane_1 = require("../../components/templates/two-split-pane");
var use_notification_1 = require("../../hooks/use-notification");
var currencies_1 = require("../../utils/currencies");
var error_messages_1 = require("../../utils/error-messages");
var CurrencySettings = function () {
    var _a = (0, react_1.useState)([]), storeCurrencies = _a[0], setStoreCurrencies = _a[1];
    var _b = (0, react_1.useState)([]), allCurrencies = _b[0], setAllCurrencies = _b[1];
    var _c = (0, react_1.useState)({
        value: "",
        label: "",
    }), selectedCurrency = _c[0], setSelectedCurrency = _c[1];
    var notification = (0, use_notification_1.default)();
    var _d = (0, medusa_react_1.useAdminStore)(), isLoading = _d.isLoading, store = _d.store;
    var updateStore = (0, medusa_react_1.useAdminUpdateStore)();
    var setCurrenciesOnLoad = function () {
        var defaultCurr = {
            label: store.default_currency_code.toUpperCase(),
            value: store.default_currency_code.toUpperCase(),
        };
        var storeCurrs = (store === null || store === void 0 ? void 0 : store.currencies.map(function (c) { return ({
            value: c.code.toUpperCase(),
            label: c.code.toUpperCase(),
        }); })) || [];
        var allCurrs = Object.keys(currencies_1.currencies).map(function (currency) { return ({
            label: currency,
            value: currency,
        }); });
        setSelectedCurrency(defaultCurr);
        setStoreCurrencies(storeCurrs);
        setAllCurrencies(allCurrs);
    };
    (0, react_1.useEffect)(function () {
        if (isLoading || !store) {
            return;
        }
        setCurrenciesOnLoad();
    }, [store, isLoading]);
    var handleChange = function (currencies) {
        setStoreCurrencies(currencies);
    };
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            updateStore.mutate({
                default_currency_code: selectedCurrency.value,
                currencies: storeCurrencies.map(function (c) { return c.value; }),
            }, {
                onSuccess: function () {
                    notification("Success", "Successfully updated currencies", "success");
                },
                onError: function (error) {
                    notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                },
            });
            return [2 /*return*/];
        });
    }); };
    var currencyEvents = [
        {
            label: "Save",
            onClick: function (e) { return onSubmit(e); },
        },
        {
            label: "Cancel changes",
            onClick: function () { return (0, gatsby_1.navigate)("/a/settings"); },
        },
    ];
    return (<div>
      <breadcrumb_1.default previousRoute="/a/settings" previousBreadcrumb="Settings" currentPage="Currencies"/>
      <two_split_pane_1.default>
        <body_card_1.default title="Currencies" subtitle="Manage the currencies that you will operate in" events={currencyEvents} className={"h-auto max-h-full"}>
          <select_1.default label="Default store currency" options={storeCurrencies} // You are only allow to choose default currency from store currencies
     value={selectedCurrency} isMultiSelect={false} enableSearch={true} onChange={function (e) { return setSelectedCurrency(e); }} className="mb-6"/>
          <select_1.default label="Store currencies" options={allCurrencies} value={storeCurrencies} isMultiSelect={true} enableSearch={true} onChange={handleChange} className="mb-2"/>
        </body_card_1.default>
      </two_split_pane_1.default>
    </div>);
};
exports.default = CurrencySettings;
