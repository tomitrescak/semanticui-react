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
}

export default class  extends React.Component<IProps, {}> {
  value() {
    return this.refs["input"]["value"];
  }

  render() {
    let type = this.props.type ? this.props.type : "text";

    return (
      <div className="field">
        <div className={css("ui", this.props.iconPosition, { icon: this.props.icon }, this.props.classes, "input") }>
          <input
            ref="input"
            type={type}
            className={this.props.inputClasses}
            placeholder={this.props.placeholder}
            onChange={ this.props.onChange ? this.props.onChange.bind(this) : null }
            defaultValue={this.props.value}
          />
          { this.props.icon ? <i className={css(this.props.icon, "icon")} /> : null }
        </div>
      </div>
    );
  }
}
