import "semantic-ui-css/components/site.css";
import * as $ from "jquery";

// import jquery into global scope

global.$ = $;
global.jQuery = $;

function check(control: string, initialiser: string) {
  return () => {
    throw new Error(`Control "${control}" not initialised. Did you forget to call init with "{ ${initialiser}: true }"?`);
  }
}

export { default as config } from "./config/config";

let _segment: any = null;

export let Accordion: any = check("Accordion", "Accordion");
export let AccordionItem: any = check("AccordionItem", "Accordion");
export let Button: any = check("Button", "Button");
export let Buttons: any = check("Buttons", "Button");
export let Checkbox: any = check("Checkbox", "Checkbox");
export let Radio: any = check("Radio", "Radio");
export let Comments: any = check("Comments", "Comments");
export let Comment: any = check("Comment", "Comments");
export let Column: any = check("Column", "Grid");
export let Divider: any = check("Divider", "Divider");
export let Dropdown: any = check("Dropdown", "Dropdown");
export let DropdownItem: any = check("DropdownItem", "Dropdown");
export let DropdownButton: any = check("DropdownButton", "Dropdown");
export let Feed: any = check("Feed", "Feed");
export let FeedItem: any = check("FeedItem", "Feed");
export let Form: any = check("Form", "Form");
export let Fields: any = check("Fields", "Form");
export let Field: any = check("Field", "Form");
export let Grid: any = check("Grid", "Grid");
export let Header1: any = check("Header1", "Header");
export let Header2: any = check("Header2", "Header");
export let Header3: any = check("Header3", "Header");
export let Header4: any = check("Header4", "Header");
export let Header5: any = check("Header5", "Header");
export let Input: any = check("Input", "Input");
export let Items: any = check("Items", "Items");
export let Item: any = check("Item", "Items");
export let Label: any = check("Label", "Label");
export let List: any = check("List", "List");
export let ListItem: any = check("ListItem", "List");
export let Loading: any = check("Loading", "Loading");
export let Menu: any = check("Menu", "Menu");
export let MenuDropdown: any = check("MenuDropdown", "Menu");
export let MenuItem: any = check("MenuItem", "Menu");
export let Message: any = check("Message", "Message");
export let Modal: any = check("Modal", "Modal");
export let Progress: any = check("Progress", "Progress");
export let Rating: any = check("Rating", "Rating");
export let Segment: any = check("Segment", "Segment");
export let Search: any = check("Search", "Search");
export let Steps: any = check("Steps", "Steps");
export let Step: any = check("Step", "Steps");
export let Tabs: any = check("Tabs", "Tabs");
export let Tab: any = check("Tab", "Tabs");

export function init(config: any) {
  if (config.Accordion) {
    Accordion = require("./modules/accordion_view").default;
    AccordionItem = require("./modules/accordion_item_view").default;
  }
  if (config.Button) {
    Button = require("./components/button_view").default;
    Buttons = require("./components/buttons_view").default;
  }
  if (config.Checkbox) {
    Checkbox = require("./modules/checkbox_view").Checkbox;
  }
  if (config.Radio) {
    Radio = require("./modules/checkbox_view").Radio;
  }
  if (config.Comments) {
    Comments = require("./views/comment_view").Comments;
    Comment = require("./views/comment_view").Comment;
  }
  if (config.Divider) {
    Divider = require("./components/divider_view").default;
  }
  if (config.Dropdown) {
    Dropdown = require("./modules/dropdown_view").Dropdown;
    DropdownItem = require("./modules/dropdown_view").DropdownItem;
    DropdownButton = require("./modules/dropdown_button_view").default;
  }
  if (config.Feed) {
    Feed = require("./views/feed_view").Feed;
    FeedItem = require("./views/feed_view").FeedItem;
  }
  if (config.Form) {
    Form = require("./collections/form_view").default;
    Fields = require("./components/fields_view").Fields;
    Field = require("./components/fields_view").Field;
  }
  if (config.Grid) {
    Grid = require("./collections/grid_view").default;
    Column = require("./components/column_view").default;
  }
  if (config.Header) {
    Header1 = require("./components/header_view").Header1;
    Header2 = require("./components/header_view").Header2;
    Header3 = require("./components/header_view").Header3;
    Header4 = require("./components/header_view").Header4;
    Header5 = require("./components/header_view").Header5;
  }
  if (config.Input) {
    Input = require("./components/input_view").default;
  }
  if (config.Items) {
    Items = require("./views/item_view").Items;
    Item = require("./views/item_view").Item;
  }
  if (config.Label) {
    Label = require("./components/label_view").default;
  }
  if (config.Menu) {
    Menu = require("./collections/menu_view").default;
    MenuItem = require("./components/menu_item_view").default;
    MenuDropdown = require("./components/menu_dropdown_view").default;
  }
  if (config.Message) {
    Message = require("./collections/message_view").default;
  }
  if (config.List) {
    List = require("./components/list_view").List;
    ListItem = require("./components/list_view").ListItem;
  }
  if (config.Loading) {
    Loading = require("./components/loader_view").default;
  }
  if (config.Modal) {
    Modal = require("./modules/modal_view").default;
  }
  if (config.Progress) {
    Progress = require("./modules/progress_view").default;
  }
  if (config.Rating) {
    Rating = require("./modules/rating_view").default;
  }
  if (config.Segment) {
    Segment = require("./components/segment_view").default;
  }
  if (config.Search) {
    Search = require("./modules/search_view").default;
  }
  if (config.Steps) {
    Steps = require("./components/step_view").Steps;
    Step = require("./components/step_view").Step;
  }
  if (config.Tabs) {
    Tabs = require("./modules/tab_view").Tabs;
    Tab = require("./modules/tab_view").Tab;
  }
}
