"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// TODO: Redo this with server side sorting
var useSortingOptions = function (products) {
    var _a = (0, react_1.useState)([]), options = _a[0], setOptions = _a[1];
    var _b = (0, react_1.useState)(products), sortedProducts = _b[0], setSortedProducts = _b[1];
    var sortByTitle = function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    };
    var sortByNewest = function (a, b) {
        if (a.created_at < b.created_at) {
            return -1;
        }
        if (a.created_at > b.created_at) {
            return 1;
        }
        return 0;
    };
    var sortByOldest = function (a, b) {
        if (a.created_at > b.created_at) {
            return -1;
        }
        if (a.created_at < b.created_at) {
            return 1;
        }
        return 0;
    };
    (0, react_1.useEffect)(function () {
        setOptions([
            {
                title: "Sort by",
                options: [
                    {
                        title: "All",
                        onClick: function () {
                            setSortedProducts(products);
                        },
                    },
                    {
                        title: "Newest",
                        onClick: function () {
                            var sorted = products.sort(sortByNewest);
                            console.log(sorted);
                            setSortedProducts(sorted);
                        },
                    },
                    {
                        title: "Oldest",
                        onClick: function () {
                            var sorted = products.sort(sortByOldest);
                            console.log(sorted);
                            setSortedProducts(sorted);
                        },
                    },
                    {
                        title: "Title",
                        onClick: function () {
                            var sorted = products.sort(sortByTitle);
                            console.log(sorted);
                            setSortedProducts(sorted);
                        },
                    },
                ],
            },
        ]);
        setSortedProducts(products);
    }, [products]);
    return [sortedProducts, options];
};
exports.default = useSortingOptions;
