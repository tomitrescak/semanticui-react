import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/segment.css";

interface IProps {
  classes?: string;
  children?: any;
}

export const Segments = ({classes, children}: IProps) => (
  <div className={css("ui", classes, "segments")}>
    { children }
  </div>
);

Segments['displayName'] = 'Segments';

export default Segments;
