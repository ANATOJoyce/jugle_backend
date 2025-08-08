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
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var useCopyPriceList = function () {
    var notification = (0, use_notification_1.default)();
    var createPriceList = (0, medusa_react_1.useAdminCreatePriceList)();
    var handleCopyPriceList = function (priceList) { return __awaiter(void 0, void 0, void 0, function () {
        var copy, data, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    copy = {
                        name: "".concat(priceList.name, " Copy"),
                        description: "".concat(priceList.description),
                        type: priceList.type,
                        status: priceList.status,
                        starts_at: priceList.starts_at,
                        ends_at: priceList.ends_at,
                        prices: priceList.prices,
                        customer_groups: (priceList.customer_groups || []).map(function (group) { return ({
                            id: group.id,
                        }); }),
                    };
                    if ((_a = priceList.prices) === null || _a === void 0 ? void 0 : _a.length) {
                        copy.prices = priceList.prices.map(function (price) {
                            var copiedPrice = {
                                amount: price.amount,
                                variant_id: price.variant_id,
                                min_quantity: price.min_quantity,
                                max_quantity: price.max_quantity,
                            };
                            if (price.currency_code) {
                                copiedPrice.currency_code = price.currency_code;
                            }
                            else {
                                copiedPrice.region_id = price.region_id;
                            }
                            return copiedPrice;
                        });
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, createPriceList.mutateAsync(copy)];
                case 2:
                    data = _b.sent();
                    (0, gatsby_1.navigate)("/a/pricing/".concat(data.price_list.id));
                    notification("Success", "Successfully copied price list", "success");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    notification("Error", (0, error_messages_1.getErrorMessage)(err_1), "error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return handleCopyPriceList;
};
exports.default = useCopyPriceList;
