import React from 'react';
import Engine from "./Engine.js";

const BACK      = "Back";
const MAIN      = "Main";
const INVENTORY = "Inventory";
const STATUS    = "Status";

export default class MenuEngine extends Engine {

 constructor(props){
  super(props);
  this.state = {screen : MAIN};
 }

 handleClick = (e) => {
  switch(e.text){
  case BACK: 
   if (this.state.screen == MAIN){
    this.props.parent.changeState(this.props.parent.STATES.FIELD); 
   } else {
    this.setState({screen : MAIN});
   }
   break;
  case INVENTORY: case STATUS:
   var party = this.props.parent.party;
   this.setState({screen : e.text, member : party[e.val]});
   break;
  }
 }
 
 listParty(){
  var party = this.props.parent.party;
  var result = [];
  for (var i=0;i<party.length;i++){
   var member = party[i];
   result.push(<div key={i}>Level {member.level} {member.name} {this.makeButton(INVENTORY, i)}{this.makeButton(STATUS, i)}</div>);
  }
  return  <div>{result}</div>;
 }

 render(){
  var member = this.state.member;
  switch (this.state.screen){
  case MAIN:
   return (
    <div>
     {this.listParty()}
     <br/>
     {this.makeButton(BACK)}
    </div>
   );
  case INVENTORY:
   return (
    <div>
     {member.name}<br/>
     <br/>     
     Nothing<br/>
     <br/>
     {this.makeButton(BACK)}
    </div>
   );   
  case STATUS:
   return (
    <div>
     {member.name}<br/>
      <br/>
      Level: {member.level}<br/>
      EXP: {member.exp}<br/>
      To next: {member.toNext()}<br/>
      <br/>
      STR: {member.str}<br/>
      MAG: {member.mag}<br/>
      HP: {member.hpCurrent}/{member.hpMax}<br/>
      <br/>
     {this.makeButton(BACK)}
    </div>
   );   
  } 
 } 

}
