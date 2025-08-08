"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var spinner_1 = require("../spinner");
var toaster_container_1 = require("../toaster-container");
var SavingState = function (_a) {
    var toast = _a.toast, _b = _a.title, title = _b === void 0 ? "Saving changes" : _b, _c = _a.message, message = _c === void 0 ? "Hang on, this may take a few moments." : _c;
    return (<toaster_container_1.default visible={toast.visible} className="w-[448px]">
      <div>
        <spinner_1.default variant="secondary" size="large"/>
      </div>
      <div className="flex flex-col ml-small mr-base gap-y-2xsmall flex-grow">
        <span className="inter-small-semibold">{title}</span>
        <span className="inter-small-regular text-grey-50">{message}</span>
      </div>
    </toaster_container_1.default>);
};
exports.default = SavingState;
