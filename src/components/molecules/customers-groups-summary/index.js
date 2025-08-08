"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_1 = require("lodash");
/*
 * Render a summary of groups to which the customer belongs
 */
function CustomersGroupsSummary(props) {
    var groups = (0, lodash_1.sortBy)(props.groups, "name");
    if (!groups.length) {
        return null;
    }
    var left = groups.length - 1;
    var leadName = groups[0].name;
    var allGroups = groups.map(function (g) { return g.name; }).join(", ");
    return (<div title={allGroups} className="text-small">
      <span>{leadName}</span>
      {!!left && <span className="text-grey-40"> + {left} more</span>}
    </div>);
}
exports.default = CustomersGroupsSummary;
