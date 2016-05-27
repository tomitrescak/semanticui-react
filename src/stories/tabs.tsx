import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Tabs, Tab } from "../index";

storiesOf("Tabs", module)
  .add("default view", () => {
    return (
      <Tabs id="tabs">
        <Tab title="Tab 1">
          Content 1
        </Tab>
        <Tab title="Tab 2">
          <Tabs id="tabs2">
            <Tab title="Tab 3">
              Content 1
            </Tab>
            <Tab title="Tab 4">
              Content 2
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    );
  })
  .add("buttons view", () => {
    return (
      <Tabs id="tabs" type="buttons">
        <Tab title="Tab 1">
          Content 1
        </Tab>
        <Tab title="Tab 2">
          Content 2
        </Tab>
      </Tabs>
    );
  })
  .add("lines view", () => {
    return (
      <Tabs id="tabs" type="lines">
        <Tab title="Tab 1">
          Content 1
        </Tab>
        <Tab title="Tab 2">
          Content 2
        </Tab>
      </Tabs>
    );
  })
  .add("custom names", () => {
    return (
      <Tabs id="tabs">
        <Tab title="Tab 1" name="tab1">
          Content 1
        </Tab>
        <Tab title="Tab 2" name="tab2">
        </Tab>
      </Tabs>
    );
  })
  .add("link view", () => {
    return (
      <Tabs id="tabs" linkBased={true} >
        <Tab title="Tab 1" name="tab1" url="a/tab1">
          Content 1
        </Tab>
        <Tab title="Tab 2" name="tab2" url="a/tab2">
        </Tab>
      </Tabs>
    );
  });
