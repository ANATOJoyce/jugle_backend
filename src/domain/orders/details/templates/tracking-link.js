"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingLink = void 0;
var react_1 = require("react");
var TrackingLink = function (_a) {
    var trackingLink = _a.trackingLink;
    if (trackingLink.url) {
        return (<a style={{ textDecoration: "none" }} target="_blank" href={trackingLink.url}>
        <div className="text-blue-60 ml-2">{trackingLink.tracking_number} </div>
      </a>);
    }
    else {
        return (<span className="text-blue-60 ml-2">{trackingLink.tracking_number} </span>);
    }
};
exports.TrackingLink = TrackingLink;
