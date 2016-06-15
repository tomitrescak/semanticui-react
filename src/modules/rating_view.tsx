import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/rating.css";
// import "semantic-ui-css/components/rating.js";


interface IProps {
  id: string;
  classes?: string;
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
  type: "star" | "heart";
  rating: number;
  maxRating: number;
}

export default class Rating extends React.Component<IProps, {}> {
  render() {
    //const { error } = this.props;

    return (
      <div id={this.props.id}
           className={css("ui", this.props.type, this.props.size, "rating")}
           data-rating={this.props.rating}
           data-max-rating={this.props.maxRating}></div>
    );
  }

  componentDidMount() {
    $("#" + this.props.id).rating();
  }
}
