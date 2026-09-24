import React from "react";
import ReactDOM from "react-dom/client";

function MyApp() {
  return (
    <div>
      <h1>Custom App |chai</h1>
    </div>
  );
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit Google
  </a>
);
const anotherUser = "chai aur code";
const reactElement2 = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click me to visit Google",
  anotherUser,
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement2);
