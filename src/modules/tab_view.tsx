import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/tab.css";
import "semantic-ui-css/components/tab.js";

interface IProps {
  children?: any;
}

export default class Tabs extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

interface ITab {
  title: string;
}

export const Tab = ({ title }: ITab) => (
  <div>
    { title }
  </div>
);
