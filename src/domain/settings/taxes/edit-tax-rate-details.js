"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditTaxRateDetails = void 0;
var react_1 = require("react");
var input_1 = require("../../../components/molecules/input");
var EditTaxRateDetails = function (_a) {
    var lockName = _a.lockName, register = _a.register;
    return (<div>
      <p className="inter-base-semibold mb-base">Details</p>
      <input_1.default disabled={lockName} name="name" label="Name" placeholder={lockName ? "Default" : "Rate name"} ref={register({ required: !lockName })} className="mb-base min-w-[335px] w-full"/>
      <input_1.default type="number" min={0} max={100} step={0.01} name="rate" label="Rate" placeholder="12" ref={register({ min: 0, max: 100, required: true })} className="mb-base min-w-[335px] w-full"/>
      <input_1.default placeholder="1000" name="code" label="Code" ref={register({ required: true })} className="mb-base min-w-[335px] w-full"/>
    </div>);
};
exports.EditTaxRateDetails = EditTaxRateDetails;
