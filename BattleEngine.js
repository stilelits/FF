import React from 'react';
import Engine from "./Engine.js"

const END_BATTLE = "Run away!"

export default class FieldEngine extends Engine {

 handleClick = (val) => {
  switch(val){
  case END_BATTLE: this.props.parent.changeState(this.props.parent.STATES.FIELD); break;
  }
 }

 render(){
  return (
   <div>
    You are in a battle!<br/>
    <br/>
    {this.makeButton(END_BATTLE)}
   </div>
  );
 } 

}
