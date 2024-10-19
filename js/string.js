//  string is a sequence of Character
var str = "hellow pepcoders";
console.log(str);
console.log(str[3]);

// string in js are immutable
// str[4]=z
// console.log(str);
console.log(str.length);

//  Slice in js
var s = str.slice(0, 5);
console.log(s);

a = str.substring(0, 5);
console.log(a);

var str = " hello ";
console.log(str.toUpperCase());

var first = "  hello ";
var secoud = "world ";
console.log(first + secoud);

let j = first.concat(secoud, "  i ❤️ js ");
console.log(j);

var k = "hello                              worlds";
console.log(k);
console.log(k.length);
console.log(k.trim().length);

//  Array in js
var cars = ["bmw", " audi", " honda ", " blorow", 1, 2, 3, 4, 5];

console.log(cars);
console.log(cars.length);
console.log(cars[1]);
// replace method
cars[0] = "johra";
console.log(cars);

// methods

cars.pop();
console.log(cars);
cars.push("hina");
console.log(cars);

cars.unshift("tata");
console.log(cars);
cars.shift();
console.log(cars);

// function in js ❤️

function add(num1 , num2) {
  let res = num1 + num2;
  return res;
}
let ans = add(8, 8);
console.log(ans);

// lets make a calculator
function cal(operator, number1, number2) {
  if (operator == "+") {
    return function johra() {
      console.log(number1 + number2);
    };
  } else {
    return function nayab() {
      console.log(johra1 - johra2);
    };
  }
}
let res = cal(" + ", 8, 9);
console.log(res);


var sayhi=function (){
    console.log("hii hii");
}
sayhi();
console.log(sayhi);