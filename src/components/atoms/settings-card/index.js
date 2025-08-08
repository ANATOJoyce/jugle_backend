"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var chevron_right_icon_1 = require("../../fundamentals/icons/chevron-right-icon");
var SettingsCard = function (_a) {
    var icon = _a.icon, heading = _a.heading, description = _a.description, _b = _a.to, to = _b === void 0 ? null : _b, _c = _a.externalLink, externalLink = _c === void 0 ? null : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    if (disabled) {
        to = null;
    }
    return (<gatsby_1.Link to={to} className="flex items-center flex-1">
      <button className="flex items-center flex-1 group bg-grey-0 rounded-rounded p-large border border-grey-20 h-full" disabled={disabled} onClick={function () {
            if (externalLink) {
                window.location.href = externalLink;
            }
        }}>
        <div className="h-2xlarge w-2xlarge bg-violet-20 rounded-circle flex justify-center items-center text-violet-60 group-disabled:bg-grey-10 group-disabled:text-grey-40">
          {icon}
        </div>
        <div className="text-left flex-1 mx-large">
          <h3 className="inter-large-semibold text-grey-90 group-disabled:text-grey-40 m-0">
            {heading}
          </h3>
          <p className="inter-base-regular text-grey-50 group-disabled:text-grey-40 m-0">
            {description}
          </p>
        </div>
        <div className="text-grey-40 group-disabled:text-grey-30">
          <chevron_right_icon_1.default />
        </div>
      </button>
    </gatsby_1.Link>);
};
exports.default = SettingsCard;
