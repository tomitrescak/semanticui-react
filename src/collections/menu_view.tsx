import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/menu.css";

interface IProps extends IColor {
  classes?: string;
  children?: any;
  pagination: boolean;
  vertical: boolean;
  inverted: boolean;
  position: "left" | "right";
}

export const Menu = ({ classes, children, pagination, vertical, inverted, color, position }: IProps) => (
  <div className={css(
    { "ui": !position },
    classes,
    color,
    {
      "inverted": inverted,
      "pagination": pagination,
      "vertical": vertical
    },
    position,
    "menu")}>
    { children }
  </div>
);
export default Menu;
