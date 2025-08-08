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
exports.useProductForm = exports.ProductFormProvider = exports.SINGLE_PRODUCT_VIEW = exports.VARIANTS_VIEW = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var feature_flag_1 = require("../../../../context/feature-flag");
var trim_values_1 = require("../../../../utils/trim-values");
exports.VARIANTS_VIEW = "variants";
exports.SINGLE_PRODUCT_VIEW = "single";
var defaultProduct = {
    variants: [],
    images: [],
    prices: [],
    tags: [],
    options: [],
    sales_channels: [],
    type: null,
    collection: null,
    id: "",
    thumbnail: 0,
    title: "",
    handle: "",
    description: "",
    sku: "",
    ean: "",
    inventory_quantity: null,
    manage_inventory: false,
    allow_backorder: false,
    weight: null,
    height: null,
    width: null,
    length: null,
    mid_code: null,
    hs_code: null,
    origin_country: null,
    material: "",
    discountable: false,
};
var ProductFormContext = react_1.default.createContext(null);
var ProductFormProvider = function (_a) {
    var _b;
    var _c = _a.product, product = _c === void 0 ? defaultProduct : _c, onSubmit = _a.onSubmit, children = _a.children;
    var _d = react_1.default.useState(((_b = product.variants) === null || _b === void 0 ? void 0 : _b.length) > 0 ? exports.VARIANTS_VIEW : exports.SINGLE_PRODUCT_VIEW), viewType = _d[0], setViewType = _d[1];
    var _e = react_1.default.useState([]), images = _e[0], setImages = _e[1];
    var _f = react_1.default.useState([]), variants = _f[0], setVariants = _f[1];
    var _g = react_1.default.useState([]), productOptions = _g[0], setProductOptions = _g[1];
    var _h = react_1.default.useState(false), hasImagesChanged = _h[0], setHasImagesChanged = _h[1];
    var _j = react_1.default.useState(false), hasSalesChannelsChanged = _j[0], setHasSalesChannelsChanged = _j[1];
    // SALES CHANNELS
    var isFeatureEnabled = react_1.default.useContext(feature_flag_1.FeatureFlagContext).isFeatureEnabled;
    var _k = react_1.default.useState(product.sales_channels), salesChannels = _k[0], setSalesChannels = _k[1];
    var appendImage = function (image) {
        setHasImagesChanged(true);
        setImages(__spreadArray(__spreadArray([], images, true), [image], false));
    };
    var removeImage = function (image) {
        setHasImagesChanged(true);
        var tmp = images.filter(function (img) { return img.url !== image.url; });
        setImages(tmp);
    };
    var setProductSalesChannels = function (salesChannels, setDirtyState) {
        if (setDirtyState === void 0) { setDirtyState = true; }
        if (isFeatureEnabled("sales_channels")) {
            setSalesChannels(salesChannels);
            setHasSalesChannelsChanged(function (scChanged) { return setDirtyState || scChanged; });
        }
    };
    var methods = (0, react_hook_form_1.useForm)();
    var resetForm = function () {
        var _a, _b;
        methods.reset(__assign({}, product));
        setHasImagesChanged(false);
        setHasSalesChannelsChanged(false);
        setImages(product.images);
        setProductOptions(product.options);
        if (isFeatureEnabled("sales_channels")) {
            setSalesChannels(product.sales_channels);
            setHasSalesChannelsChanged(false);
        }
        if (product === null || product === void 0 ? void 0 : product.variants) {
            var variants_1 = (_a = product === null || product === void 0 ? void 0 : product.variants) === null || _a === void 0 ? void 0 : _a.map(function (v) { return (__assign(__assign({}, v), { options: v.options.map(function (o) {
                    var _a;
                    return (__assign(__assign({}, o), { title: (_a = product.options.find(function (po) { return po.id === o.option_id; })) === null || _a === void 0 ? void 0 : _a.title }));
                }) })); });
            setVariants(variants_1);
        }
        if (product === null || product === void 0 ? void 0 : product.options) {
            var options = (_b = product === null || product === void 0 ? void 0 : product.options) === null || _b === void 0 ? void 0 : _b.map(function (po) { return ({
                name: po.title,
                values: po.values ? po.values.map(function (v) { return v.value; }) : [],
            }); });
            setProductOptions(options);
        }
    };
    react_1.default.useEffect(function () {
        resetForm();
    }, [product]);
    var handleSubmit = function (values) {
        var data = __assign(__assign({}, (0, trim_values_1.trimValues)(values)), { images: images, variants: variants, options: productOptions });
        if (isFeatureEnabled("sales_channels")) {
            data.sales_channels = salesChannels;
        }
        onSubmit(data, viewType);
    };
    return (<react_hook_form_1.FormProvider {...methods}>
      <ProductFormContext.Provider value={{
            productOptions: productOptions,
            setProductOptions: setProductOptions,
            variants: variants,
            setVariants: setVariants,
            images: images,
            setImages: setImages,
            appendImage: appendImage,
            removeImage: removeImage,
            salesChannels: salesChannels,
            setSalesChannels: setProductSalesChannels,
            setViewType: setViewType,
            viewType: viewType,
            isVariantsView: viewType === exports.VARIANTS_VIEW,
            onSubmit: handleSubmit,
            resetForm: resetForm,
            additionalDirtyState: {
                images: hasImagesChanged,
                salesChannels: hasSalesChannelsChanged,
            },
        }}>
        {children}
      </ProductFormContext.Provider>
    </react_hook_form_1.FormProvider>);
};
exports.ProductFormProvider = ProductFormProvider;
var useProductForm = function () {
    var context = react_1.default.useContext(ProductFormContext);
    var form = (0, react_hook_form_1.useFormContext)();
    if (!context) {
        throw new Error("useProductForm must be a child of ProductFormContext");
    }
    return __assign(__assign({}, form), context);
};
exports.useProductForm = useProductForm;
