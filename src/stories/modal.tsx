import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Modal } from "../index";

storiesOf("Modal", module)
  .add("default view", () => {
    return (
      <div>
        <Modal header="Header" id="modal1">
          Content
        </Modal>
        <button onClick={() => { $("#modal1").modal("show"); }}>Show</button>
      </div>
    );
  })
  .add("buttons view", () => {
    return (
      <div>
        <Modal header="Header" id="modal1"
          approveText="Approve" approveAction={() => action("approve")}
          neutralText="Neutral" neutralAction={() => action("neutral")}
          cancelText="Cancel" cancelAction={() => action("cancel")}>
          Content
        </Modal>
        <button onClick={() => { $("#modal1").modal("show"); }}>Show</button>
      </div>
    );
  });
