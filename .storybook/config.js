// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

import { configure } from '@kadira/storybook';
import jquery from 'jquery';
  global.$ = jquery;
  global.jQuery =  jquery;
  require('semantic-ui-css/semantic.css');
  require('semantic-ui-css/semantic.js');
  
function loadStories() {
  require('../dist/stories');

  
}

configure(loadStories, module);
