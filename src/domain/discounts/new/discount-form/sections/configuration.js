"use strict";
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
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var date_picker_1 = require("../../../../../components/atoms/date-picker/date-picker");
var time_picker_1 = require("../../../../../components/atoms/date-picker/time-picker");
var switch_1 = require("../../../../../components/atoms/switch");
var availability_duration_1 = require("../../../../../components/molecules/availability-duration");
var input_1 = require("../../../../../components/molecules/input");
var accordion_1 = require("../../../../../components/organisms/accordion");
var discount_form_context_1 = require("../form/discount-form-context");
var getActiveTabs = function (promotion) {
    var activeTabs = [];
    if (promotion.usage_limit !== null) {
        activeTabs.push("usage_limit");
    }
    if (promotion.starts_at !== null) {
        activeTabs.push("starts_at");
    }
    if (promotion.ends_at !== null) {
        activeTabs.push("ends_at");
    }
    if (promotion.valid_duration !== null) {
        activeTabs.push("valid_duration");
    }
    return activeTabs;
};
var Settings = function (_a) {
    var promotion = _a.promotion, _b = _a.isEdit, isEdit = _b === void 0 ? false : _b;
    var _c = (0, discount_form_context_1.useDiscountForm)(), register = _c.register, control = _c.control, isDynamic = _c.isDynamic, hasExpiryDate = _c.hasExpiryDate, handleConfigurationChanged = _c.handleConfigurationChanged;
    var _d = react_1.default.useState(isEdit && promotion
        ? getActiveTabs(promotion)
        : __spreadArray([], (hasExpiryDate ? ["ends_at"] : []), true)), openItems = _d[0], setOpenItems = _d[1];
    var marginTransition = "transition-[margin] duration-300 ease-[cubic-bezier(0.87, 0, 0.13, 1) forwards]";
    var _e = (0, react_1.useState)(false), render = _e[0], setRender = _e[1];
    (0, react_1.useEffect)(function () {
        setTimeout(function () { return setRender(true); }, 300);
    }, []);
    return (<div className="flex flex-col">
      <accordion_1.default className="pt-7 text-grey-90" type="multiple" value={openItems || []} onValueChange={function (values) {
            handleConfigurationChanged(values);
            setOpenItems(values);
        }}>
        {render && (<>
            <accordion_1.default.Item headingSize="medium" forceMountContent className="border-b-0" title="Start date" subtitle="Schedule the discount to activate in the future." tooltip="If you want to schedule the discount to activate in the future, you can set a start date here, otherwise the discount will be active immediately." value="starts_at" customTrigger={<switch_1.default checked={openItems.indexOf("starts_at") > -1}/>}>
              <div className={(0, clsx_1.default)("flex items-center gap-xsmall", marginTransition, {
                "mt-4": openItems.indexOf("starts_at") > -1,
            })}>
                <react_hook_form_1.Controller name="starts_at" control={control} render={function (_a) {
                var value = _a.value, onChange = _a.onChange;
                var date = value || new Date();
                return (<>
                        <date_picker_1.default date={date} label="Start date" onSubmitDate={onChange}/>
                        <time_picker_1.default label="Start time" date={date} onSubmitDate={onChange}/>
                      </>);
            }}/>
              </div>
            </accordion_1.default.Item>
            <accordion_1.default.Item headingSize="medium" forceMountContent className="border-b-0" title="Discount has an expiry date?" subtitle="Schedule the discount to deactivate in the future." tooltip="If you want to schedule the discount to deactivate in the future, you can set an expiry date here." value="ends_at" customTrigger={<switch_1.default checked={openItems.indexOf("ends_at") > -1}/>}>
              <div className={(0, clsx_1.default)("flex items-center gap-xsmall", marginTransition, {
                "mt-4": openItems.indexOf("ends_at") > -1,
            })}>
                <react_hook_form_1.Controller name="ends_at" control={control} render={function (_a) {
                var value = _a.value, onChange = _a.onChange;
                var date = value ||
                    new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
                return (<>
                        <date_picker_1.default date={date} label="Expiry date" onSubmitDate={onChange}/>
                        <time_picker_1.default label="Expiry time" date={date} onSubmitDate={onChange}/>
                      </>);
            }}/>
              </div>
            </accordion_1.default.Item>
            <accordion_1.default.Item headingSize="medium" forceMountContent className="border-b-0" title="Limit the number of redemptions?" subtitle="Limit applies across all customers, not per customer." tooltip="If you wish to limit the amount of times a customer can redeem this discount, you can set a limit here." value="usage_limit" customTrigger={<switch_1.default checked={openItems.indexOf("usage_limit") > -1}/>}>
              <div className={(0, clsx_1.default)(marginTransition, {
                "mt-4": openItems.indexOf("usage_limit") > -1,
            })}>
                <input_1.default name="usage_limit" ref={register({ valueAsNumber: true })} label="Number of redemptions" type="number" placeholder="5" min={1}/>
              </div>
            </accordion_1.default.Item>

            {isDynamic && (<accordion_1.default.Item disabled={!isDynamic} headingSize="medium" forceMountContent title="Availability duration?" className="border-b-0" subtitle="Set the duration of the discount." tooltip="Select a discount type" value="valid_duration" customTrigger={<switch_1.default checked={openItems.indexOf("valid_duration") > -1}/>}>
                <div className={(0, clsx_1.default)(marginTransition, {
                    "mt-4": openItems.indexOf("valid_duration") > -1,
                })}>
                  <react_hook_form_1.Controller name="valid_duration" control={control} render={function (_a) {
                    var value = _a.value, onChange = _a.onChange;
                    return (<availability_duration_1.default value={value !== null && value !== void 0 ? value : undefined} onChange={onChange}/>);
                }}/>
                </div>
              </accordion_1.default.Item>)}
          </>)}
      </accordion_1.default>
    </div>);
};
exports.default = Settings;
