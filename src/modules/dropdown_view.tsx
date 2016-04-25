import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/dropdown.css";
import "semantic-ui-css/components/dropdown.js";


interface IProps {
  id: string;
  classes?: string;
  color?: "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
  defaultText?: string;
  text?: string;
  selection?: boolean;
  fluid?: boolean;
  search?: boolean;
  multiple?: boolean;
  children?: any;
  activation: "hover" | "click";
}

export class Dropdown extends React.Component<IProps, {}> {
  render() {
    let selection = this.props.selection === undefined ? true : false;
    return (
      <div className={css("ui", {
          "selection": selection,
          "fluid": this.props.fluid,
          "search": this.props.search,
        } ,"dropdown")} id={this.props.id}
        multiple={this.props.multiple ? "Dooo" : null}
        >
        <input type="hidden" name={this.props.id} />
        { this.props.text ? <div className="text">{this.props.text}</div> : null }
        <i className="dropdown icon"></i>
        { this.props.defaultText ? <div className="default text">{this.props.defaultText}</div> : null }
        <div className="menu">
          { this.props.children }
        </div>
      </div>
    );
  }

  componentDidMount() {
    $("#" + this.props.id).dropdown({ on: this.props.activation });
  }
}

interface IDropdownItem {
  value?: string;
  image?: string;
  icon?: string;
  text: string;
}

export const DropdownItem = ({ value, text, image, icon }: IDropdownItem) => (
  <div className="item" data-value={value ? value : text}>
    { icon ? <i className={css(icon, "icon")}></i> : null }
    { image ? <img className="ui mini avatar image" src={image} /> : null }
    { text }
  </div>
);
