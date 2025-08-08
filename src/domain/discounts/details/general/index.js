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
var badge_1 = require("../../../../components/fundamentals/badge");
var edit_icon_1 = require("../../../../components/fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var status_selector_1 = require("../../../../components/molecules/status-selector");
var body_card_1 = require("../../../../components/organisms/body-card");
var use_imperative_dialog_1 = require("../../../../hooks/use-imperative-dialog");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var prices_1 = require("../../../../utils/prices");
var edit_general_1 = require("./edit-general");
var General = function (_a) {
    var discount = _a.discount;
    var dialog = (0, use_imperative_dialog_1.default)();
    var notification = (0, use_notification_1.default)();
    var updateDiscount = (0, medusa_react_1.useAdminUpdateDiscount)(discount.id);
    var deletediscount = (0, medusa_react_1.useAdminDeleteDiscount)(discount.id);
    var _b = (0, react_1.useState)(false), showmModal = _b[0], setShowModal = _b[1];
    var onDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var shouldDelete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dialog({
                        heading: "Delete Promotion",
                        text: "Are you sure you want to delete this promotion?",
                    })];
                case 1:
                    shouldDelete = _a.sent();
                    if (shouldDelete) {
                        deletediscount.mutate(undefined, {
                            onSuccess: function () {
                                notification("Success", "Promotion deleted successfully", "success");
                                (0, gatsby_1.navigate)("/a/discounts/");
                            },
                            onError: function (err) {
                                notification("Ooops", (0, error_messages_1.getErrorMessage)(err), "error");
                            },
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var onStatusChange = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            updateDiscount.mutate({
                is_disabled: !discount.is_disabled,
            }, {
                onSuccess: function () {
                    var pastTense = !discount.is_disabled ? "published" : "drafted";
                    notification("Success", "Discount ".concat(pastTense, " successfully"), "success");
                },
                onError: function (err) {
                    notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                },
            });
            return [2 /*return*/];
        });
    }); };
    var actionables = [
        {
            label: "Edit general information",
            onClick: function () { return setShowModal(true); },
            icon: <edit_icon_1.default size={20}/>,
        },
        {
            label: "Delete discount",
            onClick: onDelete,
            variant: "danger",
            icon: <trash_icon_1.default size={20}/>,
        },
    ];
    return (<>
      <body_card_1.default actionables={actionables} title={discount.code} subtitle={discount.rule.description} forceDropdown className="min-h-[200px]" status={<div className="flex items-center gap-x-2xsmall">
            {discount.is_dynamic && (<span>
                <badge_1.default variant="default">
                  <span className="text-grey-90 inter-small-regular">
                    {"Template discount"}
                  </span>
                </badge_1.default>
              </span>)}
            <status_selector_1.default isDraft={discount === null || discount === void 0 ? void 0 : discount.is_disabled} activeState="Published" draftState="Draft" onChange={onStatusChange}/>
          </div>}>
        <div className="flex">
          <div className="border-l border-grey-20 pl-6">
            {getPromotionDescription(discount)}
            <span className="inter-small-regular text-grey-50">
              Discount Amount
            </span>
          </div>
          <div className="border-l border-grey-20 pl-6 ml-12">
            <h2 className="inter-xlarge-regular text-grey-90">
              {discount.regions.length.toLocaleString("en-US")}
            </h2>
            <span className="inter-small-regular text-grey-50">
              Valid Regions
            </span>
          </div>
          <div className="border-l border-grey-20 pl-6 ml-12">
            <h2 className="inter-xlarge-regular text-grey-90">
              {discount.usage_count.toLocaleString("en-US")}
            </h2>
            <span className="inter-small-regular text-grey-50">
              Total Redemptions
            </span>
          </div>
        </div>
      </body_card_1.default>
      {showmModal && (<edit_general_1.default discount={discount} onClose={function () { return setShowModal(false); }}/>)}
    </>);
};
var getPromotionDescription = function (discount) {
    switch (discount.rule.type) {
        case "fixed":
            return (<div className="flex items-baseline">
          <h2 className="inter-xlarge-regular">
            {(0, prices_1.formatAmountWithSymbol)({
                    currency: discount.regions[0].currency_code,
                    amount: discount.rule.value,
                })}
          </h2>
          <span className="inter-base-regular text-grey-50 ml-1">
            {discount.regions[0].currency_code.toUpperCase()}
          </span>
        </div>);
        case "percentage":
            return (<div className="flex items-baseline">
          <h2 className="inter-xlarge-regular text-grey-90">
            {discount.rule.value}
          </h2>
          <span className="inter-base-regular text-grey-50 ml-1">%</span>
        </div>);
        case "free_shipping":
            return (<h2 className="inter-xlarge-regular text-grey-90">{"FREE SHIPPING"}</h2>);
        default:
            return "Unknown discount type";
    }
};
exports.default = General;
