import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Menu } from "../index";
import { MenuItem, MenuDropdown } from "../index";

//// import "semantic-ui-css/components/reset.css";

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

