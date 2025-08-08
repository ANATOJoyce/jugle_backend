"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../components/atoms/spinner");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var body_card_1 = require("../../../components/organisms/body-card");
var radio_group_1 = require("../../../components/organisms/radio-group");
var two_split_pane_1 = require("../../../components/templates/two-split-pane");
var use_toggle_state_1 = require("../../../hooks/use-toggle-state");
var create_reason_modal_1 = require("./create-reason-modal");
var detail_1 = require("./detail");
var ReturnReasons = function () {
    var _a = (0, use_toggle_state_1.default)(), isOpen = _a.state, open = _a.open, close = _a.close;
    var _b = (0, react_1.useState)(null), selectedReason = _b[0], setSelectedReason = _b[1];
    var _c = (0, medusa_react_1.useAdminReturnReasons)({
        onSuccess: function (data) {
            // sorting is done in place
            sortByCreatedAt(data.return_reasons);
            var newReturnReasons = data.return_reasons;
            // if this is the first time we fetch this list
            // or if this is a refetch after a deletion
            // then set the first element as the selected reason
            if (!selectedReason || isADeletion(return_reasons, newReturnReasons)) {
                setSelectedReason(newReturnReasons[0]);
            }
        },
    }), isLoading = _c.isLoading, return_reasons = _c.return_reasons;
    return (<div>
      <breadcrumb_1.default previousRoute="/a/settings" previousBreadcrumb="Settings" currentPage="Return Reasons"/>
      <two_split_pane_1.default>
        <body_card_1.default title="Return Reasons" actionables={[
            {
                label: "Add reason",
                icon: (<span className="text-grey-90">
                  <plus_icon_1.default size={20}/>
                </span>),
                onClick: open,
            },
        ]} subtitle="Manage reasons for returned items">
          <div className="mt-large">
            {isLoading ? (<div className="flex items-center justify-center">
                <spinner_1.default variant="secondary"/>
              </div>) : (<radio_group_1.default.Root onValueChange={function (value) {
                return setSelectedReason(findReasonByValue(return_reasons, value));
            }} value={selectedReason === null || selectedReason === void 0 ? void 0 : selectedReason.value}>
                {return_reasons === null || return_reasons === void 0 ? void 0 : return_reasons.map(function (reason) { return (<radio_group_1.default.Item label={reason.label} description={reason.description} className="mt-xsmall" value={reason.value}/>); })}
              </radio_group_1.default.Root>)}
          </div>
        </body_card_1.default>
        {selectedReason && <detail_1.default reason={selectedReason}/>}
      </two_split_pane_1.default>
      {isOpen && <create_reason_modal_1.default handleClose={close}/>}
    </div>);
};
var isADeletion = function (returnReasons, newReturnReasons) {
    return returnReasons && (returnReasons === null || returnReasons === void 0 ? void 0 : returnReasons.length) > (newReturnReasons === null || newReturnReasons === void 0 ? void 0 : newReturnReasons.length);
};
var sortByCreatedAt = function (returnReasons) {
    return returnReasons === null || returnReasons === void 0 ? void 0 : returnReasons.sort(function (a, b) { return (a.created_at < b.created_at ? -1 : 1); });
};
var findReasonByValue = function (reasons, value) {
    return reasons.find(function (reason) { return reason.value === value; });
};
exports.default = ReturnReasons;
