"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var page_description_1 = require("../atoms/page-description");
var SettingsOverview = function (_a) {
    var children = _a.children;
    return (<div>
      <page_description_1.default title={"Settings"} subtitle={"Manage the settings for your Medusa store"}/>
      <div className="grid medium:grid-cols-2 auto-cols-fr grid-cols-1 gap-x-base gap-y-xsmall">
        {children}
      </div>
    </div>);
};
exports.default = SettingsOverview;
