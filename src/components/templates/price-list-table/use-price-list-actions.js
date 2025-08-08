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
var React = require("react");
var medusa_react_1 = require("medusa-react");
var use_imperative_dialog_1 = require("../../../hooks/use-imperative-dialog");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var unpublish_icon_1 = require("../../fundamentals/icons/unpublish-icon");
var utils_1 = require("./utils");
var publish_icon_1 = require("../../fundamentals/icons/publish-icon");
var usePriceListActions = function (priceList) {
    var dialog = (0, use_imperative_dialog_1.default)();
    var notification = (0, use_notification_1.default)();
    var updatePrice = (0, medusa_react_1.useAdminUpdatePriceList)(priceList === null || priceList === void 0 ? void 0 : priceList.id);
    var deletePrice = (0, medusa_react_1.useAdminDeletePriceList)(priceList === null || priceList === void 0 ? void 0 : priceList.id);
    var onDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var shouldDelete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dialog({
                        heading: "Delete Price List",
                        text: "Are you sure you want to delete this price list?",
                    })];
                case 1:
                    shouldDelete = _a.sent();
                    if (shouldDelete) {
                        deletePrice.mutate(undefined, {
                            onSuccess: function () {
                                notification("Success", "Successfully deleted the price list", "success");
                            },
                            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var onUpdate = function () {
        updatePrice.mutate({
            status: (0, utils_1.isActive)(priceList) ? "draft" : "active",
        }, {
            onSuccess: function () {
                notification("Success", "Successfully ".concat((0, utils_1.isActive)(priceList) ? "unpublished" : "published", " price list"), "success");
            },
        });
    };
    var getActions = function () { return [
        {
            label: (0, utils_1.isActive)(priceList) ? "Unpublish" : "Publish",
            onClick: onUpdate,
            icon: (0, utils_1.isActive)(priceList) ? (<unpublish_icon_1.default size={20}/>) : (<publish_icon_1.default size={20}/>),
        },
        {
            label: "Delete",
            onClick: onDelete,
            icon: <trash_icon_1.default size={20}/>,
            variant: "danger",
        },
    ]; };
    return {
        getActions: getActions,
    };
};
exports.default = usePriceListActions;
