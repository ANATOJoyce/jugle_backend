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
exports.useGiftCardForm = exports.GiftCardFormProvider = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var trim_values_1 = require("../../../../utils/trim-values");
var defaultProduct = {
    variants: [],
    images: [],
    prices: [],
    tags: [],
    type: null,
    id: "",
    thumbnail: "",
    title: "",
    handle: "",
    description: "",
};
var GiftCardFormProvider = function (_a) {
    var _b = _a.giftCard, giftCard = _b === void 0 ? defaultProduct : _b, onSubmit = _a.onSubmit, children = _a.children;
    var _c = react_1.default.useState([]), images = _c[0], setImages = _c[1];
    var _d = react_1.default.useState(false), hasImagesChanged = _d[0], setHasImagesChanged = _d[1];
    var appendImage = function (image) {
        setHasImagesChanged(true);
        setImages(__spreadArray(__spreadArray([], images, true), [image], false));
    };
    var removeImage = function (image) {
        setHasImagesChanged(true);
        var tmp = images.filter(function (img) { return img.url !== image.url; });
        setImages(tmp);
    };
    var methods = (0, react_hook_form_1.useForm)();
    var resetForm = function () {
        methods.reset(__assign({}, giftCard));
        setHasImagesChanged(false);
        setImages(giftCard.images);
    };
    (0, react_1.useEffect)(function () {
        resetForm();
    }, [giftCard]);
    var handleSubmit = function (values) {
        onSubmit(__assign(__assign({}, (0, trim_values_1.trimValues)(values)), { images: images }));
    };
    return (<react_hook_form_1.FormProvider {...methods}>
      <GiftCardFormContext.Provider value={{
            images: images,
            setImages: setImages,
            appendImage: appendImage,
            removeImage: removeImage,
            onSubmit: handleSubmit,
            resetForm: resetForm,
            additionalDirtyState: {
                images: hasImagesChanged,
            },
        }}>
        {children}
      </GiftCardFormContext.Provider>
    </react_hook_form_1.FormProvider>);
};
exports.GiftCardFormProvider = GiftCardFormProvider;
var GiftCardFormContext = react_1.default.createContext(null);
var useGiftCardForm = function () {
    var context = react_1.default.useContext(GiftCardFormContext);
    var form = (0, react_hook_form_1.useFormContext)();
    if (!context) {
        throw new Error("useGiftCardForm must be a child of GiftCardFormContext");
    }
    return __assign(__assign({}, form), context);
};
exports.useGiftCardForm = useGiftCardForm;
