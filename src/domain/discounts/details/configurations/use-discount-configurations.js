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
var iso8601_duration_1 = require("iso8601-duration");
var medusa_react_1 = require("medusa-react");
var moment_1 = require("moment");
var react_1 = require("react");
var clock_icon_1 = require("../../../../components/fundamentals/icons/clock-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var remove_nullish_1 = require("../../../../utils/remove-nullish");
var DisplaySettingsDateDescription = function (_a) {
    var date = _a.date;
    return (<div className="flex text-grey-50 inter-small-regular ">
    {moment_1.default.utc(date).format("ddd, DD MMM YYYY")}
    <span className="flex items-center ml-3">
      <clock_icon_1.default size={16}/>
      <span className="ml-2.5">{moment_1.default.utc(date).format("UTC HH:mm")}</span>
    </span>
  </div>);
};
var CommonDescription = function (_a) {
    var text = _a.text;
    return (<span className="text-grey-50 inter-small-regular">{text}</span>);
};
var useDiscountConfigurations = function (discount) {
    var updateDiscount = (0, medusa_react_1.useAdminUpdateDiscount)(discount.id);
    var notification = (0, use_notification_1.default)();
    var conditions = [];
    conditions.push({
        title: "Start date",
        description: <DisplaySettingsDateDescription date={discount.starts_at}/>,
    });
    if (discount.ends_at) {
        conditions.push({
            title: "End date",
            description: <DisplaySettingsDateDescription date={discount.ends_at}/>,
            actions: [
                {
                    label: "Delete configuration",
                    icon: <trash_icon_1.default size={20}/>,
                    variant: "danger",
                    onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, updateDiscount.mutateAsync({ ends_at: null }, {
                                        onSuccess: function () {
                                            notification("Success", "Discount end date removed", "success");
                                        },
                                        onError: function (error) {
                                            notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                                        },
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); },
                },
            ],
        });
    }
    if (discount.usage_limit) {
        conditions.push({
            title: "Number of redemptions",
            description: (<CommonDescription text={discount.usage_limit.toLocaleString("en")}/>),
            actions: [
                {
                    label: "Delete configuration",
                    icon: <trash_icon_1.default size={20}/>,
                    variant: "danger",
                    onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, updateDiscount.mutateAsync({ usage_limit: null }, {
                                        onSuccess: function () {
                                            notification("Success", "Redemption limit removed", "success");
                                        },
                                        onError: function (error) {
                                            notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                                        },
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); },
                },
            ],
        });
    }
    if (discount.valid_duration) {
        conditions.push({
            title: "Duration",
            description: (<CommonDescription text={Object.entries((0, remove_nullish_1.removeNullish)((0, iso8601_duration_1.parse)(discount.valid_duration)))
                    .map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "".concat(value, " ").concat(key);
                })
                    .join(", ")}/>),
            actions: [
                {
                    label: "Delete setting",
                    icon: <trash_icon_1.default size={20}/>,
                    variant: "danger",
                    onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, updateDiscount.mutateAsync({ valid_duration: null }, {
                                        onSuccess: function () {
                                            notification("Success", "Discount duration removed", "success");
                                        },
                                        onError: function (error) {
                                            notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                                        },
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); },
                },
            ],
        });
    }
    return conditions;
};
exports.default = useDiscountConfigurations;
