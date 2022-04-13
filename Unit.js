
export default class Unit {

 static get CLASSES() {return {FIGHTER:"Fighter", BLACK_MAGE:"Black Mage", WHITE_MAGE:"White Mage"};}

 constructor(name){
  this.name = name;
  switch (name){
  case Unit.CLASSES.FIGHTER:
   this.hpMax = 100;
   this.str = 20;
   this.mag = 10;
   break;
  case Unit.CLASSES.BLACK_MAGE:
   this.hpMax = 40;
   this.str = 5;
   this.mag = 25;
   break;
  case Unit.CLASSES.WHITE_MAGE:  
   this.hpMax = 60;
   this.str = 10;
   this.mag = 20;
   break;
  default:
   console.log("Error: invalid Unit class passed to constructor!");
  }
  this.level = 1;
  this.exp = 10;
  this.hpCurrent = this.hpMax;
 }
 
 toNext(){
  return 100 - this.exp % 100;
 }
}
