import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/step.css";

interface IProps {
  classes?: string;
  children?: any;
  ordered?: boolean;
  vertical?: boolean;
  fluid?: boolean;
  stackable?: boolean;
  attached?: "top" | "bottom";
}

export const Steps = ({classes, children, ordered, vertical, fluid, stackable, attached}: IProps) => (
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
  </div>
);

interface IStepProps {
  active?: boolean;
  icon?: string;
  title: string;
  disabled?: boolean;
  completed?: boolean;
  children?: any;
}

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
