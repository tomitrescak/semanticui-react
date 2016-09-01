import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/icon.css";

interface IProps {
  classes?: string;
  children?: any;
  inverted?: boolean;
}

export const Jumbo = ({classes, inverted, children}: IProps) => (
  <div className={css("ui", classes, { inverted }, "jumbo")}>
    { children }
  </div>
);

Jumbo['displayName'] = 'Jumbo';

export default Jumbo;
