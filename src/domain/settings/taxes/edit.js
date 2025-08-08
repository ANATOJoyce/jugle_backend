"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../components/atoms/spinner");
var modal_1 = require("../../../components/molecules/modal");
var layered_modal_1 = require("../../../components/molecules/modal/layered-modal");
var edit_form_1 = require("./edit-form");
var EditTaxRate = function (_a) {
    var taxRate = _a.taxRate, taxRateId = _a.taxRateId, regionId = _a.regionId, onDismiss = _a.onDismiss;
    var _b = (0, medusa_react_1.useAdminTaxRate)(taxRateId, {
        expand: ["products", "product_types", "shipping_options"],
    }, {
        enabled: taxRate.type === "rate",
    }), isLoading = _b.isLoading, tax_rate = _b.tax_rate;
    var layeredModalContext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    return (<layered_modal_1.default isLargeModal context={layeredModalContext} handleClose={onDismiss}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onDismiss}>
          <div>
            <h1 className="inter-xlarge-semibold">Edit Tax Rate</h1>
          </div>
        </modal_1.default.Header>
        {isLoading ? (<spinner_1.default />) : taxRate.type === "region" ? (<edit_form_1.SimpleEditForm taxRate={taxRate} onDismiss={onDismiss}/>) : (<edit_form_1.default regionId={regionId} modalContext={layeredModalContext} taxRate={tax_rate} onDismiss={onDismiss}/>)}
      </modal_1.default.Body>
    </layered_modal_1.default>);
};
exports.default = EditTaxRate;
