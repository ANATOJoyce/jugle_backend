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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var page_description_1 = require("../../components/atoms/page-description");
var spinner_1 = require("../../components/atoms/spinner");
var plus_icon_1 = require("../../components/fundamentals/icons/plus-icon");
var banner_card_1 = require("../../components/molecules/banner-card");
var body_card_1 = require("../../components/organisms/body-card");
var delete_prompt_1 = require("../../components/organisms/delete-prompt");
var gift_card_banner_1 = require("../../components/organisms/gift-card-banner");
var gift_card_table_1 = require("../../components/templates/gift-card-table");
var use_notification_1 = require("../../hooks/use-notification");
var shared_1 = require("../../types/shared");
var error_messages_1 = require("../../utils/error-messages");
var custom_giftcard_1 = require("./custom-giftcard");
var new_1 = require("./new");
var Overview = function () {
    var _a = (0, medusa_react_1.useAdminProducts)({
        is_giftcard: "true",
    }), products = _a.products, isLoading = _a.isLoading;
    var store = (0, medusa_react_1.useAdminStore)().store;
    var giftCards = (0, medusa_react_1.useAdminGiftCards)().gift_cards;
    var _b = (0, react_1.useState)(false), showCreate = _b[0], setShowCreate = _b[1];
    var _c = (0, react_1.useState)(false), showCreateCustom = _c[0], setShowCreateCustom = _c[1];
    var _d = (0, react_1.useState)(false), showDelete = _d[0], setShowDelete = _d[1];
    var giftCard = products === null || products === void 0 ? void 0 : products[0];
    var notification = (0, use_notification_1.default)();
    var updateGiftCard = (0, medusa_react_1.useAdminUpdateProduct)(giftCard === null || giftCard === void 0 ? void 0 : giftCard.id);
    var deleteGiftCard = (0, medusa_react_1.useAdminDeleteProduct)(giftCard === null || giftCard === void 0 ? void 0 : giftCard.id);
    var onUpdate = function () {
        var status = shared_1.ProductStatus.PUBLISHED;
        if ((giftCard === null || giftCard === void 0 ? void 0 : giftCard.status) === "published") {
            status = shared_1.ProductStatus.DRAFT;
        }
        updateGiftCard.mutate(
        // @ts-ignore
        { status: status }, {
            onSuccess: function () {
                return notification("Success", "Successfully updated Gift Card", "success");
            },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    var onDelete = function () {
        deleteGiftCard.mutate(undefined, {
            onSuccess: function () {
                (0, gatsby_1.navigate)("/a/gift-cards");
            },
        });
    };
    var actionables = [
        {
            label: "Custom Gift Card",
            onClick: function () { return setShowCreateCustom(true); },
            icon: <plus_icon_1.default size={20}/>,
        },
    ];
    var giftCardWithCurrency = (0, react_1.useMemo)(function () {
        if (!giftCard || !store) {
            return null;
        }
        return __assign(__assign({}, giftCard), { defaultCurrency: store.default_currency_code });
    }, [giftCard, store]);
    return (<>
      <div className="flex flex-col grow h-full">
        <page_description_1.default title="Gift Cards" subtitle="Manage the Gift Cards of your Medusa store"/>
        {!isLoading ? (<>
            <div className="mb-base">
              {giftCardWithCurrency ? (<gift_card_banner_1.default {...giftCardWithCurrency} onDelete={function () { return setShowDelete(true); }} onEdit={function () { return (0, gatsby_1.navigate)("/a/gift-cards/manage"); }} onUnpublish={onUpdate}/>) : (<banner_card_1.default title="Are you ready to sell your first Gift Card?">
                  <banner_card_1.default.Description cta={{
                    label: "Create Gift Card",
                    onClick: function () { return setShowCreate(true); },
                }}>
                    No Gift Card has been added yet.
                  </banner_card_1.default.Description>
                </banner_card_1.default>)}
            </div>
            <div className="w-full flex flex-col grow">
              <body_card_1.default title="History" subtitle="See the history of purchased Gift Cards" actionables={actionables}>
                {giftCards && <gift_card_table_1.default giftCards={giftCards}/>}
              </body_card_1.default>
            </div>
          </>) : (<div className="w-full flex items-center justify-center h-44 rounded-rounded border border-grey-20">
            <spinner_1.default variant="secondary" size="large"/>
          </div>)}
      </div>
      {showCreateCustom && (<custom_giftcard_1.default onDismiss={function () { return setShowCreateCustom(false); }}/>)}
      {showCreate && <new_1.default onClose={function () { return setShowCreate(!showCreate); }}/>}
      {showDelete && (<delete_prompt_1.default handleClose={function () { return setShowDelete(!showDelete); }} onDelete={function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, onDelete()];
        }); }); }} successText="Successfully deleted Gift Card" confirmText="Yes, delete" heading="Delete Gift Card"/>)}
    </>);
};
exports.default = Overview;
