import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/feed.css";

interface IProps {
  classes?: string;
  children?: any;
  size?: "mini" | "small" | "large"
}

export const Feed = ({classes, children, size}: IProps) => (
  <div className={css("ui", size, "feed") }>
    { children }
  </div>
);

interface ILinkImage {
  src: string;
  link: string;
}

interface IItemProps {
  image?: string;
  date?: string;
  children?: any;
  likes?: string;
  extraImages?: ILinkImage[];
}

export const FeedItem = ({ children, image, date, extraImages, likes }: IItemProps) => (
  <div className="event">
    <div className="label">
      <img src={ image } />
    </div>
    <div className="content">
      <div className="summary">
        { children && children.length ? children[0] : children }
        <div className="date">
          { date }
        </div>
      </div>
      { extraImages ?
        <div className="extra images">
          { extraImages.map((img: ILinkImage, index: number) => {
            return <a href={img.link}><img src={img.src} /></a>;
          }) }
        </div> : null
      }
      { children && children.length > 1 ?
        <div className="extra text">
          { children[1]}
        </div> : null }
      { likes ?
        <div className="meta">
          <a className="like">
            <i className="like icon" /> { likes }
          </a>
        </div> : null }
    </div>
  </div>
);
