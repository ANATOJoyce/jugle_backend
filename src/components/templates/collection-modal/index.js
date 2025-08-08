"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("../../fundamentals/button");
var icon_tooltip_1 = require("../../molecules/icon-tooltip");
var input_1 = require("../../molecules/input");
var modal_1 = require("../../molecules/modal");
var metadata_1 = require("../../organisms/metadata");
var CollectionModal = function (_a) {
    var onClose = _a.onClose, onSubmit = _a.onSubmit, _b = _a.isEdit, isEdit = _b === void 0 ? false : _b, collection = _a.collection;
    var _c = (0, react_hook_form_1.useForm)(), register = _c.register, setValue = _c.setValue, handleSubmit = _c.handleSubmit;
    var _d = (0, react_1.useState)([]), metadata = _d[0], setMetadata = _d[1];
    if (isEdit && !collection) {
        throw new Error("Collection is required for edit");
    }
    (0, react_1.useEffect)(function () {
        register("title", { required: true });
        register("handle");
    }, []);
    (0, react_1.useEffect)(function () {
        if (isEdit && collection) {
            setValue("title", collection.title);
            setValue("handle", collection.handle);
            if (collection.metadata) {
                Object.entries(collection.metadata).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    var newMeta = metadata;
                    newMeta.push({ key: key, value: value });
                    setMetadata(newMeta);
                });
            }
        }
    }, [collection, isEdit]);
    var submit = function (data) {
        onSubmit(data, metadata);
    };
    return (<modal_1.default handleClose={onClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onClose}>
          <div>
            <h1 className="inter-xlarge-semibold mb-2xsmall">
              {isEdit ? "Edit Collection" : "Add Collection"}
            </h1>
            <p className="inter-small-regular text-grey-50">
              To create a collection, all you need is a title and a handle.
            </p>
          </div>
        </modal_1.default.Header>
        <form onSubmit={handleSubmit(submit)}>
          <modal_1.default.Content isLargeModal>
            <div>
              <h2 className="inter-base-semibold mb-base">Details</h2>
              <div className="flex items-center gap-x-base">
                <input_1.default label="Title" required placeholder="Sunglasses" name="title" ref={register({ required: true })}/>
                <input_1.default label="Handle" placeholder="sunglasses" name="handle" prefix="/" tooltip={<icon_tooltip_1.default content="URL Slug for the product. Will be auto generated if left blank."/>} ref={register}/>
              </div>
            </div>
            <div className="mt-xlarge w-full">
              <metadata_1.default setMetadata={setMetadata} metadata={metadata}/>
            </div>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="flex items-center justify-end w-full gap-x-xsmall">
              <button_1.default variant="secondary" size="small" type="button" onClick={onClose}>
                Cancel
              </button_1.default>
              <button_1.default variant="primary" size="small">
                {"".concat(isEdit ? "Save" : "Publish", " collection")}
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </form>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = CollectionModal;
