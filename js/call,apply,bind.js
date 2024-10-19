// let cricketer = {
//   Firstname: "kapil",
//   lastname: "dev",

// //   welcome: function () {
// //     console.log(`welcome ${this.Firstname}${this.lastname}`);
// //   },
// };
// let welcome = function (email, mobilenumber, location) {
//   console.log(
//     `welcome${this.Firstname}${this.lastname},
//     thankyou for signing up! your email id is ${email},
//     your registernumber is ${mobilenumber},
//     your location is${location}`
//   );
// }
// // cricketer.welcome();

// let cricketer2={
//     Firstname:"ravi",
//     lastname:"shastri",

// }


// // function borrow
// // calls a method of an Object,substituting another Object for the current Object
// // cricketer.welcome.call(cricketer2);

// //  cricketer2.welcome();


// //  call method
// //  syntax--->function_name.call( obj_to_which_'this' should point)
//  welcome.call(cricketer,"johranayab@gmail.com",8910280367,"india");
// welcome.call(cricketer2,"johra004@gmail.com",8444832311,"india");

// //apply
// welcome.apply(cricketer2,["johra004@gmail.com",8444832311,"india"]);

// // bind method --->same as call,but fn is be caled ecplicity
// let bindefn = welcome.bind(cricketer2,"johra004@gmail.com",8444832311,"india");
// bindefn();



// let user = {
//   firstName: "John"
// };

// function func() {
//   console.log(this.firstName);
// }

// let funcUser = func.bind(user);
// user = {
//     a:10
    
    
// }
// console.log(this.firstName);

// funcUser(); // John




// function Name ( fName , lname){
//   this.firstName = fName;
//   this.lastName=lname;
  
//   }
  
//   var obj = new Name("sunil","gavaskar");
//   console.log(obj); 



//   Array.prototype.mypush= function(num){
//     let length= this.length;//4
//     this[length]=num;
//     return this;
//    }
//    arr.mypush(45);
//    console.log(arr);



// polyfill for bind 
//  let car ={
//     name:"thar",
//     brand:"mahindra"
//  }
//  let carDescription = function(){
//     console.log(` i bought a new ${this.brand} ${this.name}`);
//  };
//  var bindefn =carDescription.bind(car);
//  bindefn();

//  //polyfill
//  Function.prototype.mybind =function(args){
//     let fnobj=this;
//     console.log(fnobj);
//     console.log(args);
//     return function (){
//         fnobj.call(args)
//     }
//  }


// var mybind=carDescription.mybind(car);
// bindefn();

//new
let car = {
   name: "Thar",
   brand:"Mahindra"
}

let carDescription = function (date,price) {
 console.log(`I bought a new ${this.brand} ${this.name}
 on ${date} for INR ${price}`);
};

// var bindedFn = carDescription.bind(car,"22 July","20lacs");
// bindedFn();

Function.prototype.myBind = function (...args) {
 let fnObj = this;
 let params = args.slice(1);
 return function () {
   fnObj.apply(args[0],params);
 }
}

var myBindedFn = carDescription.myBind(car, "22 July", "20lacs");
myBindedFn();