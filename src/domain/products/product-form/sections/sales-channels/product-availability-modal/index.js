"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../../../../components/fundamentals/button");
var modal_1 = require("../../../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../../../components/molecules/modal/layered-modal");
var available_channels_modal_screen_1 = require("./available-channels-modal-screen");
var ProductAvailabilityModal = function (_a) {
    var salesChannels = _a.salesChannels, onClose = _a.onClose, storeSelectedSalesChannels = _a.storeSelectedSalesChannels;
    var context = react_1.default.useContext(layered_modal_1.LayeredModalContext);
    var _b = react_1.default.useState(salesChannels), availableChannels = _b[0], setAvailableChannels = _b[1];
    var onSave = function () {
        storeSelectedSalesChannels(availableChannels);
        onClose();
    };
    return (<layered_modal_1.default context={context} handleClose={onClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onClose}>
          <h2 className="inter-xlarge-semibold">Change Availability</h2>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <available_channels_modal_screen_1.default availableChannels={availableChannels} setAvailableChannels={setAvailableChannels}/>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full justify-end">
            <div className="flex gap-x-xsmall">
              <button_1.default onClick={onClose} className="w-[112px]" size="small" variant="ghost">
                Cancel
              </button_1.default>
              <button_1.default onClick={onSave} className="w-[112px]" size="small" variant="primary">
                Save
              </button_1.default>
            </div>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </layered_modal_1.default>);
};
exports.default = ProductAvailabilityModal;
