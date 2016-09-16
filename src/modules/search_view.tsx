import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/input.css";
// import "semantic-ui-css/components/search.css";
// import "semantic-ui-css/components/search.js";


export interface IProps {
  classes?: string;
  id: string;
  text: string;
  loading?: boolean;
  fluid?: boolean;
  category?: boolean;
  values?: { title: string }[];
  setup?: Function;
}


export default class Search extends React.Component<IProps, {}> {
  static displayName = 'Search';
  
  render() {
    return (
      <div id={this.props.id} className={css("ui",
        {
          "loading": this.props.loading,
          "fluid": this.props.fluid,
          "category": this.props.category
        },"search")}>
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder={config.i18n(this.props.text)} />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.values) {
        $("#" + this.props.id).search({ source: this.props.values });
    }

    if (this.props.setup) {
      this.props.setup();
    }
  }
}
