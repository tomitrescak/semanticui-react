import * as $ from "jquery";
import { init } from "../index";

global.$ = $;
global.jQuery = $;

init({
    Accordion: true,
    Button: true,
    Checkbox: true,
    Radio: true,
    Comments: true,
    Divider: true,
    Dropdown: true,
    Feed: true,
    Form: true,
    Grid: true,
    Header: true,
    Input: true,
    Items: true,
    Label: true,
    List: true,
    Loading: true,
    Menu: true,
    Message: true,
    Modal: true,
    Progress: true,
    Rating: true,
    Segment: true,
    Search: true,
    Steps: true,
    Tabs: true
  });

import "./accordion";
import "./button";
import "./checkbox";
import "./comments";
import "./divider";
import "./dropdown";
import "./feed";
import "./header";
import "./input";
import "./items";
import "./label";
import "./list";
import "./message";
import "./menu_dropdown";
import "./modal";
import "./progress";
import "./rating";
import "./search";
import "./sidebar";
import "./steps";
import "./tabs";
