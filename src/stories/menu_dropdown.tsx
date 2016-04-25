import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Menu } from "../index";
import { MenuItem, MenuDropdown } from "../index";
import { MenuDropdown as MenuDropdownIntl, Item as ItemIntl } from "../i18n";

//import "semantic-ui-css/components/reset.css";

storiesOf("Menu.Dropdown", module)
  .add("default view", () => {
    const post = {
      title: "Simple Menu Dropdown",
      content: `
        Test text
      `,
    };

    return (
      <Menu>
        <MenuDropdown text="Tomi" id="test">
          <MenuItem text="Item 1" link="#" icon="bug" />
          <MenuItem text="Item 2" link="#" />
        </MenuDropdown>
      </Menu>
    );
  })
  .add("localised", () => {
    const post = {
      title: "Localised Menu Dropdown",
      content: `
        Test text
      `,
    };

    return (
      <Menu>
        <MenuDropdownIntl text="Tomi" id="test" mid="test">
          <ItemIntl text="Item 6" link="#" mid="item 1" />
          <ItemIntl text="Item 2" link="#" mid="item 2" />
        </MenuDropdownIntl>
      </Menu>
    );
  });
