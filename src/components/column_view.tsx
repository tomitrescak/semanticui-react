import * as React from "react";
import * as css from "classnames";

const names = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

interface IProps {
  classes?: string;
  width?: number;
  children?: any;
}


export const Column = ({classes, width, children}: IProps) => (
  <div className={css(names[width], { "wide": width }, classes, "column")}>
    { children }
  </div>
);

Column['displayName'] = 'Column';

export default Column;
