"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_notification_1 = require("../../hooks/use-notification");
var error_messages_1 = require("../../utils/error-messages");
var button_1 = require("../fundamentals/button");
var modal_1 = require("../molecules/modal");
var DeletePrompt = function (_a) {
    var _b = _a.heading, heading = _b === void 0 ? "Are you sure you want to delete?" : _b, _c = _a.text, text = _c === void 0 ? "" : _c, _d = _a.successText, successText = _d === void 0 ? "Delete successful" : _d, _e = _a.cancelText, cancelText = _e === void 0 ? "No, cancel" : _e, _f = _a.confirmText, confirmText = _f === void 0 ? "Yes, remove" : _f, handleClose = _a.handleClose, onDelete = _a.onDelete;
    var notification = (0, use_notification_1.default)();
    var _g = (0, react_1.useState)(false), isLoading = _g[0], setIsLoading = _g[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        setIsLoading(true);
        onDelete()
            .then(function () { return notification("Success", successText, "success"); })
            .catch(function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); })
            .finally(function () {
            setIsLoading(false);
            handleClose();
        });
    };
    return (<modal_1.default isLargeModal={false} handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Content>
          <div className="flex flex-col">
            <span className="inter-large-semibold">{heading}</span>
            <span className="inter-base-regular mt-1 text-grey-50">{text}</span>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-24 text-small justify-center" size="small" onClick={handleClose}>
              {cancelText}
            </button_1.default>
            <button_1.default loading={isLoading} size="small" className="w-24 text-small justify-center" variant="nuclear" onClick={handleSubmit}>
              {confirmText}
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = DeletePrompt;
