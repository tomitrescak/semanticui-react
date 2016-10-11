import * as React from "react";

import jss from 'jss'
import nested from 'jss-nested'

jss.use(nested());

export interface IConfig {
  linkElement: string | any;
  divElement: string | any;
  i18n: (key: string | Object) => string;
}

const options: IConfig = {
  linkElement: "a",
  divElement: "div",
  i18n: (key: string) => key
};

export default options;
