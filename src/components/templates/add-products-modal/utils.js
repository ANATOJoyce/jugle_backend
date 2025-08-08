"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapIdsToItems = void 0;
var lodash_1 = require("lodash");
/**
 * Given a list of ids, we return the entities corresponding to those ids
 * The `source` list is only used when adding items and only contains entities for at least the difference between `ids` and `items`
 * e.g: items: [entityA, entityB] --- ids: [a,b,c] --- source: [entityC, entityD, ...]
 */
var mapIdsToItems = function (items, ids, source) {
    if (items === void 0) { items = []; }
    if (ids === void 0) { ids = []; }
    if (source === void 0) { source = []; }
    var itemIds = items.map(function (item) { return item === null || item === void 0 ? void 0 : item.id; });
    /* we need to add an entity to the selectedItems list */
    if (items.length < ids.length) {
        var added = (0, lodash_1.difference)(ids, itemIds);
        var newItems = added.map(function (id) { return source.find(function (s) { return s.id === id; }); });
        return items.concat(newItems);
    }
    else if (items.length > ids.length) {
        /* we need to remove an entity from the selectedItems */
        var removed = (0, lodash_1.difference)(itemIds, ids);
        var newItems_1 = items.slice();
        removed.forEach(function (id) {
            var index = newItems_1.findIndex(function (item) { return (item === null || item === void 0 ? void 0 : item.id) === id; });
            newItems_1.splice(index, 1);
        });
        return newItems_1;
    }
    return items;
};
exports.mapIdsToItems = mapIdsToItems;
