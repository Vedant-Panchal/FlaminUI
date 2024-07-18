import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export var cn = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return twMerge(clsx(classes));
};
