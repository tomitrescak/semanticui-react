import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/dimmer.css";
// import "semantic-ui-css/components/dimmer.js";
// import "semantic-ui-css/components/modal.css";
// import "semantic-ui-css/components/modal.js";


interface IProps {
  id: string;
  classes?: string;
  header?: string;
  children?: any;
  image?: boolean;
  approveAction?: Function;
  neutralAction?: Function;
  cancelAction?: Function;
  approveText?: string;
  neutralText?: string;
  cancelText?: string;
}

export const Modal = ({ id, header, children, image,
    approveAction, neutralAction, cancelAction, approveText, neutralText, cancelText }: IProps) => (
  <div className="ui modal" id={id}>
    { header ? <div className="header">{ config.i18n(header) }</div> : null }
    { header ? <div className={css({"image": image}, "content")}>{ children }</div> : null }
    { !header ? children : null }
    <div className="actions">
      { approveAction ? <div className="ui green approve button" onClick={approveAction.bind(this)}>{config.i18n(approveText)}</div> : null }
      { neutralAction ? <div className="ui primary button" onClick={neutralAction.bind(this)}>{ config.i18n(neutralText) }</div> : null }
      { cancelAction ? <div className="ui cancel button" onClick={cancelAction.bind(this)}>{ config.i18n(cancelText) }</div> : null }
    </div>
  </div>
);

export default Modal;
