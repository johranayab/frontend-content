//  a function in which we can pass another function as an argument that  function is know as hof



// calculate the area of a square where side is arr


// var arr = [ 2,5,7,12];
// function areaofSqare(arr){
//     let res=[];
//     for( let i =0;i<arr.length ;i++){
//         res.push(arr[i]*arr[i])
//     }
// return res;
// }
// var ans = areaofSqare(arr);
// console.log(ans);
// // expected o/p--->[ 4 , 26,49,144]





// var  radius = [3, 1, 2, 4];

// var calculateArea = function (radius) {
//   var output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));




//new
// functional programing
//better way
//    var arr= [2,3,7,12];
//    let area = function(side){
//     return side * side;
//    };



//    let parameter = function(side){
//     return side * 4;
//    };



//    let diagonal= function(side){
//     return  Math.sqrt(2)*side;
//    };

//    let calculate = function(arr,logic){
//     let res = [];
//     for( let i = 0 ; i<arr.length;i++){
//       res.push(logic(arr[i]));    }
//     return res;
//    }


//    console.log(calculate(arr,area));
//    console.log(calculate(arr,parameter));
//    console.log(calculate(arr,diagonal));
   



//    // //map 
// // // syntax-> arr.map(function(ele){ 
// // // return {logic}
// // // })
// // //result arr         //hof     //cb function
// // var areaOfSquareArr=arr.map((num) => {
// //   return num * num;
// // })
// // // var areaOfSquareArr = arr.map(function(num){
// // //   return num * num;
// // // });
// // // 1) each element of arr is traversed, it is available in cb function's parameter . 
// // // 2) we peform some action on that element 
// // // 3) on writing return res is pushed inside an array 
// // console.log(areaOfSquareArr);


// var areaofSqare = arr.map(area);
// // calculate, logic; --> convert this into map
// // arr.map(area);

// //this is what we require
// //arr.calculate ( logic);
//  Array.prototype.calculate=function(logic){
//   let res= [];

//   for( let i = 0 ; i <this.length;i++)
//   {res.push(logic(this[i]))}
//   return res;
//  }

//  let narr= [ 2,,5,7,12];
//  var ans = narr.calculate(area);
//  console.log(ans);
 


//  //implementing own push method in array 
 Array.prototype.mypush= function(num){
  let length= this.length;//4
  this[length]=num;
  return this;
 }
 arr.mypush(45);
 console.log(arr);



//  //filter
//  var arr=[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];


//  function gr  eaterThan4(num){
//   if (num > 4)return num;
//   return num<4;
//  }
//  var ans=arr.filter( greaterThan4);
//  console.log(ans);

  //reduce
  // var arr = [2,5,7,12];

  // function sumOFAarr(acc,cur){
  //   console.log("before");
  //   console.log(acc);
  //   console.log(cur);
  //   acc = acc+cur
  //   console.log("after");
  //   console.log(acc);
  //   return acc;
  // }
  //     let ans = arr.reduce(sumOFAarr);
  //     console.log(ans);
      // sumOFAarr();
      // let ans =sumOFAarr;
      // console.log(ans);

      var arr = [10,-5,566,28,56,12,456];

      function largeValue( acc,curr){
        console.log("beFore");
     console.log(acc);
     console.log(curr);

     if( curr>acc){
      acc=curr;
     }
     console.log("After");
     console.log(acc);
     return acc;
      }
      let ans = arr.reduce( largeValue , -Infinity);


console.log(ans);

const woeldCapital=[
  {
    country:"InDia",
    capital:"dehii",
    population:"2cr",

  },



  {
    country:"Amrica",
    capital:"WAshington",
    population:"6cr",

  },

  {
    country:"France",
    capital:"paric",
    population:"2cr",

  },
  {
    country:"England",
    capital:"london",
    population:"4cr",

  },
  {
    country:"Germany",
    capital:"Berlin",
    population:"2cr",

  },
  {
    country:"InDia1",
    capital:"dehii2",
    population:"2cr",

  },
]
//Q1 print country name and their capital  
// [ India->Delhi, America->WashingtonDC, France->Paris , England->London, Germany->Berlin] 

// const output=woeldCapital.map((x)=>x.country+"-----> "+x.capital);
// console.log(output);

// 2ND METHOD
function GetcountyCapital(obj){

  return obj.country+"->"+obj.capital;

}
let res = woeldCapital.map(GetcountyCapital);
console.log(res );

//Q2-> Return the number of countries with a particular population 
//{ 2cr: 3, 4cr: 1, 6cr: 1 }
function getpopulation (obj,cur){
  if( obj[cur.population]){
    obj[cur.population]=obj[cur.population]+1;

  }
  else{
    obj[cur.population]=1;
  }
  return obj;
}

var res1 = woeldCapital.reduce(GetcountyCapital,{});
console.log(res1);


//Q3 get country name with population less than 5cr
//[India, France,England,Germany]

function getpopulationlessthan5(obj){
  if(obj.population< "5cr"){
    arr.push(obj.country);
    return true;
  }
}
function getcountry(obj){
  return obj.country;
}
var result= woeldCapital.filter(getpopulationlessthan5).map(getcountry);

console.log(result);


//using reduce

function getpopulationlessthan5( arr,obj){
  if(obj.population<"5cr"){
    arr.push(obj.country);
  }
  return arr;
}

var ans1=woeldCapital.reduce(getpopulationlessthan5,[]);
console.log(ans1);