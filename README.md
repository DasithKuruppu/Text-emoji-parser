# 🙊 Text-emoji-parser

# What does it do ? 

  - Parse Text apply a set of rules(regex) and replace them or manipulate it to provide a new output as either text , html     or react node.
  - Line by line parse or all at once
  - Simple and lightweight library 
  - Built for parsing text on messages and displaying emojis :)

## Installation

`npm i text-emoji-parser --save`

## Basic Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {MultiLineParser} from 'text-emoji-parser';
import { Emoji } from 'emoji-mart' // you can use this or any other emoji library i recommend this though 
const title = 'My Minimal React Webpack :santa::skin-tone-3: we :smiley: Babel Setup \n wowwwwww \n cool';

let ParsedNode=MultiLineParser(title,
                               {
                                  SplitLinesTag:'p',
                                  Rule:/(?:\:[^\:]+\:(?:\:skin-tone-(?:\d)\:)?)/gi
                                },
                                (Rule,ruleNumber)=>{
                                        console.log(Rule)
                                        return <Emoji emoji={Rule} size={48}/>
                                });

ReactDOM.render(
  <div> {ParsedNode} </div>,
  document.getElementById('app')
);

```
## API 
#### SimpleParser
```javascript
import {SimpleParser} from 'text-emoji-parser';
```
* **Plaintext-required**: Plain text to parse
* **Rule-required**: A regex that will match elements that you want to parse on the text (escape all capture groups)
* **Render-required** (function): (MatchedText, ruleNumber) Provides the captured text from the given rule as an argument expects return as text or htm or react node 

#### MultiLineParser
```javascript
import {MultiLineParser} from 'text-emoji-parser';
```
* **Plaintext-required**: Plain text to parse
* **Options-required**: ```{SplitLinesTag:'p',Rule:/(?:\:[^\:]+\:(?:\:skin-tone-(?:\d)\:)?)/gi}```
* **Render-required** (function): (MatchedText, ruleNumber) Provides the captured text from the given rule as an argument expects return as text or htm or react node 


### Tech
* React


### Created by :
[Dasith Kuruppu](https://github.com/DasithKuruppu)
