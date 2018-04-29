import React from 'react';
import ReactDOM from 'react-dom';
import {MultiLineParser} from './parser.js';
import { Emoji } from 'emoji-mart'

const title = 'Some text :santa::skin-tone-3: with:smiley: xD \n new line \n some more text on new line';

let ParsedNode=MultiLineParser(title,{SplitLinesTag:'p',Rule:/(?:\:[^\:]+\:(?:\:skin-tone-(?:\d)\:)?)/gi},(Rule,ruleNumber)=>{
  console.log(Rule)
  return <Emoji emoji={Rule} size={48}/>
})

ReactDOM.render(
  <div>{ParsedNode}</div>,
  document.getElementById('app')
);

module.hot.accept();