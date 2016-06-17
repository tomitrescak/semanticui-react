import * as React from "react";
import * as css from "classnames";
import config from "../config/config";
// import "semantic-ui-css/components/label.css";

interface IProps {
  classes?: string;
  children?: any;
  icon?: string;
  rightIcon?: string;
  image?: string;
  detail?: string;
  color?: "primary" | "secondary" | "success" | "failure" | "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
  pointing?: "left" | "right" | "above" | "below";
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
  basic?: boolean;
  corner?: "left" | "right";
  tag?: boolean;
  ribbon?: boolean;
  attached?: "top" | "bottom" | "top right" | "top left" | "bottom left" | "bottom right";
  horizontal?: boolean;
  floating?: boolean;
  circular?: boolean;
  style?: any;
  text?: string;
}


export const Segment = ({
    classes, children, icon, image, color, detail, rightIcon, pointing, basic,
    tag, corner, ribbon, attached, size, horizontal, floating, circular, style, text
  }: IProps) => (
  <div style={style} className={css("ui", classes, color, size,
    {
      "circular": circular,
      "horizontal": horizontal,
      "floating": floating,
      "tag": tag,
      "ribbon": ribbon,
      "basic": basic,
      "image": image,
      "pointing": pointing,
    },
    pointing,
    attached,
    {
      "attached": attached
    },
    corner,
    {
      "corner": corner
    },
    "label") }>
    { icon ? <i className={css(icon, "icon") }></i> : null}
    { image ? <img src={image}/> : null }
    { children }
    { config.i18n(text) }
    { detail ? <div className="detail">{detail}</div> : null}
    { rightIcon ? <i className={css(rightIcon, "icon") }></i> : null}
  </div>
);

export default Segment;
