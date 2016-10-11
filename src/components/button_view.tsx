import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

import { IColor, ISize } from '../config/interfaces';

export interface IButtonProps extends IColor, ISize {
  classes?: string;
  text?: string | Object;
  basic?: boolean;
  type?: "submit" | "button";
  inverted?: boolean;
  compact?: boolean;
  icon?: string;
  labeled?: "left" | "right" | boolean;
  floated?: "left" | "right";
  loading?: boolean;
  circular?: boolean;
  toggle?: "active" | "inactive";
  fluid?: boolean;
  disabled?: boolean;
  attached?: "left" | "right";
  active?: boolean;
  onClick?: Function;
  url?: string;
  children?: any;
  target?: string;
  step?: string;
  style?: any;
}

export const Button = ({
    text, classes, color, inverted, floated, target,
    icon, labeled, loading, size, circular, toggle, step, style,
    fluid, disabled, attached, basic, active, compact, onClick, url, children, type
  }: IButtonProps) => {

    const el = url ? config.linkElement : "button";
    return React.createElement(el, {
      target: target,
      step: step,
      type: type ? type : "button",
      style,
      className: css("ui", classes, size, attached,
        labeled,
        {
          "labeled": labeled,
        },
        floated,
        {
          "floated": floated
        },
        {
          "compact": compact,
          "active": active,
          "attached": attached,
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
        color, "button"),
        onClick: onClick,
        href: url,
        to: url,
      },
      icon ? <i className={css(icon, "icon")}></i> : null,
      text && config.i18n(text),
      children
    );
  };

Button['displayName'] = 'Button';

export default Button;
