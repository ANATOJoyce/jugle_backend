"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var checkbox_1 = require("../../../../components/atoms/checkbox");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var input_1 = require("../../../../components/molecules/input");
var select_1 = require("../../../../components/molecules/select");
var status_selector_1 = require("../../../../components/molecules/status-selector");
var tag_input_1 = require("../../../../components/molecules/tag-input");
var textarea_1 = require("../../../../components/molecules/textarea");
var body_card_1 = require("../../../../components/organisms/body-card");
var radio_group_1 = require("../../../../components/organisms/radio-group");
var use_imperative_dialog_1 = require("../../../../hooks/use-imperative-dialog");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var product_form_context_1 = require("../form/product-form-context");
var General = function (_a) {
    var _b = _a.showViewOptions, showViewOptions = _b === void 0 ? true : _b, _c = _a.isEdit, isEdit = _c === void 0 ? false : _c, product = _a.product;
    var _d = (0, product_form_context_1.useProductForm)(), register = _d.register, control = _d.control, setViewType = _d.setViewType, viewType = _d.viewType, setValue = _d.setValue;
    var product_types = (0, medusa_react_1.useAdminProductTypes)(undefined, { cacheTime: 0 }).product_types;
    var collections = (0, medusa_react_1.useAdminCollections)().collections;
    var typeOptions = (product_types === null || product_types === void 0 ? void 0 : product_types.map(function (tag) { return ({ label: tag.value, value: tag.id }); })) || [];
    var collectionOptions = (collections === null || collections === void 0 ? void 0 : collections.map(function (collection) { return ({
        label: collection.title,
        value: collection.id,
    }); })) || [];
    var setNewType = function (value) {
        var newType = {
            label: value,
            value: value,
        };
        typeOptions.push(newType);
        setValue("type", newType);
        return newType;
    };
    return (<GeneralBodyCard isEdit={isEdit} product={product} title="General" subtitle="To start selling, all you need is a name, price, and image">
      <div className="mt-large">
        <h6 className="inter-base-semibold mb-1">Details</h6>
        <label htmlFor="name" className="inter-small-regular text-grey-50 block max-w-[370px] mb-base">
          Give your product a short and clear name. 50-60 characters is the
          recommended length for search engines.
        </label>
        <div className="flex gap-8 mb-base">
          <input_1.default id="name" label="Name" name="title" placeholder="Jacket, Sunglasses..." required ref={register({
            required: "Name is required",
            minLength: 1,
            pattern: /(.|\s)*\S(.|\s)*/,
        })}/>
          <input_1.default tooltipContent="Handles are human friendly unique identifiers that are appropriate for URL slugs." label="Handle" name="handle" placeholder="bathrobe" prefix="/" ref={register()}/>
        </div>
        <label className="inter-small-regular text-grey-50 block max-w-[370px] mb-base" htmlFor="description">
          Give your product a short and clear description. 120-160 characters is
          the recommended length for search engines.
        </label>
        <div className="grid grid-rows-3 grid-cols-2 gap-x-8 gap-y-4 mb-large">
          <textarea_1.default name="description" id="description" label="Description" placeholder="Short description of the product..." className="row-span-full" rows={8} ref={register}/>
          <react_hook_form_1.Controller as={select_1.default} control={control} label="Collection" name="collection" placeholder="Select collection..." options={collectionOptions} clearSelected/>
          <react_hook_form_1.Controller control={control} name="type" render={function (_a) {
            var value = _a.value, onChange = _a.onChange;
            return (<select_1.default label="Type" placeholder="Select type..." options={typeOptions} onChange={onChange} value={value} isCreatable onCreateOption={function (value) {
                    return setNewType(value);
                }} clearSelected/>);
        }}/>
          <react_hook_form_1.Controller name="tags" render={function (_a) {
            var onChange = _a.onChange, value = _a.value;
            return (<tag_input_1.default label="Tags (separated by comma)" placeholder="Spring, Summer..." onChange={onChange} values={value || []}/>);
        }} control={control}/>
        </div>
        <div className="flex item-center gap-x-1.5 mb-xlarge">
          <checkbox_1.default name="discountable" ref={register} label="Discountable"/>
          <icon_tooltip_1.default content={"When unchecked discounts will not be applied to this product"}/>
        </div>
        {showViewOptions && (<radio_group_1.default.Root value={viewType} onValueChange={setViewType} className="flex items-center gap-4 mt-xlarge">
            <radio_group_1.default.SimpleItem label="Simple product" value={product_form_context_1.SINGLE_PRODUCT_VIEW}/>
            <radio_group_1.default.SimpleItem label="Product with variants" value={product_form_context_1.VARIANTS_VIEW}/>
          </radio_group_1.default.Root>)}
      </div>
    </GeneralBodyCard>);
};
var GeneralBodyCard = function (_a) {
    var isEdit = _a.isEdit, product = _a.product, props = __rest(_a, ["isEdit", "product"]);
    var params = (0, router_1.useParams)();
    var dialog = (0, use_imperative_dialog_1.default)();
    var notification = (0, use_notification_1.default)();
    var updateProduct = (0, medusa_react_1.useAdminUpdateProduct)(params === null || params === void 0 ? void 0 : params.id);
    var deleteProduct = (0, medusa_react_1.useAdminDeleteProduct)(params === null || params === void 0 ? void 0 : params.id);
    var onDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var shouldDelete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dialog({
                        heading: "Delete Product",
                        text: "Are you sure you want to delete this product",
                    })];
                case 1:
                    shouldDelete = _a.sent();
                    if (shouldDelete) {
                        deleteProduct.mutate(undefined, {
                            onSuccess: function () {
                                notification("Success", "Product deleted successfully", "success");
                                (0, gatsby_1.navigate)("/a/products/");
                            },
                            onError: function (err) {
                                notification("Ooops", (0, error_messages_1.getErrorMessage)(err), "error");
                            },
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var onStatusChange = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newStatus;
        return __generator(this, function (_a) {
            newStatus = (product === null || product === void 0 ? void 0 : product.status) === "published" ? "draft" : "published";
            updateProduct.mutate({
                status: newStatus,
            }, {
                onSuccess: function () {
                    var pastTense = newStatus === "published" ? "published" : "drafted";
                    notification("Success", "Product ".concat(pastTense, " successfully"), "success");
                },
                onError: function (err) {
                    notification("Ooops", (0, error_messages_1.getErrorMessage)(err), "error");
                },
            });
            return [2 /*return*/];
        });
    }); };
    var actionables = [
        {
            label: "Delete Product",
            onClick: onDelete,
            variant: "danger",
            icon: <trash_icon_1.default />,
        },
    ];
    return (<body_card_1.default actionables={isEdit ? actionables : undefined} forceDropdown status={isEdit ? (<status_selector_1.default isDraft={(product === null || product === void 0 ? void 0 : product.status) === "draft"} activeState="Published" draftState="Draft" onChange={onStatusChange}/>) : undefined} {...props}/>);
};
exports.default = General;
