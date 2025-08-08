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
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../components/fundamentals/button");
var input_1 = require("../../../components/molecules/input");
var modal_1 = require("../../../components/molecules/modal");
var use_notification_1 = require("../../../hooks/use-notification");
// the reason props is used for prefilling the form when duplicating
var CreateReturnReasonModal = function (_a) {
    var handleClose = _a.handleClose, initialReason = _a.initialReason;
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: {
            value: initialReason === null || initialReason === void 0 ? void 0 : initialReason.value,
            label: initialReason === null || initialReason === void 0 ? void 0 : initialReason.label,
            description: initialReason === null || initialReason === void 0 ? void 0 : initialReason.description,
        },
    }), register = _b.register, handleSubmit = _b.handleSubmit, reset = _b.reset;
    var notification = (0, use_notification_1.default)();
    var createRR = (0, medusa_react_1.useAdminCreateReturnReason)();
    var onCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createRR.mutateAsync(data, {
                        onSuccess: function () {
                            notification("Success", "Created a new return reason", "success");
                        },
                        onError: function () {
                            notification("Error", "Cant create a Return reason with an existing code", "error");
                        },
                    })];
                case 1:
                    _a.sent();
                    handleClose();
                    return [2 /*return*/];
            }
        });
    }); };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Add Reason</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="flex">
            <input_1.default ref={register({ required: true })} name="value" label="Value" placeholder="wrong_size"/>
            <input_1.default className="ml-base" ref={register({ required: true })} name="label" label="Label" placeholder="Wrong size"/>
          </div>
          <input_1.default className="mt-large" ref={register} name="description" label="Description" placeholder="Customer received a wrong size"/>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={handleClose}>
              Cancel
            </button_1.default>
            <button_1.default loading={createRR.isLoading} size="large" className="w-32 text-small justify-center" variant="primary" onClick={handleSubmit(onCreate)}>
              Create
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = CreateReturnReasonModal;
