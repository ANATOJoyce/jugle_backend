"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_json_view_1 = require("react-json-view");
var body_card_1 = require("../body-card");
/**
 * Renders a (collapsed) JSON tree section.
 *
 * @param {Object} props - React props
 * @return {Object} - React element
 */
function RawJSON(props) {
    var title = props.title, data = props.data;
    if (!data) {
        return null;
    }
    var dataCount = Object.keys(data).length;
    return (<body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title={title}>
      <div className="flex flex-col min-h-[100px] mt-4 bg-grey-5 px-3 py-2 h-full rounded-rounded">
        <span className="inter-base-semibold">
          Data{" "}
          <span className="text-grey-50 inter-base-regular">
            ({dataCount} {dataCount === 1 ? "item" : "items"})
          </span>
        </span>
        <div className="flex flex-grow items-center mt-4">
          <react_json_view_1.default name={false} collapsed={true} src={data}/>
        </div>
      </div>
    </body_card_1.default>);
}
exports.default = RawJSON;
