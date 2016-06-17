import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/reset.css";
// import "semantic-ui-css/components/tab.css";
// import "semantic-ui-css/components/tab.js";

interface ITab {
  title: string;
  children?: any;
  url?: string;
  name?: string;
}

interface IProps {
  id: string;
  children?: any;
  activeTab?: string;
  type?: "tabs" | "buttons" | "lines";
  linkBased?: boolean;
}

export class Tabs extends React.Component<IProps, {}> {
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
            React.createElement(config.linkElement,
              { href: tab.props.url,
                key: index,
                className: css({ "active": tab.props.name && this.props.activeTab === tab.props.name || !this.props.activeTab && index === 0}, "item"),
                "data-tab": tab.props.name ? tab.props.name : (this.props.id + "-" + index)
              },
              config.i18n(tab.props.title)
            )
          );
        }) }
      </div>
      { this.props.children.map((tab: { props: ITab }, index: number) => {
        return (
          <div key={index}
            className={css("ui", { "active": tab.props.name && this.props.activeTab === tab.props.name || !this.props.activeTab && index === 0}, "tab", tabClass) }
            data-tab={tab.props.name ? tab.props.name : (this.props.id + "-" + index)}>
            { tab }
          </div>
        );
      }) }
      </span>
    );
  }

  componentDidMount() {
    if (!this.props.linkBased) {
      $("#" + this.props.id + " .item").tab();
    }
  }
}

export const Tab = ({ title, children }: ITab) => (
  <span>
    { children }
  </span>
);

export default Tabs;
