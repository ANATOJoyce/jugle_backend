"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("@storybook/react");
var react_2 = require("react");
var storybook_addon_state_1 = require("storybook-addon-state");
var _1 = require(".");
var values = [
    {
        id: "1",
        name: "Americas",
        countries: [
            { display_name: "United States" },
            { display_name: "Canada" },
            { display_name: "Mexico" },
        ],
        description: "Payment providers: not configured - Fulfillment providers: not configured",
    },
    {
        id: "2",
        name: "Europe",
        countries: [
            { display_name: "United Kingdom" },
            { display_name: "France" },
            { display_name: "Germany" },
            { display_name: "Italy" },
            { display_name: "Spain" },
            { display_name: "Switzerland" },
        ],
        description: "Payment providers: not configured - Fulfillment providers: not configured",
    },
];
var val = "1";
(0, react_1.storiesOf)("Organisms/RadioGroup", module).add("controlled", function () {
    var _a = (0, storybook_addon_state_1.default)("value", val), value = _a[0], setValue = _a[1];
    return (<_1.default.Root value={value} onValueChange={function (v) { return setValue(v); }}>
      {values.map(function (value) {
            return (<_1.default.Item key={value.id} value={value.id} label={value.name} sublabel={"(".concat(value.countries
                    .map(function (c) { return c.display_name; })
                    .join(", "), ")")} description={value.description}/>);
        })}
    </_1.default.Root>);
});
var Template = function (args) { return (<div>
    <_1.default.Root {...args}>
      {values.map(function (value) {
        return (<_1.default.Item key={value.id} value={value.id} label={value.name} description={value.description}/>);
    })}
    </_1.default.Root>
  </div>); };
exports.Default = Template.bind({});
exports.Default.args = {
    value: val,
    onValueChange: function (v) {
        val = v;
    },
};
