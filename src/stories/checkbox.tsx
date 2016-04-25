import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Checkbox, Radio, Form, Fields } from "../index";


storiesOf("Checkbox", module)
  .add("default view", () => {
    return (
      <Checkbox text="Checkbox" id="check" />
    );
  })
  .add("checked", () => {
    return (
      <Checkbox text="Checkbox" id="check" checked={true} />
    );
  })
  .add("disabled", () => {
    return (
      <Checkbox text="Checkbox" id="check" disabled={true} />
    );
  })
  .add("slider", () => {
    return (
      <Checkbox text="Checkbox" id="check" variation="slider" />
    );
  })
  .add("toggle", () => {
    return (
      <Checkbox text="Checkbox" id="check" variation="toggle" />
    );
  })
  .add("radios", () => {
    return (
      <Form>
        <Fields type="grouped">
          <Radio name="g1" text="G1" />
          <Radio name="g1" text="G2" />
          <Radio name="g1" text="G3" />
        </Fields>
      </Form>
    );
  });
