"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var react_1 = require("react");
var fade_wrapper_1 = require("../../components/atoms/fade-wrapper");
var plus_icon_1 = require("../../components/fundamentals/icons/plus-icon");
var body_card_1 = require("../../components/organisms/body-card");
var custom_table_header_1 = require("../../components/organisms/custom-table-header");
var discount_table_1 = require("../../components/templates/discount-table");
var details_1 = require("./details");
var new_1 = require("./new");
var discount_form_1 = require("./new/discount-form");
var discount_form_context_1 = require("./new/discount-form/form/discount-form-context");
var DiscountIndex = function () {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var actionables = [
        {
            label: "Add Discount",
            onClick: function () { return setIsOpen(true); },
            icon: <plus_icon_1.default size={20}/>,
        },
    ];
    return (<div className="h-full flex flex-col">
      <div className="w-full flex flex-col grow">
        <body_card_1.default actionables={actionables} customHeader={<custom_table_header_1.default views={["discounts"]}/>}>
          <discount_table_1.default />
        </body_card_1.default>
      </div>
      <discount_form_context_1.DiscountFormProvider>
        <fade_wrapper_1.default isVisible={isOpen} isFullScreen={true}>
          <discount_form_1.default closeForm={function () { return setIsOpen(false); }}/>
        </fade_wrapper_1.default>
      </discount_form_context_1.DiscountFormProvider>
    </div>);
};
var Discounts = function () {
    return (<router_1.Router>
      <DiscountIndex path="/"/>
      <details_1.default path=":id"/>
      <new_1.default path="new"/>
    </router_1.Router>);
};
exports.default = Discounts;
