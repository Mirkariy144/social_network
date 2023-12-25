import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<AppContainer />);
  ReactDOM.unmountComponentAtNode(div);
})