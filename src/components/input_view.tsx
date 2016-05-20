import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/input.css";

interface IProps {
  classes?: string;
  placeholder?: string;
  label?: string;
  icon?: string;
  iconPosition?: string;
  onChange?: Function;
  children?: any;
  inputClasses?: string;
  type?: string;
  value?: any;
  defaultValue?: any;
  leftLabel?: string;
  rightLabel?: string;
  inline?: boolean;
}

export default class  extends React.Component<IProps, {}> {
  value() {
    return this.refs["input"]["value"];
  }

  render() {
    let type = this.props.type ? this.props.type : "text";

    return (
      <div className={css("field", { inline: this.props.inline })}>
        { this.props.label ? <label>{ this.props.label }</label> : null }
        <div className={css("ui",
          this.props.iconPosition,
          { icon: this.props.icon },
          { right: this.props.rightLabel },
          { labeled: this.props.leftLabel || this.props.rightLabel },
          this.props.classes, "input") }>
          { this.props.leftLabel ? <div className="ui label">{ this.props.leftLabel }</div> : null }
          <input
            ref="input"
            type={type}
            className={this.props.inputClasses}
            placeholder={this.props.placeholder}
            onChange={ this.props.onChange ? this.props.onChange.bind(this) : null }
            defaultValue={this.props.defaultValue}
            value={this.props.value}
          />
          { this.props.icon ? <i className={css(this.props.icon, "icon")} /> : null }
          { this.props.rightLabel ? <div className="ui label">{ this.props.rightLabel }</div> : null }
        </div>
      </div>
    );
  }
}
