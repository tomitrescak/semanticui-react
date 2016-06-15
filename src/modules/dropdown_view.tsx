import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/label.css";
// import "semantic-ui-css/components/dropdown.css";
// import "semantic-ui-css/components/dropdown.js";


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
  filtered?: boolean;
  children?: any;
  activation: "hover" | "click";
  label: string;
  inline: boolean;
  onChange: Function;
  onInit: Function;
  defaultValue: any;
  value: any;
}

export class Dropdown extends React.Component<IProps, {}> {
  render() {
    let selection = this.props.selection === undefined ? true : false;
    const dropdown = (
      <div className={css("ui", {
          "selection": selection,
          "fluid": this.props.fluid,
          "search": this.props.search,
          "multipls": this.props.multiple,
        } ,"dropdown")} id={this.props.id}
        >
        <input type="hidden" name={this.props.id} value={this.props.value ? this.props.value : this.props.defaultValue} />
        { this.props.text ? <div className="text">{this.props.text}</div> : null }
        <i className="dropdown icon"></i>
        { this.props.defaultText ? <div className="default text">{this.props.defaultText}</div> : null }
        <div className="menu">
          { this.props.children }
        </div>
      </div>
    );

    // we either render as field or as a separate dropdown
    if (this.props.label) {
      return (
        <div className={css("field", { inline: this.props.inline })}>
          <label>{ this.props.label }</label>
          { dropdown }
        </div>
      );
    } else {
      return dropdown;
    }
  }

  componentDidMount() {
    let self = this;
    $("#" + this.props.id).dropdown({
      on: this.props.activation,
      onChange: function(value: string, text: string, $selectedItem: any) {
        if (self.props.onChange && $selectedItem) {
          self.props.onChange(value, $selectedItem[0].innerText);
        }
      }
    });
    if (this.props.onInit) {
      this.props.onInit($("#" + this.props.id));
    }
    // $("#" + this.props.id).dropdown('set selected', this.props.defaultValue);
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.defaultValue !== prevProps.defaultValue) {
      $("#" + this.props.id).dropdown("restore defaults");
      $("#" + this.props.id).dropdown("set selected", this.props.defaultValue);
    }
  }
}

interface IDropdownItem {
  value?: string;
  image?: string;
  icon?: string;
  text: string;
  children: any;
}

export const DropdownItem = ({ value, text, image, icon, children }: IDropdownItem) => (
  <div className="item" data-value={value ? value : text}>
    { icon ? <i className={css(icon, "icon")}></i> : null }
    { image ? <img className="ui mini avatar image" src={image} /> : null }
    { text }
    { children }
  </div>
);
