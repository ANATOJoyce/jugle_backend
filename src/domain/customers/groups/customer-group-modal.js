"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var modal_1 = require("../../../components/molecules/modal");
var input_1 = require("../../../components/molecules/input");
var button_1 = require("../../../components/fundamentals/button");
var metadata_1 = require("../../../components/organisms/metadata");
/*
 * A modal for crating/editing customer groups.
 */
function CustomerGroupModal(props) {
    var initialData = props.initialData, handleSubmit = props.handleSubmit, handleClose = props.handleClose;
    var isEdit = !!initialData;
    var _a = (0, react_1.useState)(isEdit
        ? Object.keys(initialData.metadata || {}).map(function (k) { return ({
            key: k,
            value: initialData.metadata[k],
        }); })
        : []), metadata = _a[0], setMetadata = _a[1];
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: initialData,
    }), register = _b.register, handleFromSubmit = _b.handleSubmit;
    var onSubmit = function (data) {
        var _a;
        var meta = {};
        var initial = ((_a = props.initialData) === null || _a === void 0 ? void 0 : _a.metadata) || {};
        metadata.forEach(function (m) { return (meta[m.key] = m.value); });
        for (var m in initial) {
            if (!(m in meta)) {
                meta[m] = null;
            }
        }
        data.metadata = meta;
        handleSubmit(data);
    };
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">
            {props.initialData ? "Edit" : "Create a New"} Customer Group
          </span>
        </modal_1.default.Header>

        <modal_1.default.Content>
          <div className="space-y-4">
            <span className="inter-base-semibold">Details</span>
            <div className="flex space-x-4">
              <input_1.default label="Title" name="name" placeholder="Customer group name" required ref={register}/>
            </div>
          </div>

          <div className="mt-8">
            <metadata_1.default metadata={metadata} setMetadata={setMetadata}/>
          </div>
        </modal_1.default.Content>

        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={handleClose}>
              Cancel
            </button_1.default>
            <button_1.default size="medium" className="w-32 text-small justify-center" variant="primary" onClick={handleFromSubmit(onSubmit)}>
              <span>{props.initialData ? "Edit" : "Publish"} Group</span>
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
}
exports.default = CustomerGroupModal;
