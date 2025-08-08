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
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var spinner_1 = require("../../components/atoms/spinner");
var declarative_toaster_1 = require("../../components/declarative-toaster");
var form_toaster_1 = require("../../components/molecules/form-toaster");
var feature_flag_1 = require("../../context/feature-flag");
var use_notification_1 = require("../../hooks/use-notification");
var api_1 = require("../../services/api");
var consolidate_images_1 = require("../../utils/consolidate-images");
var error_messages_1 = require("../../utils/error-messages");
var form_helpers_1 = require("../../utils/form-helpers");
var handle_form_error_1 = require("../../utils/handle-form-error");
var product_form_1 = require("./product-form");
var mappers_1 = require("./product-form/form/mappers");
var product_form_context_1 = require("./product-form/form/product-form-context");
var EditProductPage = function (_a) {
    var id = _a.id;
    var notification = (0, use_notification_1.default)();
    var _b = (0, medusa_react_1.useAdminProduct)(id, {
        keepPreviousData: true,
    }), product = _b.product, isLoading = _b.isLoading;
    var updateProduct = (0, medusa_react_1.useAdminUpdateProduct)(id);
    var _c = (0, react_1.useState)(false), submitting = _c[0], setSubmitting = _c[1];
    var isFeatureEnabled = react_1.default.useContext(feature_flag_1.FeatureFlagContext).isFeatureEnabled;
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var images, uploadedImgs, newData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setSubmitting(true);
                    images = data.images
                        .filter(function (img) { return img.url.startsWith("blob"); })
                        .map(function (img) { return img.nativeFile; });
                    uploadedImgs = [];
                    if (!(images.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, api_1.default.uploads
                            .create(images)
                            .then(function (_a) {
                            var data = _a.data;
                            var uploaded = data.uploads.map(function (_a) {
                                var url = _a.url;
                                return url;
                            });
                            return uploaded;
                        })
                            .catch(function (err) {
                            setSubmitting(false);
                            notification("Error uploading images", (0, error_messages_1.getErrorMessage)(err), "error");
                            return;
                        })];
                case 1:
                    uploadedImgs = _a.sent();
                    _a.label = 2;
                case 2:
                    newData = __assign(__assign({}, data), { images: (0, consolidate_images_1.consolidateImages)(data.images, uploadedImgs) });
                    updateProduct.mutate((0, mappers_1.formValuesToUpdateProductMapper)(newData, isFeatureEnabled), {
                        onSuccess: function () {
                            setSubmitting(false);
                            notification("Success", "Product updated successfully", "success");
                        },
                        onError: function (error) {
                            setSubmitting(false);
                            notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
                        },
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return isLoading ? (<div className="w-full pt-2xlarge flex items-center justify-center">
      <spinner_1.default size={"large"} variant={"secondary"}/>
    </div>) : (<product_form_context_1.ProductFormProvider product={(0, mappers_1.productToFormValuesMapper)(product)} onSubmit={onSubmit}>
      <product_form_1.default product={product} isEdit/>
      <UpdateNotification isLoading={submitting}/>
    </product_form_context_1.ProductFormProvider>);
};
var TOAST_ID = "edit-product-dirty";
var UpdateNotification = function (_a) {
    var _b = _a.isLoading, isLoading = _b === void 0 ? false : _b;
    var _c = (0, product_form_context_1.useProductForm)(), formState = _c.formState, onSubmit = _c.onSubmit, handleSubmit = _c.handleSubmit, resetForm = _c.resetForm, additionalDirtyState = _c.additionalDirtyState;
    var _d = (0, react_1.useState)(false), visible = _d[0], setVisible = _d[1];
    var _e = (0, react_1.useState)(true), blocking = _e[0], setBlocking = _e[1];
    var onUpdate = function (values) {
        onSubmit(__assign({}, values));
    };
    (0, react_1.useEffect)(function () {
        var timeout = setTimeout(setBlocking, 300, false);
        return function () { return clearTimeout(timeout); };
    }, []);
    var isDirty = (0, form_helpers_1.checkForDirtyState)(formState.dirtyFields, additionalDirtyState);
    (0, react_1.useEffect)(function () {
        if (!blocking) {
            setVisible(isDirty);
        }
        return function () {
            react_hot_toast_1.default.dismiss(TOAST_ID);
        };
    }, [isDirty]);
    return (<declarative_toaster_1.default visible={visible} duration={Infinity} id={TOAST_ID} position="bottom-right">
      <form_toaster_1.default isLoading={isLoading}>
        <form_toaster_1.default.Actions>
          <form_toaster_1.default.ActionButton onClick={handleSubmit(onUpdate, handle_form_error_1.handleFormError)}>
            Save
          </form_toaster_1.default.ActionButton>
          <form_toaster_1.default.DiscardButton onClick={resetForm}>
            Discard
          </form_toaster_1.default.DiscardButton>
        </form_toaster_1.default.Actions>
      </form_toaster_1.default>
    </declarative_toaster_1.default>);
};
exports.default = EditProductPage;
