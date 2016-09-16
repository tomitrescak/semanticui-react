import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/header.css";

export interface IProps {
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
  text?: string;
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

export const Header1 = (props: IProps) => HeaderContent("h1", props);

export const Header2 = (props: IProps) => HeaderContent("h2", props);

export const Header3 = (props: IProps) => HeaderContent("h3", props);

export const Header4 = (props: IProps) => HeaderContent("h4", props);

export const Header5 = (props: IProps) => HeaderContent("h5", props);

export const HeaderContent = (headerSize: string, props: IProps) => {
  const { sub, children, icon, circular, image, text } = props;

  return (
    React.createElement(headerSize, { className: createClass(props) },
      image && <img className="ui image" src={image} /> ,
      icon && <i className={css({ "circular": circular }, icon, "icon") }></i> ,
      <div className="content">
        { children }
        { text && config.i18n(text) }
        { sub && <div className="sub header">{ config.i18n(sub) }</div> }
      </div>
    )
  );
};

Header1['displayName'] = 'Header1';
Header2['displayName'] = 'Header2';
Header3['displayName'] = 'Header3';
Header4['displayName'] = 'Header4';
Header5['displayName'] = 'Header5';
