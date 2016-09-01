import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/divider.css";

interface IProps {
  classes?: string;
  children?: any;
  icon?: string;
  inverted?: boolean;
  orientation: "vertical" | "horizontal";
  isHeader?: boolean;
}

export const Divider = ({classes, children, icon, isHeader, orientation, inverted }: IProps) => (
  <div className={css("ui", orientation, "divider", { "inverted": inverted, "header": isHeader })}>
    { icon ? <i className={css(icon, "icon")}></i> : null }
    { children }
  </div>
);

Divider['displayName'] = 'Divider';

export default Divider;
