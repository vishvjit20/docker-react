function Counter() {
  function increment() {
    console.log("Increase Counter ");
  }
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, `Count 0`),
    React.createElement("button", { onClick: increment }, "Increment")
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
