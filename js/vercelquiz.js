let user = {
    name: "Abhishek",
    age: 23,
    sayHi() {
      console.log(this.name);
      console.log(user.name);
    }
  }
  
  let admin = user;
//   user = null;
  admin.sayHi();

  
  console.log('foo' && 'bar' && "cat"); //cat
console.log('foo' || 'bar'); //foo
console.log(+"5"); // 5
console.log(+123124); // 123124
console.log(+undefined); //nan


let a = 'foo' && 'bar' && "cat"
// if(a){
//     console.log(" a is true");
// }
// else{
//     console.log("a is false ");
// }
console.log(Boolean(a));


// let a = 'foo'  || 'bar'
// if(a){
//     console.log(" a is true");
// }
// else{
//     console.log("a is false ");
// }
// console.log(a);

var b = 'foo'  || 'bar'

console.log(Boolean(b));