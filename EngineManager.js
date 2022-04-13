import React from 'react';

import Engine       from "./Engine.js";
import FieldEngine  from "./FieldEngine.js";
import BattleEngine from "./BattleEngine.js";
import MenuEngine   from "./MenuEngine.js";
import Unit         from "./Unit.js";

export default class EngineManager extends React.Component {

 constructor(props){
  super(props);
  this.STATES = {INIT:0, FIELD:1, BATTLE:2, MENU:3};
  this.state = {current : this.STATES.INIT};
  this.engine = < Engine parent={this} />;
  this.party = [];
 }
 
 startNewGame(){
  this.party = [new Unit(Unit.CLASSES.FIGHTER), new Unit(Unit.CLASSES.BLACK_MAGE), new Unit(Unit.CLASSES.WHITE_MAGE)];
  this.changeState(this.STATES.FIELD);
 }

 changeState = (newState) => { //console.log(newState);
  switch(newState){
  case this.STATES.INIT:   this.engine = < Engine       parent={this} />; break;
  case this.STATES.FIELD:  this.engine = < FieldEngine  parent={this} />; break;  
  case this.STATES.BATTLE: this.engine = < BattleEngine parent={this} />; break;
  case this.STATES.MENU:   this.engine = < MenuEngine   parent={this} />; break;  
  default:                 this.engine = <div>ERROR: invalid game state passed to EngineManager</div>;
  }
  this.setState({current : newState});
 }

 render(){
  return this.engine;
 } 

}
