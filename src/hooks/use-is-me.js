"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsMe = void 0;
var react_1 = require("react");
var account_1 = require("../context/account");
var useIsMe = function (userId) {
    var account = (0, react_1.useContext)(account_1.AccountContext);
    var isMe = (0, react_1.useMemo)(function () {
        return !account.id || !userId ? false : account.id === userId;
    }, [account, userId]);
    return isMe;
};
exports.useIsMe = useIsMe;
