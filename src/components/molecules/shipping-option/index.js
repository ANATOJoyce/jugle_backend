"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var badge_1 = require("../../fundamentals/badge");
var RequirementType;
(function (RequirementType) {
    RequirementType["MAX_SUBTOTAL"] = "max_subtotal";
    RequirementType["MIN_SUBTOTAL"] = "min_subtotal";
})(RequirementType || (RequirementType = {}));
var ShippingOption = function (_a) {
    var option = _a.option, currency_code = _a.currency_code, onEdit = _a.onEdit;
    return (<div className="flex items-baseline justify-between p-base rounded-base border border-grey-20">
      <div className="truncate">
        <div className="flex items-center">
          <p className="inter-small-semibold truncate mr-xsmall">
            {option.name} {option.data.name && "(".concat(option.data.name, ")")}{" "}
          </p>
          {option.admin_only && <badge_1.default variant="primary">Not on website</badge_1.default>}
        </div>
        <p className="inter-small-regular text-grey-50 truncate">
          {option.price_type === "flat_rate" ? "Flat Rate" : "Calculated"}:{" "}
          {option.amount !== undefined &&
            "".concat(option.amount / 100, " ").concat(currency_code.toUpperCase())}
          {option.requirements.length
            ? option.requirements.map(function (r) {
                var type = r.type === "max_subtotal" ? "Max. subtotal" : "Min. subtotal";
                return " - ".concat(type, ": ").concat(r.amount / 100, " ").concat(currency_code.toUpperCase());
            })
            : null}
        </p>
      </div>
      <div>
        <button onClick={onEdit} className="inter-small-semibold text-violet-60">
          Edit
        </button>
      </div>
    </div>);
};
exports.default = ShippingOption;
