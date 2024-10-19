// function bark() {
//     console.log("Woof!");
//   }
  
//   bark.animal = "dog";
//   console.log(bark);
// console.log(bark.animal);



//new

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const member = new Person("Rasel", "Kazi");
//   Person.getFullName = function() {
//     // return `${this.firstName} ${this.lastName}`;
//     console.log(this.firstName,this.lastName);
//   };
  
//   console.log(member.getFullName());
// console.log(member());
// console.log(Person.getFullName());//undefined 
// console.log(Person.getFullName());//undefined 


//solve
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
// var  member = new Person("Rasel", "Kazi");
// // console.log(member);
// console.log(Person.firstName);
//   Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
//     // console.log(this.firstName,this.lastName);
//   };
  
//   console.log(member.getFullName());
// console.log(member);
// console.log(Person.firstName);
//new 
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const Rasel = new Person("Rasel", "Kazi");
//   const sarah = Person("Sarah", "Smith");
  
//   console.log(Rasel);//"Rasel", "Kazi"
//   console.log(sarah);//undefined


//new
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);



//new
function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
  }
  
  const person = "Rasel";
  const age = 21;
  
  getPersonInfo`${person} is ${age} years old`;




 //new
 function checkAge(data) {
    if (data === { age: 18 }) {
      console.log("You are an adult!");
    } else if (data == { age: 18 }) {
      console.log("You are still an adult.");
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge({ age: 18 });



 