import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/grid.css";

const names = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

interface IProps {
  classes?: string;
  columns?: number;
  children?: any;
}


export const Grid = ({classes, columns, children}: IProps) => (
  <div className={css("ui", names[columns], { "column": columns}, classes, "grid")}>
    { children }
  </div>
);

export default Grid;
