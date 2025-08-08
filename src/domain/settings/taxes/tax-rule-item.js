"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRuleItem = void 0;
var react_1 = require("react");
var actionables_1 = require("../../../components/molecules/actionables");
var edit_icon_1 = require("../../../components/fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var badge_1 = require("../../../components/fundamentals/badge");
var TaxRuleItem = function (_a) {
    var onEdit = _a.onEdit, onDelete = _a.onDelete, index = _a.index, name = _a.name, description = _a.description;
    return (<div className="p-base border rounded-rounded flex gap-base items-center">
      <div>
        <badge_1.default className="inter-base-semibold flex justify-center items-center w-[40px] h-[40px]" variant="default">
          §{index}
        </badge_1.default>
      </div>
      <div className="flex-1">
        <div className="inter-small-semibold">{name}</div>
        <div className="inter-small-regular text-grey-50">{description}</div>
      </div>
      <div>
        <actionables_1.default forceDropdown actions={[
            {
                label: "Edit",
                onClick: function () { return onEdit(); },
                icon: <edit_icon_1.default size={20}/>,
            },
            {
                label: "Delete rule",
                variant: "danger",
                onClick: function () { return onDelete(); },
                icon: <trash_icon_1.default size={20}/>,
            },
        ]}/>
      </div>
    </div>);
};
exports.TaxRuleItem = TaxRuleItem;
