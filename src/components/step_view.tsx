import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/step.css";

export interface IProps {
  classes?: string;
  children?: any;
  ordered?: boolean;
  vertical?: boolean;
  fluid?: boolean;
  stackable?: boolean;
  attached?: "top" | "bottom";
  text?: string | Object;
}

export const Steps = ({classes, children, ordered, vertical, fluid, stackable, attached, text }: IProps) => (
  <div className={css("ui", classes,
    {
      "ordered": ordered,
      "vertical": vertical,
      "fluid": fluid,
      "tablet stackable": stackable,
    },
    attached,
    {
      "attached": attached
    },
    "steps")}>
    { children }
    { config.i18n(text) }
  </div>
);

export interface IStepProps {
  active?: boolean;
  icon?: string;
  title: string;
  disabled?: boolean;
  completed?: boolean;
  children?: any;
}

Steps['displayName'] = 'Steps';

export const Step = ({ active, icon, title, children, disabled, completed }: IStepProps) => (
  <div className={css(
    {
      "active": active,
      "disabled": disabled,
      "completed": completed
    }, "step")} >
    { icon && !completed ? <i className={css(icon, "icon")} /> : null }
    <div className="content">
      <div className="title">{title}</div>
      <div className="description">{children}</div>
    </div>
  </div >
);

Step['displayName'] = 'Step';
