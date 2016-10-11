import * as React from "react";
import * as css from "classnames";
import config from "../config/config";
import Icon from "../components/icon_view";

// import "semantic-ui-css/components/reset.css";
// import "semantic-ui-css/components/tab.css";
// import "semantic-ui-css/components/tab.js";

export interface ITab {
  title?: string;
  text?: string | Object;
  children?: any;
  url?: string;
  name?: string;
  style?: any;
  icon?: string;
}

export interface ITabs {
  id: string;
  children?: any;
  classes?: string;
  containerClass?: string;
  activeTab?: string;
  type?: "tabs" | "buttons" | "lines";
  linkBased?: boolean;
  selected?: (tabName: string) => void;
}

export class Tabs extends React.Component<ITabs, {}> {
  static displayName = 'Tabs';

  render() {
    if (!Array.isArray(this.props.children)) {
      throw new Error("there need to be at least two tabs ...");
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

    const tabs = this.props.children.filter((f: any) => f);

    return (
      <span className={this.props.containerClass}>
      <div className={css("ui", this.props.classes, menuClass, "menu")} id={this.props.id}>
        { tabs.map((tab: { props: ITab }, index: number) => {
          return (
            React.createElement(tab.props.url ? config.linkElement : "div",
              { href: tab.props.url,
                to: tab.props.url,
                key: index,
                className: css({ "active": tab.props.name && this.props.activeTab === tab.props.name || !this.props.activeTab && index === 0}, "item"),
                "data-tab": tab.props.name ? tab.props.name : (this.props.id + "-" + index),
                onClick: () => this.props.selected && this.props.selected(tab.props.name)
              },
              tab.props.icon && <Icon icon={tab.props.icon} />,
              tab.props.text && config.i18n(tab.props.text),
              tab.props.title
            )
          );
        }) }
      </div>
      { tabs.map((tab: { props: ITab }, index: number) => {
        return (
          <div key={index}
            style={tab.props.style}
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

  componentDidUpdate() {
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

Tab['displayName'] = 'Tab';

export default Tabs;
