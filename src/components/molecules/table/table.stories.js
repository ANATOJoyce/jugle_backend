"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilteringOptions = exports.TableSearchField = exports.TableComponentWithLinkRows = exports.TableComponentWithActionableRows = exports.TableComponentWithFilteringAndSearch = exports.TableComponent = void 0;
var react_1 = require("react");
var index_1 = require("./index");
var table_search_1 = require("./table-search");
var filtering_option_1 = require("./filtering-option");
exports.default = {
    title: "Molecules/Table",
    component: filtering_option_1.default,
};
var FilteringTemplate = function (args) { return <filtering_option_1.default {...args}/>; };
var TableSearchTemplate = function (args) { return <table_search_1.default {...args}/>; };
var TableTemplate = function (args) { return (<index_1.default>
    <index_1.default.Head>
      <index_1.default.HeadRow>
        <index_1.default.HeadCell>Column 1</index_1.default.HeadCell>
        <index_1.default.HeadCell>Column 2</index_1.default.HeadCell>
        <index_1.default.HeadCell>Column 3</index_1.default.HeadCell>
        <index_1.default.HeadCell>Column 4</index_1.default.HeadCell>
        <index_1.default.HeadCell>Column 5</index_1.default.HeadCell>
      </index_1.default.HeadRow>
    </index_1.default.Head>
    <index_1.default.Body>
      <index_1.default.Row {...args}>
        <index_1.default.Cell>value 1</index_1.default.Cell>
        <index_1.default.Cell>value 2</index_1.default.Cell>
        <index_1.default.Cell>value 3</index_1.default.Cell>
        <index_1.default.Cell>value 4</index_1.default.Cell>
        <index_1.default.Cell>value 5</index_1.default.Cell>
      </index_1.default.Row>
    </index_1.default.Body>
  </index_1.default>); };
var TableWithFilterAndSearchTemplate = function (args) { return (<index_1.default filteringOptions={[
        {
            title: "test options",
            options: [
                { title: "All", count: 3, onClick: function () { return console.log("all clicked"); } },
                {
                    title: "test option 1",
                    count: 3,
                    onClick: function () { return console.log("all clicked"); },
                },
                {
                    title: "test option 2",
                    count: 0,
                    onClick: function () { return console.log("all clicked"); },
                },
            ],
        },
        {
            title: "test options",
            options: [
                { title: "All", count: 3, onClick: function () { return console.log("all clicked"); } },
                {
                    title: "test option 1",
                    count: 3,
                    onClick: function () { return console.log("all clicked"); },
                },
                {
                    title: "test option 2",
                    count: 0,
                    onClick: function () { return console.log("all clicked"); },
                },
            ],
        },
    ]} enableSearch handleSearch={console.log}>
    <index_1.default.Head>
      <index_1.default.HeadRow>
        <index_1.default.HeadCell>Column 1</index_1.default.HeadCell>
        <index_1.default.HeadCell>Column 2</index_1.default.HeadCell>
        <index_1.default.HeadCell>Column 3</index_1.default.HeadCell>
        <index_1.default.HeadCell>Column 4</index_1.default.HeadCell>
        <index_1.default.HeadCell>Column 5</index_1.default.HeadCell>
      </index_1.default.HeadRow>
    </index_1.default.Head>
    <index_1.default.Body>
      <index_1.default.Row {...args}>
        <index_1.default.Cell>value 1</index_1.default.Cell>
        <index_1.default.Cell>value 2</index_1.default.Cell>
        <index_1.default.Cell>value 3</index_1.default.Cell>
        <index_1.default.Cell>value 4</index_1.default.Cell>
        <index_1.default.Cell>value 5</index_1.default.Cell>
      </index_1.default.Row>
    </index_1.default.Body>
  </index_1.default>); };
exports.TableComponent = TableTemplate.bind({});
exports.TableComponent.args = {};
exports.TableComponentWithFilteringAndSearch = TableWithFilterAndSearchTemplate.bind({});
exports.TableComponentWithFilteringAndSearch.args = {};
exports.TableComponentWithActionableRows = TableTemplate.bind({});
exports.TableComponentWithActionableRows.args = {
    actions: [
        { label: "action 1", onClick: function () { return console.log("clicked action 1"); } },
        { label: "action 2", onClick: function () { return console.log("clicked action 2"); } },
    ],
};
exports.TableComponentWithLinkRows = TableTemplate.bind({});
exports.TableComponentWithLinkRows.args = {
    linkTo: "https://google.com",
};
exports.TableSearchField = TableSearchTemplate.bind({});
exports.TableSearchField.args = {
    onSeach: function (value) { return console.log(value); },
    placeholder: "Search value",
};
exports.FilteringOptions = FilteringTemplate.bind({});
exports.FilteringOptions.args = {
    title: "test options",
    options: [
        { title: "All", count: 3, onClick: function () { return console.log("all clicked"); } },
        {
            title: "test option 1",
            count: 3,
            onClick: function () { return console.log("all clicked"); },
        },
        {
            title: "test option 2",
            count: 0,
            onClick: function () { return console.log("all clicked"); },
        },
    ],
};
