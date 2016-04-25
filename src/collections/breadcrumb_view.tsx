import * as React from "react";
import * as css from "classnames";

import "semantic-ui-css/components/breadcrumb.css";

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
  <a className="section" href={link}>{name}</a>
);
export default Breadcrumbs;
