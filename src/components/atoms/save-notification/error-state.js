"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var x_circle_icon_1 = require("../../fundamentals/icons/x-circle-icon");
var toaster_container_1 = require("../toaster-container");
var ErrorState = function (_a) {
    var toast = _a.toast, _b = _a.title, title = _b === void 0 ? "Error" : _b, _c = _a.message, message = _c === void 0 ? "An error occured while trying to save your changes. Please try again." : _c, onDismiss = _a.onDismiss;
    (0, react_1.useEffect)(function () {
        var life = setTimeout(function () {
            onDismiss();
        }, 2000);
        return function () {
            clearTimeout(life);
        };
    }, [toast]);
    return (<toaster_container_1.default visible={toast.visible} className="w-[448px]">
      <div>
        <x_circle_icon_1.default size={20} className="text-rose-40"/>
      </div>
      <div className="flex flex-col ml-small mr-base gap-y-2xsmall flex-grow">
        <span className="inter-small-semibold">{title}</span>
        <span className="inter-small-regular text-grey-50">{message}</span>
      </div>
      <div>
        <button onClick={onDismiss}>
          <cross_icon_1.default size={20} className="text-grey-40"/>
        </button>
        <span className="sr-only">Close</span>
      </div>
    </toaster_container_1.default>);
};
exports.default = ErrorState;
