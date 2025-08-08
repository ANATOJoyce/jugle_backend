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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var avatar_1 = require("../../components/atoms/avatar");
var spinner_1 = require("../../components/atoms/spinner");
var breadcrumb_1 = require("../../components/molecules/breadcrumb");
var input_1 = require("../../components/molecules/input");
var body_card_1 = require("../../components/organisms/body-card");
var file_upload_modal_1 = require("../../components/organisms/file-upload-modal");
var two_split_pane_1 = require("../../components/templates/two-split-pane");
var account_1 = require("../../context/account");
var use_notification_1 = require("../../hooks/use-notification");
var error_messages_1 = require("../../utils/error-messages");
var PersonalInformation = function () {
    var _a = (0, react_1.useState)(false), modalIsOpen = _a[0], setModalIsOpen = _a[1];
    var _b = (0, react_1.useState)(false), isLoadingProfilePicture = _b[0], setIsLoadingProfilePicture = _b[1];
    var _c = (0, react_hook_form_1.useForm)(), register = _c.register, setValue = _c.setValue, handleSubmit = _c.handleSubmit;
    var _d = (0, react_1.useContext)(account_1.AccountContext), handleUpdateUser = _d.handleUpdateUser, user = __rest(_d, ["handleUpdateUser"]);
    var notification = (0, use_notification_1.default)();
    register("first_name");
    register("last_name");
    var submit = function (data) {
        handleUpdateUser(user.id, data)
            .then(function () {
            notification("Success", "Successfully updated user", "success");
        })
            .catch(function (err) {
            notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
        });
    };
    var events = [
        {
            label: "Save",
            onClick: handleSubmit(submit),
        },
        {
            label: "Cancel changes",
            onClick: function () { return (0, gatsby_1.navigate)("/a/settings"); },
        },
    ];
    var handleFileUpload = function (files) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setModalIsOpen(false);
                    setIsLoadingProfilePicture(true);
                    // TODO upload files
                    return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 2000); })];
                case 1:
                    // TODO upload files
                    _a.sent();
                    setIsLoadingProfilePicture(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div>
      <breadcrumb_1.default currentPage={"Personal Information"} previousBreadcrumb={"Settings"} previousRoute="/a/settings"/>
      <two_split_pane_1.default>
        <body_card_1.default title="Personal Information" subtitle="Manage your Medusa profile" events={events} className={"h-auto max-h-full"}>
          <div>
            <span className="inter-base-semibold">Picture</span>
            <div onClick={function () { return setModalIsOpen(true); }} className="w-28 h-28 p-2 mt-2 flex items-center justify-center rounded-rounded hover:bg-grey-5 cursor-pointer">
              {isLoadingProfilePicture && (<div className="z-10 absolute justify-center items-center">
                  <spinner_1.default variant="secondary"/>
                </div>)}
              <div className={(0, clsx_1.default)("w-full h-full transition-opacity", {
            "opacity-50": isLoadingProfilePicture,
        })}>
                <avatar_1.default color="bg-teal-40" user={user} font="inter-3xlarge-semibold"/>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <span className="inter-base-semibold">General</span>
            <div className="flex mt-4">
              <input_1.default label="First name" name="first_name" placeholder="Lebron" defaultValue={user.first_name} onChange={function (e) { return setValue("first_name", e.target.value); }} className="mr-4"/>
              <input_1.default label="Last name" name="last_name" placeholder="James" defaultValue={user.last_name} onChange={function (e) { return setValue("last_name", e.target.value); }}/>
            </div>
            <input_1.default label="Email" value={user.email} disabled className="mt-6"/>
          </div>
          {modalIsOpen && (<file_upload_modal_1.default setFiles={handleFileUpload} filetypes={["image/png", "image/jpeg"]} handleClose={function () { return setModalIsOpen(false); }}/>)}
        </body_card_1.default>
      </two_split_pane_1.default>
    </div>);
};
exports.default = PersonalInformation;
