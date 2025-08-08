"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var custom_table_header_1 = require("../../components/organisms/custom-table-header");
/*
 * Shared header component for "customers" and "customer groups" page
 */
function CustomersPageTableHeader(props) {
    return (<custom_table_header_1.default setActiveView={function (v) {
            if (v === "customers") {
                (0, gatsby_1.navigate)("/a/customers");
            }
            else {
                (0, gatsby_1.navigate)("/a/customers/groups");
            }
        }} views={["customers", "groups"]} activeView={props.activeView}/>);
}
exports.default = CustomersPageTableHeader;
