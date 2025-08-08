"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_notification_1 = require("../../hooks/use-notification");
var api_1 = require("../../services/api");
var edit_icon_1 = require("../fundamentals/icons/edit-icon");
var refresh_icon_1 = require("../fundamentals/icons/refresh-icon");
var trash_icon_1 = require("../fundamentals/icons/trash-icon");
var status_indicator_1 = require("../fundamentals/status-indicator");
var sidebar_team_member_1 = require("../molecules/sidebar-team-member");
var table_1 = require("../molecules/table");
var delete_prompt_1 = require("../organisms/delete-prompt");
var edit_user_modal_1 = require("../organisms/edit-user-modal");
var getInviteStatus = function (invite) {
    return new Date(invite.expires_at) < new Date() ? "expired" : "pending";
};
var UserTable = function (_a) {
    var users = _a.users, invites = _a.invites, triggerRefetch = _a.triggerRefetch;
    var _b = (0, react_1.useState)([]), elements = _b[0], setElements = _b[1];
    var _c = (0, react_1.useState)([]), shownElements = _c[0], setShownElements = _c[1];
    var _d = (0, react_1.useState)(null), selectedUser = _d[0], setSelectedUser = _d[1];
    var _e = (0, react_1.useState)(false), deleteUser = _e[0], setDeleteUser = _e[1];
    var _f = (0, react_1.useState)(null), selectedInvite = _f[0], setSelectedInvite = _f[1];
    var notification = (0, use_notification_1.default)();
    (0, react_1.useEffect)(function () {
        setElements(__spreadArray(__spreadArray([], users.map(function (user, i) { return ({
            entity: user,
            entityType: "user",
            tableElement: getUserTableRow(user, i),
        }); }), true), invites.map(function (invite, i) { return ({
            entity: invite,
            entityType: "invite",
            tableElement: getInviteTableRow(invite, i),
        }); }), true));
    }, [users, invites]);
    (0, react_1.useEffect)(function () {
        setShownElements(elements);
    }, [elements]);
    var handleClose = function () {
        setDeleteUser(false);
        setSelectedUser(null);
        setSelectedInvite(null);
    };
    var getUserTableRow = function (user, index) {
        return (<table_1.default.Row key={"user-".concat(index)} color={"inherit"} actions={[
                {
                    label: "Edit User",
                    onClick: function () { return setSelectedUser(user); },
                    icon: <edit_icon_1.default size={20}/>,
                },
                {
                    label: "Remove User",
                    variant: "danger",
                    onClick: function () {
                        setDeleteUser(true);
                        setSelectedUser(user);
                    },
                    icon: <trash_icon_1.default size={20}/>,
                },
            ]}>
        <table_1.default.Cell>
          <sidebar_team_member_1.default user={user}/>
        </table_1.default.Cell>
        <table_1.default.Cell className="w-80">{user.email}</table_1.default.Cell>
        <table_1.default.Cell className="inter-small-semibold text-violet-60">
          {user.role.charAt(0).toUpperCase()}
          {user.role.slice(1)}
        </table_1.default.Cell>
        <table_1.default.Cell></table_1.default.Cell>
      </table_1.default.Row>);
    };
    var getInviteTableRow = function (invite, index) {
        return (<table_1.default.Row key={"invite-".concat(index)} actions={[
                {
                    label: "Resend Invitation",
                    onClick: function () {
                        api_1.default.invites
                            .resend(invite.id)
                            .then(function () {
                            notification("Success", "Invitiation link has been resent", "success");
                        })
                            .then(function () { return triggerRefetch(); });
                    },
                    icon: <refresh_icon_1.default size={20}/>,
                },
                {
                    label: "Remove Invitation",
                    variant: "danger",
                    onClick: function () {
                        setSelectedInvite(invite);
                    },
                    icon: <trash_icon_1.default size={20}/>,
                },
            ]}>
        <table_1.default.Cell className="text-grey-40">
          <sidebar_team_member_1.default user={{ email: invite.user_email }}/>
        </table_1.default.Cell>
        <table_1.default.Cell className="text-grey-40 w-80">
          {invite.user_email}
        </table_1.default.Cell>
        <table_1.default.Cell></table_1.default.Cell>
        <table_1.default.Cell>
          {new Date(invite === null || invite === void 0 ? void 0 : invite.expires_at) < new Date() ? (<status_indicator_1.default title={"Expired"} variant={"danger"}/>) : (<status_indicator_1.default title={"Pending"} variant={"success"}/>)}
        </table_1.default.Cell>
      </table_1.default.Row>);
    };
    var filteringOptions = [
        {
            title: "Team permissions",
            options: [
                {
                    title: "All",
                    count: elements.length,
                    onClick: function () { return setShownElements(elements); },
                },
                {
                    title: "Member",
                    count: elements.filter(function (e) { return e.entityType === "user" && e.entity.role === "member"; }).length,
                    onClick: function () {
                        return setShownElements(elements.filter(function (e) { return e.entityType === "user" && e.entity.role === "member"; }));
                    },
                },
                {
                    title: "Admin",
                    count: elements.filter(function (e) { return e.entityType === "user" && e.entity.role === "admin"; }).length,
                    onClick: function () {
                        return setShownElements(elements.filter(function (e) { return e.entityType === "user" && e.entity.role === "admin"; }));
                    },
                },
                {
                    title: "No team permissions",
                    count: elements.filter(function (e) { return e.entityType === "invite"; }).length,
                    onClick: function () {
                        return setShownElements(elements.filter(function (e) { return e.entityType === "invite"; }));
                    },
                },
            ],
        },
        {
            title: "Status",
            options: [
                {
                    title: "All",
                    count: elements.length,
                    onClick: function () { return setShownElements(elements); },
                },
                {
                    title: "Active",
                    count: elements.filter(function (e) { return e.entityType === "user"; }).length,
                    onClick: function () {
                        return setShownElements(elements.filter(function (e) { return e.entityType === "user"; }));
                    },
                },
                {
                    title: "Pending",
                    count: elements.filter(function (e) {
                        return e.entityType === "invite" &&
                            getInviteStatus(e.entity) === "pending";
                    }).length,
                    onClick: function () {
                        return setShownElements(elements.filter(function (e) {
                            return e.entityType === "invite" &&
                                getInviteStatus(e.entity) === "pending";
                        }));
                    },
                },
                {
                    title: "Expired",
                    count: elements.filter(function (e) {
                        return e.entityType === "invite" &&
                            getInviteStatus(e.entity) === "expired";
                    }).length,
                    onClick: function () {
                        return setShownElements(elements.filter(function (e) {
                            return e.entityType === "invite" &&
                                getInviteStatus(e.entity) === "expired";
                        }));
                    },
                },
            ],
        },
    ];
    var handleUserSearch = function (term) {
        setShownElements(elements.filter(function (e) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return ((_b = (_a = e.entity) === null || _a === void 0 ? void 0 : _a.first_name) === null || _b === void 0 ? void 0 : _b.includes(term)) ||
                ((_d = (_c = e.entity) === null || _c === void 0 ? void 0 : _c.last_name) === null || _d === void 0 ? void 0 : _d.includes(term)) ||
                ((_f = (_e = e.entity) === null || _e === void 0 ? void 0 : _e.email) === null || _f === void 0 ? void 0 : _f.includes(term)) ||
                ((_h = (_g = e.entity) === null || _g === void 0 ? void 0 : _g.user_email) === null || _h === void 0 ? void 0 : _h.includes(term));
        }));
    };
    return (<div className="w-full h-full overflow-y-auto">
      <table_1.default filteringOptions={filteringOptions} enableSearch handleSearch={handleUserSearch}>
        <table_1.default.Head>
          <table_1.default.HeadRow>
            <table_1.default.HeadCell className="w-72">Name</table_1.default.HeadCell>
            <table_1.default.HeadCell className="w-80">Email</table_1.default.HeadCell>
            <table_1.default.HeadCell className="w-72">Team permissions</table_1.default.HeadCell>
            <table_1.default.HeadCell>Status</table_1.default.HeadCell>
          </table_1.default.HeadRow>
        </table_1.default.Head>
        <table_1.default.Body>{shownElements.map(function (e) { return e.tableElement; })}</table_1.default.Body>
      </table_1.default>
      {selectedUser &&
            (deleteUser ? (<delete_prompt_1.default text={"Are you sure you want to remove this user?"} heading={"Remove user"} onDelete={function () {
                    return api_1.default.users.delete(selectedUser.id).then(function () {
                        notification("Success", "User has been removed", "success");
                        triggerRefetch();
                    });
                }} handleClose={handleClose}/>) : (<edit_user_modal_1.default handleClose={handleClose} user={selectedUser} onSubmit={function () {
                    notification("Success", "User has been updated", "success");
                    triggerRefetch();
                }}/>))}
      {selectedInvite && (<delete_prompt_1.default text={"Are you sure you want to remove this invite?"} heading={"Remove invite"} onDelete={function () {
                return api_1.default.invites.delete(selectedInvite.id).then(function () {
                    notification("Success", "Invitiation has been removed", "success");
                    triggerRefetch();
                });
            }} handleClose={handleClose}/>)}
    </div>);
};
exports.default = UserTable;
