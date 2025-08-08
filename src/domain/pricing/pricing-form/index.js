"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var focus_modal_1 = require("../../../components/molecules/modal/focus-modal");
var accordion_1 = require("../../../components/organisms/accordion");
var form_header_1 = require("./form-header");
var configuration_1 = require("./sections/configuration");
var general_1 = require("./sections/general");
var prices_1 = require("./sections/prices");
var type_1 = require("./sections/type");
var types_1 = require("./types");
var PriceListForm = function (props) {
    return (<focus_modal_1.default>
      <focus_modal_1.default.Header>
        <form_header_1.default {...props}/>
      </focus_modal_1.default.Header>
      <focus_modal_1.default.Main>
        <div className="flex justify-center mb-[25%]">
          <div className="medium:w-7/12 large:w-6/12 small:w-4/5 w-full pt-16">
            <h1 className="inter-xlarge-semibold mb-[28px]">
              {props.viewType === types_1.ViewType.CREATE
            ? "Create new price list"
            : "Edit price list"}
            </h1>
            <accordion_1.default type="multiple" defaultValue={["type"]}>
              <type_1.default />
              <general_1.default />
              <configuration_1.default />
              {props.viewType !== types_1.ViewType.EDIT_DETAILS && (<prices_1.default isEdit={props.viewType !== types_1.ViewType.CREATE} id={props.id}/>)}
            </accordion_1.default>
          </div>
        </div>
      </focus_modal_1.default.Main>
    </focus_modal_1.default>);
};
exports.default = PriceListForm;
