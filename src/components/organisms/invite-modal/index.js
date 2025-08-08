"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_notification_1 = require("../../../hooks/use-notification");
var api_1 = require("../../../services/api");
var button_1 = require("../../fundamentals/button");
var input_1 = require("../../molecules/input");
var modal_1 = require("../../molecules/modal");
var InviteModal = function (_a) {
    var handleClose = _a.handleClose;
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = (0, react_1.useState)("member"), role = _d[0], setRole = _d[1];
    var notification = (0, use_notification_1.default)();
    var handleSubmit = function (e) {
        e.preventDefault();
        setIsLoading(true);
        var values = {
            user: email,
            role: role,
        };
        api_1.default.invites
            .create(values)
            .then(function (_res) {
            setIsLoading(false);
            handleClose();
            notification("Success", "user(s) invited", "success");
        })
            .catch(function (_error) {
            setIsLoading(false);
            notification("Error", "Could not add user(s)", "error");
            handleClose();
        });
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Invite Users</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <input_1.default label="Email" placeholder="lebron@james.com" value={email} onChange={function (e) { return setEmail(e.target.value); }}/>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={handleClose}>
              Cancel
            </button_1.default>
            <button_1.default loading={isLoading} size="large" className="w-32 text-small justify-center" variant="primary" onClick={handleSubmit}>
              Invite
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = InviteModal;
