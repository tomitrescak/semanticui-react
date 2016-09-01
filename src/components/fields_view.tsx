import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

const names = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

interface IFieldsProps {
  children?: any;
  type: "inline" | "grouped";
}

export const Fields = ({ children, type }: IFieldsProps) => (
  <div className={css(type, "fields")}>
    { children }
  </div>
);

Fields['displayName'] = 'Fields';

interface IFieldProps {
  children?: any;
  type: "inline" | "grouped";
  text?: string;
  label?: string;
  width: number;
  style?: any;
}

export const Field = ({ children, type, label, text, width, style }: IFieldProps) => (
  <div className={css(names[width], { "wide": width }, "field")} style={style}>
    { text && <label>{ config.i18n(text) }</label> }
    { label && <label>{ label }</label> }
    { children }
  </div>
);

Field['displayName'] = 'Field';

export default Fields;
