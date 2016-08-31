import * as React from "react";
import * as css from "classnames";

import config from "../config/config";

import { Button, GridSplitter } from '../index';
import jss from 'jss';

const { classes } = jss.createStyleSheet({
  markdownPreview: {
    padding: '20px',
    height: '100%',
    overflow: 'auto',
    'box-sizing': 'content-box'
  },
  container: {
    '& .ui.gridSplitter.second': {
      padding: '23px 0px 0px 6px'
    }
  }
}).attach();

//import "./textarea.css";

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
  name?: string;
}

let marked: any = null;
let idx = 0;

const TextArea = ({ label, classes, placeholder, onChange, defaultValue, value, rows, cols, inline, name}: IProps) => (
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
      name={name}
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

        <GridSplitter classes={css("ui textarea", classes.container)}>
          <TextArea {...this.props} onChange={this.previewFunction} />
          <div id={id} className={css("ui segment", classes.markdownPreview)}></div>
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
