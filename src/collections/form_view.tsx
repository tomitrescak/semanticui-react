import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/form.css";
// import "semantic-ui-css/components/form.js";

export interface IProps {
  classes?: string;
  children?: any;
}


export const Form = ({classes, children}: IProps) => (
  <div className={css("ui", classes, "form")}>
    { children }
  </div>
);

Form['displayName'] = 'Form';

export default Form;
