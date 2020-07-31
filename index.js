0/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */
'Closures hold containers or functions'

function tuna(favorite){
  (`tuna eat ${this.fish}`)
  
  /* Function Tuna can't access "function food" because functions can only reach out. If "let fish" was a global variable(located outside of both functions) then it could be accessed by Function Tuna. In this case tuna can't reach down into the nested function below to be complete. */
  function eat(){
    let fish = mackral
  }
}



/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }

'Count is available in the counterMaker function. '
'Count is initialized with a let to maintain closure and be adjustable. If it was a var it would be golbally accessable, and const would not allow it to change when returned.'
'"Var Count" can be changed from anywhere in the window if its refrenced elsewhere because its not contained by the function, unlike let and const which is contained.'



/*
TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - refers to  window /console object. Defaults to window if no value is given. 
* 2. ImplicitBinding - refers to left of period.
* 3. New Binding - refers to a specific instance of an object that is created and returned.
* 4. Explicit Binding: .call- immediatly invokes function, passes in arguments one by one. 
      .apply- immediatly invokes function, passes arguments as an array.
      bind- passes arguments one by one, does not invoke function, returns new function to invoke later.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const pilot = {
  phrase: 5,
}
function fly(){
  return (`${this.phrase} minutes to launch`)
}

console.log(fly)
// Principle 2

// code example for Implicit Binding
const example = {
  name: 'Six',
  greet() {
  return (`My name is ${this.name}`)
}
}
console.log(example.greet)
// Principle 3
function hawk(color,classification){
this.color=color
this.classification=classification
}
const Bird = new hawk('red','carnivor')
console.log(Bird)
// code example for New Binding

// Principle 4
const fire = {
  color:'red',
  temp:200,
}
function explicit(){
return(`fire is ${this.color} and has a tempeture of ${this.temp} degrees.`)
}
console.log(explicit.call(fire))
// code example for Explicit Binding






/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  this. = attributes.;
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
//   function GameObject(attributes){
//   this.createdAt = attributes.createdAt;
//   this.name = attributes.name;
//   this.dimensions = attributes.dimensions;
//   }
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game`
//   }
// /*
//   === GameObject ===
//   * createdAt
//   * name
//   * dimensions (These represent the character's size in the video game)
//   * destroy() // prototype method that returns: `${this.name} was removed from the game.`
// */
// function CharacterStats(CharacterStatsAttributes){
//   GameObject.call(this, CharacterStatsAttributes)
//   this.healthPoints = CharacterStatsAttributes.healthPoints;
// }
// CharacterStats.prototype.takeDamage = function(){
//   return `${this.name} took damage`
// }
// /*
//   === CharacterStats ===
//   * healthPoints
//   * takeDamage() // prototype method -> returns the string '<object name> took damage.'
//   * should inherit destroy() from GameObject's prototype
// */
// function Humanoid(HumanoidAttributes){
//   CharacterStats.call(this, HumanoidAttributes)
//   this.team = HumanoidAttributes.team;
//   this.weapons = HumanoidAttributes.weapons;
//   this.language = HumanoidAttributes.language;
// }
// Humanoid.prototype.greet = function(){
//   return `${this.name} offers a greeting in ${this.language}.`
// }
// /*
//   === Humanoid (Having an appearance or character resembling that of a human.) ===
//   * team
//   * weapons
//   * language
//   * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//   * should inherit destroy() from GameObject through CharacterStats
//   * should inherit takeDamage() from CharacterStats
// */
 
// /*
//   * Inheritance chain: GameObject -> CharacterStats -> Humanoid
//   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
//   * Instances of CharacterStats should have all of the same properties as GameObject.
// */

// // Test you work by un-commenting these 3 objects and the list of console logs below:



//   const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: [
//       'Staff of Shamalama',
//     ],
//     language: 'Common Tongue',
//   });
//   const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: [
//       'Giant Sword',
//       'Shield',
//     ],
//     language: 'Common Tongue',
//   });
//   const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4,
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: [
//       'Bow',
//       'Dagger',
//     ],
//     language: 'Elvish',
//   });
//   console.log(mage.createdAt); // Today's date
//   console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//   console.log(swordsman.healthPoints); // 15
//   console.log(mage.name); // Bruce
//   console.log(swordsman.team); // The Round Table
//   console.log(mage.weapons); // Staff of Shamalama
//   console.log(archer.language); // Elvish
//   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
//   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.







/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */

class GameObject{
  constructor(attributes){
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
  }
  destroy(){
    return `${this.name} was removed from the game`
  }
}
  class CharacterStats extends GameObject{
    constructor(CharacterStatsAttributes){
      super(CharacterStatsAttributes);
    this.healthPoints = CharacterStatsAttributes.healthPoints;
  }
  takeDamage(){
    return `${this.name} took damage`
  }
  }
  class Humanoid extends CharacterStats{
    constructor(HumanoidAttributes){
    super(HumanoidAttributes);
    this.team = HumanoidAttributes.team;
    this.weapons = HumanoidAttributes.weapons;
    this.language = HumanoidAttributes.language;
  }
  greet(){
    return `${this.name} offers a greeting in ${this.language}.`
  }
}
 
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
