import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Message } from "../index";

storiesOf("Message", module)
  .add("default view", () => {
    return (
      <Message>Text</Message>
    );
  })
  .add("color view", () => {
    return (
      <div>
        <Message color="success">Success</Message>
        <Message color="error">Error</Message>
        <Message color="teal">Teal</Message>
      </div>
    );
  })
  .add("icon and header  view", () => {
    return (
      <Message icon="bug" header="My Header">Text</Message>
    );
  });
