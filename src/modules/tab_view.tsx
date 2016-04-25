import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/reset.css";
import "semantic-ui-css/components/tab.css";
import "semantic-ui-css/components/tab.js";

interface ITab {
  title: string;
  children?: any;
}

interface IProps {
  id: string;
  children?: any;
  type?: "tabs" | "buttons" | "lines";
}

export default class Tabs extends React.Component<IProps, {}> {
  render() {
    if (!this.props.children.length) {
      throw "there need to be at least two tabs ...";
    }
    let type = this.props.type ? this.props.type : "tabs";
    let menuClass = "secondary";
    let tabClass = "segment";

    if (type === "tabs") {
      menuClass = "top attached tabular";
      tabClass = "bottom attached segment";
    } else if (type === "lines") {
      menuClass = "pointing secondary";
    }

    return (
      <span>
      <div className={css("ui", menuClass, "menu")} id={this.props.id}>
        { this.props.children.map((tab: { props: ITab }, index: number) => {
          return (
            <a key={index} className={css({ "active": index === 0}, "item")} data-tab={this.props.id + "-" + index}>{tab.props.title}</a>
          );
        }) }
      </div>
      { this.props.children.map((tab: { props: ITab }, index: number) => {
        return (
          <div key={index} className={css("ui", { "active": index === 0}, "tab", tabClass) } data-tab={this.props.id + "-" + index}>
            { tab }
          </div>
        );
      }) }
      </span>
    );
  }

  componentDidMount() {
    $("#" + this.props.id + " .item").tab();
  }
}



export const Tab = ({ title, children }: ITab) => (
  <span>
    { children }
  </span>
);
