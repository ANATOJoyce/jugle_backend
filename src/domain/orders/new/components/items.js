"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var clsx_1 = require("clsx");
var button_1 = require("../../../../components/fundamentals/button");
var prices_1 = require("../../../../utils/prices");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var products_1 = require("../../details/rma-sub-modals/products");
var table_1 = require("../../../../components/molecules/table");
var input_1 = require("../../../../components/molecules/input");
var minus_icon_1 = require("../../../../components/fundamentals/icons/minus-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var custom_item_sub_modal_1 = require("./custom-item-sub-modal");
var stepped_modal_1 = require("../../../../components/molecules/modal/stepped-modal");
var image_placeholder_1 = require("../../../../components/fundamentals/image-placeholder");
var Items = function (_a) {
    var items = _a.items, handleAddItems = _a.handleAddItems, handleAddQuantity = _a.handleAddQuantity, handleRemoveItem = _a.handleRemoveItem, selectedRegion = _a.selectedRegion, handlePriceChange = _a.handlePriceChange, handleAddCustom = _a.handleAddCustom;
    var _b = react_1.default.useContext(stepped_modal_1.SteppedContext), enableNextPage = _b.enableNextPage, disableNextPage = _b.disableNextPage, nextStepEnabled = _b.nextStepEnabled;
    var _c = (0, react_1.useState)(-1), editQuantity = _c[0], setEditQuantity = _c[1];
    var _d = (0, react_1.useState)(-1), editPrice = _d[0], setEditPrice = _d[1];
    var layeredContext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    var addItem = function (variants) {
        handleAddItems(variants);
        if (!nextStepEnabled) {
            enableNextPage();
        }
    };
    var addCustomItem = function (title, quantity, amount) {
        handleAddCustom({
            title: title,
            unit_price: amount,
            quantity: quantity,
        });
        if (!nextStepEnabled) {
            enableNextPage();
        }
    };
    var removeItem = function (index) {
        handleRemoveItem(index);
        if (nextStepEnabled && items.length === 1) {
            disableNextPage();
        }
    };
    (0, react_1.useEffect)(function () {
        if (items.length) {
            enableNextPage();
        }
        else {
            disableNextPage();
        }
    }, []);
    return (<div className="flex flex-col min-h-[705px] pt-4">
      <span className="inter-base-semibold mb-4">Items for the order</span>
      {items.length > 0 && (<table_1.default>
          <table_1.default.HeadRow className="text-grey-50 border-t inter-small-semibold">
            <table_1.default.HeadCell>Details</table_1.default.HeadCell>
            <table_1.default.HeadCell className="text-right pr-8">
              Quantity
            </table_1.default.HeadCell>
            <table_1.default.HeadCell className="text-right">
              Price (excl. Taxes)
            </table_1.default.HeadCell>
            <table_1.default.HeadCell></table_1.default.HeadCell>
          </table_1.default.HeadRow>
          {items.map(function (item, index) {
                var _a, _b;
                var itemPrice = (0, prices_1.extractUnitPrice)(item, selectedRegion, false);
                return (<table_1.default.Row className={(0, clsx_1.default)("border-b-grey-0 hover:bg-grey-0")}>
                <table_1.default.Cell>
                  <div className="min-w-[240px] flex py-2">
                    <div className="w-[30px] h-[40px] ">
                      {((_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.thumbnail) ? (<img className="h-full w-full object-cover rounded" src={item.product.thumbnail}/>) : (<image_placeholder_1.default />)}
                    </div>
                    <div className="inter-small-regular text-grey-50 flex flex-col ml-4">
                      <span>
                        <span className="text-grey-90">
                          {(_b = item.product) === null || _b === void 0 ? void 0 : _b.title}
                        </span>{" "}
                      </span>
                      <span>{(item === null || item === void 0 ? void 0 : item.title) || ""}</span>
                    </div>
                  </div>
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right w-32 pr-8">
                  {editQuantity === index ? (<input_1.default label="" type="number" value={item.quantity} onBlur={function () {
                            setEditQuantity(-1);
                        }} onChange={function (e) { return handleAddQuantity(e.target.value, index); }}/>) : (<div className="flex w-full text-right justify-end text-grey-50 ">
                      <span onClick={function () {
                            return handleAddQuantity(item.quantity - 1, index);
                        }} className="w-5 h-5 flex items-center justify-center rounded cursor-pointer hover:bg-grey-20 mr-2">
                        <minus_icon_1.default size={16}/>
                      </span>
                      <span className="px-1 hover:bg-grey-20 rounded cursor-pointer" onClick={function () { return setEditQuantity(index); }}>
                        {item.quantity}
                      </span>
                      <span onClick={function () {
                            return handleAddQuantity(item.quantity + 1, index);
                        }} className={(0, clsx_1.default)("w-5 h-5 flex items-center justify-center rounded cursor-pointer hover:bg-grey-20 ml-2")}>
                        <plus_icon_1.default size={16}/>
                      </span>
                    </div>)}
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right">
                  {editPrice === index ? (<input_1.default label="" type="number" value={itemPrice / 100} onBlur={function () {
                            setEditPrice(-1);
                        }} onChange={function (e) { return handlePriceChange(e.target.value, index); }}/>) : (<span className="cursor-pointer" onClick={function () { return setEditPrice(index); }}>
                      {(0, prices_1.displayAmount)(selectedRegion.currency_code, itemPrice)}
                    </span>)}
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right text-grey-40 pr-1">
                  {selectedRegion.currency_code.toUpperCase()}
                </table_1.default.Cell>
                <table_1.default.Cell>
                  <button_1.default className="w-5 h-5 hover:bg-grey-20" variant="ghost" size="small" onClick={function () { return removeItem(index); }}>
                    <trash_icon_1.default size={20}/>
                  </button_1.default>
                </table_1.default.Cell>
              </table_1.default.Row>);
            })}
        </table_1.default>)}
      <div className="flex w-full justify-end mt-3 gap-x-xsmall">
        <button_1.default variant="ghost" size="small" className="border border-grey-20" onClick={function () {
            layeredContext.push(CreateCustomProductScreen(layeredContext.pop, addCustomItem, selectedRegion));
        }}>
          <plus_icon_1.default size={20}/>
          Add Custom
        </button_1.default>
        <button_1.default variant="ghost" size="small" className="border border-grey-20" onClick={function () {
            layeredContext.push(SelectProductsScreen(layeredContext.pop, items, addItem));
        }}>
          <plus_icon_1.default size={20}/>
          Add Existing
        </button_1.default>
      </div>
    </div>);
};
var SelectProductsScreen = function (pop, itemsToAdd, setSelectedItems) {
    return {
        title: "Add Products",
        onBack: function () { return pop(); },
        view: (<products_1.default selectedItems={itemsToAdd || []} onSubmit={setSelectedItems}/>),
    };
};
var CreateCustomProductScreen = function (pop, onSubmit, region) {
    return {
        title: "Add Custom Item",
        onBack: function () { return pop(); },
        view: <custom_item_sub_modal_1.default onSubmit={onSubmit} region={region}/>,
    };
};
exports.default = Items;
