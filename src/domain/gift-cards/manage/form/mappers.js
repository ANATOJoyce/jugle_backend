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
Object.defineProperty(exports, "__esModule", { value: true });
exports.giftCardToFormValuesMapper = exports.formValuesToUpdateGiftCardMapper = void 0;
var formValuesToUpdateGiftCardMapper = function (values) {
    var _a;
    var payload = __assign(__assign({}, values), { thumbnail: ((_a = values.images) === null || _a === void 0 ? void 0 : _a.length) ? values.images[values.thumbnail] : null });
    if (values.images) {
        payload["images"] = values.images;
    }
    if (values.type) {
        payload["type"] = { id: values.type.value, value: values.type.label };
    }
    if (values.tags) {
        payload["tags"] = values.tags.map(function (tag) { return ({ value: tag }); });
    }
    return payload;
};
exports.formValuesToUpdateGiftCardMapper = formValuesToUpdateGiftCardMapper;
var giftCardToFormValuesMapper = function (giftCard) {
    var _a, _b;
    var thumbnail = ((_a = giftCard === null || giftCard === void 0 ? void 0 : giftCard.images) === null || _a === void 0 ? void 0 : _a.length)
        ? giftCard.images.findIndex(function (img) { return img.url === giftCard.thumbnail; })
        : 0;
    thumbnail = thumbnail === -1 ? 0 : thumbnail;
    return __assign(__assign({}, giftCard), { type: (giftCard === null || giftCard === void 0 ? void 0 : giftCard.type)
            ? { id: giftCard.type.id, label: giftCard.type.value }
            : null, tags: (giftCard === null || giftCard === void 0 ? void 0 : giftCard.tags) ? giftCard.tags.map(function (t) { return t.value; }) : [], images: ((_b = giftCard === null || giftCard === void 0 ? void 0 : giftCard.images) === null || _b === void 0 ? void 0 : _b.length)
            ? giftCard.images
            : (giftCard === null || giftCard === void 0 ? void 0 : giftCard.thumbnail)
                ? [{ url: giftCard === null || giftCard === void 0 ? void 0 : giftCard.thumbnail }]
                : [], thumbnail: thumbnail, prices: (giftCard === null || giftCard === void 0 ? void 0 : giftCard.variants.length)
            ? giftCard.variants[0].prices.map(function (price) { return ({
                price: { currency_code: price.currency_code, amount: price.amount },
            }); })
            : [] });
};
exports.giftCardToFormValuesMapper = giftCardToFormValuesMapper;
