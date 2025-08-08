"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var medusa_icon_1 = require("../components/fundamentals/icons/medusa-icon");
var login_card_1 = require("../components/organisms/login-card");
var reset_token_card_1 = require("../components/organisms/reset-token-card");
var seo_1 = require("../components/seo");
var login_layout_1 = require("../components/templates/login-layout");
var LoginPage = function () {
    var _a = (0, react_1.useState)(false), resetPassword = _a[0], setResetPassword = _a[1];
    return (<login_layout_1.default>
      <seo_1.default title="Login"/>
      <div className="flex h-full w-full items-center justify-center">
        <div className={(0, clsx_1.default)("flex min-h-[600px] w-[640px] bg-grey-0 rounded-rounded justify-center transition-['min-height'] duration-300", {
            "min-h-[480px]": resetPassword,
        })}>
          <div className="flex flex-col pt-12 w-full px-[120px] items-center">
            <medusa_icon_1.default />
            {resetPassword ? (<reset_token_card_1.default goBack={function () { return setResetPassword(false); }}/>) : (<login_card_1.default toResetPassword={function () { return setResetPassword(true); }}/>)}
          </div>
        </div>
      </div>
    </login_layout_1.default>);
};
exports.default = LoginPage;
