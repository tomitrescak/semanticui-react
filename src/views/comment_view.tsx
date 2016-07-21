import * as React from "react";
import * as css from "classnames";
import config from "../config/config";
import Button, { IButtonProps } from "../components/button_view";

// import "semantic-ui-css/components/comment.css";

interface IProps {
  classes?: string;
  children?: any;
  header?: string;
  commentPlaceholder?: string;
  addButtonText: string;
  previewButtonText?: string;
  addComment: (e: React.SyntheticEvent, comment: string) => void;
  previewComment?: (comment: string) => void;
}

export class Comments extends React.Component<IProps, {}> {
  text: HTMLTextAreaElement;
  addButton: React.StatelessComponent<IButtonProps>;

  render() {
    const {classes, children, header, addButtonText, addComment, previewButtonText, previewComment, commentPlaceholder } = this.props;
    return (
      <div className="ui comments">
        {header && <h3 className="ui dividing header">{header}</h3>}
        {children}

        <form className="ui reply form">
          <div className="field">
            <textarea ref={(node) => this.text = node } placeholder={config.i18n(commentPlaceholder)} />
          </div>
          <Button color="blue" icon="edit" labeled text={addButtonText} onClick={(e: any) => addComment(e, this.text.value)} />
          {
            previewComment && <Button color="grey" icon="search" labeled text={previewButtonText}
              onClick={(e: React.SyntheticEvent) => {
                e.preventDefault();
                previewComment(this.text.value);
              }} />
          }
        </form>

      </div>
    );
  }
}

interface IAction {
  name: string;
  handler: Function;
}

interface IItemProps {
  image?: string;
  date: string;
  children?: any;
  author: string;
  actions?: IAction[];
  text?: string;
}

export const Comment = ({ children, image, date, author, actions, text }: IItemProps) => (
  <div className="comment">
    {image ?
      <a className="avatar">
        <img src={image} />
      </a> : null}
    <div className="content">
      <a className="author">{author}</a>
      <div className="metadata">
        <span className="date">{date}</span>
      </div>
      <div className="text">
        {text && config.i18n(text)}
        {children && children.filter ? children[0] : children}
      </div>
      {actions ?
        <div className="actions">
          {
            actions.map((action: IAction, index: number) => {
              return <a onClick={action.handler.bind(this)}>{config.i18n(action.name)}</a>;
            })
          }
        </div> : null
      }
    </div>
    {children && children.filter && children.length > 1 ? children[1] : null}
  </div>
);
