import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Steps, Step, Segment } from "../index";

storiesOf("Steps", module)
  .add("default view", () => {
    return (
      <Steps>
        <Step icon="truck" title="Shipping">Choose your shipping options</Step>
        <Step icon="payment" active={true} title="Billing">Enter billing information</Step>
        <Step icon="info" disabled={true} title="Confirm Order" />
      </Steps>
    );
  })
  .add("vertical view", () => {
    return (
      <Steps vertical={true} ordered={true}>
        <Step icon="truck" title="Shipping">Choose your shipping options</Step>
        <Step icon="payment" active={true} title="Billing">Enter billing information</Step>
        <Step icon="info" disabled={true} title="Confirm Order" />
      </Steps>
    );
  })
  .add("completed view", () => {
    return (
      <Steps vertical={true} ordered={true}>
        <Step icon="truck" completed={true} title="Shipping">Choose your shipping options</Step>
        <Step icon="payment" active={true} title="Billing">Enter billing information</Step>
        <Step icon="info" disabled={true} title="Confirm Order" />
      </Steps>
    );
  })
  .add("fluid view", () => {
    return (
      <Steps vertical={true} ordered={true} fluid={true}>
        <Step icon="truck" completed={true} title="Shipping">Choose your shipping options</Step>
        <Step icon="payment" active={true} title="Billing">Enter billing information</Step>
        <Step icon="info" disabled={true} title="Confirm Order" />
      </Steps>
    );
  })
  .add("attachment view", () => {
    return (
      <div style={{padding: 20}}>
        <Steps ordered={true} attached="top">
          <Step icon="truck" completed={true} title="Shipping">Choose your shipping options</Step>
          <Step icon="payment" active={true} title="Billing">Enter billing information</Step>
          <Step icon="info" disabled={true} title="Confirm Order" />
        </Steps>
        <Segment attached="middle">
          Content
        </Segment>
        <Steps ordered={true} attached="bottom">
          <Step icon="truck" completed={true} title="Shipping">Choose your shipping options</Step>
          <Step icon="payment" active={true} title="Billing">Enter billing information</Step>
          <Step icon="info" disabled={true} title="Confirm Order" />
        </Steps>
      </div>
    );
  });
