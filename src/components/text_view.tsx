import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/divider.css";

interface IProps {
  classes?: string;
  style?: Object;
  text: string;
}

export const Text = ({classes, style, text }: IProps) => (
  <span className={classes} style={style}>
    { config.i18n(text) }
  </span>
);

export default Text;
