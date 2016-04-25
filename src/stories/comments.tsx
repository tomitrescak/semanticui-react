import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Comments, Comment } from "../index";

storiesOf("Comments", module)
  .add("default view", () => {
    return (
      <Comments handler={action("comment")} id="comment" text="Reply">
        <Comment actions={[{ name: "Reply", handler: action("reply") }, { name: "Delete", handler: action("delete") }]}
         author="Tomas" date="4 days ago">Comment Body
        </Comment>
      </Comments>
    );
  })
  .add("nested", () => {
    return (
      <Comments handler={action("comment")} id="comment" text="Reply">
        <Comment actions={[{ name: "Reply", handler: action("reply") }, { name: "Delete", handler: action("delete") }]}
         author="Tomas" date="4 days ago">
         <div>Comment Body</div>
         <Comments handler={action("comment")} id="comment" text="Reply">
           <Comment actions={[{ name: "Reply", handler: action("reply") }, { name: "Delete", handler: action("delete") }]}
            author="Tomas" date="4 days ago">Comment Body
           </Comment>
         </Comments>
        </Comment>
      </Comments>
    );
  });
