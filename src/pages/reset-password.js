"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var qs_1 = require("qs");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_jwt_1 = require("react-jwt");
var button_1 = require("../components/fundamentals/button");
var medusa_icon_1 = require("../components/fundamentals/icons/medusa-icon");
var input_signin_1 = require("../components/molecules/input-signin");
var seo_1 = require("../components/seo");
var login_layout_1 = require("../components/templates/login-layout");
var error_messages_1 = require("../utils/error-messages");
var ResetPasswordPage = function (_a) {
    var location = _a.location;
    var parsed = qs_1.default.parse(location.search.substring(1));
    var token = null;
    if (parsed === null || parsed === void 0 ? void 0 : parsed.token) {
        try {
            token = (0, react_jwt_1.decodeToken)(parsed.token);
        }
        catch (e) {
            token = null;
        }
    }
    var _b = (0, react_1.useState)(false), passwordMismatch = _b[0], setPasswordMismatch = _b[1];
    var _c = (0, react_1.useState)(null), error = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(false), ready = _d[0], setReady = _d[1];
    var email = (token === null || token === void 0 ? void 0 : token.email) || (parsed === null || parsed === void 0 ? void 0 : parsed.email) || "";
    var _e = (0, react_hook_form_1.useForm)({
        defaultValues: {
            password: "",
            repeat_password: "",
        },
    }), register = _e.register, handleSubmit = _e.handleSubmit, formState = _e.formState;
    var reset = (0, medusa_react_1.useAdminResetPassword)();
    var handleAcceptInvite = function (data) {
        setPasswordMismatch(false);
        setError(null);
        if (data.password !== data.repeat_password) {
            setPasswordMismatch(true);
            return;
        }
        reset.mutate({
            token: parsed.token,
            password: data.password,
            email: email,
        }, {
            onSuccess: function () {
                (0, gatsby_1.navigate)("/login");
            },
            onError: function (err) {
                setError((0, error_messages_1.getErrorMessage)(err));
            },
        });
    };
    (0, react_1.useEffect)(function () {
        if (formState.dirtyFields.password &&
            formState.dirtyFields.repeat_password) {
            setReady(true);
        }
        else {
            setReady(false);
        }
    }, [formState]);
    return (<login_layout_1.default>
      <seo_1.default title="Reset Password"/>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex min-h-[540px] bg-grey-0 rounded-rounded justify-center">
          <form className="flex flex-col py-12 w-full px-[120px] items-center" onSubmit={handleSubmit(handleAcceptInvite)}>
            <medusa_icon_1.default />
            {!token ? (<div className="h-full flex flex-col gap-y-2 text-center items-center justify-center">
                <span className="inter-large-semibold text-grey-90">
                  You reset link is invalid
                </span>
                <span className="inter-base-regular text-grey-50 mt-2">
                  Please try resetting your password again
                </span>
              </div>) : (<>
                <span className="inter-2xlarge-semibold mt-4 text-grey-90">
                  Reset your password
                </span>
                <span className="inter-base-regular text-grey-50 mt-2 mb-xlarge">
                  Choose a new password below 👇🏼
                </span>
                <input_signin_1.default placeholder="Email" name="first_name" value={email} readOnly/>
                <input_signin_1.default placeholder="Password" type={"password"} name="password" ref={register({ required: true })} autoComplete="new-password"/>
                <input_signin_1.default placeholder="Confirm password" type={"password"} name="repeat_password" ref={register({ required: true })} autoComplete="new-password" className="mb-0"/>
                {error && (<span className="text-rose-50 w-full mt-xsmall inter-small-regular">
                    The two passwords are not the same
                  </span>)}
                {passwordMismatch && (<span className="text-rose-50 w-full mt-xsmall inter-small-regular">
                    The two passwords are not the same
                  </span>)}
                <button_1.default variant="primary" size="large" type="submit" className="w-full mt-base rounded-rounded" loading={formState.isSubmitting} disabled={!ready}>
                  Reset Password
                </button_1.default>
              </>)}
          </form>
        </div>
      </div>
    </login_layout_1.default>);
};
exports.default = ResetPasswordPage;
