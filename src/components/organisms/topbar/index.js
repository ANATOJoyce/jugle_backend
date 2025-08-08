"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DropdownMenu = require("@radix-ui/react-dropdown-menu");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var account_1 = require("../../../context/account");
var polling_1 = require("../../../context/polling");
var use_toggle_state_1 = require("../../../hooks/use-toggle-state");
var avatar_1 = require("../../atoms/avatar");
var button_1 = require("../../fundamentals/button");
var gear_icon_1 = require("../../fundamentals/icons/gear-icon");
var help_circle_1 = require("../../fundamentals/icons/help-circle");
var log_out_icon_1 = require("../../fundamentals/icons/log-out-icon");
var notification_bell_1 = require("../../molecules/notification-bell");
var search_bar_1 = require("../../molecules/search-bar");
var activity_drawer_1 = require("../activity-drawer");
var help_dialog_1 = require("../help-dialog");
var Topbar = function () {
    var _a = (0, use_toggle_state_1.default)(false), activityDrawerState = _a.state, toggleActivityDrawer = _a.toggle, activityDrawerClose = _a.close;
    var _b = (0, react_1.useContext)(account_1.AccountContext), first_name = _b.first_name, last_name = _b.last_name, email = _b.email, handleLogout = _b.handleLogout;
    var batchJobs = (0, react_1.useContext)(polling_1.PollingContext).batchJobs;
    var _c = (0, react_1.useState)(false), showSupportform = _c[0], setShowSupportForm = _c[1];
    var logOut = function () {
        handleLogout();
        (0, gatsby_1.navigate)("/login");
    };
    return (<div className="w-full min-h-topbar max-h-topbar pr-xlarge pl-base bg-grey-0 border-b border-grey-20 sticky top-0 flex items-center justify-between z-40">
      <search_bar_1.default />
      <div className="flex items-center">
        <button_1.default size="small" variant="ghost" className="w-8 h-8 mr-3" onClick={function () { return setShowSupportForm(!showSupportform); }}>
          <help_circle_1.default size={24}/>
        </button_1.default>

        <notification_bell_1.default onClick={toggleActivityDrawer} variant={"ghost"} hasNotifications={!!batchJobs}/>

        <div className="ml-large w-large h-large">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className="cursor-pointer w-full h-full">
                <avatar_1.default user={{ first_name: first_name, last_name: last_name, email: email }} color="bg-fuschia-40"/>
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content sideOffset={5} className="border bg-grey-0 border-grey-20 rounded-rounded shadow-dropdown p-xsmall min-w-[200px] z-30">
              <DropdownMenu.Item className="mb-1 last:mb-0">
                <button_1.default variant="ghost" size="small" className={"w-full justify-start"} onClick={function () { return (0, gatsby_1.navigate)("/a/settings"); }}>
                  <gear_icon_1.default />
                  Settings
                </button_1.default>
                <button_1.default variant="ghost" size="small" className={"w-full justify-start text-rose-50"} onClick={function () { return logOut(); }}>
                  <log_out_icon_1.default size={20}/>
                  Sign out
                </button_1.default>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      {showSupportform && (<help_dialog_1.default onDismiss={function () { return setShowSupportForm(false); }}/>)}
      {activityDrawerState && (<activity_drawer_1.default onDismiss={activityDrawerClose}/>)}
    </div>);
};
exports.default = Topbar;
