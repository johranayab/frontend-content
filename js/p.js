// console.log(a);
// var a =10;
// console.log(b);
// let b = 10 ;

// let b ;
// console.log(b);
// b = 10;



// x();
// function x(){
//    let  a= 10;
//     console.log(a);

// }

// console.log(a);
// x();



// get ();
// // console.log(x);
// // var x =7;
// function get(){
//     console.log("johra");
// }




// function outer() {
//         console.log(innerVar); // Output: undefined
//         var innerVar = "Inside Outer";
//         function inner() {
//           console.log(innerVar); // Output: undefined
//           var innerVar = "Inside Inner";
//           console.log(innerVar); // Output: "Inside Inner"
//         }
//         inner();
//       }
//       outer();..





// fun()
// function fun (){
//       if(true){
//         let a= 12;
//         var d=20;
//         console.log(a);
//       }
//       console.log(d);
//     //   console.log(a);
//      }
//     fun()
//  

// console.log(greed);
// var greed =function(){
//     console.log(a);
//     var a= 10;
    
//     console.log(b);
//     let b=20;
// }

// var greed = function(){
//     let a =10;
//     console.log(a);
// }
// console.log(greed);



// find max and min value


// function max(arr){
//   if (arr.length===0){
//     return null;
//   }
//   let max=arr[0];
//   for(let i=1; i <arr.length;i++){
//     if(arr[i]>max){
//       max=arr[i];
//     }
//   }
//   return max;
  
// }
// const array=[5,9,3,2,7];
// const maxval=max(array);
// console.log(maxval);

// function max(arr){
//   if (arr.length===0){
//     return null;
//   }
//   let max=arr[0];
//   for(let i=1; i <arr.length;i++){
//     if(arr[i]<max){
//       max=arr[i];
//     }
//   }
//   return max;
  
// }
// const array=[5,9,3,2,7];
// const maxval=max(array);
// console.log(maxval);


// function findMissingNumber(nums) {
//   const n = nums.length; // Get the length of the array
//   const expectedSum = (n * (n + 1)) / 2; // Calculate the sum of the series 0, 1, 2, ..., n
//   const actualSum = nums.reduce((sum, num) => sum + num, 0); // Calculate the sum of the elements in the array
//   const missingNumber = expectedSum - actualSum; // Find the missing number by subtracting actual sum from expected sum
//   return missingNumber;
// }

// // Example usage
// const array = [0, 1, 3, 4, 5,6,9,12]; // Missing number is 2
// const missingNumber = findMissingNumber(array);
// console.log("Missing number:", missingNumber);



// let crickter = {
//   firstName:"johra",
//   lastName:"nayab",
//   // welcome :function(){
//   //   console.log(`welcome ${this.firstName} ${this.lastName}`);

  
//   // }
  
// };

// let crickter2={
//   firstName:"virat",
//   lastName:"kohli",
// }
// let crickter3={
//   firstName:"k l",
//   lastName:"rahul",
// }
// let welcome=function(gmail,mobileno,location) {
//   console.log(`welcome ${this.firstName} ${this.lastName} ,
//   thank you for singing up ! your gmail id id ${gmail},
//   and your mobileno is ${mobileno
//   },
//   your location is ${location},
  
  
  
  
//   `);
// }



// function type2() {
//   console.log(this.lname);
// }

// var lname = "Tiwari";
// type2()
// var obj = {
// lname: "Singh",
// type2: function() {
//   console.log(this.lname);
// },
// };

// obj.type2();

//fetch api
// function Name ( fName , lname){
//   this.firstName = fName;
//   this.lastName=lname;
//   console.log(this.firstName);
//   }
  
//   var obj = new Name("sunil","gavaskar");
//   console.log(obj);
//   console.log(this.firstName);
//  console.log(this);




//local storage 
