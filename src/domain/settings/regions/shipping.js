"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../components/atoms/spinner");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var actionables_1 = require("../../../components/molecules/actionables");
var shipping_option_1 = require("../../../components/molecules/shipping-option");
var edit_shipping_1 = require("./edit-shipping");
var new_shipping_1 = require("./new-shipping");
var Shipping = function (_a) {
    var region = _a.region;
    var _b = (0, react_1.useState)(null), editOption = _b[0], setEditOption = _b[1];
    var _c = (0, react_1.useState)(false), showAddOption = _c[0], setAddOption = _c[1];
    var _d = (0, react_1.useState)(false), showAddReturnOption = _d[0], setAddReturnOption = _d[1];
    var _e = (0, medusa_react_1.useAdminShippingOptions)({ region_id: region.id }), shipping_options = _e.shipping_options, loadingOptions = _e.isLoading, refetch = _e.refetch;
    var outboundOptions = [
        {
            icon: <plus_icon_1.default />,
            label: "Add Option",
            onClick: function () { return setAddOption(true); },
        },
    ];
    var inboundDropdownOptions = [
        {
            icon: <plus_icon_1.default />,
            label: "Add Return",
            onClick: function () { return setAddReturnOption(true); },
        },
    ];
    var outbound = [];
    var inbound = [];
    if (shipping_options) {
        for (var _i = 0, shipping_options_1 = shipping_options; _i < shipping_options_1.length; _i++) {
            var o = shipping_options_1[_i];
            if (o.is_return) {
                inbound.push(o);
            }
            else {
                outbound.push(o);
            }
        }
    }
    return (<>
      <div className="mb-2xlarge">
        <div className="flex items-center justify-between mb-base">
          <h2 className="inter-base-semibold">Shipping Options</h2>
          <actionables_1.default actions={outboundOptions}/>
        </div>
        <div className="flex flex-col">
          {!shipping_options ? (<div className="flex items-center justify-center h-screen">
              <div className="m-auto">
                <spinner_1.default variant="secondary"/>
              </div>
            </div>) : (shipping_options
            .filter(function (o) { return o.is_return === false && o.region_id === region.id; })
            .map(function (option) {
            return (<div key={option.id} className="mb-xsmall last:mb-0">
                    <shipping_option_1.default option={option} currency_code={region.currency_code} onEdit={function () { return setEditOption(option); }}/>
                  </div>);
        }))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-base">
          <h2 className="inter-base-semibold">Return Shipping Options</h2>
          <actionables_1.default actions={inboundDropdownOptions}/>
        </div>
        <div className="flex flex-col">
          {loadingOptions ? (<div className="flex items-center justify-center h-screen">
              <div className="m-auto">
                <spinner_1.default variant="secondary"/>
              </div>
            </div>) : shipping_options ? (shipping_options
            .filter(function (o) { return o.is_return && o.region_id === region.id; })
            .map(function (option) {
            return (<div key={option.id} className="mb-xsmall last:mb-0">
                    <shipping_option_1.default option={option} currency_code={region.currency_code} onEdit={function () { return setEditOption(option); }}/>
                  </div>);
        })) : null}
        </div>
      </div>
      {editOption && (<edit_shipping_1.default shippingOption={editOption} onClick={function () { return setEditOption(null); }} onDone={refetch} region={region}/>)}
      {(showAddOption || showAddReturnOption) && (<new_shipping_1.default isReturn={showAddReturnOption} onClick={function () {
                return showAddReturnOption
                    ? setAddReturnOption(false)
                    : setAddOption(false);
            }} onCreated={refetch} region={region}/>)}
    </>);
};
exports.default = Shipping;
