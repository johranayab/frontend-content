// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

//js we can also return a function

// function outer(){
//     var a =8;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// var x = outer();
// console.log(x);
// x();

// var a1 = {
//   name: "johra",
//   age: 45,
// };
// var b1 = {
//   name: "johra",
//   age: 45,
// };
// console.log(a1 == b1); // --> false

// var a2 = {
//   name: "johrii",
//   age: 56,
// };
// var b2 = a2;
// console.log(a2 == b2); //--> true.

// var obj = {
//   name: "johra",
//   age: 12,
// };
// let clone = {};
// //copy
// Object.assign(clone, obj, { ismale: true }, { favfood: "pizza" });
// console.log(clone);
// obj.name = "nayab";
// console.log(obj);
// console.log(clone);
// //nested object cloning

// let user = {
//   name: "pete",
//   sizes: {
//     height: 122,
//     width: 80,
//   },
// };
// Object.assign(clone, user);
// console.log(clone);
// user.sizes.height = 100;
// console.log(user);
// console.log(clone);

// //closer
// function outer1() {
//   var a = 9;
//   function inner1() {
//     console.log(a);
//   }

//   inner1();
// }
// outer1();

// in js we can also return a function
// function outer() {
//   var a = 17;
//   function inner() {
//     console.log(a);
//   } 
//   a=100;
//   return inner;
// }
// var x = outer();
// // console.log(x);
// //    console.log(x());
// x();

function z(){
    var b= 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();



 
