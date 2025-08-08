"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var use_notification_1 = require("../../../hooks/use-notification");
var bytes_converter_1 = require("../../../utils/bytes-converter");
var error_messages_1 = require("../../../utils/error-messages");
var get_relative_time_1 = require("../../../utils/get-relative-time");
var spinner_1 = require("../../atoms/spinner");
var button_1 = require("../../fundamentals/button");
var file_icon_1 = require("../../fundamentals/icons/file-icon");
var medusa_icon_1 = require("../../fundamentals/icons/medusa-icon");
var activity_card_1 = require("../../molecules/activity-card");
var batch_job_file_card_1 = require("../../molecules/batch-job-file-card");
var utils_1 = require("./utils");
var BatchJobActivityList = function (_a) {
    var batchJobs = _a.batchJobs;
    return (<div>
      {batchJobs === null || batchJobs === void 0 ? void 0 : batchJobs.map(function (batchJob) {
            return <BatchJobActivityCard key={batchJob.id} batchJob={batchJob}/>;
        })}
    </div>);
};
var BatchJobActivityCard = function (_a) {
    var _b, _c, _d, _e;
    var batchJob = _a.batchJob;
    var activityCardRef = (0, react_1.useRef)(null);
    var notification = (0, use_notification_1.default)();
    var store = (0, medusa_react_1.useAdminStore)().store;
    var _f = (0, medusa_react_1.useAdminCancelBatchJob)(batchJob.id), cancelBatchJob = _f.mutate, cancelBatchJobError = _f.error;
    var deleteFile = (0, medusa_react_1.useAdminDeleteFile)().mutateAsync;
    var createPresignedUrl = (0, medusa_react_1.useAdminCreatePresignedDownloadUrl)().mutateAsync;
    var fileName = (_c = (_b = batchJob.result) === null || _b === void 0 ? void 0 : _b.file_key) !== null && _c !== void 0 ? _c : "".concat(batchJob.type, ".csv");
    var relativeTimeElapsed = (0, get_relative_time_1.default)({
        from: new Date(),
        to: batchJob.created_at,
    });
    var batchJobActivityDescription = (0, utils_1.batchJobDescriptionBuilder)(batchJob, relativeTimeElapsed.raw);
    var canCancel = batchJob.status !== "completed" &&
        batchJob.status !== "failed" &&
        batchJob.status !== "canceled";
    var canDownload = batchJob.status === "completed" && ((_d = batchJob.result) === null || _d === void 0 ? void 0 : _d.file_key);
    (0, react_1.useEffect)(function () {
        if (cancelBatchJobError) {
            notification("Error canceling the batch job", (0, error_messages_1.getErrorMessage)(cancelBatchJobError), "error");
        }
    }, [cancelBatchJobError]);
    var onDownloadFile = function () { return __awaiter(void 0, void 0, void 0, function () {
        var download_url, link, e_1;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (!((_a = batchJob.result) === null || _a === void 0 ? void 0 : _a.file_key)) {
                        return [2 /*return*/];
                    }
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, createPresignedUrl({
                            file_key: (_b = batchJob.result) === null || _b === void 0 ? void 0 : _b.file_key,
                        })];
                case 2:
                    download_url = (_f.sent()).download_url;
                    link = document.createElement("a");
                    link.href = download_url;
                    link.setAttribute("download", "".concat((_c = batchJob.result) === null || _c === void 0 ? void 0 : _c.file_key));
                    (_d = activityCardRef.current) === null || _d === void 0 ? void 0 : _d.appendChild(link);
                    link.click();
                    (_e = activityCardRef.current) === null || _e === void 0 ? void 0 : _e.removeChild(link);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _f.sent();
                    notification("Error", "Something went wrong while downloading the export file", "error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var onDeleteFile = function () { return __awaiter(void 0, void 0, void 0, function () {
        var e_2;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!((_a = batchJob.result) === null || _a === void 0 ? void 0 : _a.file_key)) {
                        return [2 /*return*/];
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, deleteFile({ file_key: (_b = batchJob.result) === null || _b === void 0 ? void 0 : _b.file_key })];
                case 2:
                    _c.sent();
                    notification("Success", "Export file has been removed", "success");
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _c.sent();
                    notification("Error", "Something went wrong while deleting the export file", "error");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getBatchJobFileCard = function () {
        var _a, _b, _c;
        var twentyfourHoursInMs = 24 * 60 * 60 * 1000;
        var iconColor = Math.abs(relativeTimeElapsed.raw) > twentyfourHoursInMs
            ? "#9CA3AF"
            : undefined;
        var icon = batchJob.status !== "completed" && batchJob.status !== "canceled" ? (<spinner_1.default size={"medium"} variant={"secondary"}/>) : (<file_icon_1.default fill={iconColor} size={20}/>);
        var fileSize = batchJob.status !== "canceled"
            ? ((_a = batchJob.result) === null || _a === void 0 ? void 0 : _a.file_key)
                ? (0, bytes_converter_1.bytesConverter)((_c = (_b = batchJob.result) === null || _b === void 0 ? void 0 : _b.file_size) !== null && _c !== void 0 ? _c : 0)
                : "Preparing export..."
            : undefined;
        return (<batch_job_file_card_1.default onClick={onDownloadFile} fileName={fileName} icon={icon} fileSize={fileSize}/>);
    };
    var getFooterActions = function () {
        var buildButton = function (onClick, variant, text, className) {
            return (<button_1.default onClick={onClick} size={"small"} className={(0, clsx_1.default)("flex justify-start inter-small-regular", className)} variant={variant}>
          {text}
        </button_1.default>);
        };
        return ((canDownload || canCancel) && (<div className="flex mt-6">
          {canDownload && (<div className="flex">
              {buildButton(onDeleteFile, "danger", "Delete")}
              {buildButton(onDownloadFile, "ghost", "Download", "ml-2")}
            </div>)}
          {canCancel && buildButton(function () { return cancelBatchJob(); }, "danger", "Cancel")}
        </div>));
    };
    return (<activity_card_1.ActivityCard title={(_e = store === null || store === void 0 ? void 0 : store.name) !== null && _e !== void 0 ? _e : "Medusa Team"} icon={<medusa_icon_1.default className="mr-3" size={20}/>} relativeTimeElapsed={relativeTimeElapsed.rtf} date={batchJob.created_at} shouldShowStatus={true}>
      <div ref={activityCardRef} className="flex flex-col inter-small-regular">
        <span>{batchJobActivityDescription}</span>

        {getBatchJobFileCard()}
      </div>

      {getFooterActions()}
    </activity_card_1.ActivityCard>);
};
exports.default = BatchJobActivityList;
