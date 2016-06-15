import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/item.css";

interface IProps {
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

interface IItemProps {
  image?: string;
  icon?: string;
  header?: string;
  link?: string;
  children?: any;
  imageSize?: "tiny" | "small";
  meta?: IMeta[];
  alignment?: "middle aligned" | "top aligned" | "middle aligned";
}

export const Item = ({ image, header, imageSize, link, children, meta, alignment, icon}: IItemProps) => (
  <div className="item">
    { image ?
      <div className={css(imageSize, "image")}>
        { image ? <img src={image} /> : null }
      </div>
      : null
    }
    { icon ? <i className={css(icon, "icon")} /> : null }
    <div className={css(alignment, "content")}>
      { header ? <a className="header" link={link}>{ header }</a> : null }
      { meta ?
        <div className="meta">
          { meta.map((met: IMeta, index: number) => {
            return <span class={met.name}>{ met.description ? met.description : met.name }</span>;
          })}
        </div>
        : null }
      { children && children.filter ?
        <div className="description">
          { children[0] }
        </div>
      : <div className="description">
        { children }
        </div> }
      { children && children.filter && children.length !== undefined && children.length > 1 ?
        <div className="extra">
          { children[1] }
        </div>
        : null }
    </div>
  </div>
);
