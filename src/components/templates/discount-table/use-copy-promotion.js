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
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var remove_nullish_1 = require("../../../utils/remove-nullish");
var useCopyPromotion = function () {
    var notification = (0, use_notification_1.default)();
    var createPromotion = (0, medusa_react_1.useAdminCreateDiscount)();
    var handleCopyPromotion = function (promotion) { return __awaiter(void 0, void 0, void 0, function () {
        var copy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    copy = {
                        code: "".concat(promotion.code, "_COPY"),
                        is_disabled: promotion.is_disabled,
                        is_dynamic: promotion.is_dynamic,
                        starts_at: promotion.starts_at,
                        regions: promotion.regions.map(function (region) { return region.id; }),
                    };
                    if (promotion.ends_at) {
                        copy.ends_at = promotion.ends_at;
                    }
                    if (promotion.valid_duration) {
                        copy.valid_duration = promotion.valid_duration;
                    }
                    if (typeof promotion.usage_limit === "number") {
                        copy.usage_limit = promotion.usage_limit;
                    }
                    if (promotion.metadata) {
                        copy.metadata = promotion.metadata;
                    }
                    copy.rule = {
                        type: promotion.rule.type,
                        value: promotion.rule.value,
                        description: promotion.rule.description,
                    };
                    if (promotion.rule.allocation) {
                        copy.rule.allocation = promotion.rule.allocation;
                    }
                    if (promotion.rule.conditions) {
                        copy.rule.conditions = promotion.rule.conditions.map(function (cond) { return (__assign({ operator: cond.operator }, (0, remove_nullish_1.removeNullish)({
                            products: cond.products,
                            product_types: cond.product_types,
                            product_tags: cond.product_tags,
                            product_collections: cond.product_collections,
                            customer_groups: cond.customer_groups,
                        }))); });
                    }
                    return [4 /*yield*/, createPromotion.mutate(copy, {
                            onSuccess: function (result) {
                                (0, gatsby_1.navigate)("/a/discounts/".concat(result.discount.id));
                                notification("Success", "Successfully copied discount", "success");
                            },
                            onError: function (err) {
                                notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                            },
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return handleCopyPromotion;
};
exports.default = useCopyPromotion;
