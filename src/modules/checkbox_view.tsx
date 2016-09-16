import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/checkbox.css";
// import "semantic-ui-css/components/checkbox.js";

interface ITab {
  title: string;
  children?: any;
}

export interface IProps {
  classes?: string;
  id?: string;
  name?: string;
  children?: any;
  text?: string;
  checked?: boolean;
  disabled?: boolean;
  fitted?: boolean;
  onChange?: React.EventHandler<React.FormEvent>;
}

export interface ICheckboxProps extends IProps {
  variation?: "slider" | "toggle";
}

export const Checkbox = ({children, id, name, classes, text, checked, disabled, fitted, variation, onChange }: ICheckboxProps) => (
  <div className="field">
    <div className={css("ui", classes, variation,
      {
        "checked": checked,
        "disabled": disabled,
        "fitted": fitted
      }, "checkbox")}>
      <input type="checkbox" name={ name ? name : id} defaultChecked={checked} onChange={onChange} />
      <label htmlFor={id}>{config.i18n(text)}</label>
    </div>
  </div>
);

Checkbox['displayName'] = 'Checkbox';

export const Radio = ({children, id, name, classes, text, checked, fitted, disabled, onChange }: IProps) => (
  <div className="field">
    <div className={css("ui", classes,
      {
        "checked": checked,
        "disabled": disabled,
        "fitted": fitted
      }, "radio checkbox")}>
      <input type="radio" name={ name ? name : id} defaultChecked={checked} onChange={onChange} />
      <label htmlFor={id}>{text}</label>
    </div>
  </div>
);

Radio['displayName'] = 'Radio';
