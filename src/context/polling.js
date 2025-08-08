"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollingProvider = exports.PollingContext = exports.defaultPollingContext = void 0;
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var account_1 = require("./account");
exports.defaultPollingContext = {};
exports.PollingContext = react_1.default.createContext(exports.defaultPollingContext);
var PollingProvider = function (_a) {
    var children = _a.children;
    var isLoggedIn = (0, react_1.useContext)(account_1.AccountContext).isLoggedIn;
    var _b = (0, react_1.useState)(false), shouldPollBatchJobs = _b[0], setShouldPollBatchJobs = _b[1];
    var _c = (0, react_1.useState)(), polledBatchJobs = _c[0], setPolledBatchJobs = _c[1];
    var _d = (0, react_1.useState)(), hasPollingError = _d[0], setHasPollingError = _d[1];
    var oneMonthAgo = new Date(new Date().setMonth(new Date().getMonth() - 1));
    oneMonthAgo.setHours(0, 0, 0, 0);
    var _e = (0, medusa_react_1.useAdminBatchJobs)({
        created_at: { gte: oneMonthAgo },
        failed_at: null,
    }, {
        refetchInterval: shouldPollBatchJobs ? 5000 : false,
        refetchOnWindowFocus: shouldPollBatchJobs,
    }), batchJobs = _e.batch_jobs, isBathJobPollingError = _e.isError, isFetching = _e.isFetching;
    (0, react_1.useEffect)(function () {
        if (isFetching) {
            return;
        }
        if (!isLoggedIn) {
            setShouldPollBatchJobs(false);
            return;
        }
        setPolledBatchJobs(batchJobs);
        var shouldPoll = !(polledBatchJobs === null || polledBatchJobs === void 0 ? void 0 : polledBatchJobs.length) ||
            polledBatchJobs.some(function (batch) {
                return ((!!batch.pre_processed_at || !!batch.processing_at) &&
                    !batch.completed &&
                    !batch.failed_at &&
                    !batch.canceled_at);
            });
        setShouldPollBatchJobs(shouldPoll);
        setHasPollingError(isBathJobPollingError);
    }, [batchJobs, isFetching, isBathJobPollingError, isLoggedIn]);
    var value = {
        batchJobs: polledBatchJobs,
        hasPollingError: hasPollingError,
    };
    return (<exports.PollingContext.Provider value={value}>{children}</exports.PollingContext.Provider>);
};
exports.PollingProvider = PollingProvider;
