"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var polling_1 = require("../../../context/polling");
var use_outside_click_1 = require("../../../hooks/use-outside-click");
var spinner_1 = require("../../atoms/spinner");
var sad_face_icon_1 = require("../../fundamentals/icons/sad-face-icon");
var sided_mouth_face_1 = require("../../fundamentals/icons/sided-mouth-face");
var batch_jobs_activity_list_1 = require("../batch-jobs-activity-list");
var ActivityDrawer = function (_a) {
    var onDismiss = _a.onDismiss;
    var ref = react_1.default.useRef(null);
    var _b = (0, react_1.useContext)(polling_1.PollingContext), batchJobs = _b.batchJobs, hasPollingError = _b.hasPollingError;
    (0, use_outside_click_1.default)(onDismiss, ref);
    return (<div ref={ref} className="bg-grey-0 w-[400px] shadow-dropdown rounded-rounded top-[64px] bottom-2 right-3 rounded overflow-x-hidden fixed flex flex-col">
      <div className="inter-large-semibold pt-7 pl-8 pb-1">Activity</div>

      {!hasPollingError ? (batchJobs ? (<batch_jobs_activity_list_1.default batchJobs={batchJobs}/>) : (<EmptyActivityDrawer />)) : (<ErrorActivityDrawer />)}
    </div>);
};
var EmptyActivityDrawer = function () {
    return (<div className="p-4 h-full w-full flex flex-col justify-center items-center">
      <sided_mouth_face_1.default size={36}/>
      <span className={"mt-4 inter-large-semibold text-grey-90"}>
        It's quite in here...
      </span>
      <span className={"mt-4 text-grey-60 text-center inter-base-regular"}>
        You don't have any notifications at the moment, but once you do they
        will live here.
      </span>
    </div>);
};
var ErrorActivityDrawer = function () {
    return (<div className="p-4 h-full w-full flex flex-col justify-center items-center">
      <sad_face_icon_1.default size={36}/>
      <span className={"mt-4 inter-large-semibold text-grey-90"}>Oh no...</span>
      <span className={"mt-2 text-grey-60 text-center inter-base-regular"}>
        Something went wrong while trying to fetch your notifications - We will
        keep trying!
      </span>

      <div className="flex items-center mt-4">
        <spinner_1.default size={"small"} variant={"secondary"}/>
        <span className="ml-2.5">Processing...</span>
      </div>
    </div>);
};
exports.default = ActivityDrawer;
