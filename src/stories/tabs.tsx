import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Tabs, Tab } from "../index";

storiesOf("Tabs", module)
  .add("default view", () => {
    return (
      <Tabs>
        <Tab title="Tab 1">
          Content 1
        </Tab>
        <Tab title="Tab 2">
          Content 2
        </Tab>
      </Tabs>
    );
  });
