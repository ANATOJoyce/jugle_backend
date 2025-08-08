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
var duplicate_icon_1 = require("../../../components/fundamentals/icons/duplicate-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var input_1 = require("../../../components/molecules/input");
var body_card_1 = require("../../../components/organisms/body-card");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
var use_toggle_state_1 = require("../../../hooks/use-toggle-state");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var create_reason_modal_1 = require("./create-reason-modal");
var ReturnReasonDetail = function (_a) {
    var reason = _a.reason;
    var _b = (0, use_toggle_state_1.default)(), showDuplicateModal = _b.state, handleOpenDuplicateModal = _b.open, handleCloseDuplicateModal = _b.close;
    var _c = (0, use_toggle_state_1.default)(), showDanger = _c.state, handleClosePrompt = _c.open, handleOpenPrompt = _c.close;
    var _d = (0, react_hook_form_1.useForm)(), register = _d.register, reset = _d.reset, handleSubmit = _d.handleSubmit;
    var notification = (0, use_notification_1.default)();
    var deleteRR = (0, medusa_react_1.useAdminDeleteReturnReason)(reason === null || reason === void 0 ? void 0 : reason.id);
    var updateRR = (0, medusa_react_1.useAdminUpdateReturnReason)(reason === null || reason === void 0 ? void 0 : reason.id);
    var handleDeletion = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            deleteRR.mutate(undefined);
            return [2 /*return*/];
        });
    }); };
    var onSave = function (data) {
        if (data.label === "") {
            return;
        }
        updateRR.mutate(data, {
            onSuccess: function () {
                notification("Success", "Successfully updated return reason", "success");
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var handleCancel = function () {
        reset({
            label: reason.label,
            description: reason.description,
        });
    };
    (0, react_1.useEffect)(function () {
        if (reason) {
            reset({
                label: reason.label,
                description: reason.description,
            });
        }
    }, [reason]);
    return (<>
      <body_card_1.default actionables={[
            {
                label: "Duplicate reason",
                icon: <duplicate_icon_1.default size={20}/>,
                onClick: function () { return handleOpenDuplicateModal(); },
            },
            {
                label: "Delete reason",
                variant: "danger",
                icon: <trash_icon_1.default size={20}/>,
                onClick: function () { return handleOpenPrompt(); },
            },
        ]} events={[
            {
                label: "Save",
                onClick: handleSubmit(onSave),
            },
            {
                label: "Cancel changes",
                onClick: handleCancel,
            },
        ]} title="Details" subtitle={reason === null || reason === void 0 ? void 0 : reason.value}>
        <form onSubmit={handleSubmit(onSave)}>
          <input_1.default ref={register} name="label" label="Label"/>
          <input_1.default ref={register} name="description" label="Description" className="mt-base"/>
        </form>
      </body_card_1.default>
      {showDuplicateModal && (<create_reason_modal_1.default initialReason={reason} handleClose={handleCloseDuplicateModal}/>)}
      {showDanger && (<delete_prompt_1.default heading="Delete Return Reason" text="Are you sure you want to delete this return reason?" handleClose={handleClosePrompt} onDelete={handleDeletion}/>)}
    </>);
};
exports.default = ReturnReasonDetail;
