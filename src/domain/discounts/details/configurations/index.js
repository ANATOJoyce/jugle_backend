"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var edit_icon_1 = require("../../../../components/fundamentals/icons/edit-icon");
var numbered_item_1 = require("../../../../components/molecules/numbered-item");
var body_card_1 = require("../../../../components/organisms/body-card");
var edit_configurations_1 = require("./edit-configurations");
var use_discount_configurations_1 = require("./use-discount-configurations");
var Configurations = function (_a) {
    var discount = _a.discount;
    var configurations = (0, use_discount_configurations_1.default)(discount);
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    return (<>
      <body_card_1.default title={"Configurations"} className="min-h-[200px]" actionables={[
            {
                label: "Edit configurations",
                onClick: function () { return setShowModal(true); },
                icon: <edit_icon_1.default size={20}/>,
            },
        ]} forceDropdown>
        <div style={{
            gridTemplateRows: "repeat(".concat(Math.ceil(configurations.length / 2), ", minmax(0, 1fr))"),
        }} className="grid grid-cols-2 grid-flow-col gap-y-base gap-x-xlarge">
          {configurations.map(function (setting, i) { return (<numbered_item_1.default key={i} title={setting.title} index={i + 1} description={setting.description} actions={setting.actions}/>); })}
        </div>
      </body_card_1.default>
      {showModal && (<edit_configurations_1.default discount={discount} onClose={function () { return setShowModal(false); }}/>)}
    </>);
};
exports.default = Configurations;
