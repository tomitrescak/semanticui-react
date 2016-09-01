import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/grid.css";

const names = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

interface IProps {
  classes?: string;
  columns?: number;
  children?: any;
  stackable?: boolean;
  divided?: boolean;
  page?: boolean;
  align?: "center" | "left" | "right"
}


export const Grid = ({classes, columns, children, page, align, stackable, divided}: IProps) => (
  <div className={css("ui",
    names[columns],
    {
      "column": columns,
    },
    align,
    {
      "aligned": align,
      "page": page,
      "stackable": stackable,
      "divided": divided,
    }, classes, "grid") }>
    { children }
  </div>
);

Grid['displayName'] = 'Grid';

export default Grid;
