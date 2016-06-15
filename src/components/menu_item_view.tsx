import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/icon.css";

export interface IProps {
  classes?: string;
  icon?: string;
  text?: string;
  children?: any;
  link: string;
  onClick: any;
}


export const MenuItem = ({classes, icon, text, children, link, onClick }: IProps) => (
  React.createElement(link ? config.linkElement : "div", { className: css(classes, "item"), href: link, onClick: onClick },
    icon ? <i className={css("icon", icon) }></i> : null,
    text
  )
);

export default MenuItem;
