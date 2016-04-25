import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Progress } from "../index";

storiesOf("Progress", module)
  .add("default view", () => {
    return (
      <Progress value={20} total={100} id="1" text="Progress View" />
    );
  })
  .add("indicating view", () => {
    return (
      <Progress value={20} total={100} color="teal" id="1" />
    );
  })
  .add("info view", () => {
    return (
      <Progress value={20} total={100} showProgress={true} color="blue" id="1" />
    );
  })
  .add("extended info view", () => {
    return (
      <Progress value={80} total={100} showProgress={true}
        progressText="{percent} of {value} / {total} - {left}"
        text="{percent} of {value} / {total} - {left}"
        color="blue" id="1" />
    );
  });
