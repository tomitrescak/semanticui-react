import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/header.css";

interface IProps {
  classes?: string;
  children?: any;
  icon?: string;
  sub?: string;
  circular?: boolean;
  alignment?: "center" | "left" | "right";
  image?: string;
  dividing?: boolean;
  attached?: "top" | "middle" | "bottom";
  iconOnTop?: boolean;
  block?: boolean;
  color?: "success" | "failure" | "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
  inverted?: boolean;
}

function createClass(params: IProps) {
  return css("ui", params.classes,
    params.alignment,
    {
      "aligned": params.alignment,
      "dividing": params.dividing,
      "block": params.block,
      "icon": params.iconOnTop,
      "inverted": params.inverted,
    },
    params.color,
    params.attached,
    {
      "attached": params.attached
    },
    "header");
}

export const Header1 = (props: IProps) => (
  <h1 className={createClass(props)}>
   <HeaderContent {...props} />
  </h1>
);

export const Header2 = (props: IProps) => (
  <h2 className={createClass(props)}>
   <HeaderContent {...props} />
  </h2>
);

export const Header3 = (props: IProps) => (
  <h3 className={createClass(props)}>
   <HeaderContent {...props} />
  </h3>
);

export const Header4 = (props: IProps) => (
  <h4 className={createClass(props)}>
   <HeaderContent {...props} />
  </h4>
);

export const Header5 = (props: IProps) => (
  <h5 className={createClass(props)}>
   <HeaderContent {...props} />
  </h5>
);

export const HeaderContent = ({ sub, children, icon, circular, image }: IProps) => (
  <div>
    { image ? <img src={image} /> : null }
    { icon ? <i className={css({"circular": circular }, icon, "icon")}></i> : null }
    <div className="content">
      { children }
      { sub ? <div className="sub header">{ sub }</div> : null }
    </div>
  </div>
);
