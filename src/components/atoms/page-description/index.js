"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var PageDescription = function (_a) {
    var title = _a.title, subtitle = _a.subtitle;
    return (<div className="mb-xlarge">
      <h1 className="inter-2xlarge-semibold mb-xsmall">{title}</h1>
      <h2 className="inter-base-regular text-grey-50">{subtitle}</h2>
    </div>);
};
exports.default = PageDescription;
