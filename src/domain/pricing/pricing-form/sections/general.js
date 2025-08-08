"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var input_1 = require("../../../../components/molecules/input");
var accordion_1 = require("../../../../components/organisms/accordion");
var pricing_form_context_1 = require("../form/pricing-form-context");
var General = function () {
    var register = (0, pricing_form_context_1.usePriceListForm)().register;
    return (<accordion_1.default.Item forceMountContent required title="General" tooltip="General information for the price list." value="general">
      <div className="flex flex-col gap-y-small group-radix-state-open:mt-5 accordion-margin-transition">
        <input_1.default label="Name" name="name" required placeholder="B2B, Black Friday..." ref={register({ required: "Name is required" })}/>
        <input_1.default label="Description" name="description" required placeholder="For our business partners..." ref={register({ required: "Description is required" })}/>
      </div>
    </accordion_1.default.Item>);
};
exports.default = General;
