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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@lib/utils/cn";
import { switchVariant } from "@lib/utils/variant";
var Button = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? "" : _b, className = _a.className, props = __rest(_a, ["children", "variant", "className"]);
    return (_jsx("button", __assign({ className: cn("flex items-center gap-3 rounded-lg bg-primary-500 px-6 py-2 font-geist font-semibold text-rose-100 shadow-md duration-200 ease-in-out hover:shadow-lg hover:brightness-95", className, switchVariant(variant)) }, props, { children: children })));
};
export default Button;
