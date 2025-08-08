"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var checkbox_1 = require("../../../../components/atoms/checkbox");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var input_1 = require("../../../../components/molecules/input");
var select_1 = require("../../../../components/molecules/select");
var body_card_1 = require("../../../../components/organisms/body-card");
var countries_1 = require("../../../../utils/countries");
var form_helpers_1 = require("../../../../utils/form-helpers");
var product_form_context_1 = require("../form/product-form-context");
var StockAndInventory = function () {
    var _a = (0, product_form_context_1.useProductForm)(), isVariantsView = _a.isVariantsView, register = _a.register, control = _a.control;
    var countryOptions = countries_1.countries.map(function (c) { return ({
        label: c.name,
        value: c.name,
    }); });
    return (<body_card_1.default title="Stock & Inventory" subtitle="To start selling, all you need is a name, price, and image">
      <div className="mt-large">
        {!isVariantsView && (<>
            <div className="flex items-center mb-base">
              <h6 className="inter-base-semibold text-grey-90 mr-1.5">
                General
              </h6>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-large">
              <input_1.default label="Stock Keeping Unit (SKU)" name="sku" placeholder="SUN-G, JK1234..." ref={register}/>
              <input_1.default label="Barcode (EAN)" name="ean" placeholder="1231231231234..." ref={register}/>
              <input_1.default label="Quantity in stock" name="inventory_quantity" type="number" placeholder="100" ref={register({ setValueAs: form_helpers_1.numberOrNull })}/>
              <input_1.default label="Material" name="material" ref={register} placeholder="Wool..."/>
            </div>
          </>)}
        {!isVariantsView && (<div className="flex items-center gap-4 mb-xlarge">
            <div className="flex item-center gap-x-1.5">
              <checkbox_1.default name="manage_inventory" label="Manage Inventory" ref={register}/>
              <icon_tooltip_1.default content={"When checked Medusa will regulate the inventory when orders and returns are made."}/>
            </div>
            <div className="flex item-center gap-x-1.5">
              <checkbox_1.default name="allow_backorder" ref={register} label="Allow backorders"/>
              <icon_tooltip_1.default content={"When checked the product will be available for purchase despite the product being sold out."}/>
            </div>
          </div>)}
        <div className="flex items-center mb-base">
          <h6 className="inter-base-semibold text-grey-90 mr-1.5">
            Dimensions
          </h6>
        </div>
        <div className="flex gap-x-8">
          <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-4 mb-large">
            <input_1.default type="number" label="Height" name="height" ref={register({ setValueAs: form_helpers_1.numberOrNull })} min={0} placeholder="100..."/>
            <input_1.default type="number" label="Width" name="width" ref={register({ setValueAs: form_helpers_1.numberOrNull })} placeholder="100..." min={0}/>
            <input_1.default type="number" label="Length" name="length" ref={register({ setValueAs: form_helpers_1.numberOrNull })} placeholder="100..." min={0}/>
            <input_1.default type="number" label="Weight" name="weight" ref={register({ setValueAs: form_helpers_1.numberOrNull })} placeholder="100..." min={0}/>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-4 mb-large">
            <input_1.default label="MID Code" name="mid_code" ref={register} placeholder="100..."/>
            <input_1.default label="HS Code" name="hs_code" ref={register} placeholder="100..."/>
            <react_hook_form_1.Controller control={control} name="origin_country" render={function (_a) {
            var onChange = _a.onChange, value = _a.value;
            return (<select_1.default enableSearch label="Country of origin" placeholder="Select a country" options={countryOptions} value={value} onChange={onChange}/>);
        }}/>
          </div>
        </div>
      </div>
    </body_card_1.default>);
};
exports.default = StockAndInventory;
