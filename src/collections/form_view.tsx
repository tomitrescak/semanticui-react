import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/form.css";
// import "semantic-ui-css/components/form.js";

interface IProps {
  classes?: string;
  children?: any;
}


export const Form = ({classes, children}: IProps) => (
  <div className={css("ui", classes, "form")}>
    { children }
  </div>
);

export default Form;
