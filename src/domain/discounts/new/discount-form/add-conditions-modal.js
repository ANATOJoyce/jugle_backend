"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var chevron_right_icon_1 = require("../../../../components/fundamentals/icons/chevron-right-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var use_condition_modal_items_1 = require("./use-condition-modal-items");
var AddConditionsModal = function (_a) {
    var onClose = _a.onClose, conditions = _a.conditions, save = _a.save, _b = _a.isDetails, isDetails = _b === void 0 ? false : _b;
    var layeredModalContext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    var _c = (0, react_1.useState)((0, use_condition_modal_items_1.default)({ onClose: onClose, isDetails: isDetails })), items = _c[0], setItems = _c[1];
    (0, react_1.useEffect)(function () {
        var setConditions = [];
        for (var _i = 0, _a = Object.entries(conditions); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            // If we are in the details view we only want to view the conditions that haven't already been added,
            // meaning !id. We don't support updatig existing conditions through the admin atm.
            var filter = isDetails ? value.id : value.items.length;
            if (filter) {
                setConditions.push(key);
            }
        }
        setItems(items.filter(function (i) { return !setConditions.includes(i.value); }));
    }, [conditions]);
    return (<layered_modal_1.default context={layeredModalContext} handleClose={onClose}>
      <modal_1.default.Body className="h-[calc(100vh-134px)] flex flex-col">
        <modal_1.default.Header handleClose={onClose}>
          <span className="inter-xlarge-semibold">Add Conditions</span>
          <span className="font-semibold text-grey-90 mt-6 flex items-center gap-1">
            Choose a condition type{" "}
            <icon_tooltip_1.default content="You can only add one of each type of condition"/>
          </span>
        </modal_1.default.Header>

        <modal_1.default.Content className="flex-1">
          {items.length ? (items.map(function (t) { return <ConditionTypeItem key={t.value} {...t}/>; })) : (<div className="flex flex-col items-center justify-center flex-1 h-full">
              <span className="inter-base-regular text-grey-40">
                Can't add anymore conditions
              </span>
            </div>)}
        </modal_1.default.Content>

        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="small" onClick={onClose}>
              Cancel
            </button_1.default>
            <button_1.default onClick={function () {
            if (save) {
                save();
            }
            onClose();
        }} size="small" className="w-32 text-small justify-center" variant="primary">
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </layered_modal_1.default>);
};
var ConditionTypeItem = function (props) {
    var label = props.label, description = props.description, onClick = props.onClick;
    return (<button onClick={onClick} className="rounded-lg border border-1 p-4 mb-2 cursor-pointer hover:bg-grey-5 transition-all w-full flex items-center justify-between">
      <div className="flex flex-col items-start">
        <div className="font-semibold ">{label}</div>
        <div className="text-grey-50">{description}</div>
      </div>
      <chevron_right_icon_1.default width={16} height={32} className="text-grey-50"/>
    </button>);
};
exports.default = AddConditionsModal;
