"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../../components/fundamentals/button");
var input_1 = require("../../../components/molecules/input");
var modal_1 = require("../../../components/molecules/modal");
var EmailModal = function (_a) {
    var email = _a.email, handleClose = _a.handleClose, handleSave = _a.handleSave;
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: { email: email },
    }), register = _b.register, handleSubmit = _b.handleSubmit;
    var submit = function (data) {
        return handleSave(data);
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Email Address</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="space-y-4">
            <div className="flex mt-4 space-x-4">
              <input_1.default label="Email" name="email" ref={register} placeholder="Email"/>
            </div>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={handleClose}>
              Cancel
            </button_1.default>
            <button_1.default size="large" className="w-32 text-small justify-center" variant="primary" onClick={handleSubmit(submit)}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = EmailModal;
