// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ label = "Click Me", variant = "primary", className = "" }) => {
  const baseClasses = "px-4 py-2 rounded-xl transition-colors duration-200";
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-black text-black hover:bg-black hover:text-white"
  };
  return /* @__PURE__ */ jsx("button", { className: `${baseClasses} ${variantClasses[variant]} ${className}`, children: label });
};
export {
  Button
};
