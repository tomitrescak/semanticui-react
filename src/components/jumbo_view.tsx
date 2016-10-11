import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/icon.css";

export interface IProps {
  classes?: string;
  children?: any;
  inverted?: boolean;
  style?: Object;
}

export const Jumbo = ({classes, inverted, children, style}: IProps) => (
  <div className={css("ui", classes, { inverted }, "jumbo")} style={style}>
    { children }
  </div>
);

Jumbo['displayName'] = 'Jumbo';

export default Jumbo;
