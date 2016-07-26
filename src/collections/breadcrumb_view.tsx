import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

// import "semantic-ui-css/components/breadcrumb.css";

interface IProps {
  classes?: string;
  children?: any;
  divider?: string;
  dividerIcon?: string;
}

export const Breadcrumbs = ({ classes, children, divider, dividerIcon }: IProps) => {
  const crumbs: any[] = [];
  if (children) {
    if (children.length) {
      children.forEach((child: any, index: number) => {
        if (index < children.length - 1) {
          crumbs.push(<Breadcrumb key={index * 2} { ...child.props } />);
          if (dividerIcon) {
            crumbs.push(<i key={index * 2 + 1} className={css(dividerIcon, "icon divider")} />);
          } else {
            crumbs.push(<span key={index * 2 + 1} className="divider"> {divider} </span>);
          }
        } else {
          crumbs.push(<Breadcrumb key={index * 2} active={true} { ...child.props } />);
        }
      });
    } else {
      crumbs.push(<Breadcrumb key={0} { ...children.props } />);
    }
  }

  return (
    <div className={css("ui", classes, "breadcrumb") }>
      { crumbs }
    </div>
  );
};

interface IBreadcrumbProps {
  text?: string;
  link?: any;
  active?: boolean;
  children: any;
}

export const Breadcrumb = ({ text, link, active, children }: IBreadcrumbProps) => (
  React.createElement(active ? "div" : config.linkElement, {
    className: css({ active }, "section"),
    href: link,
    to: link,
  },
  text && config.i18n(text),
  children
  )
);
export default Breadcrumbs;
