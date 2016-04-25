import * as React from "react";
import * as css from "classnames";

interface IProps {
  children?: any;
  type: "inline" | "grouped";
  label?: string;
}

export const Fields = ({ children, type, label }: IProps) => (
  <div className={css(type, "fields")}>
    { label ? <label>{ label }</label> : null}
    { children }
  </div>
);

export default Fields;
