"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var date_picker_1 = require("../../../../components/atoms/date-picker/date-picker");
var time_picker_1 = require("../../../../components/atoms/date-picker/time-picker");
var switch_1 = require("../../../../components/atoms/switch");
var select_1 = require("../../../../components/molecules/select");
var accordion_1 = require("../../../../components/organisms/accordion");
var pricing_form_context_1 = require("../form/pricing-form-context");
var types_1 = require("../types");
var checkForEnabledConfigs = function (config) {
    var _a;
    var enabledConfigs = [];
    if (((_a = config.customer_groups) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        enabledConfigs.push(types_1.ConfigurationField.CUSTOMER_GROUPS);
    }
    if (config.starts_at) {
        enabledConfigs.push(types_1.ConfigurationField.STARTS_AT);
    }
    if (config.ends_at) {
        enabledConfigs.push(types_1.ConfigurationField.ENDS_AT);
    }
    return enabledConfigs;
};
var Configuration = function () {
    var _a = (0, medusa_react_1.useAdminCustomerGroups)(), customer_groups = _a.customer_groups, isLoading = _a.isLoading;
    var _b = (0, pricing_form_context_1.usePriceListForm)(), control = _b.control, handleConfigurationSwitch = _b.handleConfigurationSwitch, configFields = _b.configFields;
    var _c = (0, react_1.useState)(checkForEnabledConfigs(configFields)), openItems = _c[0], setOpenItems = _c[1];
    return (<accordion_1.default.Item forceMountContent title="Configuration" tooltip="Optional configuration for the price list" value="configuration" description="The price overrides apply from the time you hit the publish button and forever if left untouched.">
      <accordion_1.default type="multiple" value={openItems} onValueChange={function (values) {
            handleConfigurationSwitch(values);
            setOpenItems(values);
        }}>
        <div className="mt-5">
          <accordion_1.default.Item headingSize="medium" forceMountContent className="border-b-0" title="Price overrides has a start date?" subtitle="Schedule the price overrides to activate in the future." value="starts_at" customTrigger={<switch_1.default checked={openItems.indexOf("starts_at") > -1}/>}>
            <div className={(0, clsx_1.default)("flex items-center gap-xsmall accordion-margin-transition", {
            "mt-4": openItems.indexOf("starts_at") > -1,
        })}>
              <react_hook_form_1.Controller name="starts_at" control={control} render={function (_a) {
            var value = _a.value, onChange = _a.onChange;
            return (<>
                      <date_picker_1.default date={value} label="Start date" onSubmitDate={onChange}/>
                      <time_picker_1.default date={value} label="Start date" onSubmitDate={onChange}/>
                    </>);
        }}/>
            </div>
          </accordion_1.default.Item>
          <accordion_1.default.Item headingSize="medium" forceMountContent className="border-b-0" title="Price overrides has an expiry date?" subtitle="Schedule the price overrides to deactivate in the future." value="ends_at" customTrigger={<switch_1.default checked={openItems.indexOf("ends_at") > -1}/>}>
            <div className={(0, clsx_1.default)("flex items-center gap-xsmall accordion-margin-transition", {
            "mt-4": openItems.indexOf("ends_at") > -1,
        })}>
              <react_hook_form_1.Controller name="ends_at" control={control} render={function (_a) {
            var value = _a.value, onChange = _a.onChange;
            return (<>
                      <date_picker_1.default date={value} label="End date" onSubmitDate={onChange}/>
                      <time_picker_1.default date={value} label="End date" onSubmitDate={onChange}/>
                    </>);
        }}/>
            </div>
          </accordion_1.default.Item>
          <accordion_1.default.Item headingSize="medium" forceMountContent className="border-b-0" title="Customer availabilty" subtitle="Specifiy which customer groups the price overrides should apply for." value="customer_groups" customTrigger={<switch_1.default checked={openItems.indexOf("customer_groups") > -1}/>}>
            <react_hook_form_1.Controller name="customer_groups" control={control} css={{ width: "100%" }} render={function (_a) {
            var value = _a.value, onChange = _a.onChange, ref = _a.ref;
            return (<div className={(0, clsx_1.default)("flex items-center gap-xsmall accordion-margin-transition w-full", {
                    "mt-4": openItems.indexOf("customer_groups") > -1,
                })}>
                    <select_1.default value={value} label="Customer Groups" onChange={onChange} isMultiSelect fullWidth enableSearch hasSelectAll isLoading={isLoading} options={(customer_groups === null || customer_groups === void 0 ? void 0 : customer_groups.map(function (cg) { return ({
                    label: cg.name,
                    value: cg.id,
                }); })) || []} ref={ref}/>
                  </div>);
        }}/>
          </accordion_1.default.Item>
        </div>
      </accordion_1.default>
    </accordion_1.default.Item>);
};
exports.default = Configuration;
