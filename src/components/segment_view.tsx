import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/segment.css";

interface IProps {
  classes?: string;
  children?: any;
  attached?: "top" | "bottom";
  loading?: boolean;
  inverted?: boolean;
}

export const Segment = ({classes, children, attached, loading, inverted}: IProps) => (
  <div className={css("ui", classes, attached, { "attached": attached, "inverted": inverted }, { "loading": loading }, "segment")}>
    { children }
  </div>
);

export default Segment;
