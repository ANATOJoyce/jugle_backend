"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var FocusModal = function (_a) {
    var className = _a.className, children = _a.children;
    return (<div className={(0, clsx_1.default)("absolute inset-0 bg-grey-0 z-50 flex flex-col items-center", className)}>
    {children}
  </div>);
};
FocusModal.Header = function (_a) {
    var children = _a.children, className = _a.className;
    return (<div className={(0, clsx_1.default)("w-full border-b py-4 border-b-grey-20 flex justify-center", className)}>
    {children}
  </div>);
};
FocusModal.Main = function (_a) {
    var children = _a.children, className = _a.className;
    return (<div className={(0, clsx_1.default)("w-full px-8 overflow-y-auto h-full", className)}>
    {children}
  </div>);
};
FocusModal.BasicFocusModal = function (_a) {
    var handleClose = _a.handleClose, onSubmit = _a.onSubmit, children = _a.children, _b = _a.cancelText, cancelText = _b === void 0 ? "Cancel" : _b, _c = _a.submitText, submitText = _c === void 0 ? "Save changes" : _c;
    return (<FocusModal>
      <BasicFocusModalHeader handleClose={handleClose} onSubmit={onSubmit} cancelText={cancelText} submitText={submitText}/>
      <FocusModal.Main>{children}</FocusModal.Main>
    </FocusModal>);
};
var BasicFocusModalHeader = function (_a) {
    var handleClose = _a.handleClose, onSubmit = _a.onSubmit, cancelText = _a.cancelText, submitText = _a.submitText;
    return (<FocusModal.Header>
      <div className="medium:w-8/12 w-full px-8 flex justify-between">
        <button_1.default size="small" variant="ghost" onClick={handleClose} className="border rounded-rounded w-8 h-8">
          <cross_icon_1.default size={20}/>
        </button_1.default>
        <div className="gap-x-small flex">
          <button_1.default onClick={handleClose} size="small" variant="ghost" className="border rounded-rounded">
            {cancelText || "Cancel"}
          </button_1.default>
          <button_1.default size="small" variant="primary" onClick={onSubmit} className="rounded-rounded">
            {submitText || "Save changes"}
          </button_1.default>
        </div>
      </div>
    </FocusModal.Header>);
};
exports.default = FocusModal;
