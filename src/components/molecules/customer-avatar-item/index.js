"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var avatar_1 = require("../../atoms/avatar");
var getInitial = function (firstName, lastName, email) {
    var _a, _b, _c;
    return (((_a = firstName === null || firstName === void 0 ? void 0 : firstName.charAt(0)) === null || _a === void 0 ? void 0 : _a.toUpperCase()) ||
        ((_b = lastName === null || lastName === void 0 ? void 0 : lastName.charAt(0)) === null || _b === void 0 ? void 0 : _b.toUpperCase()) ||
        ((_c = email === null || email === void 0 ? void 0 : email.charAt(0)) === null || _c === void 0 ? void 0 : _c.toUpperCase()) ||
        "");
};
var CustomerAvatarItem = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "bg-violet-60" : _b, customer = _a.customer;
    var fullName = customer.first_name || customer.last_name
        ? "".concat(customer.first_name, " ").concat(customer.last_name)
        : "-";
    return (<div className="flex items-center px-2.5 py-1.5 w-full">
      <div className="w-[24px] h-[24px]">
        <avatar_1.default user={customer} color={color}/>
      </div>
      <span className="pl-2.5 w-40 truncate">{fullName}</span>
    </div>);
};
exports.default = CustomerAvatarItem;
