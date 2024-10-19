 var cars =[ " bmw ","audi","honda","suni",1,2,3,4,"true","undefined"];
 console.log(cars);
  


 //accessing element in an array 
 console.log(cars[3]);
 console.log(cars[0]);


//  replacing elements
cars[3]="kuku";
console.log(cars);

// adding element in JS
cars[11]="sumi";
console.log(cars);
console.log(cars.length);
// console.log(cars[10]);-->undefined
cars[23]="hello";
console.log(cars);
console.log(cars.length);

//methods
cars.pop();
console.log(cars);

console.log(cars.length);

cars.push("mahinra");
console.log(cars);

// unshift -->add element at the starting of array 
cars.unshift("tata");
console.log(cars);
console.log(cars[0]);
//shift ---->remove elemnts at the start of array 
cars.shift();
console.log(cars);
cars.length=3;
console.log(cars);

const month = ["jan","feb","march","april","may"];
console.log(month);
//removing from arrr
month.splice(1,2);
console.log(month);


//aading in arr 
 month.splice( 1,0,"feb","march","april","may")
 console.log(month);

 