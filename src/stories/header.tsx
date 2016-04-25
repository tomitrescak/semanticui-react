import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Header1, Header2, Header3, Header4, Header5, Segment } from "../index";

storiesOf("Header", module)
  .add("default view", () => {
    return (
      <div>
        <Header1>Header 1</Header1>
        <Header2>Header 2</Header2>
        <Header3>Header 3</Header3>
        <Header4>Header 4</Header4>
        <Header5>Header 5</Header5>
      </div>
    );
  })
  .add("sub header", () => {
    return (
      <div>
        <Header1 sub="Sub header rendred">Header 1</Header1>
        <Header2 sub="Sub header rendred">Header 2</Header2>
        <Header3 sub="Sub header rendred">Header 3</Header3>
        <Header4 sub="Sub header rendred">Header 4</Header4>
        <Header5 sub="Sub header rendred">Header 5</Header5>
      </div>
    );
  })
  .add("icons", () => {
    return (
      <div>
        <Header1 icon="bug" sub="Sub header rendred">Header 1</Header1>
        <Header2 icon="bug" sub="Sub header rendred">Header 2</Header2>
        <Header3 icon="bug" sub="Sub header rendred">Header 3</Header3>
        <Header4 icon="bug" sub="Sub header rendred">Header 4</Header4>
        <Header5 icon="bug" sub="Sub header rendred">Header 5</Header5>
      </div>
    );
  })
  .add("icon on top", () => {
    return (
      <div>
        <Header1 icon="bug" iconOnTop={true} sub="Sub header rendred">Header 1</Header1>
      </div>
    );
  })
  .add("circular center aligned icon on top", () => {
    return (
      <div>
        <Header1 icon="bug" circular={true} alignment="center" iconOnTop={true} sub="Sub header rendred">Header 1</Header1>
      </div>
    );
  })
  .add("attached", () => {
    return (
      <div style={{padding: 20}}>
        <Header3 attached="top" sub="Sub header rendred">Header 1</Header3>
        <Header3 attached="middle" sub="Sub header rendred">Header 1</Header3>
        <Header3 attached="bottom" sub="Sub header rendred">Header 1</Header3>
      </div>
    );
  })
  .add("block", () => {
    return (
      <div style={{padding: 20}}>
        <Header3 block={true} sub="Sub header rendred">Header 1</Header3>
      </div>
    );
  })
  .add("dividing", () => {
    return (
      <div style={{padding: 20}}>
        <Header3 dividing={true} sub="Sub header rendred">Header 1</Header3>
      </div>
    );
  })
  .add("colors", () => {
    return (
      <div style={{padding: 20}}>
        <Header3 color="blue" sub="Sub header rendred">Header 1</Header3>
        <Header3 color="red" sub="Sub header rendred">Header 1</Header3>
        <Segment inverted={true}>
          <Header3 color="blue" inverted={true} sub="Sub header rendred">Header 1</Header3>
          <Header3 color="red" inverted={true} sub="Sub header rendred">Header 1</Header3>
        </Segment>
      </div>
    );
  });
