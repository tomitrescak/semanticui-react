import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

export interface IProps {
  children?: any;
  title: string;
  active?: boolean;
}

// function create(title: string, active: boolean, children: any) {
//   return [
//     <div className={css({ "active": active }, "title") }>
//       <i className="dropdown icon"></i>
//       { title }
//     </div>
//     <div className={css({ "active": active }, "content") }>
//       { children }
//     </div>
//   ];
// }

// export default class Item extends React.Component<IProps, {}> {
//   render() {
//     return create (this.props.title, this.props.active, this.props.children);
//   }
// }

export const Item = ({children, title, active}: IProps) => (
  <div className="item">
    <div className={css({ "active": active }, "title") }>
      <i className="dropdown icon"></i>
      { config.i18n(title) }
    </div>
    <div className={css({ "active": active }, "content") }>
      { children }
    </div>
  </div>
);

Item['displayName'] = 'AccordionItem';

export default Item;
