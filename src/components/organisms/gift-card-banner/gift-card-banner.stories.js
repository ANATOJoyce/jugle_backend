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
exports.GiftCardThreeDigitSubunitCurrency = exports.GiftCardNoSubunitCurrency = exports.GiftCardUnpublished = exports.GiftCardPublished = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Organisms/GiftCardBanner",
    component: _1.default,
};
var GiftCardRes = {
    id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
    title: "Tekla Gift Card",
    subtitle: null,
    description: "For the one partial to blank canvases, spontaneity, chance encounters and plot twists. The Tekla Gift Card is available in either digital or hard-copy format.",
    handle: "tekla-gift-card",
    is_giftcard: true,
    status: "published",
    thumbnail: "https://images.ctfassets.net/4g6al16haqoj/kZT0jwrTOTGbDpK3XlRZQ/acb10c53c1acdd53cf1336b5f26fbb10/giftcard.jpg",
    variants: [
        {
            id: "variant_01FSM2R7EVZR9MRNWBC5WB14RT",
            title: "1",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            prices: [
                {
                    id: "ma_01FSM2R7GSAW9XRZDZ24YNYRAT",
                    currency_code: "bhd",
                    amount: 100000,
                    variant_id: "variant_01FSM2R7EVZR9MRNWBC5WB14RT",
                },
                {
                    id: "ma_01FSM2R7GSAW9XRZDZ24YNYRAT",
                    currency_code: "usd",
                    amount: 10000,
                    variant_id: "variant_01FSM2R7EVZR9MRNWBC5WB14RT",
                },
                {
                    id: "ma_01FSM2R7GSAW9XRZDZ24YNYRAT",
                    currency_code: "krw",
                    amount: 100,
                    variant_id: "variant_01FSM2R7EVZR9MRNWBC5WB14RT",
                },
            ],
            options: [
                {
                    id: "optval_01FSM2R7EVE0H6PCC1VMBQDMB0",
                    value: "100",
                    option_id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
                    variant_id: "variant_01FSM2R7EVZR9MRNWBC5WB14RT",
                },
            ],
        },
        {
            id: "variant_01FSM2R7F8H1SXCH4N8DAT1EM9",
            title: "2",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            prices: [
                {
                    id: "ma_01FSM2R7GTKMSA6QTMC2P2P116",
                    currency_code: "bhd",
                    amount: 200000,
                    variant_id: "variant_01FSM2R7F8H1SXCH4N8DAT1EM9",
                },
                {
                    id: "ma_01FSM2R7GTKMSA6QTMC2P2P116",
                    currency_code: "usd",
                    amount: 20000,
                    variant_id: "variant_01FSM2R7F8H1SXCH4N8DAT1EM9",
                },
                {
                    id: "ma_01FSM2R7GTKMSA6QTMC2P2P116",
                    currency_code: "krw",
                    amount: 200,
                    variant_id: "variant_01FSM2R7F8H1SXCH4N8DAT1EM9",
                },
            ],
            options: [
                {
                    id: "optval_01FSM2R7F8G58WTMJFZG9GE57W",
                    value: "200",
                    option_id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
                    variant_id: "variant_01FSM2R7F8H1SXCH4N8DAT1EM9",
                },
            ],
        },
        {
            id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
            title: "3",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            prices: [
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "bhd",
                    amount: 500000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "usd",
                    amount: 50000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "krw",
                    amount: 500,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
            options: [
                {
                    id: "optval_01FSM2R7FFYCE65H3F87YT065Z",
                    value: "500",
                    option_id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
        },
        {
            id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
            title: "3",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            prices: [
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "bhd",
                    amount: 600000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "usd",
                    amount: 60000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "krw",
                    amount: 600,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
            options: [
                {
                    id: "optval_01FSM2R7FFYCE65H3F87YT065Z",
                    value: "600",
                    option_id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
        },
        {
            id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
            title: "3",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            prices: [
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "bhd",
                    amount: 700000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "usd",
                    amount: 70000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "krw",
                    amount: 700,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
            options: [
                {
                    id: "optval_01FSM2R7FFYCE65H3F87YT065Z",
                    value: "700",
                    option_id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
        },
        {
            id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
            title: "3",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            prices: [
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "bhd",
                    amount: 80000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "usd",
                    amount: 80000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "krw",
                    amount: 800,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
            options: [
                {
                    id: "optval_01FSM2R7FFYCE65H3F87YT065Z",
                    value: "800",
                    option_id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
        },
        {
            id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
            title: "3",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            prices: [
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "bhd",
                    amount: 900000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "usd",
                    amount: 90000,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "krw",
                    amount: 900,
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
            options: [
                {
                    id: "optval_01FSM2R7FFYCE65H3F87YT065Z",
                    value: "900",
                    option_id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
        },
        {
            id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
            title: "3",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            prices: [
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "bhd",
                    amount: 1000000,
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "usd",
                    amount: 100000,
                },
                {
                    id: "ma_01FSM2R7GTRDQVMGCX03H8KM6X",
                    currency_code: "krw",
                    amount: 1000,
                },
            ],
            options: [
                {
                    id: "optval_01FSM2R7FFYCE65H3F87YT065Z",
                    value: "1000",
                    option_id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
                    variant_id: "variant_01FSM2R7FFW6Z6QY79Q2DZ2M57",
                },
            ],
        },
    ],
    options: [
        {
            id: "opt_01FSM2R7AFY919FXW1T5FD6MV8",
            title: "Denominations",
            product_id: "prod_01FSM2R78R63VKXFAG3G7F52CD",
            created_at: "2022-01-17T13:13:48.466Z",
            updated_at: "2022-01-17T13:13:48.466Z",
            deleted_at: null,
            metadata: null,
        },
    ],
};
var Template = function (args) { return <_1.default {...args}/>; };
exports.GiftCardPublished = Template.bind({});
exports.GiftCardPublished.args = __assign(__assign({}, GiftCardRes), { defaultCurrency: "usd" });
exports.GiftCardUnpublished = Template.bind({});
exports.GiftCardUnpublished.args = __assign(__assign({}, GiftCardRes), { status: "unpublished", defaultCurrency: "usd" });
exports.GiftCardNoSubunitCurrency = Template.bind({});
exports.GiftCardNoSubunitCurrency.args = __assign(__assign({}, GiftCardRes), { defaultCurrency: "krw" });
exports.GiftCardThreeDigitSubunitCurrency = Template.bind({});
exports.GiftCardThreeDigitSubunitCurrency.args = __assign(__assign({}, GiftCardRes), { defaultCurrency: "bhd" });
