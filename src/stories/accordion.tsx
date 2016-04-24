import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Accordion } from "../index";
import { AccordionItem } from "../index";


storiesOf("Accordion", module)
  .add("default", () => {
    return (
      <Accordion id="acc" menu={false}>
        <AccordionItem active={true} title="Title 1">Context 1 ....</AccordionItem>
        <AccordionItem title="Title 2">Context 2 ....</AccordionItem>
        <AccordionItem title="Title 3">Context 3 ....</AccordionItem>
      </Accordion>
    );
  })
  .add("menu", () => {
    return (
      <Accordion id="acc" menu={true}>
        <AccordionItem active={true} title="Title 1">Context 1 ....</AccordionItem>
        <AccordionItem title="Title 2">Context 2 ....</AccordionItem>
        <AccordionItem title="Title 3">Context 3 ....</AccordionItem>
      </Accordion>
    );
  })
  .add("open multiple", () => {
    return (
      <Accordion id="acc" menu={true} exclusive={false}>
        <AccordionItem active={true} title="Title 1">Context 1 ....</AccordionItem>
        <AccordionItem title="Title 2">Context 2 ....</AccordionItem>
        <AccordionItem title="Title 3">Context 3 ....</AccordionItem>
      </Accordion>
    );
  });
