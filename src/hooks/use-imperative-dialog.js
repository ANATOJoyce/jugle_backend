"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var button_1 = require("../components/fundamentals/button");
var modal_1 = require("../components/molecules/modal");
var DeleteDialog = function (_a) {
    var open = _a.open, heading = _a.heading, text = _a.text, onConfirm = _a.onConfirm, onCancel = _a.onCancel, _b = _a.confirmText, confirmText = _b === void 0 ? "Yes, confirm" : _b, _c = _a.cancelText, cancelText = _c === void 0 ? "Cancel" : _c;
    return (<modal_1.default open={open} handleClose={onCancel}>
      <modal_1.default.Body>
        <modal_1.default.Content>
          <div className="flex flex-col">
            <span className="inter-large-semibold">{heading}</span>
            <span className="inter-base-regular mt-1 text-grey-50">{text}</span>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-24 text-small justify-center" size="small" onClick={onCancel}>
              {cancelText}
            </button_1.default>
            <button_1.default size="small" className="w-24 text-small justify-center" variant="nuclear" onClick={onConfirm}>
              {confirmText}
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
var useImperativeDialog = function () {
    return function (_a) {
        var heading = _a.heading, text = _a.text;
        // We want a promise here so we can "await" the user's action (either confirm or cancel)
        return new Promise(function (resolve) {
            var mountNode = document.createElement("div");
            var open = true;
            var onConfirm = function () {
                open = false;
                resolve(true);
                // trigger a rerender to close the dialog
                render();
            };
            var onCancel = function () {
                open = false;
                resolve(false);
                // trigger a rerender to close the dialog
                render();
            };
            // attach the dialog in the mount node
            var render = function () {
                react_dom_1.default.render(<DeleteDialog heading={heading} text={text} open={open} onCancel={onCancel} onConfirm={onConfirm}/>, mountNode);
            };
            render();
        });
    };
};
exports.default = useImperativeDialog;
