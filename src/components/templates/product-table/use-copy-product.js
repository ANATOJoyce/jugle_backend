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
var useCopyProduct = function () {
    var notification = (0, use_notification_1.default)();
    var createProduct = (0, medusa_react_1.useAdminCreateProduct)();
    var handleCopyProduct = function (product) { return __awaiter(void 0, void 0, void 0, function () {
        var copy, data, newProduct, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    copy = {
                        title: "".concat(product.title, " copy"),
                        description: "".concat(product.description),
                        handle: "".concat(product.handle, "-copy"),
                    };
                    copy.options = product.options.map(function (po) { return ({
                        title: po.title,
                    }); });
                    copy.variants = product.variants.map(function (pv) { return ({
                        title: pv.title,
                        inventory_quantity: pv.inventory_quantity,
                        prices: pv.prices.map(function (price) {
                            var p = {
                                amount: price.amount,
                            };
                            if (price.region_id) {
                                p.region_id = price.region_id;
                            }
                            if (price.currency_code) {
                                p.currency_code = price.currency_code;
                            }
                            return p;
                        }),
                        options: pv.options.map(function (pvo) { return ({ value: pvo.value }); }),
                    }); });
                    if (product.type) {
                        copy.type = {
                            id: product.type.id,
                            value: product.type.value,
                        };
                    }
                    if (product.collection_id) {
                        copy.collection_id = product.collection_id;
                    }
                    if (product.tags) {
                        copy.tags = product.tags.map(function (_a) {
                            var id = _a.id, value = _a.value;
                            return ({ id: id, value: value });
                        });
                    }
                    if (product.thumbnail) {
                        copy.thumbnail = product.thumbnail;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, createProduct.mutateAsync(copy)];
                case 2:
                    data = _a.sent();
                    newProduct = data === null || data === void 0 ? void 0 : data.product;
                    if (newProduct) {
                        (0, gatsby_1.navigate)("/a/products/".concat(newProduct.id));
                        notification("Success", "Created a new product", "success");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    notification("Error", (0, error_messages_1.getErrorMessage)(err_1), "error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return handleCopyProduct;
};
exports.default = useCopyProduct;
