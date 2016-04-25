import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";

import { Search } from "../index";

const values = [ {title: "aa"}, {title: "bb" }]

storiesOf("Search", module)
  .add("default view", () => {
    return (
      <Search text="Search ..." id="search1" values={values} />
    );
  })
  .add("loading view", () => {
    return (
      <Search text="Search ..." id="search2" loading={true} values={values} />
    );
  })
  .add("fluid view", () => {
    return (
      <Search text="Search ..." id="search3" fluid={true} values={values} />
    );
  });
