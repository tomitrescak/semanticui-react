import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/comment.css";

interface IProps {
  classes?: string;
  children?: any;
  header?: string;
  id: string;
  text: string;
  handler: Function;
}

export const Comments = ({classes, children, header, id, text, handler}: IProps) => (
  <div className="ui comments">
    { header ? <h3 className="ui dividing header">{ header }</h3> : null }
    { children}

    <form className="ui reply form">
      <div className="field">
        <textarea id={id} />
      </div>
      <div className="ui blue labeled submit icon button" onClick={handler.bind(this)}>
        <i className="icon edit" /> { config.i18n(text) }
      </div>
    </form>

  </div>

);

interface IAction {
  name: string;
  handler: Function;
}

interface IItemProps {
  image?: string;
  date: string;
  children?: any;
  author: string;
  actions: IAction[];
}

export const Comment = ({ children, image, date, author, actions }: IItemProps) => (
  <div className="comment">
    { image ?
      <a className="avatar">
        <img src={image} />
      </a> : null }
    <div className="content">
      <a className="author">{ author }</a>
      <div className="metadata">
        <span className="date">{ date }</span>
      </div>
      <div className="text">
        { children && children.filter ? children[0] : children }
      </div>
      { actions ?
        <div className="actions">
          {
            actions.map((action: IAction, index: number) => {
              return <a onClick={action.handler.bind(this)}>{ config.i18n(action.name) }</a>;
            })
          }
        </div> : null
      }
    </div>
    { children && children.filter && children.length > 1 ? children[1] : null }
  </div>
);
