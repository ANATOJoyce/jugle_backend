"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("@storybook/react");
var react_2 = require("react");
var draggable_table_1 = require("./draggable-table");
(0, react_1.storiesOf)("Templates/DraggableTable", module).add("DraggableTable", function () {
    var _a = (0, react_2.useState)([
        {
            id: "1",
            role: "member",
        },
        {
            id: "2",
            role: "member",
        },
        {
            id: "3",
            role: "member",
        },
        {
            id: "4",
            role: "member",
        },
        {
            id: "5",
            role: "member",
        },
        {
            id: "6",
            role: "member",
        },
        {
            id: "7",
            role: "member",
        },
    ]), entities = _a[0], setEntities = _a[1];
    var columns = [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Role",
            accessor: "role",
        },
    ];
    return (<draggable_table_1.default entities={entities} setEntities={setEntities} columns={columns}/>);
});
var Template = function (args) { return (<div className="h-large w-large">
    <draggable_table_1.default {...args}/>
  </div>); };
exports.Default = Template.bind({});
draggable_table_1.default.args = {};
