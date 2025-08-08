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
exports.formValuesToUpdateProductMapper = exports.formValuesToCreateProductMapper = exports.productToFormValuesMapper = void 0;
var product_form_context_1 = require("./product-form-context");
var productToFormValuesMapper = function (product) {
    var _a, _b;
    var thumbnail = ((_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.length)
        ? product.images.findIndex(function (img) { return img.url === product.thumbnail; })
        : 0;
    thumbnail = thumbnail === -1 ? 0 : thumbnail;
    return __assign(__assign({}, product), { collection: (product === null || product === void 0 ? void 0 : product.collection)
            ? { value: product.collection.id, label: product.collection.title }
            : null, type: (product === null || product === void 0 ? void 0 : product.type)
            ? { value: product.type.id, label: product.type.value }
            : null, tags: (product === null || product === void 0 ? void 0 : product.tags) ? product.tags.map(function (t) { return t.value; }) : [], images: ((_b = product === null || product === void 0 ? void 0 : product.images) === null || _b === void 0 ? void 0 : _b.length)
            ? product.images
            : (product === null || product === void 0 ? void 0 : product.thumbnail)
                ? [{ url: product === null || product === void 0 ? void 0 : product.thumbnail }]
                : [], thumbnail: thumbnail, origin_country: (product === null || product === void 0 ? void 0 : product.origin_country)
            ? {
                value: product.origin_country,
                label: product.origin_country,
            }
            : null, variants: product.variants, prices: (product === null || product === void 0 ? void 0 : product.variants.length)
            ? product.variants[0].prices.map(function (price) { return ({
                price: { currency_code: price.currency_code, amount: price.amount },
            }); })
            : [] });
};
exports.productToFormValuesMapper = productToFormValuesMapper;
var formValuesToCreateProductMapper = function (values, viewType, isFeatureEnabled) {
    var _a, _b;
    var scData = {};
    if (isFeatureEnabled("sales_channels")) {
        scData["sales_channels"] = values.sales_channels.map(function (salesChannel) { return ({
            id: salesChannel.id,
        }); });
    }
    // Simple product
    if (viewType === product_form_context_1.SINGLE_PRODUCT_VIEW) {
        values.variants = [
            {
                title: values === null || values === void 0 ? void 0 : values.title,
                allow_backorder: values.allow_backorder,
                manage_inventory: values.manage_inventory,
                sku: (values === null || values === void 0 ? void 0 : values.sku) || null,
                ean: (values === null || values === void 0 ? void 0 : values.ean) || null,
                inventory_quantity: (values === null || values === void 0 ? void 0 : values.inventory_quantity)
                    ? parseInt(values === null || values === void 0 ? void 0 : values.inventory_quantity, 10)
                    : 0,
                options: [{ value: "Default Variant" }],
                prices: (values === null || values === void 0 ? void 0 : values.prices) ? values.prices.map(function (p) { return p.price; }) : [],
                material: values.material,
            },
        ];
        values.options = [{ title: "Default Option" }];
    }
    else {
        // Product with variants
        values.variants = values === null || values === void 0 ? void 0 : values.variants.map(function (v) { return ({
            title: v.title,
            sku: v.sku || null,
            ean: v.ean || null,
            inventory_quantity: (v === null || v === void 0 ? void 0 : v.inventory_quantity)
                ? parseInt(v === null || v === void 0 ? void 0 : v.inventory_quantity, 10)
                : 0,
            prices: [],
            options: v.options.map(function (o) { return ({ value: o }); }),
        }); });
        values.options = values.options.map(function (o) { return ({ title: o.name }); });
    }
    return __assign({ title: values.title, handle: values.handle, status: values.status || "published", description: values.description, thumbnail: ((_a = values === null || values === void 0 ? void 0 : values.images) === null || _a === void 0 ? void 0 : _a.length)
            ? values.images[values.thumbnail]
            : undefined, collection_id: (values === null || values === void 0 ? void 0 : values.collection) ? values.collection.value : undefined, type: (values === null || values === void 0 ? void 0 : values.type)
            ? { id: values.type.value, value: values.type.label }
            : undefined, images: (values === null || values === void 0 ? void 0 : values.images) || [], options: values.options, tags: (values === null || values === void 0 ? void 0 : values.tags) ? values.tags.map(function (tag) { return ({ value: tag }); }) : [], variants: values.variants, width: (values === null || values === void 0 ? void 0 : values.width) ? parseInt(values.width, 10) : undefined, length: (values === null || values === void 0 ? void 0 : values.length) ? parseInt(values.length, 10) : undefined, weight: (values === null || values === void 0 ? void 0 : values.weight) ? parseInt(values.weight, 10) : undefined, height: (values === null || values === void 0 ? void 0 : values.height) ? parseInt(values.height, 10) : undefined, origin_country: (_b = values.origin_country) === null || _b === void 0 ? void 0 : _b.value, mid_code: values.mid_code, hs_code: values.hs_code, is_giftcard: false, discountable: values.discountable }, scData);
};
exports.formValuesToCreateProductMapper = formValuesToCreateProductMapper;
var formValuesToUpdateProductMapper = function (values, isFeatureEnabled) {
    var _a;
    var scData = {};
    if (isFeatureEnabled("sales_channels")) {
        scData["sales_channels"] = values.sales_channels.map(function (salesChannel) { return ({
            id: salesChannel.id,
        }); });
    }
    return __assign({ title: values.title, handle: values.handle, status: values.status, description: values.description, thumbnail: values.images.length ? values.images[values.thumbnail] : null, collection_id: (values === null || values === void 0 ? void 0 : values.collection) ? values.collection.value : null, type: (values === null || values === void 0 ? void 0 : values.type)
            ? { id: values.type.value, value: values.type.label }
            : undefined, images: (values === null || values === void 0 ? void 0 : values.images) || [], tags: (values === null || values === void 0 ? void 0 : values.tags) ? values.tags.map(function (tag) { return ({ value: tag }); }) : [], width: (values === null || values === void 0 ? void 0 : values.width) ? parseInt(values.width, 10) : undefined, length: (values === null || values === void 0 ? void 0 : values.length) ? parseInt(values.length, 10) : undefined, weight: (values === null || values === void 0 ? void 0 : values.weight) ? parseInt(values.weight, 10) : undefined, height: (values === null || values === void 0 ? void 0 : values.height) ? parseInt(values.height, 10) : undefined, origin_country: (_a = values.origin_country) === null || _a === void 0 ? void 0 : _a.value, mid_code: values.mid_code, hs_code: values.hs_code, discountable: values.discountable }, scData);
};
exports.formValuesToUpdateProductMapper = formValuesToUpdateProductMapper;
