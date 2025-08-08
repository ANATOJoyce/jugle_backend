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
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var file_upload_field_1 = require("../../components/atoms/file-upload-field");
var button_1 = require("../../components/fundamentals/button");
var plus_icon_1 = require("../../components/fundamentals/icons/plus-icon");
var trash_icon_1 = require("../../components/fundamentals/icons/trash-icon");
var input_1 = require("../../components/molecules/input");
var modal_1 = require("../../components/molecules/modal");
var textarea_1 = require("../../components/molecules/textarea");
var currency_input_1 = require("../../components/organisms/currency-input");
var use_notification_1 = require("../../hooks/use-notification");
var api_1 = require("../../services/api");
var shared_1 = require("../../types/shared");
var error_messages_1 = require("../../utils/error-messages");
var focus_by_name_1 = require("../../utils/focus-by-name");
var NewGiftCard = function (_a) {
    var onClose = _a.onClose;
    var _b = (0, react_1.useState)(null), thumbnail = _b[0], setThumbnail = _b[1];
    var _c = (0, react_hook_form_1.useForm)(), register = _c.register, setValue = _c.setValue, unregister = _c.unregister, handleSubmit = _c.handleSubmit;
    var store = (0, medusa_react_1.useAdminStore)().store;
    var refetch = (0, medusa_react_1.useAdminProducts)().refetch;
    var giftCard = (0, medusa_react_1.useAdminCreateProduct)();
    var _d = (0, react_1.useState)([]), denominations = _d[0], setDenominations = _d[1];
    var notification = (0, use_notification_1.default)();
    var handleValueUpdate = function (name, value) {
        if (!value) {
            return;
        }
        setValue(name, value);
    };
    var addDenomination = function () {
        var name = "denominations.".concat(denominations.length);
        register(name);
        var component = (<currency_input_1.default currentCurrency={store === null || store === void 0 ? void 0 : store.default_currency_code} readOnly size="medium">
        <currency_input_1.default.AmountInput label="Amount" amount={undefined} onChange={function (v) { return handleValueUpdate(name, v); }}/>
      </currency_input_1.default>);
        setDenominations(__spreadArray(__spreadArray([], denominations, true), [{ name: name, component: component }], false));
    };
    var deleteDenomination = function (name) {
        unregister(name);
        setDenominations(denominations.filter(function (d) { return d.name !== name; }));
    };
    var handleFileUpload = function (files) {
        var file = files[0];
        var url = URL.createObjectURL(file);
        setThumbnail({
            url: url,
            name: file.name,
            size: file.size,
            nativeFile: file,
        });
    };
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var trimmedName, images, uploadedImgs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    trimmedName = data.name.trim();
                    if (!trimmedName) {
                        notification("Error", "Please enter a name for the Gift Card", "error");
                        (0, focus_by_name_1.focusByName)("name");
                        return [2 /*return*/];
                    }
                    if (!data.denominations) {
                        notification("Error", "Please add at least one denomination", "error");
                        (0, focus_by_name_1.focusByName)("add-denomination");
                        return [2 /*return*/];
                    }
                    images = [];
                    if (!thumbnail) return [3 /*break*/, 2];
                    return [4 /*yield*/, api_1.default.uploads
                            .create([thumbnail.nativeFile])
                            .then(function (_a) {
                            var data = _a.data;
                            var uploaded = data.uploads.map(function (_a) {
                                var url = _a.url;
                                return url;
                            });
                            return uploaded;
                        })];
                case 1:
                    uploadedImgs = _a.sent();
                    images = uploadedImgs;
                    _a.label = 2;
                case 2:
                    giftCard.mutate({
                        is_giftcard: true,
                        title: data.name,
                        description: data.description,
                        discountable: false,
                        options: [{ title: "Denominations" }],
                        variants: data.denominations.map(function (d, i) { return ({
                            title: "".concat(i + 1),
                            inventory_quantity: 0,
                            manage_inventory: false,
                            prices: [{ amount: d, currency_code: store === null || store === void 0 ? void 0 : store.default_currency_code }],
                            options: [{ value: "".concat(d) }],
                        }); }),
                        images: images.length ? images : undefined,
                        thumbnail: images.length ? images[0] : undefined,
                        status: shared_1.ProductStatus.PUBLISHED,
                    }, {
                        onSuccess: function () {
                            notification("Success", "Successfully created Gift Card", "success");
                            refetch();
                            (0, gatsby_1.navigate)("/a/gift-cards/manage");
                        },
                        onError: function (err) {
                            notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                        },
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return (<modal_1.default handleClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <modal_1.default.Body>
          <modal_1.default.Header handleClose={onClose}>
            <div>
              <h1 className="inter-xlarge-semibold">Create Gift Card</h1>
            </div>
          </modal_1.default.Header>
          <modal_1.default.Content>
            <div className="mb-base">
              <h3 className="inter-base-semibold">Product information</h3>
            </div>
            <div className="flex flex-col gap-y-base">
              <input_1.default label={"Name"} required placeholder="The best Gift Card" name="name" ref={register({ required: true })}/>
              <textarea_1.default label="Description" placeholder="The best Gift Card of all time" name="description" ref={register}/>
            </div>
            <div className="mt-xlarge">
              <h3 className="inter-base-semibold">Thumbnail</h3>
              <div className="h-[80px] mt-base">
                {thumbnail ? (<div className="flex items-center gap-x-6">
                    <img src={thumbnail.url} alt="" className="w-20 h-20 rounded-base object-cover object-center"/>
                    <div className="flex flex-col gap-y-1">
                      <span className="inter-small-regular">
                        {thumbnail.name}
                      </span>
                      <div>
                        <button className="text-rose-50 inter-small-semibold" type="button" onClick={function () { return setThumbnail(null); }}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>) : (<file_upload_field_1.default filetypes={["image/png", "image/jpeg"]} onFileChosen={handleFileUpload} placeholder="1200 x 1600 (3:4) recommended, up to 10MB each"/>)}
              </div>
            </div>
            <div className="mt-xlarge">
              <h3 className="inter-base-semibold mb-base">
                Denominations<span className="text-rose-50">*</span>
              </h3>
              <div className="flex flex-col gap-y-xsmall">
                {denominations.map(function (denomination) {
            return (<div key={denomination.name} className="flex items-center gap-x-base last:mb-large">
                      {denomination.component}
                      <button_1.default variant="ghost" size="large" className="w-xlarge h-xlarge text-grey-40" type="button" onClick={function () { return deleteDenomination(denomination.name); }}>
                        <trash_icon_1.default size={20}/>
                      </button_1.default>
                    </div>);
        })}
              </div>
              <button_1.default name="add-denomination" variant="ghost" size="small" onClick={addDenomination} type="button">
                <plus_icon_1.default size={20}/>
                Add Denomination
              </button_1.default>
            </div>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="flex items-center justify-end w-full">
              <button_1.default type="submit" variant="ghost" size="small" className="w-eventButton" onClick={onClose}>
                Cancel
              </button_1.default>
              <button_1.default type="submit" variant="primary" size="small" className="w-eventButton">
                Create & Publish
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
exports.default = NewGiftCard;
