import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/list.css";

export interface IProps {
  classes?: string;
  children?: any;
  divided?: boolean;
  bulleted?: boolean;
  ordered?: boolean;
  celled?: boolean;
  relaxed?: boolean;
  selection?: boolean;
  animated?: boolean;
  inverted?: boolean;
  link?: boolean;
  align?: "middle" | "top" | "bottom",
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
}

export const List = ({
  classes, children, divided, bulleted, ordered, celled, relaxed, selection,
  align, size, animated, inverted, link
}: IProps) => (
    <div className={css("ui", classes, size,
      {
        "inverted": inverted,
        "animated": animated,
        "link": link,
        "divided": divided,
        "bulleted": bulleted,
        "ordered": ordered,
        "celled": celled,
        "relaxed": relaxed,
        "selection": selection
      },
      align,
      {
        "aligned": align
      },
      "list") }>
      { children }
    </div>
  );

export interface IListItemProps {
  classes?: string;
  children?: any;
  icon?: string;
  image?: string;
  float?: "right" | "left";
  bullet?: string;
  link?: any;
  onClick?: Function;
  text?: string | Object;
}

export const ListItem = ({ children, icon, image, float, bullet, classes, link, onClick, text }: IListItemProps) => (
  React.createElement(link ? config.linkElement : config.divElement, { className: css(classes, "item"), href: link, onClick: onClick, "data-value": bullet },
    float && <div className={css(float, "floated content") }>
              { children[1]}
            </div>,
    icon && <i className={css(icon, "icon") }></i>,
    image && <img src={image}  />,
    children && <div className="content">
                  { float ? children[0] : children }
                </div>,
    config.i18n(text)
  )
);

ListItem['displayName'] = 'ListItem';
