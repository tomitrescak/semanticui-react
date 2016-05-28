import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

import "semantic-ui-css/components/icon.css";

export interface IProps {
  classes?: string;
  icon?: string;
  text?: string;
  children?: any;
  link: string;
}


export const MenuItem = ({classes, icon, text, children, link }: IProps) => (
  React.createElement(config.linkElement, { className: css(classes, "item"), href: link },
    icon ? <i className={css("icon", icon) }></i> : null,
    text
  )
);

export default MenuItem;
