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
var gatsby_1 = require("gatsby");
var React = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var cross_icon_1 = require("../../../../components/fundamentals/icons/cross-icon");
var focus_modal_1 = require("../../../../components/molecules/modal/focus-modal");
var accordion_1 = require("../../../../components/organisms/accordion");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var discount_form_context_1 = require("./form/discount-form-context");
var use_form_actions_1 = require("./form/use-form-actions");
var conditions_1 = require("./sections/conditions");
var configuration_1 = require("./sections/configuration");
var general_1 = require("./sections/general");
var promotion_type_1 = require("./sections/promotion-type");
var DiscountForm = function (_a) {
    var discount = _a.discount, closeForm = _a.closeForm, _b = _a.additionalOpen, additionalOpen = _b === void 0 ? [] : _b, _c = _a.isEdit, isEdit = _c === void 0 ? false : _c;
    var notification = (0, use_notification_1.default)();
    var _d = (0, discount_form_context_1.useDiscountForm)(), handleSubmit = _d.handleSubmit, handleReset = _d.handleReset;
    var _e = (0, use_form_actions_1.useFormActions)(), onSaveAsActive = _e.onSaveAsActive, onSaveAsInactive = _e.onSaveAsInactive;
    var closeFormModal = function () {
        if (closeForm) {
            closeForm();
        }
        else {
            (0, gatsby_1.navigate)("/a/discounts");
        }
        handleReset();
    };
    var submitGhost = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!isEdit) {
                onSaveAsInactive(data)
                    .then(function () {
                    closeFormModal();
                    handleReset();
                })
                    .catch(function (error) {
                    notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                });
            }
            else {
                closeFormModal();
                handleReset();
            }
            return [2 /*return*/];
        });
    }); };
    var submitCTA = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, onSaveAsActive(data)];
                case 1:
                    _a.sent();
                    closeFormModal();
                    handleReset();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    notification("Error", (0, error_messages_1.getErrorMessage)(error_1), "error");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (<focus_modal_1.default>
      <focus_modal_1.default.Header>
        <div className="medium:w-8/12 w-full px-8 flex justify-between">
          <button_1.default size="small" variant="ghost" onClick={closeForm} className="border rounded-rounded w-8 h-8">
            <cross_icon_1.default size={20}/>
          </button_1.default>
          <div className="gap-x-small flex">
            <button_1.default onClick={handleSubmit(submitGhost)} size="small" variant="ghost" className="border rounded-rounded">
              Save as draft
            </button_1.default>
            <button_1.default size="small" variant="primary" onClick={handleSubmit(submitCTA)} className="rounded-rounded">
              {isEdit ? "Save changes" : "Publish discount"}
            </button_1.default>
          </div>
        </div>
      </focus_modal_1.default.Header>
      <focus_modal_1.default.Main>
        <div className="flex justify-center mb-[25%]">
          <div className="medium:w-7/12 large:w-6/12 small:w-4/5 w-full pt-16">
            <h1 className="inter-xlarge-semibold">
              {isEdit ? "Edit discount" : "Create new discount"}
            </h1>
            <accordion_1.default className="pt-7 text-grey-90" defaultValue={__spreadArray(["discount-type"], additionalOpen, true)} type="multiple">
              <accordion_1.default.Item forceMountContent title="Discount type" required tooltip="Select a discount type" value="promotion-type">
                <promotion_type_1.default />
              </accordion_1.default.Item>
              <accordion_1.default.Item title="General" required value="general" forceMountContent>
                <general_1.default discount={discount}/>
              </accordion_1.default.Item>
              <accordion_1.default.Item forceMountContent title="Configuration" value="configuration" description="Discount code applies from you hit the publish button and forever if left untouched.">
                <configuration_1.default promotion={discount} isEdit={isEdit}/>
              </accordion_1.default.Item>
              <accordion_1.default.Item forceMountContent title="Conditions" description="Discount code apply to all products if left untouched." value="conditions" tooltip="Add conditions to your Discount">
                <conditions_1.default discount={discount}/>
              </accordion_1.default.Item>
            </accordion_1.default>
          </div>
        </div>
      </focus_modal_1.default.Main>
    </focus_modal_1.default>);
};
exports.default = DiscountForm;
