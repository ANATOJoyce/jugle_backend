"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RadixAvatar = require("@radix-ui/react-avatar");
var clsx_1 = require("clsx");
var Avatar = function (_a) {
    var user = _a.user, _b = _a.font, font = _b === void 0 ? "inter-small-semibold" : _b, _c = _a.color, color = _c === void 0 ? "bg-violet-60" : _c;
    var username;
    if ((user === null || user === void 0 ? void 0 : user.first_name) && (user === null || user === void 0 ? void 0 : user.last_name)) {
        username = user.first_name + " " + user.last_name;
    }
    else if (user === null || user === void 0 ? void 0 : user.email) {
        username = user.email;
    }
    else {
        username = "Medusa user";
    }
    return (<RadixAvatar.Root className={(0, clsx_1.default)("w-full h-full items-center justify-center overflow-hidden select-none rounded-circle", color)}>
      <RadixAvatar.Image src={user === null || user === void 0 ? void 0 : user.img} alt={username} className="w-full h-full object-cover rounded-circle"/>
      <RadixAvatar.Fallback className={(0, clsx_1.default)("w-full h-full flex items-center justify-center bg-inherit text-grey-0 rounded-circle", font)}>
        {username.slice(0, 1).toUpperCase()}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>);
};
exports.default = Avatar;
