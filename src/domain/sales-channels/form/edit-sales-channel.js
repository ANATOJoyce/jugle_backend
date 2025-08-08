"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var medusa_react_1 = require("medusa-react");
var modal_1 = require("../../../components/molecules/modal");
var input_1 = require("../../../components/molecules/input");
var button_1 = require("../../../components/fundamentals/button");
var use_notification_1 = require("../../../hooks/use-notification");
/**
 * Modal with sales channels edit form.
 */
function EditSalesChannel(props) {
    var handleClose = props.handleClose, salesChannel = props.salesChannel;
    var notification = (0, use_notification_1.default)();
    var updateSalesChannel = (0, medusa_react_1.useAdminUpdateSalesChannel)(salesChannel.id).mutate;
    var _a = (0, react_1.useState)(salesChannel.name), name = _a[0], setName = _a[1];
    var _b = (0, react_1.useState)(salesChannel.description), description = _b[0], setDescription = _b[1];
    var handleSubmit = function () {
        updateSalesChannel({ name: name, description: description }, {
            onSuccess: function () {
                notification("Success", "The sales channel is successfully updated", "success");
                handleClose();
            },
            onError: function () {
                return notification("Error", "Failed to update the sales channel", "error");
            },
        });
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Sales channel details</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="inter-base-semibold text-grey-90 mb-4">
            General info
          </div>

          <div className="w-full flex flex-col gap-3">
            <input_1.default label="Name" name="name" value={name} onChange={function (e) { return setName(e.target.value); }}/>
            <input_1.default label="Description" name="description" value={description} onChange={function (e) { return setDescription(e.target.value); }}/>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="w-full flex justify-end">
            <button_1.default variant="ghost" size="small" onClick={handleClose} className="mr-2">
              Close
            </button_1.default>
            <button_1.default disabled={!name.length} variant="primary" className="min-w-[100px]" size="small" onClick={handleSubmit}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
}
exports.default = EditSalesChannel;
