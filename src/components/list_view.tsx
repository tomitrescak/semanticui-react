import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/list.css";

interface IProps {
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
  align?: "middle" | "top" | "bottom",
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
}

export const List = ({
  classes, children, divided, bulleted, ordered, celled, relaxed, selection,
  align, size, animated, inverted
}: IProps) => (
    <div className={css("ui", classes, size,
      {
        "inverted": inverted,
        "animated": animated,
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

interface IListItemProps {
  classes?: string;
  children?: any;
  icon?: string;
  image?: string;
  float?: "right" | "left";
  bullet?: string;
}

export const ListItem = ({ children, icon, image, float, bullet }: IListItemProps) => (
  <div className="item" data-value={bullet}>
    { float ?
      <div className={css(float, "floated content") }>
        { children[1]}
      </div>
      : null }

    { icon ? <i className={css(icon, "icon") }></i> : null }
    { image ? <img src={image}  /> : null }

    <div className="content">
      { float ? children[0] : children }
    </div>
  </div>
);
