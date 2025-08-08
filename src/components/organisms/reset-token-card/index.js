"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var check_circle_icon_1 = require("../../fundamentals/icons/check-circle-icon");
var input_signin_1 = require("../../molecules/input-signin");
var checkMail = /^\S+@\S+$/i;
var ResetTokenCard = function (_a) {
    var goBack = _a.goBack;
    var _b = (0, react_1.useState)(false), unrecognizedEmail = _b[0], setUnrecognizedEmail = _b[1];
    var _c = (0, react_1.useState)(false), invalidEmail = _c[0], setInvalidEmail = _c[1];
    var _d = (0, react_1.useState)(false), mailSent = _d[0], setSentMail = _d[1];
    var _e = (0, react_hook_form_1.useForm)(), register = _e.register, handleSubmit = _e.handleSubmit;
    var sendEmail = (0, medusa_react_1.useAdminSendResetPasswordToken)();
    var onSubmit = function (values) {
        if (!checkMail.test(values.email)) {
            setInvalidEmail(true);
            return;
        }
        setInvalidEmail(false);
        setUnrecognizedEmail(false);
        sendEmail.mutate({
            email: values.email,
        }, {
            onSuccess: function () {
                setSentMail(true);
            },
            onError: function () {
                setUnrecognizedEmail(true);
            },
        });
    };
    return (<form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center">
        <span className="inter-2xlarge-semibold mt-base text-grey-90">
          Reset your password
        </span>
        <span className="inter-base-regular text-grey-50 mt-xsmall text-center">
          Enter your email address below, and we'll send you
          <br />
          instructions on how to reset your password.
        </span>
        {!mailSent ? (<>
            <input_signin_1.default placeholder="lebron@james.com..." name="email" ref={register({ required: true })} className="mb-0 mt-xlarge"/>
            {unrecognizedEmail && (<div className="mt-xsmall w-[318px]">
                <span className="inter-small-regular text-rose-50 text-left">
                  We can't find a user with that email address
                </span>
              </div>)}
            {invalidEmail && (<div className="mt-xsmall w-[318px]">
                <span className="inter-small-regular text-rose-50 text-left">
                  Not a valid email address
                </span>
              </div>)}
            <button className="text-grey-0 w-[320px] h-[48px] border rounded-rounded mt-4 bg-violet-50 inter-base-regular py-3 px-4" type="submit">
              Send reset instructions
            </button>
          </>) : (<div className="text-violet-60 rounded-rounded bg-violet-10 p-base flex gap-x-small mt-large">
            <div>
              <check_circle_icon_1.default size={20}/>
            </div>
            <div className="flex flex-col gap-y-2xsmall">
              <span className="inter-small-semibold">
                Succesfully sent you an email
              </span>
              <span className="inter-small-regular">
                We've sent you an email which you can use to reset your
                password. Check your spam folder if you haven't received it
                after a few minutes.
              </span>
            </div>
          </div>)}
        <span className="inter-small-regular text-grey-50 mt-8 cursor-pointer" onClick={goBack}>
          Go back to sign in
        </span>
      </div>
    </form>);
};
exports.default = ResetTokenCard;
