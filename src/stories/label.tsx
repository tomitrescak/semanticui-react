import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Label, Segment } from "../index";

storiesOf("Label", module)
  .add("default view", () => {
    return (
      <Label>Label</Label>
    );
  })
  .add("colors", () => {
    return (
      <Label color="blue">Label</Label>
    );
  })
  .add("ribbon", () => {
    return (
      <div style={{padding: 60}}>
      <Segment>
        <Label ribbon={true} color="blue">Label</Label>
      </Segment>
      </div>
    );
  })
  .add("tag", () => {
    return (
      <Label color="blue" tag={true}>Label</Label>
    );
  })
  .add("details", () => {
    return (
      <Label color="blue" detail="Details">Label</Label>
    );
  })
  .add("icon", () => {
    return (
      <Label color="blue" icon="bug" detail="Details">Label</Label>
    );
  })
  .add("circular", () => {
    return (
      <Label color="blue" icon="bug"  circular={true}>Label</Label>
    );
  });
