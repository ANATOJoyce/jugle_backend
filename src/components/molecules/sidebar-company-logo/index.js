"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SidebarCompanyLogo = function (_a) {
    var storeName = _a.storeName;
    return (<div className="flex items-center bg-grey-0 px-2.5 pb-6 w-full mb-4">
      <div className="w-[32px] h-[32px] flex items-center justify-center bg-grey-90 text-grey-0 rounded">
        <div>{(storeName === null || storeName === void 0 ? void 0 : storeName.slice(0, 1)) || "M"}</div>
      </div>
      <span className="font-semibold ml-2.5">{storeName}</span>
    </div>);
};
exports.default = SidebarCompanyLogo;
