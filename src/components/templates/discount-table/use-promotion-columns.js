"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePromotionTableColumns = void 0;
var iso8601_duration_1 = require("iso8601-duration");
var react_1 = require("react");
var prices_1 = require("../../../utils/prices");
var badge_1 = require("../../fundamentals/badge");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var table_1 = require("../../molecules/table");
var PromotionStatus;
(function (PromotionStatus) {
    PromotionStatus["SCHEDULED"] = "SCHEDULED";
    PromotionStatus["EXPIRED"] = "EXPIRED";
    PromotionStatus["ACTIVE"] = "ACTIVE";
    PromotionStatus["DISABLED"] = "DISABLED";
})(PromotionStatus || (PromotionStatus = {}));
var getPromotionStatus = function (promotion) {
    if (!promotion.is_disabled) {
        var date = new Date();
        if (new Date(promotion.starts_at) > date) {
            return PromotionStatus.SCHEDULED;
        }
        else if ((promotion.ends_at && new Date(promotion.ends_at) < date) ||
            (promotion.valid_duration &&
                date >
                    (0, iso8601_duration_1.end)((0, iso8601_duration_1.parse)(promotion.valid_duration), new Date(promotion.starts_at))) ||
            promotion.usage_count === promotion.usage_limit) {
            return PromotionStatus.EXPIRED;
        }
        else {
            return PromotionStatus.ACTIVE;
        }
    }
    return PromotionStatus.DISABLED;
};
var getPromotionStatusDot = function (promotion) {
    var status = getPromotionStatus(promotion);
    switch (status) {
        case PromotionStatus.SCHEDULED:
            return <status_indicator_1.default title="Scheduled" variant="warning"/>;
        case PromotionStatus.EXPIRED:
            return <status_indicator_1.default title="Expired" variant="danger"/>;
        case PromotionStatus.ACTIVE:
            return <status_indicator_1.default title="Active" variant="success"/>;
        case PromotionStatus.DISABLED:
            return <status_indicator_1.default title="Disabled" variant="default"/>;
        default:
            return <status_indicator_1.default title="Disabled" variant="default"/>;
    }
};
var getCurrencySymbol = function (promotion) {
    var _a;
    if (promotion.rule.type === "fixed") {
        if (!((_a = promotion.regions) === null || _a === void 0 ? void 0 : _a.length)) {
            return "";
        }
        return promotion.regions[0].currency_code.toUpperCase();
    }
    return "";
};
var getPromotionAmount = function (promotion) {
    var _a;
    switch (promotion.rule.type) {
        case "fixed":
            if (!((_a = promotion.regions) === null || _a === void 0 ? void 0 : _a.length)) {
                return "";
            }
            return (0, prices_1.formatAmountWithSymbol)({
                currency: promotion.regions[0].currency_code,
                amount: promotion.rule.value,
            });
        case "percentage":
            return "".concat(promotion.rule.value, "%");
        case "free_shipping":
            return "Free Shipping";
        default:
            return "";
    }
};
var usePromotionTableColumns = function () {
    var columns = (0, react_1.useMemo)(function () { return [
        {
            Header: <table_1.default.HeadCell className="pl-2">Code</table_1.default.HeadCell>,
            accessor: "code",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>
            <div className="overflow-hidden">
              <badge_1.default className="rounded-rounded" variant="default">
                <span className="inter-small-regular">{value}</span>
              </badge_1.default>
            </div>
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Description",
            accessor: "rule.description",
            Cell: function (_a) {
                var value = _a.cell.value, index = _a.index;
                return (<table_1.default.Cell key={index}>{value}</table_1.default.Cell>);
            },
        },
        {
            Header: <div className="text-right">Amount</div>,
            id: "amount",
            Cell: function (_a) {
                var original = _a.row.original, index = _a.index;
                return (<table_1.default.Cell className="text-right" key={index}>
              {getPromotionAmount(original)}
            </table_1.default.Cell>);
            },
        },
        {
            Header: <div className="w-[60px]"/>,
            id: "currency",
            Cell: function (_a) {
                var original = _a.row.original, index = _a.index;
                return (<table_1.default.Cell className="px-2 text-grey-40" key={index}>
            {getCurrencySymbol(original)}
          </table_1.default.Cell>);
            },
        },
        {
            Header: "Status",
            accessor: "ends_at",
            Cell: function (_a) {
                var original = _a.row.original, index = _a.index;
                return (<table_1.default.Cell key={index}>{getPromotionStatusDot(original)}</table_1.default.Cell>);
            },
        },
        {
            Header: function () { return <div className="text-right">Redemptions</div>; },
            accessor: "usage_count",
            Cell: function (_a) {
                var original = _a.row.original, index = _a.index;
                return (<table_1.default.Cell className="text-right" key={index}>
              {original.usage_limit > 0
                        ? getUsageCount(original.usage_count)
                        : "-"}
            </table_1.default.Cell>);
            },
        },
    ]; }, []);
    return [columns];
};
exports.usePromotionTableColumns = usePromotionTableColumns;
var getUsageCount = function (usageCount) {
    switch (true) {
        case usageCount > 9999999:
            return "".concat(Math.floor(usageCount / 1000000), "m");
        case usageCount > 9999:
            return "".concat(Math.floor(usageCount / 1000), "k");
        default:
            return usageCount;
    }
};
