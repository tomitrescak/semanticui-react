import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/menu.css";

interface IProps {
  classes?: string;
  children?: any;
  pagination: boolean;
  vertical: boolean;
}

export const Menu = ({ classes, children, pagination, vertical }: IProps) => (
  <div className={css("ui", classes,
    {
      "pagination": pagination,
      "vertical": vertical
    }, "menu")}>
    { children }
  </div>
);
export default Menu;
