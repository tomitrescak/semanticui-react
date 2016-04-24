import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/transition.css";
import "semantic-ui-css/components/transition.js";
import "semantic-ui-css/components/accordion.js";
import "semantic-ui-css/components/accordion.css";

interface IProps {
  exclusive?: boolean;
  children?: any;
  id: string;
  menu?: boolean;
}

export default class Accordion extends React.Component<IProps, {}> {
  render() {
    return (
      <div className={ css("ui", { "vertical": this.props.menu }, "accordion", { "menu": this.props.menu })} id={this.props.id} >
        {
          this.props.children }
      </div>
    );
  }

  componentDidMount() {
    $("#" + this.props.id).accordion({ exclusive: this.props.exclusive });
  }
}

// this.props.menu ?
//   this.props.children.map((item: any, index: number) => {
//     return (
//       <div class="item" key={index}>{ item }</div>
//     );
//   })
// :
