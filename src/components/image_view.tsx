import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/image.css";

interface IProps {
  classes?: string;
  children?: any;
  src?: string;
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
  avatar?: boolean;
  bordered?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  circular?: boolean;
  align: "top" | "middle" | "bottom";
  centered?: boolean;
  spaced?: boolean;
  float: "left" | "right";
}

function createClass(c: IProps) {
  return css("ui", c.size, c.classes, {
    "avatar": c.avatar,
    "bordered": c.bordered,
    "fluid": c.fluid,
    "rounded": c.rounded,
    "circular": c.circular,
    "centered": c.centered,
    "spaced": c.spaced
  },
    c.align,
    {
      "aligned": c.align
    },
    c.float,
    {
      "floated": c.float
    }
  );
}

export const Image = (props: IProps) => (
  <img className={createClass(props)} src={props.src} />
);

interface IImageProps extends IProps {
  link: string;
}

export const ImageLink = (props: IImageProps) => (
  React.createElement(config.linkElement, { href: props.link, className: css("ui", props.size, props.classes, "image") },
    <img className={createClass(props)} src={props.src} />
  )
);

export default Image;
