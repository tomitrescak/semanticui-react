import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/reset.css";
import "semantic-ui-css/components/button.css";
import "semantic-ui-css/components/icon.css";

export interface IButtonProps {
  classes?: string;
  text?: string;
  basic?: boolean;
  color?: "primary" | "secondary" | "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
  inverted?: boolean;
  compact?: boolean;
  icon?: string;
  labeled?: "left" | "right";
  loading?: boolean;
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
  circular?: boolean;
  toggle?: "active" | "inactive";
  fluid?: boolean;
  disabled?: boolean;
  attached?: "left" | "right";
  active?: boolean;
}


export const Button = ({
    text, classes, color, inverted,
    icon, labeled, loading, size, circular, toggle,
    fluid, disabled, attached, basic, active, compact
  }: IButtonProps) => (
  <button className={
    css("ui", classes, size, attached, labeled,
      {
        "compact": compact,
        "active": active,
        "attached": attached,
        "labeled": labeled,
        "inverted": inverted,
        "icon": icon,
        "loading": loading,
        "circular": circular,
        "toggle": toggle,
        "fluid": fluid,
        "disabled": disabled,
        "basic": basic,
      },
      toggle,
      color, "button")
    }>
    { icon ? <i className={css(icon, "icon")}></i> : null}
    { text }
  </button>
);

export default Button;
