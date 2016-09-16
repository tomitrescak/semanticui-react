import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/segment.css";

export interface IProps {
  classes?: string;
  children?: any;
  attached?: "top" | "bottom" | "middle";
  loading?: boolean;
  inverted?: boolean;
  compact?: boolean;
  color?: "success" | "failure" | "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
  circular?: boolean;
  alignment?: "left" | "center" | "right";
  float?: "left" | "right";
  style?: any;
}

export const Segment = ({classes, children, attached, loading, inverted, compact, color, circular, alignment, float, style }: IProps) => (
  <div style={style} className={css("ui", classes, attached,
    {
      "attached": attached,
      "inverted": inverted,
      "loading": loading,
      "compact": compact,
      "circular": circular
    },
    color,
    alignment,
    {
      "aligned": alignment
    },
    float,
    {
      "floated": float
    },
    "segment")}>
    { children }
  </div>
);

Segment['displayName'] = 'Segment';

export default Segment;
