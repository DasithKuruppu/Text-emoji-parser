import React from 'react';
import ReactDOM from 'react-dom';
import {MultiLineParser} from '../dist/lib.compiled';
import { Emoji } from 'emoji-mart'

const title = 'My Minimal React Webpack :santa::skin-tone-3: we :smiley: Babel Setup \n wowwwwww \n cool';

let ParsedNode=MultiLineParser(title,{SplitLinesTag:'p',Rule:/(?:\:[^\:]+\:(?:\:skin-tone-(?:\d)\:)?)/gi},(Rule,ruleNumber)=>{
  console.log(Rule)
  return <Emoji emoji={Rule} size={48}/>
})

ReactDOM.render(
  <div>{ParsedNode}</div>,
  document.getElementById('app')
);

module.hot.accept();