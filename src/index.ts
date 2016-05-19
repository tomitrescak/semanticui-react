import "semantic-ui-css/components/site.css";

function check() {
  throw "Control not initialised. Did you forget to call Init?"
}

let _segment: any = null;

export let Accordion: any = check;
export let AccordionItem: any = check;
export let Button: any = check;
export let Buttons: any = check;
export let Checkbox: any = check;
export let Radio: any = check;
export let Comments: any = check;
export let Comment: any = check;
export let Column: any = check;
export let Divider: any = check;
export let Dropdown: any = check;
export let DropdownItem: any = check;
export let DropdownButton: any = check;
export let Feed: any = check;
export let FeedItem: any = check;
export let Form: any = check;
export let Fields: any = check;
export let Grid: any = check;
export let Header1: any = check;
export let Header2: any = check;
export let Header3: any = check;
export let Header4: any = check;
export let Header5: any = check;
export let Input: any = check;
export let Items: any = check;
export let Item: any = check;
export let Label: any = check;
export let MenuItem: any = check;
export let Message: any = check;
export let List: any = check;
export let ListItem: any = check;
export let Loading: any = check;
export let MenuDropdown: any = check;
export let Menu: any = check;
export let Modal: any = check;
export let Progress: any = check;
export let Rating: any = check;
export let Segment: any = check;
export let Search: any = check;
export let Steps: any = check;
export let Step: any = check;
export let Tabs: any = check;
export let Tab: any = check;

export function init(config: any) {
  if (config.Accordion) {
    Accordion = require("./modules/accordion_view").default;
  }
  if (config.AccordionItem) {
    AccordionItem = require("./modules/accordion_item_view").default;
  }
  if (config.Button) {
    Button = require("./components/button_view").default;
  }
  if (config.Buttons) {
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
  }
  if (config.Comment) {
    Comment = require("./views/comment_view").Comment;
  }
  if (config.Column) {
    Column = require("./components/column_view").default;
  }
  if (config.Divider) {
    Divider = require("./components/divider_view").default;
  }
  if (config.Dropdown) {
    Dropdown = require("./modules/dropdown_view").Dropdown;
  }
  if (config.DropdownItem) {
    DropdownItem = require("./modules/dropdown_view").DropdownItem;
  }
  if (config.DropdownButton) {
    DropdownButton = require("./modules/dropdown_button_view").default;
  }
  if (config.Feed) {
    Feed = require("./views/feed_view").Feed;
  }
  if (config.FeedItem) {
    FeedItem = require("./views/feed_view").FeedItem;
  }
  if (config.Form) {
    Form = require("./collections/form_view").default;
  }
  if (config.Fields) {
    Fields = require("./components/fields_view").default;
  }
  if (config.Grid) {
    Grid = require("./collections/grid_view").default;
  }
  if (config.Header1) {
    Header1 = require("./components/header_view").Header1;
  }
  if (config.Header2) {
    Header2 = require("./components/header_view").Header2;
  }
  if (config.Header3) {
    Header3 = require("./components/header_view").Header3;
  }
  if (config.Header4) {
    Header4 = require("./components/header_view").Header4;
  }
  if (config.Header5) {
    Header5 = require("./components/header_view").Header5;
  }
  if (config.Input) {
    Input = require("./components/input_view").Input;
  }
  if (config.Items) {
    Items = require("./views/item_view").Items;
  }
  if (config.Item) {
    Item = require("./views/item_view").Item;
  }
  if (config.Label) {
    Label = require("./components/label_view").default;
  }
  if (config.MenuItem) {
    MenuItem = require("./components/menu_item_view").default;
  }
  if (config.Message) {
    Message = require("./collections/message_view").default;
  }
  if (config.List) {
    List = require("./components/list_view").List;
  }
  if (config.ListItem) {
    Item = require("./components/list_view").ListItem;
  }
  if (config.Loading) {
    Loading = require("./components/loader_view").default;
  }
  if (config.MenuDropdown) {
    MenuDropdown = require("./components/menu_dropdown_view").default;
  }
  if (config.Menu) {
    Menu = require("./collections/menu_view").default;
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
  }
  if (config.Step) {
    Step = require("./components/step_view").Step;
  }
  if (config.Tabs) {
    Tabs = require("./modules/tab_view").Tabs;
  }
  if (config.Tab) {
    Tab = require("./modules/tab_view").Tab;
  }

}
