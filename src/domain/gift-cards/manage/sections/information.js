"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var unpublish_icon_1 = require("../../../../components/fundamentals/icons/unpublish-icon");
var input_1 = require("../../../../components/molecules/input");
var select_1 = require("../../../../components/molecules/select");
var status_selector_1 = require("../../../../components/molecules/status-selector");
var tag_input_1 = require("../../../../components/molecules/tag-input");
var body_card_1 = require("../../../../components/organisms/body-card");
var details_collapsible_1 = require("../../../../components/organisms/details-collapsible");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var gift_card_form_context_1 = require("../form/gift-card-form-context");
var Information = function (_a) {
    var giftCard = _a.giftCard;
    var _b = (0, gift_card_form_context_1.useGiftCardForm)(), register = _b.register, setValue = _b.setValue, control = _b.control;
    var notification = (0, use_notification_1.default)();
    var product_types = (0, medusa_react_1.useAdminProductTypes)(undefined, {
        cacheTime: 0,
    }).product_types;
    var typeOptions = (product_types === null || product_types === void 0 ? void 0 : product_types.map(function (tag) { return ({ label: tag.value, value: tag.id }); })) || [];
    var updateGiftCard = (0, medusa_react_1.useAdminUpdateProduct)(giftCard.id);
    var deleteGiftCard = (0, medusa_react_1.useAdminDeleteProduct)(giftCard.id);
    var setNewType = function (value) {
        var newType = {
            label: value,
            value: value,
        };
        typeOptions.push(newType);
        setValue("type", newType);
        return newType;
    };
    var onUpdate = function () {
        updateGiftCard.mutate({
            // @ts-ignore
            status: giftCard.status === "draft" ? "published" : "draft",
        }, {
            onSuccess: function () {
                notification("Success", "Gift card updated successfully", "success");
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var onDelete = function () {
        deleteGiftCard.mutate(undefined, {
            onSuccess: function () {
                notification("Success", "Gift card updated successfully", "success");
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    return (<body_card_1.default title="Product information" subtitle="Manage the settings for your Gift Card" className={"h-auto w-full"} status={<GiftCardStatusSelector currentStatus={giftCard.status} onUpdate={onUpdate}/>} actionables={[
            {
                label: (giftCard === null || giftCard === void 0 ? void 0 : giftCard.status) !== "published"
                    ? "Publish Gift Card"
                    : "Unpublish Gift Card",
                onClick: onUpdate,
                icon: <unpublish_icon_1.default size="16"/>,
            },
            {
                label: "Delete Gift Card",
                onClick: onDelete,
                variant: "danger",
                icon: <trash_icon_1.default size="16"/>,
            },
        ]}>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-8">
          <div className="flex flex-col w-1/2 space-y-4">
            <input_1.default label="Name" name="title" placeholder="Add name" defaultValue={giftCard === null || giftCard === void 0 ? void 0 : giftCard.title} ref={register}/>
            <input_1.default label="Subtitle" name="subtitle" placeholder="Add a subtitle" defaultValue={giftCard === null || giftCard === void 0 ? void 0 : giftCard.subtitle} ref={register}/>
          </div>
          <input_1.default label="Description" name="description" placeholder="Add a description" defaultValue={giftCard === null || giftCard === void 0 ? void 0 : giftCard.description} className="w-1/2" ref={register}/>
        </div>
        <details_collapsible_1.default triggerProps={{ className: "ml-2" }} contentProps={{
            forceMount: true,
        }}>
          <div className="flex space-x-8 pb-4">
            <div className="flex flex-col w-1/2 space-y-4">
              <input_1.default label="Handle" name="handle" placeholder="Product handle" defaultValue={giftCard === null || giftCard === void 0 ? void 0 : giftCard.handle} ref={register} tooltipContent="URL of the product"/>
              <react_hook_form_1.Controller control={control} name="type" render={function (_a) {
            var value = _a.value, onChange = _a.onChange;
            return (<select_1.default label="Type" placeholder="Select type..." options={typeOptions} onChange={onChange} value={value} isCreatable onCreateOption={function (value) {
                    return setNewType(value);
                }} clearSelected/>);
        }}/>
            </div>
            <react_hook_form_1.Controller name="tags" render={function (_a) {
            var onChange = _a.onChange, value = _a.value;
            return (<tag_input_1.default label="Tags (separated by comma)" placeholder="Spring, Summer..." onChange={onChange} values={value || []}/>);
        }} control={control}/>
          </div>
        </details_collapsible_1.default>
      </div>
    </body_card_1.default>);
};
var GiftCardStatusSelector = function (_a) {
    var currentStatus = _a.currentStatus, onUpdate = _a.onUpdate;
    return (<status_selector_1.default activeState="Published" draftState="Draft" isDraft={currentStatus === "draft"} onChange={onUpdate}/>);
};
exports.default = Information;
