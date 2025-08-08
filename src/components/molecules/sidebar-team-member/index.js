"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var avatar_1 = require("../../atoms/avatar");
var SidebarTeamMember = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "bg-violet-60" : _b, user = _a.user;
    var fullName = user.first_name || user.last_name
        ? "".concat(user.first_name, " ").concat(user.last_name)
        : user.email;
    return (<div className="flex items-center bg-inherit px-2.5 py-1.5 w-full">
      <div className="w-[24px] h-[24px]">
        <avatar_1.default user={user} color={color}/>
      </div>
      <span className="pl-2.5 w-40 truncate">{fullName}</span>
    </div>);
};
exports.default = SidebarTeamMember;
