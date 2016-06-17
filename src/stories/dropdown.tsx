import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Dropdown, DropdownItem, DropdownButton, Menu, MenuItem, Form } from "../index";

storiesOf("Dropdown", module)
  .add("default view", () => {
    return (
      <Dropdown activation="hover" id="test" defaultText="Dropdown">
        <DropdownItem text="First" value="first" />
        <DropdownItem text="Second" value="second" />
      </Dropdown>
    );
  })
  .add("basic view", () => {
    return (
      <Dropdown activation="hover" id="test" text="Dropdown" selection={false}>
        <DropdownItem text="First" value="first" />
        <DropdownItem text="Second" value="second" />
      </Dropdown>
    );
  })
  .add("search view", () => {
    return (
      <Dropdown activation="hover" id="test" text="Dropdown" search={true}>
        <DropdownItem text="First" value="first" />
        <DropdownItem text="Second" value="second" />
        <DropdownItem text="Third" value="third" />
      </Dropdown>
    );
  })
  .add("multiple view", () => {
    return (
      <Dropdown activation="hover" id="test" text="Dropdown" multiple={true}>
        <DropdownItem text="First" value="first" />
        <DropdownItem text="Second" value="second" />
        <DropdownItem text="Third" value="third" />
      </Dropdown>
    );
  })
  .add("change action", () => {
    return (
      <Dropdown activation="hover" id="test" text="Dropdown" onChange={action("changed")}>
        <DropdownItem text="First" value="2" />
        <DropdownItem text="Second" value="3" />
        <DropdownItem text="Third" value="4" />
      </Dropdown>
    );
  })
  .add("pre-selected value", () => {
    return (
      <Dropdown activation="hover" id="test" defaultValue={3} text="Dropdown">
        <DropdownItem text="First" value="2" />
        <DropdownItem text="Second" value="3" />
        <DropdownItem text="Third" value="4" />
      </Dropdown>
    );
  })
  .add("label view", () => {
    return (
      <Form>
        <Dropdown classes="compact selection" activation="hover" id="test1" text="Dropdown"  label="Label" inline={true}>
          <DropdownItem text="First" value="first" />
          <DropdownItem text="Second" value="second" />
          <DropdownItem text="Third" value="third" />
        </Dropdown>

        <Dropdown classes="compact selection" activation="hover" id="test2" text="Dropdown" label="Label" >
          <DropdownItem text="First" value="first" />
          <DropdownItem text="Second" value="second" />
          <DropdownItem text="Third" value="third" />
        </Dropdown>

        <Dropdown classes="compact selection" activation="hover" id="test3" text="Dropdown" label="Label" >
          <DropdownItem text="First" value="first" />
          <DropdownItem text="Second" value="first" />
          <DropdownItem text="Third" value="third" />
        </Dropdown>

        <Dropdown classes="compact selection" activation="hover" id="test4" text="Dropdown" label="Label Top">
          <DropdownItem text="First" value="first" />
          <DropdownItem text="Second" value="first" />
          <DropdownItem text="Third" value="third" />
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
  });
