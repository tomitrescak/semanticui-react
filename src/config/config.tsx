import * as React from "react";

import jss from 'jss'
import nested from 'jss-nested'

jss.use(nested());

export default {
  linkElement: "a",
  divElement: "div",
  i18n: (key: string) => key
};
