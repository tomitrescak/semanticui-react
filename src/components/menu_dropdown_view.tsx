import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/transition.css";
// import "semantic-ui-css/components/transition.js";
// import "semantic-ui-css/components/dropdown.js";
// import "semantic-ui-css/components/dropdown.css";

export interface IProps {
  icon?: string;
  text?: string | Object;
  children?: any;
  id: string;
}

export default class MenuDropdown extends React.Component<IProps, {}> {
  static displayName = 'MenuDropdown';
  
  render() {
    const { icon, text, children, id } =  this.props;
    return (
      <div className="ui dropdown link item" id={id}>
        { icon ? <i className={css(icon, "icon")} /> : null }
        { config.i18n(text) }
        <i className="dropdown icon" />
        <div className="menu">
          { children }
        </div>
      </div>
    );
  }

  componentDidMount() {
    $("#" + this.props.id).dropdown({on: "hover"});
  }
}
