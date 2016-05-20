import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Dropdown, DropdownItem, DropdownButton, Menu, MenuItem, Form } from "../index";

storiesOf("Dropdown", module)
  .add("default view", () => {
    return (
      <Dropdown activation="hover" id="test" defaultText="Dropdown">
        <DropdownItem text="First" value="first" />
        <DropdownItem text="Second" />
      </Dropdown>
    );
  })
  .add("basic view", () => {
    return (
      <Dropdown activation="hover" id="test" text="Dropdown" selection={false}>
        <DropdownItem text="First" value="first" />
        <DropdownItem text="Second" />
      </Dropdown>
    );
  })
  .add("search view", () => {
    return (
      <Dropdown activation="hover" id="test" text="Dropdown" search={true}>
        <DropdownItem text="First" value="first" />
        <DropdownItem text="Second" />
        <DropdownItem text="Third" />
      </Dropdown>
    );
  })
  .add("multiple view", () => {
    return (
      <Dropdown activation="hover" id="test" text="Dropdown" multiple={true}>
        <DropdownItem text="First" value="first" />
        <DropdownItem text="Second" />
        <DropdownItem text="Third" />
      </Dropdown>
    );
  })
  .add("label view", () => {
    return (
      <Form>
        <Dropdown classes="compact selection" activation="hover" id="test" text="Dropdown" multiple={true} label="Label" inline={true}>
          <DropdownItem text="First" value="first" />
          <DropdownItem text="Second" />
          <DropdownItem text="Third" />
        </Dropdown>

        <Dropdown classes="compact selection" activation="hover" id="test" text="Dropdown" multiple={true} label="Label">
          <DropdownItem text="First" value="first" />
          <DropdownItem text="Second" />
          <DropdownItem text="Third" />
        </Dropdown>
      </Form>

    );
  });


storiesOf("DropdownButton", module)
  .add("default view", () => {
    return (
      <DropdownButton activation="hover" id="test" icon="bug" pointing="top left">
        <Menu>
          <MenuItem text="Item 1" link="#" />
          <MenuItem text="Item 2" link="#" />
          <MenuItem text="Item 3" link="#" />
        </Menu>
      </DropdownButton>
    );
  })
