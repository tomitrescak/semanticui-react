import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Form } from "../index";
import { Input } from "../index";

//import "semantic-ui-css/components/reset.css";

function checkRef(refName: string) {
  return action("refs", this.refs[refName]["value"]);
}

storiesOf("Input", module)
  .add("default input", () => {
    return (
      <Form>
        <Input />
      </Form>
    );
  })
  .add("number input", () => {
    return (
      <Form>
        <Input type="number" />
      </Form>
    );
  })
  .add("input with placeholder", () => {
    return (
      <Form>
        <Input placeholder="My Placeholder" />
      </Form>
    );
  })
  .add("input with label", () => {
    return (
      <Form>
        <Input placeholder="My Placeholder" label="My label" />
        <Input placeholder="My Placeholder" label="My label" inline={true} />
      </Form>
    );
  })
  .add("label d inputs", () => {
    return (
      <Form>
        <Input placeholder="My Placeholder" leftLabel="My label" />
        <Input placeholder="My Placeholder" rightLabel="My label" />
      </Form>
    );
  })
  .add("input action", () => {
    return (
      <Form>
        <Input placeholder="My Placeholder" onChange={action("inputChange")} />
      </Form>
    );
  })
  .add("input left icon", () => {
    return (
      <Form>
        <Input placeholder="My Placeholder" icon="bug" iconPosition="left" />
      </Form>
    );
  })
  .add("input right icon", () => {
    return (
      <Form>
        <Input placeholder="My Placeholder" icon="bug" iconPosition="right" />
      </Form>
    );
  })
  .add("input with value", () => {
    return (
      <Form>
        <Input placeholder="My Placeholder" icon="bug" iconPosition="left" value="my value" />
      </Form>
    );
  })
  .add("input ref", () => {
    return (
      <Form>
        <Input placeholder="My Placeholder" icon="bug" iconPosition="left" value="my value" ref="inp" />
        <button onClick={checkRef.bind(this, "inp")}>Check Ref</button>
      </Form>
    );
  });
