import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/dropdown.css";
// import "semantic-ui-css/components/dropdown.js";

interface IProps {
  id: string;
  classes?: string;
  icon?: string;
  children?: any;
  activation: "hover" | "click";
  pointing?: string;
  labeled?: boolean;
  color?: IColor;
  compact?: boolean;
}

export default class DropdownButton extends React.Component<IProps, {}> {
  render() {
    return (
      <div className={css("ui", this.props.classes, this.props.color,
          { "labeled": this.props.labeled, "compact": this.props.compact,
            "icon": this.props.icon }, this.props.pointing, "pointing dropdown button")}
           id={this.props.id}>
        { this.props.icon ? <i className={css(this.props.icon, "icon")}></i> : null }
        { this.props.children }
      </div>
    );
  }

  componentDidMount() {
    $("#" + this.props.id).dropdown({ on: this.props.activation });
  }
}
