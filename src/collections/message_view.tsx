import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

import { IColor } from '../config/interfaces';

export interface IProps extends IColor {
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
  classes?: string;
  children?: any;
  header?: string | Object;
  icon?: string;
  attached?: boolean;
  compact?: boolean;
  fluid?: boolean;
}

export const Message = ({ classes, children, header, color, size, icon, attached, compact, fluid}: IProps) => (
  <div className={css("ui", classes, color, size, { attached, compact, "icon": icon, fluid }, "message") }>
    { icon ? <i className={css(icon, "icon") }></i> : null }
    <div className="content">
      { header && <div className="header">{ config.i18n(header) }</div> }
      { children }
    </div>
  </div>
);

Message['displayName'] = 'Message';

export default Message;
