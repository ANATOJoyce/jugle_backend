"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var refresh_icon_1 = require("../../fundamentals/icons/refresh-icon");
var toaster_container_1 = require("../toaster-container");
var error_state_1 = require("./error-state");
var saving_state_1 = require("./saving-state");
var success_state_1 = require("./success-state");
var SaveNotification = function (_a) {
    var toast = _a.toast, icon = _a.icon, _b = _a.title, title = _b === void 0 ? "Unsaved changes" : _b, _c = _a.message, message = _c === void 0 ? "You have unsaved changes. Do you want to save and publish or discard them?" : _c, onSave = _a.onSave, reset = _a.reset;
    var onDismiss = function () {
        reset();
        react_hot_toast_1.toast.dismiss(toast.id);
    };
    var handleSave = function () {
        react_hot_toast_1.toast.custom(function (t) { return <saving_state_1.default toast={t}/>; }, {
            id: toast.id,
        });
        onSave()
            .then(function () {
            react_hot_toast_1.toast.custom(function (t) { return <success_state_1.default toast={t} onDismiss={onDismiss}/>; }, {
                id: toast.id,
            });
        })
            .catch(function (_err) {
            react_hot_toast_1.toast.custom(function (t) { return <error_state_1.default toast={t} onDismiss={onDismiss}/>; }, {
                id: toast.id,
            });
        });
    };
    return (<toaster_container_1.default visible={toast.visible} className="p-0 pl-base w-[448px]">
      <div className="py-base">{getIcon(icon)}</div>
      <div className="flex flex-col ml-small mr-base gap-y-2xsmall flex-grow py-base">
        <span className="inter-small-semibold">{title}</span>
        <span className="inter-small-regular text-grey-50">{message}</span>
      </div>
      <div className="flex flex-col inter-small-semibold border-l border-grey-20 h-full">
        <button onClick={handleSave} className="inter-small-semibold flex items-center justify-center h-1/2 border-b border-grey-20 px-base text-violet-60">
          Publish
        </button>
        <button className="inter-small-semibold flex items-center justify-center h-1/2 px-base" onClick={onDismiss}>
          Discard
        </button>
      </div>
    </toaster_container_1.default>);
};
var ICON_SIZE = 20;
function getIcon(icon) {
    if (icon) {
        return react_1.default.cloneElement(icon, {
            size: ICON_SIZE,
            className: "text-grey-90",
        });
    }
    else {
        return <refresh_icon_1.default size={20} className="text-grey-90"/>;
    }
}
exports.default = SaveNotification;
