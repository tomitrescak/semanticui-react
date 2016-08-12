import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/input.css";

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
  search?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export default class  extends React.Component<IProps, {}> {
  get value() {
    return this.refs["input"]["value"];
  }

  set value(val: any) {
    this.refs["input"]["value"] = val;
  }

  render() {
    let type = this.props.type ? this.props.type : "text";

    return (
      <div className={css("field", { inline: this.props.inline })}>
        { this.props.label ? <label>{ config.i18n(this.props.label) }</label> : null }
        <div className={css("ui",
          this.props.iconPosition,
          { icon: this.props.icon },
          { right: this.props.rightLabel },
          { labeled: this.props.leftLabel || this.props.rightLabel },
          { search: this.props.search },
          { disabled: this.props.disabled },
          this.props.classes, "input") }>
          { this.props.leftLabel ? <div className="ui label">{ this.props.leftLabel }</div> : null }
          <input
            ref="input"
            type={type}
            className={this.props.inputClasses}
            placeholder={config.i18n(this.props.placeholder)}
            onChange={ this.props.onChange ? this.props.onChange.bind(this) : null }
            defaultValue={this.props.defaultValue}
            value={this.props.value}
            readOnly={this.props.readOnly}
          />
          { this.props.icon ? <i className={css(this.props.icon, "icon")} /> : null }
          { this.props.rightLabel ? <div className="ui label">{ config.i18n(this.props.rightLabel) }</div> : null }
        </div>
      </div>
    );
  }
}
