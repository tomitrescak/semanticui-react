import * as React from "react";
import * as css from "classnames";
import config from "../config/config";

import { Button, GridSplitter } from '../index';


import "./textarea.css";

interface IProps {
  classes?: string;
  placeholder?: string;
  label?: string;
  onChange?: Function;
  value?: any;
  defaultValue?: any;
  rows?: number;
  cols?: number;
  inline?: boolean;
  previewMarkdown?: boolean;
}

let marked: any = null;
let idx = 0;

const TextArea = ({ label, classes, placeholder, onChange, defaultValue, value, rows, cols, inline}: IProps) => (
  <div className={css("field", { inline: inline })}>
    {label ? <label>{config.i18n(label)}</label> : null}
    <textarea
      className={classes}
      placeholder={config.i18n(placeholder)}
      onChange={(e) => onChange ? onChange(e, e.currentTarget['value']) : null}
      defaultValue={defaultValue}
      value={value}
      rows={rows}
      cols={cols}
      />
  </div>
)

function previewMarkdown(previewId: string, originalEvent: Function) {
  if (!marked) {
    marked = require('marked');
  }

  let previewBox: any = [];

  return function (event: React.SyntheticEvent, newValue: string) {
    if (!previewBox.length) {
      previewBox = $('#' + previewId);
    }
    previewBox.html(marked(newValue));

    if (event && originalEvent) {
      originalEvent(event, newValue);
    }
  }
}

export default class extends React.Component<IProps, {}> {
  elem: HTMLTextAreaElement;
  previewFunction: Function = null;
  // get value() {
  //   return this.elem.value;
  // }

  // set value(val: any) {
  //   this.elem.value = val;
  // }

  render() {

    if (this.props.previewMarkdown) {
      const id = `sui_ta_preview_` + idx++;
      this.previewFunction = previewMarkdown(id, this.props.onChange);

      return (

        <GridSplitter classes="ui textarea">
          <TextArea {...this.props} onChange={this.previewFunction} />
          <div id={id} className="ui segment markdownPreview"></div>
        </GridSplitter>

      );
    }
    else {
      return (
        <TextArea {...this.props} />
      );
    }


  }

  componentDidMount() {
    if (this.props.previewMarkdown) {
      if (this.props.value) {
        this.previewFunction(null, this.props.value);
      } else if (this.props.defaultValue) {
        this.previewFunction(null, this.props.defaultValue);
      }
    }
  }
}
