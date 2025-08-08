"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consolidateImages = void 0;
var consolidateImages = function (images, uploaded) {
    var result = [];
    var i = 0;
    var j = 0;
    for (i = 0; i < images.length; i++) {
        var image = images[i].url;
        if (image.startsWith("blob")) {
            result.push(uploaded[j]);
            j++;
        }
        else {
            result.push(image);
        }
    }
    return result;
};
exports.consolidateImages = consolidateImages;
