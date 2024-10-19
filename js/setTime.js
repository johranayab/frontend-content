// function b (){
//     var b = 1 ; 
//     setTimeout ( function (){
//         console.log(b);

//     },3000);
//     console.log("hellow");
// };    
// b();







//print number from 1 to 5 , with A SECOUND GAP IN EACH NUMBER
// function a(){
// for( let i = 1 ; i<=5 ; i++){
//     setTimeout(function (){
//         console.log(i);
//     },1000*i);
// }
// }
// a();




// function a(){
//     for( var i = 1 ; i<=5 ; i++){
//         setTimeout(function (){
//             console.log(i);
//         },1000*i);
//     }
//     }
//     a();

    // function a(){


    //     for( let i = 1 ; i<=5 ; i++){
    //         function wapper(b){
    //         setTimeout(function (){
    //             console.log(b);
    //         },1000*b);
    //     }
    //     wapper(i);
    //    }
       
    //     }
    //     a();setTimeout( function (){
    //         console.log(i);
    //       },3000);
    console.log("before");
    setTimeout( function cd()  {
        console.log("letter");
        
    }, 5000);
    fetch("https://api.netflix.com")
    .then( function cd (){
        console.log("yolo");
    });
    console.log("after");