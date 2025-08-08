"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var check_circle_icon_1 = require("../../fundamentals/icons/check-circle-icon");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var toaster_container_1 = require("../toaster-container");
var SuccessState = function (_a) {
    var toast = _a.toast, _b = _a.title, title = _b === void 0 ? "Success" : _b, _c = _a.message, message = _c === void 0 ? "Your changes have been saved." : _c, onDismiss = _a.onDismiss;
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
        <check_circle_icon_1.default size={20} className="text-emerald-40"/>
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
exports.default = SuccessState;
