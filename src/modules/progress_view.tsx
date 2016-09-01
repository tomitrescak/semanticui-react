import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/progress.css";
// import "semantic-ui-css/components/progress.js";


interface IProps {
  id: string;
  classes?: string;
  color?: "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
  value: number;
  total: number;
  indicating?: boolean;
  text?: string;
  showProgress?: boolean;
  successText?: string;
  progressText?: string;
}

export default class Rating extends React.Component<IProps, {}> {
  static displayName = "Progress";

  render() {
    //const { error } = this.props;

    return (
      <div className={css("ui", this.props.color, { "indicating": this.props.indicating }, "progress")}
           id={this.props.id}
           data-value={this.props.value}
           data-total={this.props.total}
           >
        <div className="bar">
          { this.props.showProgress ? <div className="progress"></div> : null }
        </div>
        { this.props.text ? <div className="label">{ this.props.text }</div> : null }
      </div>
    );
  }

  componentDidMount() {
    $("#" + this.props.id).progress({
      label: "ratio",
      text: {
          active  : this.props.text,
          success : this.props.successText,
          ratio   : this.props.text ? this.props.text : (this.props.showProgress ? "{percent}%" : "")
        }
      });
  }
}
