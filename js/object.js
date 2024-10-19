// var obj ={};//emopty objecr
// console.log(obj);

// var person={
//     name: "johra",
//     age:19,
//     phoneno:919199191919921,
//     ismale:false,
//     height:"170cm",
//     "school name":"wbsc"

// }
// console.log(person);

// ;// person.name;
// //dot notation
// console.log(person.name);
// console.log(person.ismale);


// //bracket notation
// console.log(person["phoneno"]);
// console.log(person["school name"]);   



// //nesting of object 
// var captainAmerica = {
//     firstname : "steven",
//     lastname: " rogers",
//     friends:["bucky","tony stark","bruce banner"],
//     age:19,
//     isAvenger : true,
//     address:{
//         state: "manhattan",
//         city : " new york",
//         country : " uSA",

//     },
//     sayhii: function(){
// console.log(`hello my name is ${captainAmerica.firstname }`);
//     }

// };


// console.log(captainAmerica.friends);
// console.log(captainAmerica["firstname"]);
// console.log(captainAmerica.friends[1]);
// console.log(captainAmerica.sayhii);
// captainAmerica.sayhii();

// console.log(captainAmerica.address);
// console.log(captainAmerica.address.city);
// console.log(captainAmerica.address["city"]);

//  //looping in objects
// //  for in loop
//  for (let keys in captainAmerica ){
//     console.log(keys);
//     console.log(captainAmerica[keys]);
//  }

//  //delet key
//  delete captainAmerica.age;
//  console.log(captainAmerica);

//  //adding krys in obj
//   captainAmerica.weight="180kg"
//   console.log(captainAmerica);
    
  
  
//   var user ={
//     name:"johra",
//     age :30,
//   }

//   let abc = "age";
//   console.log(user.name);
//   console.log(user.abc);
//   console.log(user[abc]);

// //   let fruits = prompt("which fruits to buy");
// //   let bag = {
// //     [fruits]:5,
// //   };
// //   alert(bag[fruits]);


// //expration evaluate 
// let fruitname = " apple";
// let item = {
//     // [ fruitname +" computer"]:4;--> apple+ computer :4

// };
// //property value shorthan

// var computerbrands=" apple";
// var processor = "m2 sillicon "; 
// var ran = "164 gb";



// // var specification ={

// //     computerbrands :computerbrands,---> computerbrands:apple
// //     processor:processor,
// //     ran:ran,
// // }
// // console.log(specification);
// var specification = {
//     computerbrands,
//     processor,
//     ran,
//     ssd:"123",
// } 
// console.log(specification);


// console.log(captainAmerica.age);
// console.log(captainAmerica["age"]);
// console.log(captainAmerica.firstname);
// console.log(captainAmerica["firstname"]);
// // console.log(captainAmerica[firstname]);



// //you tube

// //  singleton
// const mysym = Symbol("key1")


// const jsusre ={
//     name : "johra",
//     age : 12,
// [    mysym] : "mykkey1", 
//      location: "kolkata",
//      email:"johranayab@gmal.com",
//      isloggein: false,
//      lastLoging:["monday","saturday",]
// }
// console.log(jsusre.email);
// console.log(jsusre["email"]);
//  console.log(jsusre.mysym );
//  console.log(typeof  jsusre.mysym);
//  console.log(jsusre[mysym]);


//  //value changing  
//  jsusre.email = " johraansari@gmail.com",
//  console.log(jsusre.email);


//  //freeze 
// //  Object.freeze(jsusre)
//  jsusre.email = "danishbelaal@gmail.com",
//  console.log(jsusre.email);
//  console.log(jsusre);


//  jsusre.greeting = function()
//  {
//     console.log("hello johra");
//  }
//  console.log(jsusre.greeting());//give error bcz upr freeze hua h 




//  var obj ={
//     name:" john",
//     age :23
//  }

//  let clone ={
//     // juske andr copy krna h , jo copy h
//  }

//  Object.assign( clone,obj,{ismale:true}, {favfood:"pizza"})

//  console.log(clone);   
//  obj.name="abhi";
//  console.log(obj);
//  console.log(clone);  

// //  nesting in clone

// let user = {
//     name:"pete",
//     sizes:{
//         height:182,
//         width:90,
//     },
// };
// Object.assign(clone,user);
// user.sizes.height=100;
// console.log(clone);
// console.log(user);


// question 1 

let arr = [ 1,4,2,3,2,4,1,5,6,1,1];
// output{ 1:4,2:2,3:1,4,2,5:1,6:1} 
   
let output ={};
arr.reduce(obj=>{
    if(output[obj]){
        output[obj]++;

    }else{
        output[obj]=1;
    }
});
console.log(output); 





/