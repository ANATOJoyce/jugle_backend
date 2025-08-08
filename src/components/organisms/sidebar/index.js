"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var cash_icon_1 = require("../../fundamentals/icons/cash-icon");
var customer_icon_1 = require("../../fundamentals/icons/customer-icon");
var dollar_sign_icon_1 = require("../../fundamentals/icons/dollar-sign-icon");
var gear_icon_1 = require("../../fundamentals/icons/gear-icon");
var gift_icon_1 = require("../../fundamentals/icons/gift-icon");
var sale_icon_1 = require("../../fundamentals/icons/sale-icon");
var tag_icon_1 = require("../../fundamentals/icons/tag-icon");
var sidebar_company_logo_1 = require("../../molecules/sidebar-company-logo");
var sidebar_menu_item_1 = require("../../molecules/sidebar-menu-item");
var sidebar_team_1 = require("../sidebar-team");
var ICON_SIZE = 18;
var Sidebar = function () {
    var _a = (0, react_1.useState)(-1), currentlyOpen = _a[0], setCurrentlyOpen = _a[1];
    var store = (0, medusa_react_1.useAdminStore)().store;
    var triggerHandler = function () {
        var id = triggerHandler.id++;
        return {
            open: currentlyOpen === id,
            handleTriggerClick: function () { return setCurrentlyOpen(id); },
        };
    };
    // We store the `id` counter on the function object, as a state creates
    // infinite updates, and we do not want the variable to be free floating.
    triggerHandler.id = 0;
    return (<div className="min-w-sidebar max-w-sidebar h-screen overflow-y-auto bg-gray-0 border-r border-grey-20 py-base px-base">
      <div className="h-full ">
        <sidebar_company_logo_1.default storeName={store === null || store === void 0 ? void 0 : store.name}/>

        <div className="border-b pb-3.5 border-grey-20">
          <sidebar_menu_item_1.default pageLink={"/a/orders"} icon={<dollar_sign_icon_1.default size={ICON_SIZE}/>} triggerHandler={triggerHandler} text={"Orders"}/>
          <sidebar_menu_item_1.default pageLink={"/a/products"} icon={<tag_icon_1.default size={ICON_SIZE}/>} text={"Products"} triggerHandler={triggerHandler}/>
          <sidebar_menu_item_1.default pageLink={"/a/customers"} icon={<customer_icon_1.default size={ICON_SIZE}/>} triggerHandler={triggerHandler} text={"Customers"}/>
          <sidebar_menu_item_1.default pageLink={"/a/discounts"} icon={<sale_icon_1.default size={ICON_SIZE}/>} triggerHandler={triggerHandler} text={"Discounts"}/>
          <sidebar_menu_item_1.default pageLink={"/a/gift-cards"} icon={<gift_icon_1.default size={ICON_SIZE}/>} triggerHandler={triggerHandler} text={"Gift Cards"}/>
          <sidebar_menu_item_1.default pageLink={"/a/pricing"} icon={<cash_icon_1.default size={ICON_SIZE}/>} triggerHandler={triggerHandler} text={"Pricing"}/>
          <sidebar_menu_item_1.default pageLink={"/a/settings"} icon={<gear_icon_1.default size={ICON_SIZE}/>} triggerHandler={triggerHandler} text={"Settings"}/>
        </div>

        <div className="font-semibold mt-5 flex flex-col text-small">
          <sidebar_team_1.default />
        </div>
      </div>
    </div>);
};
exports.default = Sidebar;
