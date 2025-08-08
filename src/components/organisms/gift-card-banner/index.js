"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var currencies_1 = require("../../../utils/currencies");
var prices_1 = require("../../../utils/prices");
var edit_icon_1 = require("../../fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var unpublish_icon_1 = require("../../fundamentals/icons/unpublish-icon");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var banner_card_1 = require("../../molecules/banner-card");
var tag_grid_tsx_1 = require("../../molecules/tag-grid.tsx");
var GiftCardBanner = function (_a) {
    var title = _a.title, status = _a.status, thumbnail = _a.thumbnail, description = _a.description, variants = _a.variants, defaultCurrency = _a.defaultCurrency, onEdit = _a.onEdit, onUnpublish = _a.onUnpublish, onDelete = _a.onDelete;
    var actions = [
        {
            label: "Edit",
            onClick: onEdit,
            icon: <edit_icon_1.default size={16}/>,
        },
        {
            label: status === "published" ? "Unpublish" : "Publish",
            onClick: onUnpublish,
            icon: <unpublish_icon_1.default size={16}/>,
        },
        {
            label: "Delete",
            onClick: onDelete,
            icon: <trash_icon_1.default size={16}/>,
            variant: "danger",
        },
    ];
    var denominations = (0, react_1.useMemo)(function () {
        return variants
            .map(function (variant) {
            var price = variant.prices.find(function (price) { return price.currency_code === defaultCurrency; });
            if (!price) {
                return "";
            }
            return "".concat((0, prices_1.normalizeAmount)(defaultCurrency, price.amount), " ").concat(defaultCurrency.toUpperCase());
        })
            .filter(Boolean);
    }, [variants, defaultCurrency, currencies_1.currencies]);
    return (<banner_card_1.default title={title} thumbnail={thumbnail} actions={actions}>
      <banner_card_1.default.Description>{description}</banner_card_1.default.Description>
      <banner_card_1.default.Footer>
        <div className="flex items-center justify-between">
          <tag_grid_tsx_1.default tags={denominations} badgeVariant="default"/>
          <status_indicator_1.default variant={status === "published" ? "success" : "danger"} title={status === "published" ? "Published" : "Unpublished"}/>
        </div>
      </banner_card_1.default.Footer>
    </banner_card_1.default>);
};
exports.default = GiftCardBanner;
