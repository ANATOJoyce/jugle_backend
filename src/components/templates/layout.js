"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var sidebar_1 = require("../organisms/sidebar");
var topbar_1 = require("../organisms/topbar");
var polling_1 = require("../../context/polling");
var Layout = function (_a) {
    var children = _a.children;
    return (<div className="flex w-full h-screen inter-base-regular text-grey-90">
      <react_hot_toast_1.Toaster containerStyle={{
            top: 74,
            left: 24,
            bottom: 24,
            right: 24,
        }}/>
      <sidebar_1.default />
      <div className="flex flex-col flex-1">
        <polling_1.PollingProvider>
          <topbar_1.default />
        </polling_1.PollingProvider>
        <div className="large:px-xlarge py-xlarge bg-grey-5 min-h-content overflow-y-auto">
          <main className="xsmall:mx-base small:mx-xlarge medium:mx-4xlarge large:mx-auto large:max-w-7xl large:w-full h-full">
            {children}
          </main>
        </div>
      </div>
    </div>);
};
exports.default = Layout;
