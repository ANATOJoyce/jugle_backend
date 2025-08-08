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
var clsx_1 = require("clsx");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var use_is_me_1 = require("../../../hooks/use-is-me");
var avatar_1 = require("../../atoms/avatar");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var delete_prompt_1 = require("../../organisms/delete-prompt");
var event_actionables_1 = require("./event-actionables");
var event_container_1 = require("./event-container");
var Note = function (_a) {
    var event = _a.event;
    var _b = (0, react_1.useState)(false), showDelete = _b[0], setShowDelete = _b[1];
    var _c = (0, medusa_react_1.useAdminUser)(event.authorId), user = _c.user, isLoading = _c.isLoading;
    var deleteNote = (0, medusa_react_1.useAdminDeleteNote)(event.id);
    var isMe = (0, use_is_me_1.useIsMe)(user === null || user === void 0 ? void 0 : user.id);
    if (isLoading || !user) {
        return null;
    }
    var name = user.first_name && user.last_name
        ? "".concat(user.first_name, " ").concat(user.last_name)
        : user.email;
    return (<>
      <event_container_1.default title={name} icon={<avatar_1.default user={user}/>} time={event.time} topNode={<event_actionables_1.default actions={[
                {
                    label: "Delete",
                    icon: <trash_icon_1.default size={20}/>,
                    onClick: function () { return setShowDelete(!showDelete); },
                    variant: "danger",
                },
            ]}/>} isFirst={event.first}>
        <div className={(0, clsx_1.default)("rounded-2xl px-base py-base", {
            "bg-grey-5": !isMe,
            "bg-violet-5 text-violet-90": isMe,
        })}>
          {event.value}
        </div>
      </event_container_1.default>
      {showDelete && (<delete_prompt_1.default handleClose={function () { return setShowDelete(!showDelete); }} onDelete={function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, deleteNote.mutate(undefined)];
        }); }); }} confirmText="Yes, delete" heading="Delete note" successText="Deleted note"/>)}
    </>);
};
exports.default = Note;
