"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var react_1 = require("react");
var details_1 = require("./details");
var Collections = function () {
    return (<router_1.Router className="h-full">
      <details_1.default path=":id"/>
    </router_1.Router>);
};
exports.default = Collections;
