import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/icon.css";

interface IProps {
  classes?: string;
  children?: any;
  icon: string;
}

export const Icon = ({classes, icon}: IProps) => (
  <i className={css(classes, icon, "icon")} />
);

export default Icon;
