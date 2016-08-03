import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { TextArea, Form } from "../index";

storiesOf("Textarea", module)
  .add("default view", () => {
    return (
      <Form>
        <TextArea label="TestLabel" placeholder="placeholder" />
      </Form>
    );
  })
  .add("with default value", () => {
    return (
      <Form>
        <TextArea label="TestLabel" defaultValue="Default Value" />
      </Form>
    );
  })
  .add("with value", () => {
    return (
      <Form>
        <TextArea label="TestLabel" value="Value" />
      </Form>
    );
  })
  .add("with rows and cols", () => {
    return (
      <Form>
        <TextArea label="TestLabel" rows={2} cols={4} />
      </Form>
    );
  })
  .add("with markdown", () => {
    return (
      <Form>
        <TextArea previewMarkdown={true} label="TestLabel" rows={10} cols={4} defaultValue="# Header\n\n**bold** *italic*" />     
      </Form>
    );
  })