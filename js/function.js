
// function definition

// function  nameOfthefunction( parameter1 , marameter2){
//     do something
// }
// function invocation / function call'
// nameOfthefunction(arguent1,argument2)


// function add( num1,num2){
//     var ans= num1 +num2;
//    return ans;
// }
// var res = add(4,5);
// console.log(res);/


// function add( num1,num2){
//     var ans= num1 +num2;
//    console.log(ans);
// }
// add(4,5);

// //  function are reated as first classs citizen in JS
// // function can be return 
// // function can be passed as parameters/arg

// // build a calculator
// function calculator( operator,num1,num2){
//     if( operator=="add"){
//         return function add(){
//             return num1 + num2
//         }
//     }
//     else if ( operator == "-"){
//         return function sub(){
//             console.log( num1-num2);
//         }
//     }
// }
// let refn= calculator("add",45,46);
// console.log(refn);
// let sumofnum=refn();
// console.log(sumofnum);
  
// // 2)
// var sayhii=function (){
//     console.log( "sss");

// }
// sayhii();
// console.log(sayhii);

// // 3)
// function add( a,b){
//     return a+ b;
// }
// var ans =add( 7,8);
// console.log(ans);

// // 4)
// function sum1( a,b){
//      console.log(a+b);
//     // return a + b 
// }( 20,30);
// sum1();

// console.log(sum1);


// 5) arrow
// function add(a,b){
//     return a+b
// };

// var add = ( a,b) =>{
// return a+b;
// }


// var add = ( a,b)=>a+b;
// var ans = add(4,7);
// console.log(ans); 
   



// var squre = (num)=>num*num;
// var ans = squre(7);
// console.log(ans);


// var circul = ( radius)=>{
//     var  res = 2 *Math.PI*radius;
//     console.log(res);
// }
// var ans = circul(8);
// console.log(ans);
// squre(5); 

//adding keys in obj
// captainAmerica.he


//  function expression
var add =function (x,y){
    return x+y;
}
   