"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var confetti_js_1 = require("confetti-js");
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var qs_1 = require("qs");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_jwt_1 = require("react-jwt");
var button_1 = require("../components/fundamentals/button");
var long_arrow_right_icon_1 = require("../components/fundamentals/icons/long-arrow-right-icon");
var medusa_icon_1 = require("../components/fundamentals/icons/medusa-icon");
var medusa_vice_1 = require("../components/fundamentals/icons/medusa-vice");
var input_signin_1 = require("../components/molecules/input-signin");
var seo_1 = require("../components/seo");
var login_layout_1 = require("../components/templates/login-layout");
var use_notification_1 = require("../hooks/use-notification");
var error_messages_1 = require("../utils/error-messages");
var InvitePage = function (_a) {
    var location = _a.location;
    var parsed = qs_1.default.parse(location.search.substring(1));
    var _b = (0, react_1.useState)(false), signUp = _b[0], setSignUp = _b[1];
    var token = null;
    if (parsed === null || parsed === void 0 ? void 0 : parsed.token) {
        try {
            token = (0, react_jwt_1.decodeToken)(parsed.token);
        }
        catch (e) {
            token = null;
        }
    }
    var _c = (0, react_1.useState)(false), passwordMismatch = _c[0], setPasswordMismatch = _c[1];
    var _d = (0, react_1.useState)(false), ready = _d[0], setReady = _d[1];
    (0, react_1.useEffect)(function () {
        var confettiSettings = {
            target: "confetti-canvas",
            start_from_edge: true,
            size: 3,
            clock: 25,
            colors: [
                [251, 146, 60],
                [167, 139, 250],
                [251, 146, 60],
                [96, 165, 250],
                [45, 212, 191],
                [250, 204, 21],
                [232, 121, 249],
            ],
            max: 26,
        };
        var confetti = new confetti_js_1.default(confettiSettings);
        confetti.render();
        return function () { return confetti.clear(); };
    }, []);
    var _e = (0, react_hook_form_1.useForm)({
        defaultValues: {
            first_name: "",
            last_name: "",
            password: "",
            repeat_password: "",
        },
    }), register = _e.register, handleSubmit = _e.handleSubmit, formState = _e.formState;
    var accept = (0, medusa_react_1.useAdminAcceptInvite)();
    var notification = (0, use_notification_1.default)();
    var handleAcceptInvite = function (data) {
        setPasswordMismatch(false);
        if (data.password !== data.repeat_password) {
            setPasswordMismatch(true);
            return;
        }
        accept.mutate({
            token: parsed.token,
            user: {
                first_name: data.first_name,
                last_name: data.last_name,
                password: data.password,
            },
        }, {
            onSuccess: function () {
                (0, gatsby_1.navigate)("/login");
            },
            onError: function (err) {
                notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
            },
        });
    };
    (0, react_1.useEffect)(function () {
        if (formState.dirtyFields.password &&
            formState.dirtyFields.repeat_password &&
            formState.dirtyFields.first_name &&
            formState.dirtyFields.last_name) {
            setReady(true);
        }
        else {
            setReady(false);
        }
    }, [formState]);
    return (<>
      {signUp ? (<login_layout_1.default>
          <seo_1.default title="Create Account"/>
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex min-h-[600px] bg-grey-0 rounded-rounded justify-center">
              <form className="flex flex-col py-12 w-full px-[120px] items-center" onSubmit={handleSubmit(handleAcceptInvite)}>
                <medusa_icon_1.default />
                {!token ? (<div className="h-full flex flex-col gap-y-2 text-center items-center justify-center">
                    <span className="inter-large-semibold text-grey-90">
                      You signup link is invalid
                    </span>
                    <span className="inter-base-regular mt-2 text-grey-50">
                      Contact your administrator to obtain a valid signup link
                    </span>
                  </div>) : (<>
                    <span className="inter-2xlarge-semibold mt-4 text-grey-90">
                      Welcome to the team!
                    </span>
                    <span className="inter-base-regular text-grey-50 mt-2 mb-large">
                      Create your account below👇🏼
                    </span>
                    <input_signin_1.default placeholder="First name" name="first_name" ref={register({ required: true })} autoComplete="given-name"/>
                    <input_signin_1.default placeholder="Last name" name="last_name" ref={register({ required: true })} autoComplete="family-name"/>
                    <input_signin_1.default placeholder="Password" type={"password"} name="password" ref={register({ required: true })} autoComplete="new-password"/>
                    <input_signin_1.default placeholder="Repeat password" type={"password"} name="repeat_password" ref={register({ required: true })} autoComplete="new-password"/>
                    {passwordMismatch && (<span className="text-rose-50 w-full mt-2 inter-small-regular">
                        The two passwords are not the same
                      </span>)}
                    <button_1.default variant="primary" size="large" type="submit" className="w-full mt-base" loading={formState.isSubmitting} disabled={!ready}>
                      Create account
                    </button_1.default>
                    <gatsby_1.Link to="/login" className="inter-small-regular text-grey-50 mt-large">
                      Already signed up? Log in
                    </gatsby_1.Link>
                  </>)}
              </form>
            </div>
          </div>
        </login_layout_1.default>) : (<div className="bg-grey-90 h-screen w-full overflow-hidden">
          <div className="z-10 flex-grow flex flex-col items-center justify-center h-full absolute inset-0 max-w-[1080px] mx-auto">
            <medusa_vice_1.default className="mb-3xlarge"/>
            <div className="flex flex-col items-center max-w-3xl text-center">
              <h1 className="inter-3xlarge-semibold text-grey-0 mb-base">
                You have been invited to join the team
              </h1>
              <p className="inter-xlarge-regular text-grey-50">
                You can now join the Medusa Store team. Sign up below and get
                started with your Medusa Admin account right away.
              </p>
            </div>
            <div className="mt-4xlarge">
              <button_1.default size="large" variant="primary" className="w-[280px]" onClick={function () { return setSignUp(true); }}>
                Sign up
                <long_arrow_right_icon_1.default size={20} className="pt-1"/>
              </button_1.default>
            </div>
          </div>
          <canvas id="confetti-canvas"/>
        </div>)}
    </>);
};
exports.default = InvitePage;
