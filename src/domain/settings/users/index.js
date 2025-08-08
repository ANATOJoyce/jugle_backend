"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var api_1 = require("../../../services/api");
var body_card_1 = require("../../../components/organisms/body-card");
var invite_modal_1 = require("../../../components/organisms/invite-modal");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var user_table_1 = require("../../../components/templates/user-table");
var Users = function () {
    var _a = (0, react_1.useState)([]), users = _a[0], setUsers = _a[1];
    var _b = (0, react_1.useState)([]), invites = _b[0], setInvites = _b[1];
    var _c = (0, react_1.useState)(0), shouldRefetch = _c[0], setShouldRefetch = _c[1];
    var _d = (0, react_1.useState)(false), showInviteModal = _d[0], setShowInviteModal = _d[1];
    var triggerRefetch = function () {
        setShouldRefetch(function (prev) { return prev + 1; });
    };
    (0, react_1.useEffect)(function () {
        api_1.default.users
            .list()
            .then(function (res) { return res.data; })
            .then(function (userData) {
            api_1.default.invites
                .list()
                .then(function (res) { return res.data; })
                .then(function (inviteData) {
                setUsers(userData.users);
                setInvites(inviteData.invites);
            });
        });
    }, [shouldRefetch]);
    var actionables = [
        {
            label: "Invite Users",
            onClick: function () { return setShowInviteModal(true); },
            icon: (<span className="text-grey-90">
          <plus_icon_1.default size={20}/>
        </span>),
        },
    ];
    return (<div className="flex flex-col h-full">
      <div className="w-full flex flex-col grow">
        <breadcrumb_1.default previousRoute="/a/settings" previousBreadcrumb="Settings" currentPage="The Team"/>
        <body_card_1.default title="The Team" subtitle="Manage users of your Medusa Store" actionables={actionables}>
          <div className="flex grow  flex-col pt-2">
            <user_table_1.default users={users} invites={invites} triggerRefetch={triggerRefetch}/>
          </div>
          <div className="inter-small-regular text-grey-50">
            {users.length} member
            {users.length === 1 ? "" : "s"}
          </div>

          {showInviteModal && (<invite_modal_1.default handleClose={function () {
                triggerRefetch();
                setShowInviteModal(false);
            }}/>)}
        </body_card_1.default>
      </div>
    </div>);
};
exports.default = Users;
