"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var cross_icon_1 = require("../../../../components/fundamentals/icons/cross-icon");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var mappers_1 = require("../form/mappers");
var pricing_form_context_1 = require("../form/pricing-form-context");
var types_1 = require("../types");
var FormHeader = function (props) {
    var handleSubmit = (0, pricing_form_context_1.usePriceListForm)().handleSubmit;
    var notification = (0, use_notification_1.default)();
    var closeForm = function () {
        if (props.viewType !== types_1.ViewType.CREATE && props.onClose) {
            props.onClose();
        }
        else {
            (0, gatsby_1.navigate)(-1);
        }
    };
    var createPriceList = (0, medusa_react_1.useAdminCreatePriceList)();
    var updatePriceList = (0, medusa_react_1.useAdminUpdatePriceList)(props.id);
    var onPublish = function (values) {
        createPriceList.mutate((0, mappers_1.mapFormValuesToCreatePriceList)(values, types_1.PriceListStatus.ACTIVE), {
            onSuccess: function (_a) {
                var price_list = _a.price_list;
                (0, gatsby_1.navigate)("/a/pricing/".concat(price_list.id));
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var onSaveAsDraft = function (values) {
        createPriceList.mutate((0, mappers_1.mapFormValuesToCreatePriceList)(values, types_1.PriceListStatus.DRAFT), {
            onSuccess: function (_a) {
                var price_list = _a.price_list;
                (0, gatsby_1.navigate)("/a/pricing/".concat(price_list.id));
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var onUpdateDetails = function (values) {
        updatePriceList.mutate((0, mappers_1.mapFormValuesToUpdatePriceListDetails)(values), {
            onSuccess: function (_a) {
                var price_list = _a.price_list;
                closeForm();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var onUpdatePrices = function (values) {
        updatePriceList.mutate((0, mappers_1.mapFormValuesToUpdatePriceListPrices)(values), {
            onSuccess: function (_a) {
                var price_list = _a.price_list;
                props.onClose && props.onClose();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var mainAction;
    var secondaryAction;
    switch (props.viewType) {
        case types_1.ViewType.CREATE:
            mainAction = {
                label: "Publish price list",
                onClick: handleSubmit(onPublish),
            };
            secondaryAction = {
                label: "Save as draft",
                onClick: handleSubmit(onSaveAsDraft),
            };
            break;
        case types_1.ViewType.EDIT_DETAILS:
            mainAction = {
                label: "Save changes",
                onClick: handleSubmit(onUpdateDetails),
            };
            secondaryAction = {
                label: "Cancel",
                onClick: closeForm,
            };
            break;
        case types_1.ViewType.EDIT_PRICES:
            mainAction = {
                label: "Save changes",
                onClick: handleSubmit(onUpdatePrices),
            };
            secondaryAction = {
                label: "Cancel",
                onClick: closeForm,
            };
            break;
    }
    return (<div className="medium:w-8/12 w-full px-8 flex justify-between">
      <button_1.default size="small" variant="ghost" onClick={closeForm} className="border rounded-rounded w-8 h-8">
        <cross_icon_1.default size={20}/>
      </button_1.default>
      <div className="gap-x-small flex">
        <button_1.default onClick={secondaryAction.onClick} size="small" variant="ghost" className="border rounded-rounded">
          {secondaryAction.label}
        </button_1.default>
        <button_1.default size="small" variant="primary" onClick={mainAction.onClick} className="rounded-rounded">
          {mainAction.label}
        </button_1.default>
      </div>
    </div>);
};
exports.default = FormHeader;
