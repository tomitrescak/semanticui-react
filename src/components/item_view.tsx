import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/icon.css";

export interface IProps {
  classes?: string;
  icon?: string;
  text?: string;
  children?: any;
  link: string;
}


export const Item = ({classes, icon, text, children, link }: IProps) => (
  <a className={css(classes, "item") } href={link}>
    { icon ? <i className={css("icon", icon) }></i> : null }
    { text }
  </a>
);

export default Item;
