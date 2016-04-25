import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/reset.css";
import "semantic-ui-css/components/sidebar.css";
import "semantic-ui-css/components/sidebar.js";

interface ITab {
  title: string;
  children?: any;
}

interface IProps {
  classes?: string;
  id: string;
  children?: any;
  position?: "top" | "left" | "bottom" | "right";
  inverted?: boolean;
  visible?: boolean;
}


export const Sidebar = ({inverted, children, id, visible, position, classes }: IProps) => (
  <div>
    <div className={css("ui", classes, position, "sidebar", { "visible": visible, "inverted": inverted },"vertical menu")} id={id}>
      { children.map((child: any, index: number) => {
        return index < children.length - 1 ? (
          <div className="item" key={index}>
            { child }
          </div>
        ) : null;
      })}
    </div>
    <div className="pusher">
      { children[children.length - 1] }
    </div>
  </div>
);

export default Sidebar;
