"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var toaster_container_1 = require("../../atoms/toaster-container");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var x_circle_icon_1 = require("../../fundamentals/icons/x-circle-icon");
var FormErrorToaster = function (_a) {
    var toast = _a.toast, message = _a.message, title = _a.title;
    var onDismiss = function () {
        react_hot_toast_1.toast.dismiss(toast.id);
    };
    return (<toaster_container_1.default visible={toast.visible}>
      <div>
        <x_circle_icon_1.default size={20} className="text-rose-40"/>
      </div>
      <div className="flex flex-col ml-small mr-base gap-y-2xsmall flex-grow text-grey-0">
        <span className="inter-small-semibold">{title}</span>
        <span className="inter-small-regular text-grey-20">{message}</span>
      </div>
      <div>
        <button onClick={onDismiss}>
          <cross_icon_1.default size={20} className="text-grey-40"/>
        </button>
        <span className="sr-only">Close</span>
      </div>
    </toaster_container_1.default>);
};
exports.default = FormErrorToaster;
