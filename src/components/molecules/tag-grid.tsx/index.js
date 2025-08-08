"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var use_observe_width_1 = require("../../../hooks/use-observe-width");
var badge_1 = require("../../fundamentals/badge");
var TagGrid = function (_a) {
    var tags = _a.tags, badgeVariant = _a.badgeVariant;
    var containerRef = (0, react_1.useRef)(null);
    var width = (0, use_observe_width_1.useObserveWidth)(containerRef);
    var columns = Math.max(Math.floor(width / 70) - 1, 1);
    var visibleTags = tags.slice(0, columns);
    var remainder = tags.length - columns;
    return (<div className="flex items-center gap-x-2xsmall w-1/2" ref={containerRef}>
      {visibleTags === null || visibleTags === void 0 ? void 0 : visibleTags.map(function (tag, index) {
            return (<badge_1.default className="mr-2xsmall" key={index} variant={badgeVariant}>
            {tag}
          </badge_1.default>);
        })}
      {remainder > 0 && <badge_1.default variant="default">+{remainder}</badge_1.default>}
    </div>);
};
exports.default = TagGrid;
