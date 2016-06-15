import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/message.css";

interface IProps extends IColor {
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
  classes?: string;
  children?: any;
  header?: string;
  icon?: string;
  attached?: boolean;
  compact?: boolean;
}

export const Menu = ({ classes, children, header, color, size, icon, attached, compact}: IProps) => (
  <div className={css("ui", classes, color, size, { "attached": attached, "compact": compact, "icon": icon }, "message") }>
    { icon ? <i className={css(icon, "icon") }></i> : null }
    <div class="content">
      { header ? <div className="header">
        { header }
      </div> : null }
      { children }
    </div>
  </div>

);
export default Menu;
