import React from 'react';
import Engine from "./Engine.js"

const TO_BATTLE = "To battle!"
const OPEN_MENU = "Open menu"

export default class FieldEngine extends Engine {

 handleClick = (e) => {
  switch(e){
  case TO_BATTLE: this.props.parent.changeState(this.props.parent.STATES.BATTLE); break;
  case OPEN_MENU: this.props.parent.changeState(this.props.parent.STATES.MENU);   break;
  }
 }

 render(){
  return (
   <div>
    You are walking through a field.<br/>
    <br/>
    {this.makeButton(TO_BATTLE)}<br/>
    {this.makeButton(OPEN_MENU)}
   </div>
  );
 } 

}
