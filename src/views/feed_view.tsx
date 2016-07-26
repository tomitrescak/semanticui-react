import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/feed.css";

interface IProps {
  classes?: string;
  children?: any;
  size?: "mini" | "small" | "large"
}

export const Feed = ({classes, children, size}: IProps) => (
  <div className={css("ui", size, "feed")}>
    {children}
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
  extraText?: string;
  text?: string;
  summary?: string;
}

export const FeedItem = ({ children, image, date, extraImages, likes, text, extraText, summary }: IItemProps) => (
  <div className="event">
    <div className="label">
      <img src={image} />
    </div>
    <div className="content">
      <div className="summary">
        {text && config.i18n(text)}
        {summary}
        <div className="date">
          {date}
        </div>
      </div>
      {extraImages &&
        <div className="extra images">
          {extraImages.map((img: ILinkImage, index: number) => {
            return <a href={img.link}><img src={img.src} /></a>;
          })}
        </div>
      }
      {extraText &&
        <div className="extra text">
          extraText
        </div>}
      {likes ?
        <div className="meta">
          <a className="like">
            <i className="like icon" /> {likes}
          </a>
        </div> : null}
      { children }
    </div>
  </div>
);
