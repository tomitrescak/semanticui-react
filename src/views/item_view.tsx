import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/item.css";

export interface IProps {
  classes?: string;
  children?: any;
  loading?: boolean;
  divided?: boolean;
  link?: boolean;
}

export const Items = ({classes, children, loading, divided, link}: IProps) => (
  <div className={css("ui", classes, { "loading": loading, "divided": divided, "link": link }, "items") }>
    { children }
  </div>
);

interface IMeta {
  name: string;
  description?: string;
}

export interface IItemProps {
  image?: string;
  icon?: string;
  header?: string;
  description: string;
  link?: string;
  children?: any;
  imageSize?: "tiny" | "small";
  alignment?: "middle aligned" | "top aligned" | "middle aligned";
  key: any;
}

export const Item = {
  Main: ({ image, header, description, imageSize, link, children, alignment, icon}: IItemProps) => (
    <div className="item">
      { image != null && <div className={css(imageSize, "image")}><img src={image} /></div> }
      { icon && <i className={css(icon, "icon") } /> }
      { header || description ?
        <div className={css(alignment, "content") }>
          { header && link && React.createElement(config.linkElement, { className: "header", to: link, href: link }, header) }
          { header && !link && <div className="header" link={link}>{ header }</div> }
          { description && <div className="description">{description}</div>}
        </div> : false
      }
      { children }
    </div>
  ),
  Image: ({ classes, children, src, size, style }: any) => (
    <div className={css(classes, size, "image")}>
      { children }
      { src && <img src={src} /> }
    </div>
  ),
  Content: ({ alignment, children, style }: any) => (
    <div className={css(alignment, "content") } style={style}>{ children }</div>
  ),
  Header: ({ children, classes, style }: any) => (
     <div className={css(classes, "header")} style={style}>{ children }</div>
  ),
  Meta: ({ children, classes, style }: any) => (
     <div className={css(classes, "meta")} style={style}>{ children }</div>
  ),
  Description: ({ children, classes, style }: any) => (
     <div className={css(classes, "description")} style={style}>{ children }</div>
  ),
  Extra: ({ children, classes, style }: any) => (
     <div className={css(classes, "extra")} style={style}>{ children }</div>
  )
};
