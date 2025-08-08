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
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../components/atoms/spinner");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
var raw_json_1 = require("../../../components/organisms/raw-json");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var conditions_1 = require("./conditions");
var configurations_1 = require("./configurations");
var general_1 = require("./general");
var Edit = function (_a) {
    var id = _a.id;
    var _b = (0, medusa_react_1.useAdminDiscount)(id, undefined, {
        enabled: !!id,
    }), discount = _b.discount, isLoading = _b.isLoading;
    var _c = (0, react_1.useState)(false), showDelete = _c[0], setShowDelete = _c[1];
    var deleteDiscount = (0, medusa_react_1.useAdminDeleteDiscount)(id);
    var notification = (0, use_notification_1.default)();
    var handleDelete = function () {
        deleteDiscount.mutate(undefined, {
            onSuccess: function () {
                notification("Success", "Discount deleted", "success");
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    return (<div className="pb-xlarge">
      {showDelete && (<delete_prompt_1.default handleClose={function () { return setShowDelete(!showDelete); }} onDelete={function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleDelete()];
        }); }); }} successText="Discount deleted" confirmText="Yes, delete" text="Are you sure you want to delete this discount?" heading="Delete discount"/>)}

      <breadcrumb_1.default currentPage="Add Discount" previousBreadcrumb="Discount" previousRoute="/a/discounts"/>
      {isLoading || !discount ? (<div className="h-full flex items-center justify-center">
          <spinner_1.default variant="secondary"/>
        </div>) : (<div className="flex flex-col gap-y-4">
          <general_1.default discount={discount}/>
          <configurations_1.default discount={discount}/>
          <conditions_1.default discount={discount}/>
          <raw_json_1.default data={discount} title="Raw discount"/>
        </div>)}
    </div>);
};
exports.default = Edit;
