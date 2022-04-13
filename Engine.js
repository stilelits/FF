import React from 'react';
import Button from "./Button.js";

const NEW_GAME = "New game"

export default class Engine extends React.Component {

 makeButton (text, val = -1) {
  if (val < 0){
   return <Button parent={this} text={text} val={text} />;
  } else {
   return <Button parent={this} text={text} val={val}  />;
  }
 }

 handleClick = (e) => {
  switch(e.text){
  case NEW_GAME: this.props.parent.startNewGame(); break;
  }
 }

 render(){
  return (
   <div>
    Welcome to the game!<br/>
    <br/>
    {this.makeButton(NEW_GAME)}
   </div>
  );
 } 

}
