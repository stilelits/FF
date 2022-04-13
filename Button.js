import React from 'react';

export default class Button extends React.Component {

 render(){
  return (
   <button onClick={() => this.props.parent.handleClick(this.props)}>{this.props.text}</button>
  );
 } 

}
