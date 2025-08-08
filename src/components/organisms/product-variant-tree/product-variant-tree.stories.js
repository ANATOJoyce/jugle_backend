"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var _1 = require(".");
exports.default = {
    title: "Organisms/ProductVariantTree",
    component: _1.default,
};
var Template = function (args) { return (<div className="max-w-md">
    <_1.default {...args}/>
  </div>); };
var testProduct = {
    id: "prod_01FY6FS3VB39G5GPB75S7RYQW6",
    title: "Medusa Sweatshirt",
    thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
    variants: [
        {
            id: "variant_01FY6FS3VWFWNQF8WSP130F3TX",
            title: "BLACK / S",
            sku: "MEDUSA-S",
            prices: [
                {
                    id: "ma_01FY6FS3VZ7C0NHWMYA243KQXV",
                    currency_code: "eur",
                    amount: 2950,
                },
                {
                    id: "ma_01FY6FS3W11805101BYBDQPJMP",
                    currency_code: "usd",
                    amount: 3350,
                },
            ],
        },
        {
            id: "variant_01FY6FS3WAJJRHAW5J901Y8YM9",
            title: "BLACK / M",
            sku: "MEDUSA-M",
            prices: [
                {
                    id: "ma_01FY6FS3WD3928VCK53ZQ3NSD7",
                    currency_code: "eur",
                    amount: 2950,
                },
            ],
        },
        {
            id: "variant_01FY6FS3WT9EN0GVGWDPCBTWZR",
            title: "BLACK / L",
            sku: "MEDUSA-L",
            prices: [
                {
                    id: "ma_01FY6FS3WYWP598C6SNX5AM6WY",
                    currency_code: "eur",
                    amount: 2950,
                },
                {
                    id: "ma_01FY6FS3X049QNK54Q7MAJH0FH",
                    currency_code: "usd",
                    amount: 3350,
                },
                {
                    id: "ma_01FY6FS3X049QNK54Q7MAJH0FH",
                    currency_code: "usd",
                    amount: 3350,
                },
            ],
        },
        {
            id: "variant_01FY6FS3XBQ64A4TBX0N8NGZZK",
            title: "BLACK / XL",
            sku: "MEDUSA-XL",
            prices: [],
        },
    ],
};
exports.Default = Template.bind({});
exports.Default.args = {
    product: testProduct,
};
