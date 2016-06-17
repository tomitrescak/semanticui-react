import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/breadcrumb.css";

interface IProps {
  classes?: string;
  children?: any;
  divider: string;
}

export const Breadcrumbs = ({ classes, children, divider }: IProps) => (
  <div className={css("ui", classes, "breadcrumb")}>
    { children && children.length ?
      children.map((child: any, index: number) => {
        { child }
        { index < children.length ? <div class="divider"> {divider} </div> : null}
      }) : null}
  </div>
);

interface IBreadcrumbProps {
  name?: string;
  link?: any;
}

export const Breadcrumb = ({ name, link }: IBreadcrumbProps) => (
  React.createElement(config.linkElement, { className: "section", href: link }, config.i18n(name))
);
export default Breadcrumbs;
