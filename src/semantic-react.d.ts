declare module "semanticui-react/components/breadcrumbs" {
  interface IProps {
    classes?: string;
    children?: any;
    divider: string;
  }

  export default class Input extends React.Component<IProps, {}> { }
}


declare module "semanticui-react" {

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

  // COLLECTIONS

  // breadcrumbs

  interface IBreadcrumbsProps {
    classes?: string;
    children?: any;
    divider: string;
  }

  export class Breadcrumbs extends React.Component<IBreadcrumbsProps, {}> { }

  interface IBreadcrumbProps {
    name?: string;
    link?: any;
  }

  export class Breadcrumb extends React.Component<IBreadcrumbProps, {}> { }

  // form

  interface IFormProps {
    classes?: string;
    children?: any;
  }

  export class Form extends React.Component<IFormProps, {}> { }

  // grid

  interface IGridProps {
    classes?: string;
    columns?: number;
    children?: any;
  }

  export class Grid extends React.Component<IGridProps, {}> { }

  // menu

  interface IMenuProps {
    classes?: string;
    children?: any;
    pagination?: boolean;
    vertical?: boolean;
  }

  export class Menu extends React.Component<IMenuProps, {}> { }

  interface IMenuDropdown {
    icon?: string;
    text?: string;
    children?: any;
    id: string;
  }

  export class MenuDropdown extends React.Component<IMenuDropdown, {}> { }

  interface IMenuItem {
    classes?: string;
    icon?: string;
    text?: string;
    children?: any;
    link: string;
  }

  export class MenuItem extends React.Component<IMenuItem, {}> { }

  ///////////////////////////////////////////////////////
  // components

  interface IColors {
    color?: "primary" | "secondary" | "success" | "failure" | "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
  }

  interface ISizes {
    size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
  }

  interface IButton extends IColors, ISizes {
    classes?: string;
    text?: string;
    basic?: boolean;
    inverted?: boolean;
    compact?: boolean;
    icon?: string;
    labeled?: "left" | "right";
    loading?: boolean;
    circular?: boolean;
    toggle?: "active" | "inactive";
    fluid?: boolean;
    disabled?: boolean;
    attached?: "left" | "right";
    active?: boolean;
  }

  export class Button extends React.Component<IButton, {}> { }

  // buttons

  interface IButtons extends IColors, ISizes {
    classes?: string;
    children?: any;
    vertical?: boolean;
    labeled?: boolean;
    icon?: boolean;
  }

  export class Buttons extends React.Component<IButton, {}> { }

  // column

  interface IColumn {
    classes?: string;
    width?: number;
    children?: any;
  }

  export class Column extends React.Component<IColumn, {}> { }

  // divider

  interface IDivider {
    classes?: string;
    children?: any;
    icon?: string;
    inverted?: boolean;
    orientation: "vertical" | "horizontal";
    isHeader?: boolean;
  }

  export class Divider extends React.Component<IDivider, {}> { }

  // fields

  interface IFields {
    children?: any;
    type: "inline" | "grouped";
    label?: string;
  }

  export class Fields extends React.Component<IFields, {}> { }

  // header

  interface IHeader extends IColors {
    classes?: string;
    children?: any;
    icon?: string;
    sub?: string;
    circular?: boolean;
    alignment?: "center" | "left" | "right";
    image?: string;
    dividing?: boolean;
    attached?: "top" | "middle" | "bottom";
    iconOnTop?: boolean;
    block?: boolean;
    inverted?: boolean;
  }

  export class Header extends React.Component<IHeader, {}> { }

  // icon

  interface IIcon {
    classes?: string;
    children?: any;
    icon: string;
  }

  export class Icon extends React.Component<IIcon, {}> { }

  // image

  interface IImage extends ISizes {
    classes?: string;
    children?: any;
    src?: string;
    avatar?: boolean;
    bordered?: boolean;
    fluid?: boolean;
    rounded?: boolean;
    circular?: boolean;
    align: "top" | "middle" | "bottom";
    centered?: boolean;
    spaced?: boolean;
    float: "left" | "right";
  }

  export class Image extends React.Component<IImage, {}> { }

  // input

  interface IInput {
    classes?: string;
    placeholder?: string;
    label?: string;
    icon?: string;
    iconPosition?: string;
    onChange?: Function;
    children?: any;
    inputClasses?: string;
    type?: string;
    value?: any;
  }

  export class Input extends React.Component<IInput, {}> { }

  // label

  interface ILabel extends ISizes, IColors {
    classes?: string;
    children?: any;
    icon?: string;
    rightIcon?: string;
    image?: string;
    detail?: string;
    pointing?: "left" | "right" | "above" | "below";
    basic?: boolean;
    corner?: "left" | "right";
    tag?: boolean;
    ribbon?: boolean;
    attached?: "top" | "bottom" | "top right" | "top left" | "bottom left" | "bottom right";
    horizontal?: boolean;
    floating?: boolean;
    circular?: boolean;
  }

  export class Label extends React.Component<ILabel, {}> { }

  // list

  interface IList extends ISizes {
    classes?: string;
    children?: any;
    divided?: boolean;
    bulleted?: boolean;
    ordered?: boolean;
    celled?: boolean;
    relaxed?: boolean;
    selection?: boolean;
    animated?: boolean;
    inverted?: boolean;
    align?: "middle" | "top" | "bottom";
  }

  export class List extends React.Component<IList, {}> { }

  interface IListItemProps {
    classes?: string;
    children?: any;
    icon?: string;
    image?: string;
    float?: "right" | "left";
    bullet?: string;
  }

  export class ListItem extends React.Component<IListItemProps, {}> { }

  // loader

  interface ILoader {
    classes?: string;
    inline?: boolean;
    size?: "small" | "large";
    active?: boolean;
  }

  export class Loader extends React.Component<ILoader, {}> { }

  // segment

  interface ISegment extends IColors {
    classes?: string;
    children?: any;
    attached?: "top" | "bottom" | "middle";
    loading?: boolean;
    inverted?: boolean;
    compact?: boolean;
    circular?: boolean;
    alignment?: "left" | "center" | "right";
    float?: "left" | "right";
  }

  export class Segment extends React.Component<ISegment, {}> { }

  interface ISegments {
    classes?: string;
    children?: any;
  }

  export class Segments extends React.Component<ISegments, {}> { }

  // site

  interface ISite {
    classes?: string;
    children?: any;
  }

  export class Site extends React.Component<ISite, {}> { }

  // steps

  interface ISteps {
    classes?: string;
    children?: any;
    ordered?: boolean;
    vertical?: boolean;
    fluid?: boolean;
    stackable?: boolean;
    attached?: "top" | "bottom";
  }

  export class Steps extends React.Component<ISteps, {}> { }

  interface IStep {
    active?: boolean;
    icon?: string;
    title: string;
    disabled?: boolean;
    completed?: boolean;
    children?: any;
  }

  export class Step extends React.Component<IStep, {}> { }

  ////////////////////////////////////////
  // MODULES

  // accordion

  interface IAcordion {
    exclusive?: boolean;
    children?: any;
    id: string;
    menu?: boolean;
  }

  export class Accordion extends React.Component<IAcordion, {}> { }

  interface IAccordionItem {
    children?: any;
    title: string;
    active?: boolean;
  }

  export class AccordionItem extends React.Component<IAccordionItem, {}> { }

  // checkbox

  interface IRadio {
    classes?: string;
    id?: string;
    name?: string;
    children?: any;
    text?: string;
    checked?: boolean;
    disabled?: boolean;
    fitted?: boolean;
  }

  export class Radio extends React.Component<IRadio, {}> { }

  interface ICheckbox extends IRadio {
    variation?: "slider" | "toggle";
  }

  export class Checkbox extends React.Component<ICheckbox, {}> { }

  // dropdowns

  interface IDropdown extends IColors {
    id: string;
    classes?: string;
    defaultText?: string;
    text?: string;
    selection?: boolean;
    fluid?: boolean;
    search?: boolean;
    multiple?: boolean;
    children?: any;
    activation: "hover" | "click";
  }

  export class Dropdown extends React.Component<IDropdown, {}> { }

  interface IDropdownItem {
    value?: string;
    image?: string;
    icon?: string;
    text: string;
  }

  export class DropdownItem extends React.Component<IDropdownItem, {}> { }

  interface IDropdownButton {
    id: string;
    classes?: string;
    icon?: string;
    children?: any;
    activation: "hover" | "click";
    pointing?: string;
    labeled?: boolean;
  }

  export class DropdownButton extends React.Component<IDropdownButton, {}> { }

  // modal

  interface IModal {
    id: string;
    classes?: string;
    header?: string;
    children?: any;
    image?: boolean;
    approveAction?: Function;
    neutralAction?: Function;
    cancelAction?: Function;
    approveText?: string;
    neutralText?: string;
    cancelText?: string;
  }

  export class Modal extends React.Component<IModal, {}> { }

  // progress

  interface IProgress extends IColors {
    id: string;
    classes?: string;
    value: number;
    total: number;
    indicating?: boolean;
    text?: string;
    showProgress?: boolean;
    successText?: string;
    progressText?: string;
  }

  export class Progress extends React.Component<IProgress, {}> { }

  // rating

  interface IRating {
    id: string;
    classes?: string;
    size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
    type: "star" | "heart";
    rating: number;
    maxRating: number;
  }

  export class Rating extends React.Component<IRating, {}> { }

  // search

  interface ISearch {
    classes?: string;
    id: string;
    text: string;
    loading?: boolean;
    fluid?: boolean;
    category?: boolean;
    values?: { title: string }[];
    setup?: Function;
  }

  export class Search extends React.Component<ISearch, {}> { }

  // sidebar

  interface ISidebar {
    classes?: string;
    id: string;
    children?: any;
    position?: "top" | "left" | "bottom" | "right";
    inverted?: boolean;
    visible?: boolean;
  }

  export class Sidebar extends React.Component<ISidebar, {}> { }

  // tabs

  interface ITab {
    title: string;
    children?: any;
  }

  interface ITabs {
    id: string;
    children?: any;
    type?: "tabs" | "buttons" | "lines";
  }

  export class Tabs extends React.Component<ITabs, {}> { }

  export class Tab extends React.Component<ITab, {}> { }

  ///////////////////////////////////////////////
  // VIEWS

  // comments

  interface IComments {
    classes?: string;
    children?: any;
    header?: string;
    id: string;
    text: string;
    handler: Function;
  }

  export class Comments extends React.Component<IComments, {}> { }

  interface IAction {
    name: string;
    handler: Function;
  }

  interface IComment {
    image?: string;
    date: string;
    children?: any;
    author: string;
    actions: IAction[];
  }

  export class Comment extends React.Component<IComment, {}> { }

  // feed

  interface IFeed extends ISizes {
    classes?: string;
    children?: any;
  }

  export class Feed extends React.Component<IFeed, {}> { }

  interface ILinkImage {
    src: string;
    link: string;
  }

  interface IFeedItem {
    image?: string;
    date?: string;
    children?: any;
    likes?: string;
    extraImages?: ILinkImage[];
  }

  export class FeedItem extends React.Component<IFeedItem, {}> { }

  // items

  interface IItems {
    classes?: string;
    children?: any;
    loading?: boolean;
    divided?: boolean;
    link?: boolean;
  }

  export class Items extends React.Component<IItems, {}> { }

  interface IMeta {
    name: string;
    description?: string;
  }

  interface IItem {
    image?: string;
    header?: string;
    link?: string;
    children?: any;
    imageSize?: "tiny" | "small";
    meta?: IMeta[];
    alignment?: "middle aligned" | "top aligned" | "middle aligned";
  }

  export class Item extends React.Component<IItem, {}> { }
}
