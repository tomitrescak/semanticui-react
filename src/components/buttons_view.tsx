import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/button.css";

interface IProps {
  classes?: string;
  children?: any;
  vertical?: boolean;
  labeled?: boolean;
  icon?: boolean;
  color?: "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge";
}

export const Buttons = ({classes, children, vertical, icon, labeled, color, size}: IProps) => (
  <div className={css("ui", classes, color, size, {"vertical": vertical, "icon": icon, "labeled": labeled}, "buttons")}>
    { children }
  </div>
);

export default Buttons;
