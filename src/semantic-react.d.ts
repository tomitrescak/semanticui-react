declare module "semanticui-react" {
  // global interfaces

  interface IEntity {
    id: string;
  }

  interface IComponent {
    classes?: string;
  }

  interface ILocalComponent extends IComponent {
    mid: string;
    text: string;
  }

  // input

  interface IInput {
    classes?: string;
    placeholder?: string;
    label?: string;
    icon?: string;
    iconPosition?: string;
    onChange: Function;
    children?: any;
    inputClasses?: string;
    type?: string;
  }

  export class Input extends React.Component<IInput, {}> {}

  // accordion

  interface IAcordion {
    exclusive?: boolean;
    children?: any;
    id: string;
    menu?: boolean;
  }

  export class Accordion extends React.Component<IAcordion, {}> {}

  // form

  export class Form extends React.Component<{}, {}> {}

  // modal

  export class Modal extends React.Component<{}, {}> {}

  // column

  export class Column extends React.Component<{}, {}> {}

  // grid

  export class Grid extends React.Component<{}, {}> {}

  // menu

  export class Menu extends React.Component<IComponent, {}> {}

  // item

  interface IItem extends ILocalComponent {
    link: string;
    icon: string;
  }
  export class Item extends React.Component<IItem, {}> {}

  // menu dropdown

  interface IMenuDropdown extends ILocalComponent, IEntity { }

  export class MenuDropdown extends React.Component<IMenuDropdown, {}> {}
}
