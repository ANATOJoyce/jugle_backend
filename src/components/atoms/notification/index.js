"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var alert_icon_1 = require("../../fundamentals/icons/alert-icon");
var check_circle_icon_1 = require("../../fundamentals/icons/check-circle-icon");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var info_icon_1 = require("../../fundamentals/icons/info-icon");
var x_circle_icon_1 = require("../../fundamentals/icons/x-circle-icon");
var toaster_container_1 = require("../toaster-container");
var Notification = function (_a) {
    var toast = _a.toast, type = _a.type, title = _a.title, message = _a.message;
    var onDismiss = function () {
        react_hot_toast_1.toast.dismiss(toast.id);
    };
    return (<toaster_container_1.default visible={toast.visible} className="w-[380px]">
      <div>{getIcon(type)}</div>
      <div className="flex flex-col ml-small mr-base gap-y-2xsmall flex-grow text-white">
        <span className="inter-small-semibold">{title}</span>
        <span className="inter-small-regular text-grey-20">{message}</span>
      </div>
      <div>
        <button onClick={onDismiss}>
          <cross_icon_1.default size={ICON_SIZE} className="text-grey-40"/>
        </button>
        <span className="sr-only">Close</span>
      </div>
    </toaster_container_1.default>);
};
var ICON_SIZE = 20;
function getIcon(type) {
    switch (type) {
        case "success":
            return <check_circle_icon_1.default size={ICON_SIZE} className="text-emerald-40"/>;
        case "warning":
            return <alert_icon_1.default size={ICON_SIZE} className="text-orange-40"/>;
        case "error":
            return <x_circle_icon_1.default size={ICON_SIZE} className="text-rose-40"/>;
        default:
            return <info_icon_1.default size={ICON_SIZE} className="text-grey-40"/>;
    }
}
exports.default = Notification;
