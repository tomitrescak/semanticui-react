import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/site.css";
// import "semantic-ui-css/components/reset.css";

export interface IProps {
  classes?: string;
  children?: any;
}

export const Site = ({classes, children}: IProps) => (
  <div className={css("ui", classes, "site")}>
    { children }
  </div>
);

Site['displayName'] = 'Site';

export default Site;
