import React from 'react';
import Engine from "./Engine.js"

const EXIT_MENU = "Exit menu"

export default class MenuEngine extends Engine {

 handleClick = (e) => {
  switch(e){
  case EXIT_MENU: this.props.parent.changeState(this.props.parent.STATES.FIELD); break;
  }
 }

 render(){
  return (
   <div>
    This is where you access items, status, and configurations.<br/>
    <br/>
    {this.makeButton(EXIT_MENU)}
   </div>
  );
 } 

}
