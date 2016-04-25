import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Rating } from "../index";

storiesOf("Rating", module)
  .add("default view", () => {
    return (
      <Rating type="star" rating={2} maxRating={5} id="rating" />
    );
  })
  .add("heart view", () => {
    return (
      <Rating type="heart" rating={4} maxRating={10} id="rating" />
    );
  })
  .add("sizable view", () => {
    return (
      <Rating type="star" size="huge" rating={2} maxRating={5} id="rating" />
    );
  });
