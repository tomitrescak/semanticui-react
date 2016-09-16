import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/divider.css";

export interface IProps {
  classes?: string;
  style?: Object;
  text: string;
  link: string;
  icon?: string;
  onClick?: Function;
  children?: any;
}

export const Link = ({classes, style, text, link, icon, onClick, children }: IProps) => {
  const el = config.linkElement;
  return React.createElement(el, {
    className: classes,
    onClick: onClick,
    href: link,
    to: link,
    style: style
  },
    icon && <i className={css(icon, "icon") }></i>,
    text && config.i18n(text),
    children
  );
};

Link['displayName'] = 'Link';

export default Link;
