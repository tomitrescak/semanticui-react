import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/menu.css";

interface IProps {
  classes?: string;
  children?: any;
}

export const Menu = ({ classes, children}: IProps) => (
  <div className={css("ui", classes, "menu")}>
    { children }
  </div>
);
export default Menu;
