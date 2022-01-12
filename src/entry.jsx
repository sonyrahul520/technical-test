import React from "react";
import ReactDom from "react-dom";

const Main = () => {
  return <div>Hello world</div>;
};

ReactDom.render(<Main />, document.getElementById("react-container"));
