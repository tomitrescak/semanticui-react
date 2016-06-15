import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/checkbox.css";
// import "semantic-ui-css/components/checkbox.js";

interface ITab {
  title: string;
  children?: any;
}

interface IProps {
  classes?: string;
  id?: string;
  name?: string;
  children?: any;
  text?: string;
  checked?: boolean;
  disabled?: boolean;
  fitted?: boolean;
}

interface ICheckboxProps extends IProps {
  variation?: "slider" | "toggle";
}

export const Checkbox = ({children, id, name, classes, text, checked, disabled, fitted, variation }: ICheckboxProps) => (
  <div class="field">
    <div className={css("ui", classes, variation,
      {
        "checked": checked,
        "disabled": disabled,
        "fitted": fitted
      }, "checkbox")}>
      <input type="checkbox" name={ name ? name : id} defaultChecked={checked} />
      <label htmlFor={id}>{text}</label>
    </div>
  </div>
);

export const Radio = ({children, id, name, classes, text, checked, fitted, disabled }: IProps) => (
  <div class="field">
    <div className={css("ui", classes,
      {
        "checked": checked,
        "disabled": disabled,
        "fitted": fitted
      }, "radio checkbox")}>
      <input type="radio" name={ name ? name : id} defaultChecked={checked} />
      <label htmlFor={id}>{text}</label>
    </div>
  </div>
);
