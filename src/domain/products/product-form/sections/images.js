"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var file_upload_field_1 = require("../../../../components/atoms/file-upload-field");
var body_card_1 = require("../../../../components/organisms/body-card");
var radio_group_1 = require("../../../../components/organisms/radio-group");
var draggable_table_1 = require("../../../../components/templates/draggable-table");
var product_form_context_1 = require("../form/product-form-context");
var columns = [
    {
        Header: "Image",
        accessor: "image",
        Cell: function (_a) {
            var cell = _a.cell;
            return (<div className="py-base large:w-[176px] xsmall:w-[80px]">
          <img className="h-[80px] w-[80px] object-cover rounded" src={cell.row.original.url}/>
        </div>);
        },
    },
    {
        Header: "File Name",
        accessor: "name",
        Cell: function (_a) {
            var _b, _c;
            var cell = _a.cell;
            return (<div className="large:w-[700px] medium:w-[400px] small:w-auto">
          <p className="inter-small-regular">{(_b = cell.row.original) === null || _b === void 0 ? void 0 : _b.name}</p>
          <span className="inter-small-regular text-grey-50">
            {typeof cell.row.original.size === "number"
                    ? "".concat((cell.row.original.size / 1024).toFixed(2), " KB")
                    : (_c = cell.row.original) === null || _c === void 0 ? void 0 : _c.size}
          </span>
        </div>);
        },
    },
    {
        Header: <div className="text-center">Thumbnail</div>,
        accessor: "thumbnail",
        Cell: function (_a) {
            var cell = _a.cell;
            return (<div className="flex justify-center">
          <radio_group_1.default.SimpleItem className="justify-center" value={cell.row.index}/>
        </div>);
        },
    },
];
var Images = function () {
    var _a = (0, product_form_context_1.useProductForm)(), images = _a.images, setImages = _a.setImages, appendImage = _a.appendImage, removeImage = _a.removeImage, control = _a.control;
    return (<body_card_1.default title="Images" subtitle="Add up to 10 images to your product">
      <div className="mt-base">
        <react_hook_form_1.Controller name="thumbnail" control={control} render={function (_a) {
            var value = _a.value, onChange = _a.onChange;
            return (<radio_group_1.default.Root value={value} onValueChange={function (value) {
                    onChange(value);
                }}>
                <draggable_table_1.default onDelete={removeImage} columns={columns} entities={images} setEntities={setImages}/>
              </radio_group_1.default.Root>);
        }}/>
      </div>
      <div className="mt-2xlarge">
        <file_upload_field_1.default onFileChosen={function (files) {
            var file = files[0];
            var url = URL.createObjectURL(file);
            appendImage({
                url: url,
                name: file.name,
                size: file.size,
                nativeFile: file,
            });
        }} placeholder="1200 x 1600 (3:4) recommended, up to 10MB each" filetypes={["png", "jpg", "jpeg"]} className="py-large"/>
      </div>
    </body_card_1.default>);
};
exports.default = Images;
