export default class I18n {
  static translate(key: string, defaultMessage: string) {
      return key ? "<" + key + ">" : defaultMessage;
  }

  static config = {
    translator: I18n.translate
  }
}

export interface II18n {
  mid: string;
}

// import Intl from "./containers/intl_container";

// import item, { IProps as IItemProps} from "./components/menu_item_view";
// export interface I18ItemProps extends II18n, IItemProps { }
// export const Item = Intl<I18ItemProps>(item);

// import menu_dropdown, { IProps as IMenuDropdownProps } from "./components/menu_dropdown_view";
// export interface I18MenuDropdownProps extends II18n, IMenuDropdownProps { }
// export const MenuDropdown = Intl<I18MenuDropdownProps>(menu_dropdown);

// import button, { IButtonProps } from "./components/button_view";
// export interface I18Button extends II18n, IButtonProps { }
// export const Button = Intl<I18Button>(button);
