import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { List, ListItem, Button, Segment } from "../index";

storiesOf("List", module)
  .add("default view", () => {
    return (
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    );
  })
  .add("icons view", () => {
    return (
      <List>
        <ListItem icon="bug">Item 1</ListItem>
        <ListItem icon="bug">Item 2</ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("divided", () => {
    return (
      <List divided={true}>
        <ListItem icon="bug">Item 1</ListItem>
        <ListItem icon="bug">Item 2</ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("celled", () => {
    return (
      <List celled={true}>
        <ListItem icon="bug">Item 1</ListItem>
        <ListItem icon="bug">Item 2</ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("selection", () => {
    return (
      <List selection={true}>
        <ListItem icon="bug">Item 1</ListItem>
        <ListItem icon="bug">Item 2</ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("animated", () => {
    return (
      <List animated={true}>
        <ListItem icon="bug">Item 1</ListItem>
        <ListItem icon="bug">Item 2</ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("bulleted", () => {
    return (
      <List bulleted={true}>
        <ListItem icon="bug">Item 1</ListItem>
        <ListItem icon="bug">Item 2</ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("ordered", () => {
    return (
      <List ordered={true}>
        <ListItem icon="bug">Item 1</ListItem>
        <ListItem icon="bug">Item 2</ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("custom bullets", () => {
    return (
      <List>
        <ListItem bullet="*">Item 1</ListItem>
        <ListItem bullet="-">Item 2</ListItem>
        <ListItem bullet="$">Item 3</ListItem>
      </List>
    );
  })
  .add("floated", () => {
    return (
      <List align="middle" divided={true}>
        <ListItem float="right" icon="bug">
          <span>Item 1</span>
          <Button>Add</Button>
        </ListItem>
        <ListItem float="left" icon="bug">
          <span>Item 1</span>
          <Button>Add</Button>
        </ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("size", () => {
    return (
      <List ordered={true} size="huge">
        <ListItem icon="bug">Item 1</ListItem>
        <ListItem icon="bug">Item 2</ListItem>
        <ListItem icon="bug">Item 3</ListItem>
      </List>
    );
  })
  .add("inverted", () => {
    return (
      <Segment inverted={true}>
        <List inverted={true}>
          <ListItem icon="bug">Item 1</ListItem>
          <ListItem icon="bug">Item 2</ListItem>
          <ListItem icon="bug">Item 3</ListItem>
        </List>
      </Segment>
    );
  });
