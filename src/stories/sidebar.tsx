import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import Sidebar from "../modules/sidebar_view";

storiesOf("Sidebar", module)
  .add("default view", () => {
    function show() {
      $("#sid").sidebar("toggle");
    }
    return (
      <Sidebar id="sid" inverted={true}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <div>Content <button onClick={show}>Show</button></div>
      </Sidebar>
    );
  });
