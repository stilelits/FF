import React from 'react';

import Engine       from "./Engine.js";
import FieldEngine  from "./FieldEngine.js";
import BattleEngine from "./BattleEngine.js";
import MenuEngine   from "./MenuEngine.js";

import './EngineManager.css';

export default class EngineManager extends React.Component {

 constructor(props){
  super(props);
  this.STATES = {INIT:0, FIELD:1, BATTLE:2, MENU:3};
  this.state = {current : this.STATES.INIT};
  this.engine = < Engine parent={this} />;
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
  return (<div>{this.engine}</div>);
 } 

}
