"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../fundamentals/button");
var input_signin_1 = require("../../molecules/input-signin");
var LoginCard = function (_a) {
    var toResetPassword = _a.toResetPassword;
    var _b = (0, react_1.useState)(false), isInvalidLogin = _b[0], setIsInvalidLogin = _b[1];
    var _c = (0, react_hook_form_1.useForm)(), register = _c.register, handleSubmit = _c.handleSubmit, reset = _c.reset;
    var login = (0, medusa_react_1.useAdminLogin)();
    var onSubmit = function (values) {
        login.mutate(values, {
            onSuccess: function () {
                (0, gatsby_1.navigate)("/a/orders");
            },
            onError: function () {
                setIsInvalidLogin(true);
                reset();
            },
        });
    };
    return (<form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center">
        <span className="inter-2xlarge-semibold mt-4 text-grey-90">
          Welcome back!
        </span>
        <span className="inter-base-regular text-grey-50 mt-2">
          It's great to see you 👋🏼
        </span>
        <span className="inter-base-regular text-grey-50 mb-xlarge">
          Log in to your account below
        </span>
        <input_signin_1.default placeholder="Email..." name="email" ref={register({ required: true })} autoComplete="email"/>
        <input_signin_1.default placeholder="Password..." type={"password"} name="password" ref={register({ required: true })} autoComplete="current-password"/>
        {isInvalidLogin && (<span className="text-rose-50 w-full mt-2 inter-small-regular">
            These credentials do not match our records
          </span>)}
        <button_1.default className="rounded-rounded mt-4 w-[320px] inter-base-regular" variant="primary" size="large" type="submit" loading={login.isLoading}>
          Continue
        </button_1.default>
        <span className="inter-small-regular text-grey-50 mt-8 cursor-pointer" onClick={toResetPassword}>
          Reset password
        </span>
      </div>
    </form>);
};
exports.default = LoginCard;
