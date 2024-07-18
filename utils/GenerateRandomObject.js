"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var generateRandomColor = function () {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "".concat(red, ", ").concat(green, ", ").concat(blue);
};
var generateRandomSize = function () {
    var size = Math.floor(Math.random() * 101);
    return "".concat(size, "%");
};
var generateRandomPosition = function () {
    var top = "".concat(Math.floor(Math.random() * 100), "%");
    var left = "".concat(Math.floor(Math.random() * 100), "%");
    return { top: top, left: left };
};
var generateRandomAnimation = function () {
    var animations = ["moveVertical", "moveHorizontal", "moveInCircle"];
    var randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};
var generateRandomDuration = function () {
    var duration = Math.floor(Math.random() * 20);
    return "".concat(duration, "s");
};
var generateRandomObject = function () {
    return __assign(__assign({ color: generateRandomColor(), size: generateRandomSize() }, generateRandomPosition()), { animation: generateRandomAnimation(), duration: generateRandomDuration() });
};
