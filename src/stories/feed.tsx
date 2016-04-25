import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Feed, FeedItem } from "../index";

storiesOf("Feed", module)
  .add("default view", () => {
    return (
      <Feed>
        <FeedItem image="my" likes="2 likes" date="2 days ago">
          <span>Header</span>
          <div>Extr text</div>
        </FeedItem>
      </Feed>
    );
  });
