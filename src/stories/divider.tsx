import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Divider, Grid, Column, Segment } from "../index";

storiesOf("Divider", module)
  .add("vertical view", () => {
    return (
      <Grid columns={4}>
        <Column>column 1</Column>
        <Divider orientation="vertical">OR</Divider>
        <Column>column 2</Column>
        <Divider orientation="vertical" icon="bug">AND</Divider>
        <Column>column 3</Column>
        <Divider orientation="vertical" icon="bug" isHeader={true}>OR</Divider>
        <Column>column 4</Column>
      </Grid>
    );
  })
  .add("horizontal view", () => {
    return (
      <Segment>
        <Segment>column 1</Segment>
        <Divider orientation="horizontal">OR</Divider>
        <Segment>column 2</Segment>
        <Divider orientation="horizontal" icon="bug">AND</Divider>
        <Segment>column 3</Segment>
        <Divider orientation="horizontal" icon="bug" isHeader={true}>OR</Divider>
        <Segment>column 4</Segment>
      </Segment>
    );
  })
  .add("inverted view", () => {
    return (
      <Segment inverted={true}>
        <Segment>column 1</Segment>
        <Divider orientation="horizontal" inverted={true}>OR</Divider>
        <Segment>column 2</Segment>
      </Segment>
    );
  });
