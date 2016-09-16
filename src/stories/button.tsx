import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Button, Buttons, Segment } from "../index";

// import { Button as ButtonIntl } from "../i18n";

storiesOf("Button", module)
  .add("default", () => {
    return (
      <Button text="Button" />
    );
  })
  .add("click", () => {
    return (
      <Button text="Button" onClick={action('click')} />
    );
  })
  .add("link", () => {
    return (
      <Button text="Button" url="a/b.html" />
    );
  })
  .add("colors", () => {
    return (
      <div>
        <Button text="Button" color="primary" />
        <Button text="Button" color="secondary" />
        <Button text="Button" color="blue" />
        <Button text="Button" color="red" />
        <Button text="Button" color="orange" />
        <Button text="Button" color="olive" />
        <Button text="Button" color="teal" />
      </div>
    );
  })
  .add("icon", () => {
    return (
      <Button icon="bug" />
    );
  })
  .add("labeled", () => {
    return (
      <div>
        <Button icon="bug" labeled="left" text="Button" />
        <Button icon="bug" labeled="right" text="Button" />
      </div>
    );
  })
  .add("basic", () => {
    return (
      <Button basic={true} color="blue" text="Button" />
    );
  })
  .add("inverted", () => {
    return (
      <Segment inverted={true}>
        <Button inverted={true} color="blue" text="Button" />
      </Segment>
    );
  })
  .add("inverted basic", () => {
    return (
      <Segment inverted={true}>
        <Button inverted={true} basic={true} color="blue" text="Button" />
      </Segment>
    );
  })
  .add("active", () => {
    return (
      <Button active={true} icon="user" text="Button" />
    );
  })
  .add("disabled", () => {
    return (
      <Button disabled={true} icon="user" text="Button" />
    );
  })
  .add("loading", () => {
    return (
      <div>
        <Button loading={true} text="Button" />
      </div>
    );
  })
  .add("sizes", () => {
    return (
      <div>
        <Button size="mini" text="Button" />
        <Button size="tiny" text="Button" />
        <Button size="small" text="Button" />
        <Button size="medium" text="Button" />
        <Button size="large" text="Button" />
        <Button size="huge" text="Button" />
        <Button size="massive" text="Button" />
      </div>
    );
  })
  .add("compact", () => {
    return (
      <div>
        <Button compact={true} text="Button" />
      </div>
    );
  })
  .add("toggle", () => {
    return (
      <div>
        <Button toggle="active" text="Active" />
        <Button toggle="inactive" text="Inactive" />
      </div>
    );
  })
  .add("fluid", () => {
    return (
      <div>
        <Button fluid={true} text="Fluid" />
      </div>
    );
  })
  .add("circular", () => {
    return (
      <div>
        <Button circular={true} icon="bug" />
      </div>
    );
  })
  .add("attached", () => {
    return (
      <div>
        <Button attached="left" icon="bug" />
        <Button attached="right" icon="bug" />
      </div>
    );
  })

  storiesOf("Buttons", module)
    .add("basic group", () => {
      return (
        <Buttons>
          <Button text="Button 1" />
          <Button text="Button 2" />
          <Button text="Button 3" />
        </Buttons>
      );
    })
    .add("vertical group", () => {
      return (
        <Buttons vertical={true}>
          <Button text="Button 1" />
          <Button text="Button 2" />
          <Button text="Button 3" />
        </Buttons>
      );
    })
    .add("vertical labeled group", () => {
      return (
        <Buttons vertical={true} labeled={true} icon={true}>
          <Button text="Button 1" icon="bug" />
          <Button text="Button 2" icon="bug" />
          <Button text="Button 3" icon="bug" />
        </Buttons>
      );
    })
    .add("mixed group", () => {
      return (
        <Buttons>
          <Button text="Button 1" icon="bug" labeled="left" />
          <Button text="Button 2" icon="bug" />
          <Button text="Button 3" icon="bug" labeled="right" />
        </Buttons>
      );
    })
    .add("icon group", () => {
      return (
        <Segment>
          <Buttons icon={true}>
            <Button icon="bug" />
            <Button icon="bug" />
            <Button icon="bug" />
          </Buttons>
          <Buttons icon={true}>
            <Button icon="bug" />
            <Button icon="bug" />
            <Button icon="bug" />
          </Buttons>
        </Segment>
      );
    });
