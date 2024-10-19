// anonymous

// function expression
// let show = function(){
//     console.log("koja");
// };
// show();

// function show (){
//     console.log("johra");
// }

// setTimeout (show,3000);

// setTimeout( function (){
//     console.log("lala");
// },2000);

// hosting
// getname();
// console.log(x);
// console.log(getname);

//   var x  = 7
//   function getname(){
//     console.log("nameste javascript");
//   }
//   getname();
//   console.log(x);
//   console.log(getname);
// function outer() {
//     console.log(innerVar); // Output: undefined
//     var innerVar = "Inside Outer";
//     function inner() {
//       console.log(innerVar); // Output: undefined
//       var innerVar = "Inside Inner";
//       console.log(innerVar); // Output: "Inside Inner"
//     }
//     inner();
//   }
//   outer();

// var x = 1;
// a();
// b ();
// console.log(x);
// function a(){
//     var x =10;
//     console.log(x);
// }
// function b (){
//     var x =100;
//     console.log(x);
// }

//scope chain

// function a(){
//    console.log(b);
//   }
//   var b =10;
//   a();

// function a(){

//    c();
//  function c(){
//     console.log(b);
//  }
// }
// var b =10;
// a();

// Temporal Dead Zone
//     console.log(a);
//     let a =10 ;
//     console.log(b);
//   var  b = 200 ;

//   let a =10 ;
//   console.log(a);
// var  b = 200 ;

// BLOCK SCOPE
// {
//   var a=10;
//   let b =20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
//   console.log(b);
//   console.log(c);

// Shadowing

// var a  = 100;
// let b = 800;
// const c = 200;
// {
//   var a=10;
//   let b =20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
//   console.log(b);
//   console.log(c);

// Closures in
// function x (){
//  var  a=7;
//   function y (){
//     console.log(a);
//   }
//   y();
// }
// x();
// function createCounter() {
//   let count = 0; // Private variable

//   return function() {
//       return ++count;
//   };
// }

// const counter = createCounter();

// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3
// console.log(counter());

// setTimeout

// function x () {
//   var i = 1 ;
//   setTimeout( function (){
//     console.log(i);
//   },3000);
//   console.log("johra");
// }
// console.log(x);
// x();

// function x (){
//   for (var i =  1; i <=5;i++){
//     setTimeout(function(){
//       console.log(i);
//     },i * 4000);
//   }
// }

//  x();------>ans---->6666666
// function x (){
//   for (let i =  1; i <=5;i++){
//     setTimeout(function(){
//       console.log(i);
//     },i * 4000);
//   }
// }

//  x();------>1,2,3,4,5 bcz let is block scope every time let build new execuition contax  when ever loop run it  is new i everytime

// function x(){
//   for ( var i =1 ; i <=5 ; i ++){
//     function close (i){
//       setTimeout( function(){
//         console.log(i);
//       },i *2000)
//     }
//     close(i);
//   }
//   console.log("johra");
// }
// x();
// function outer(){
//     var a =8;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// outer()();
// // var x = outer();
// // console.log(x);
// // x();

// function outer(b){
//   function inner (){
//     console.log(a,b);
//   }
//   let a =10;
//   return inner;
// }
// var close = outer("hello");
// close();

// higher order function

// var  radius = [3, 1, 2, 4];

// var calculateArea = function (radius) {
//   var output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

// //new

// const calculatecircumference = function( radius){
//   const output = [];
//   for( let i = 0 ; i < radius.length ;i++){
//     output.push( 2 * Math.PI*radius[i]);
//   }
//   return output;
// }
// console.log(calculatecircumference(radius));

//new
// for each method

// const mynums= [1,2,3,4,5,6,7,8,9,10]

// const newnyms = mynums.filter((num)=> num > 4 )
// console.log(newnyms);

//map

// const mynums=[1,2,3,4,5,6,7,8,9,10 ]

// const newnums=mynums.map((num)=>num+10);
// console.log(newnums);
//2ns method

// const newnums=mynums.map((num)=>{ return num+10});
// console.log(newnums);

//cheaning in map
// const newnums=mynums .map((num)=> num*10)

//                       .map((num)=>num+1)
//                       .filter((num)=>num>20)
//  console.log(newnums);

//  filter
// const arr =[5,1,3,2,6];

// // const output= arr.filter(function greaterThan4(x){
// //     return x>4;
// // })
// // console.log(output);
// //arrow function
// const output= arr.filter((x) => x>4);

// console.log(output);

//reduce

// const arr =[5,1,3,2,6];
// const output = arr.filter(function (acc,curr){

//     if( curr>acc){
//         acc=curr;

//     }
//   return acc;
// },);
// console.log(output);

// const users = [
//     { firstname:"johra1", lastName: "nayab1",age: 20 },
//     { firstname:"johra2", lastName: "nayab2",age: 21 },
//     { firstname:"johra3", lastName: "nayab3",age: 23 },
// ];
// const output = users.map((x) =>x.firstname+"  "+x.lastName);
// console.log(output);

//this

//  const obj={
//     a:10,
//     x:function(){
//         console.log(this);
//     },

//  };
//  obj.x();
// const obj={
//     a:10,
//     x:function(){
//         console.log(this.a);
//     },

//  };
//  obj.x();

// new

//     const user={
//         username:"johra  ",
//         price:999,
//         welcomemassage:function(){
//             console.log(`${this.username},welcome to webside`);
//             console.log(this);
//         }
//     }

// user.welcomemassage();

// username="sam";
// user.welcomemassage;
// console.log(this);

// var arr=[1,2,3,4,5,6,7,8,9,10];
// var num= arr.filter((number)=>number*number);
// console.log(num);
// var arr=[1,2,3,4,5,6,7,8,9,10];
// var num= arr.map((number)=>number*number);
// console.log(num);

// var arr=['aplle','banana','suger','pitchh'];
// var lengt=arr.map((arr)=>arr.toUpperCase());
// console.log(lengt);

// var arr=['aplle','banana','suger','pitchh'];
// var lengt=arr.map((arr)=>arr.length);
// console.log(lengt);

// var product = [
//   { id: 1, name: 'laptop', price: 100000 },
//   { id: 2, name: 'phone', price: 20000 },
//   { id: 3, name: 'tablet', price: 7000 },
// ];
// var getid = product.map((products) => products.name);
// console.log(getid);


// var arr=['aplle','banana','suger','pitchh'];
// var lengt=arr.map((arrs)=>arrs.length);
// console.log(lengt);
  

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers1 = numbers1.map(num => num % 2 === 0);
// console.log(evenNumbers1);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);




//prototype in js 
// const person ={
//     name:"johra"
// }
// console.log(person);
 //constructor
// function person( Fname,Lname){
//     this.f=Fname,
//     this.l=Lname
//  }

// //  person.gender="male"----> we cannot add something like this , so we have to use prototype 
// // person.prototype.gender="male";
// // const person1=new person("johra","nayan");
// // const person2 = new person("danish","belal");
// console.log(person1.gender);
// console.log(person);
// console.log(person1);


//new
function person( Fname,Lname){
    this.f=Fname,
    this.l=Lname
 }
 person.prototype.getfullname=function(){
    return this.f +" "+this.l;
 }
 const person1=new person("johra","nayan");
 const person2 = new person("danish","belal");
 console.log(person1.getfullname());



// function person( Fname,Lname){
//     this.f=Fname,
//     this.l=Lname
//  }
//  person.getfullname=function(){---->we can not do this so we can use this.prototype
//     return this.f +" "+this.l;
//  }
//  const person1=new person("johra","nayan");
//  const person2 = new person("danish","belal");
//  console.log(person1.getfullname());