import React from 'react';



const SimpleParser=(Plaintext,Rule,RenderNode)=>{
    let RuleMatches=Plaintext.match(Rule)||[];
    RuleMatches=RuleMatches.map((matchedRule,ruleNumber)=>{
        let CreatedNode=RenderNode(matchedRule,ruleNumber);
        CreatedNode=React.cloneElement(CreatedNode,{key:ruleNumber});
        return CreatedNode;
    });
    let ruleSplits=Plaintext.split(Rule);
    let Nodes=ruleSplits.reduce((prev,current,index)=>{
        
        return  [...prev,current, RuleMatches[index]];
    },[]);
    return Nodes
      
}
const MultiLineParser = (Plaintext,{SplitLinesTag=null,Rule},RenderNode)=>{
    const SplitLineRule = /\n/gi
    const LineMatches=Plaintext.split(SplitLineRule);
    let LineList=LineMatches.map((newLine,index)=>{
      return (<SplitLinesTag key={index}> {SimpleParser(newLine,Rule,RenderNode)} </SplitLinesTag>);
    });
    return LineList;
};


export  {MultiLineParser,SimpleParser}




