var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(index_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ label = "Click Me", variant = "primary", className = "" }) => {
  const baseClasses = "px-4 py-2 rounded-xl transition-colors duration-200";
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-black text-black hover:bg-black hover:text-white"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: `${baseClasses} ${variantClasses[variant]} ${className}`, children: label });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
