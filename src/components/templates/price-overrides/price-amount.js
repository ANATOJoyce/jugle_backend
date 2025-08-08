"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_toggle_state_1 = require("../../../hooks/use-toggle-state");
var currencies_1 = require("../../../utils/currencies");
var button_1 = require("../../fundamentals/button");
var eye_icon_1 = require("../../fundamentals/icons/eye-icon");
var eye_off_icon_1 = require("../../fundamentals/icons/eye-off-icon");
var medusa_price_input_1 = require("../../organisms/medusa-price-input");
var PriceAmount = function (_a) {
    var _b, _c, _d;
    var value = _a.value, onChange = _a.onChange;
    var _e = (0, use_toggle_state_1.default)(), showRegions = _e.state, toggle = _e.toggle;
    var currencyName = (_c = currencies_1.currencies[(_b = value.currency_code) === null || _b === void 0 ? void 0 : _b.toUpperCase()]) === null || _c === void 0 ? void 0 : _c.name;
    return (<div className="flex flex-col gap-3 py-3 first:border-t border-grey-20 border-solid border-b last:border-b-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inter-base-semibold">
            <span className="mr-2 uppercase">{value.currency_code}</span>
            <span className="inter-base-regular text-grey-50 capitalize">
              {currencyName}
            </span>
          </div>
          {((_d = value.region) === null || _d === void 0 ? void 0 : _d.countries) ? (<button_1.default variant="secondary" size="small" className="rounded-rounded h-[32px]" onClick={toggle}>
              <div className="flex items-center gap-2">
                {showRegions ? <eye_off_icon_1.default size={20}/> : <eye_icon_1.default size={20}/>}
                <span>Show regions</span>
              </div>
            </button_1.default>) : null}
        </div>
        <div className="basis-[220px]">
          <medusa_price_input_1.default amount={value.amount} onChange={onChange} currency={currencies_1.currencies[value.currency_code.toUpperCase()]}/>
        </div>
      </div>

      {/* missing core support */}
      {/* {showRegions && (
          <ul>
            {value.region?.countries.map((country) => (
              <li key={country.id} className="flex items-center justify-between">
                <div>
                  <p className="inter-base-regular text-grey-50">
                    {country.display_name}
                  </p>
                </div>
                <div className="basis-[220px]">
                  <PriceInput
                    amount={600}
                    currency={{
                      code: "eur",
                      name: "Euro",
                      decimal_digits: 2,
                      symbol: "€",
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )} */}
    </div>);
};
exports.default = PriceAmount;
