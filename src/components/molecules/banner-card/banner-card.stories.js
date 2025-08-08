"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCardWithLongText = exports.GiftCard = exports.CTA = void 0;
var react_1 = require("react");
var _1 = require(".");
var edit_icon_1 = require("../../fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var unpublish_icon_1 = require("../../fundamentals/icons/unpublish-icon");
exports.default = {
    title: "Molecules/BannerCard",
    component: _1.default,
};
var Template = function (_a) {
    var cardArgs = _a.cardArgs, descriptionArgs = _a.descriptionArgs, text = _a.text;
    return (<_1.default {...cardArgs}>
    <_1.default.Description {...descriptionArgs}>{text}</_1.default.Description>
  </_1.default>);
};
exports.CTA = Template.bind({});
exports.CTA.args = {
    cardArgs: {
        title: "You’re ready to sell your first gift card?",
    },
    descriptionArgs: {
        cta: {
            label: "Create Gift Card",
            onClick: function () { },
        },
    },
    text: "No gift card has been added yet. Click the \"Create Gift Card\" button to add one. This is a growth opportunity!",
};
exports.GiftCard = Template.bind({});
exports.GiftCard.args = {
    cardArgs: {
        title: "Tekla Gift Card",
        thumbnail: "https://images.ctfassets.net/4g6al16haqoj/kZT0jwrTOTGbDpK3XlRZQ/acb10c53c1acdd53cf1336b5f26fbb10/giftcard.jpg",
        actions: [
            {
                label: "Edit",
                onClick: function () { },
                icon: <edit_icon_1.default size={16}/>,
            },
            {
                label: "Unpublish",
                onClick: function () { },
                icon: <unpublish_icon_1.default size={16}/>,
            },
            {
                label: "Delete",
                onClick: function () { },
                icon: <trash_icon_1.default size={16}/>,
                variant: "danger",
            },
        ],
    },
    text: "For the one partial to blank canvases, spontaneity, chance encounters and plot twists. The Tekla Gift Card is available in either digital or hard-copy format.",
};
exports.GiftCardWithLongText = Template.bind({});
exports.GiftCardWithLongText.args = {
    cardArgs: {
        title: "Tekla Gift Card",
        thumbnail: "https://images.ctfassets.net/4g6al16haqoj/kZT0jwrTOTGbDpK3XlRZQ/acb10c53c1acdd53cf1336b5f26fbb10/giftcard.jpg",
        actions: [
            {
                label: "Edit",
                onClick: function () { },
                icon: <edit_icon_1.default size={16}/>,
            },
            {
                label: "Unpublish",
                onClick: function () { },
                icon: <unpublish_icon_1.default size={16}/>,
            },
            {
                label: "Delete",
                onClick: function () { },
                icon: <trash_icon_1.default size={16}/>,
                variant: "danger",
            },
        ],
    },
    text: "For the one partial to blank canvases, spontaneity, chance encounters and plot twists. The Tekla Gift Card is available in either digital or hard-copy format. For the one partial to blank canvases, spontaneity, chance encounters and plot twists. The Tekla Gift Card is available in either digital or hard-copy format. For the one partial to blank canvases, spontaneity, chance encounters and plot twists. The Tekla Gift Card is available in either digital or hard-copy format.",
};
