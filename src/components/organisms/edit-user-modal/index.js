"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_notification_1 = require("../../../hooks/use-notification");
var api_1 = require("../../../services/api");
var error_messages_1 = require("../../../utils/error-messages");
var button_1 = require("../../fundamentals/button");
var input_1 = require("../../molecules/input");
var modal_1 = require("../../molecules/modal");
var EditUserModal = function (_a) {
    var handleClose = _a.handleClose, user = _a.user, onSubmit = _a.onSubmit;
    var _b = (0, react_1.useState)(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = (0, react_1.useState)(user.email), email = _c[0], setEmail = _c[1];
    var _d = (0, react_1.useState)(user.first_name), first_name = _d[0], setFirstName = _d[1];
    var _e = (0, react_1.useState)(user.last_name), last_name = _e[0], setLastName = _e[1];
    var notification = (0, use_notification_1.default)();
    var submit = function () {
        setIsLoading(true);
        api_1.default.users
            .update(user.id, {
            first_name: first_name,
            last_name: last_name,
        })
            .then(function (res) { return onSubmit(); })
            .catch(function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); });
        handleClose();
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Edit User</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="w-full flex mb-4">
            <input_1.default label="First Name" placeholder="First name..." onChange={function (e) { return setFirstName(e.target.value); }} value={first_name} className="mr-4"/>
            <input_1.default label="Last Name" placeholder="Last name..." onChange={function (e) { return setLastName(e.target.value); }} value={last_name}/>
          </div>
          <input_1.default label="Email" disabled value={email}/>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="w-full flex justify-end">
            <button_1.default variant="ghost" size="small" onClick={handleClose} className="mr-2">
              Cancel
            </button_1.default>
            <button_1.default loading={isLoading} variant="primary" size="small" onClick={submit}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = EditUserModal;
