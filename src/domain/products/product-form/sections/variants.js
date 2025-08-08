"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var edit_icon_1 = require("../../../../components/fundamentals/icons/edit-icon");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var input_1 = require("../../../../components/molecules/input");
var tag_input_1 = require("../../../../components/molecules/tag-input");
var body_card_1 = require("../../../../components/organisms/body-card");
var variant_grid_1 = require("../../../../components/variant-grid");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var get_combinations_1 = require("../../../../utils/get-combinations");
var option_edit_1 = require("../../details/variants/option-edit");
var variant_editor_1 = require("../../details/variants/variant-editor");
var product_form_context_1 = require("../form/product-form-context");
var utils_1 = require("../utils");
var Variants = function (_a) {
    var isEdit = _a.isEdit, product = _a.product;
    var _b = (0, product_form_context_1.useProductForm)(), setValue = _b.setValue, setVariants = _b.setVariants, variants = _b.variants, productOptions = _b.productOptions, setProductOptions = _b.setProductOptions;
    var _c = (0, react_1.useState)(false), showAddVariantModal = _c[0], setShowAddVariantModal = _c[1];
    var _d = (0, react_1.useState)(false), showAddOption = _d[0], setShowAddOption = _d[1];
    var notification = (0, use_notification_1.default)();
    var createVariant = (0, medusa_react_1.useAdminCreateVariant)(product === null || product === void 0 ? void 0 : product.id);
    (0, react_1.useEffect)(function () {
        if (isEdit) {
            return;
        }
        var os = __spreadArray([], productOptions, true);
        var combinations = (0, get_combinations_1.getCombinations)(os);
        var newVariants = combinations.map(function (optionValues) {
            if (!optionValues) {
                return null;
            }
            var existing = variants.find(function (v) {
                return v.options.every(function (value, index) { return optionValues[index] === value; });
            }) || { prices: [] };
            existing.options = optionValues.filter(function (v) { return v !== ""; });
            return existing;
        });
        setVariants(newVariants.filter(function (v) { return !!v; }));
    }, [productOptions]);
    var updateOptionValue = function (index, values) {
        var newOptions = __spreadArray([], productOptions, true);
        newOptions[index] = __assign(__assign({}, newOptions[index]), { values: values });
        setValue("options[".concat(index, "].values"), values);
        setProductOptions(newOptions);
    };
    var handleRemoveOption = function (index) {
        var newOptions = __spreadArray([], productOptions, true);
        newOptions.splice(index, 1);
        setProductOptions(newOptions);
    };
    var handleAddOption = function (e) {
        setProductOptions(__spreadArray(__spreadArray([], productOptions, true), [
            {
                name: "",
                values: [],
            },
        ], false));
    };
    var updateOptionName = function (e, index) {
        var element = e.target;
        var newOptions = __spreadArray([], productOptions, true);
        newOptions[index] = __assign(__assign({}, newOptions[index]), { name: element.value });
        setValue("options[".concat(index, "].name"), element.value);
        setProductOptions(newOptions);
    };
    var handleAddVariant = function (data) {
        var newVariant = __assign(__assign({}, data), { inventory_quantity: data.inventory_quantity || 0 });
        createVariant.mutate(newVariant, {
            onSuccess: function () {
                notification("Success", "Successfully added a variant", "success");
                setShowAddVariantModal(false);
            },
            onError: function (err) {
                notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
            },
        });
    };
    return (<body_card_1.default title="Variants" subtitle="Add variations of this product. Offer your customers different options for price, color, format, size, shape, etc." forceDropdown={true} actionables={isEdit && [
            {
                label: "Add variant",
                onClick: function () { return setShowAddVariantModal(true); },
                icon: <plus_icon_1.default size={20}/>,
            },
            {
                label: "Edit options",
                onClick: function () { return setShowAddOption(true); },
                icon: <edit_icon_1.default size={20}/>,
            },
        ]}>
      <div>
        {!isEdit && (<>
            <div className="flex items-center mb-base">
              <h6 className="inter-base-semibold text-grey-90 mr-1.5">
                Product Options
              </h6>
            </div>
            <div className="flex flex-col gap-y-base max-w-[570px] w-full mb-4">
              {productOptions.map(function (o, index) { return (<div key={index} className="flex items-center">
                  <div className="flex gap-x-small grow">
                    <input_1.default required className="w-[144px]" name={"options[".concat(index, "].name")} onChange={function (e) { return updateOptionName(e, index); }} label="Option title" placeholder="Color" value={(o === null || o === void 0 ? void 0 : o.name) || o.title}/>
                    <tag_input_1.default className="grow" placeholder="Blue, Green" values={o === null || o === void 0 ? void 0 : o.values} onChange={function (values) { return updateOptionValue(index, values); }}/>
                  </div>
                  <button className="ml-large" onClick={function () { return handleRemoveOption(index); }}>
                    <trash_icon_1.default className="text-grey-40"/>
                  </button>
                </div>); })}
              <div className="mt-xs">
                <button_1.default onClick={handleAddOption} size="small" variant="ghost">
                  + Add an option
                </button_1.default>
              </div>
            </div>
            <div className="flex justify-center mb-base flex-col space-y-2">
              <div className="flex space-x-2">
                <h6 className="inter-base-semibold text-grey-90">Variants</h6>
                <icon_tooltip_1.default content="Add product options to create variants"/>
              </div>
            </div>
          </>)}
        <variant_grid_1.default edit={isEdit} product={product} variants={variants} onVariantsChange={function (vars) { return setVariants(vars); }}/>
      </div>
      {showAddOption && (<option_edit_1.default productId={product.id} options={product.options} onDismiss={function () { return setShowAddOption(false); }}/>)}
      {showAddVariantModal && (<variant_editor_1.default onCancel={function () { return setShowAddVariantModal(false); }} onSubmit={handleAddVariant} title="Add variant" optionsMap={(0, utils_1.buildOptionsMap)(product)}/>)}
    </body_card_1.default>);
};
exports.default = Variants;
