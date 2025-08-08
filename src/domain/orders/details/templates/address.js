"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedAddress = void 0;
var react_1 = require("react");
var FormattedAddress = function (_a) {
    var _b;
    var title = _a.title, addr = _a.addr;
    if (!(addr === null || addr === void 0 ? void 0 : addr.id)) {
        return (<div className="flex flex-col pl-6">
        <div className="inter-small-regular text-grey-50 mb-1">{title}</div>
        <div className="flex flex-col inter-small-regular">N/A</div>
      </div>);
    }
    return (<div className="flex flex-col pl-6">
      <div className="inter-small-regular text-grey-50 mb-1">{title}</div>
      <div className="flex flex-col inter-small-regular">
        <span>
          {addr === null || addr === void 0 ? void 0 : addr.address_1} {addr === null || addr === void 0 ? void 0 : addr.address_2}
        </span>
        <span>
          {addr === null || addr === void 0 ? void 0 : addr.city}
          {", "}
          {"".concat(addr === null || addr === void 0 ? void 0 : addr.province, " ") || ""}
          {addr === null || addr === void 0 ? void 0 : addr.postal_code} {(_b = addr === null || addr === void 0 ? void 0 : addr.country_code) === null || _b === void 0 ? void 0 : _b.toUpperCase()}
        </span>
      </div>
    </div>);
};
exports.FormattedAddress = FormattedAddress;
