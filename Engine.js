import React from 'react';
import Button from "./Button.js";

const NEW_GAME = "New game"

export default class Engine extends React.Component {

 makeButton = (val) => {
  return <Button parent={this} val={val} />
 }

 handleClick = (e) => {
  switch(e){
  case NEW_GAME: this.props.parent.changeState(this.props.parent.STATES.FIELD); break;
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
