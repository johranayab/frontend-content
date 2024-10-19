// // <-- rules-->
// 1.the value of this is evaluated during the run time
// 2.value of this depends from where it is calling
//3 this point to that object from where the function is being called



//1





// function type1(){
//     console.log(this.name);
// }
// var name="javascrit";
// type1();//when function is called globally,this always point to window obj 
//2
// function type2(){
//     console.log(this.lname);
// }
// var lname="tiari";
// var obj={
//     lname:"singh",
//     type2
// }
// obj.type2(); 




// function type2(){
//     console.log(lname);
// }
// var lname="tiari";
// var obj={
//     lname:"singh",
//     type2
// }
// obj.type2(); 



function type2(){
    console.log(this.lname);
    console.log(this.C);
}
var lname="tiari";
var obj={
    // lname:"singh",
    type2
}
obj.type2(); 


function type2(){
    console.log(lname);
}
// var lname="tiari";
var obj={
    lname:"singh",
    type2
}
obj.type2(); 

var food ="pizza";
var obj={
    food:"pasta",
    eat(){
        console.log("i love to eat"+     this.food);
    }
}
// var foo=obj.eat; 
// foo();

// var length = 2;
// function aqure(){
//     let cb= function(){
//         console.log(this.length*this.length);
//     };

//     setTimeout( cb,2999);
// }
// var obj ={
//     length:3,
//     aqure

// }

// obj.aqure();



// function type2(){
//     console.log(this.lname);
// }



// var obj={
//     lname:"singh",
//     type2
// }

// var lname="tiari";
// // var obj={
// //     lname:"singh",
// //     type2
// // }
// obj.type2(); 


///5


// function Name ( fName , lname){
// this.firstName = fName;
// this.lastName=lname;

// }

// var obj = new Name("sunil","gavaskar");
// console.log(obj);




let obj4={
    a:function(){
        let z=100;
        function yolo(){
            console.log(this);
            
        }
        yolo()
        console.log(this);
        
    }
}

obj4.a()