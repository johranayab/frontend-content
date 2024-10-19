// function sum(a,b){
//     try{
//         return a+b+c;
//         console.log("done");
//     }
//     catch(error){
//         console.log("err",error.massage);
//     }
// }


// function sum(a, b, c) {
//     try {
//         return a + b + c;
//         console.log("done");  // This line will never be executed because it's after the return statement
//     } catch (error) {
//         console.log("err", error.message);
//     }
// }

// console.log(sum(10, 20, 30));


let songDeliverePromise = new Promise(function(resolve,reject){
    let song ={
        name:"tum hi ho",
        album:"Aashiqui",
        length:"300s",
        singer:"Arjit singh",
        lyrics:"tum hi ho tum  hi ho"
    };
    // setTimeout(()=>{resolve(song)},1000);
    resolve(song)
});

songDeliverePromise.then((data1)=>{
    console.log(data1);
})



let sara = new Promise((resolve,reject)=>{
    let Sara={
nam:"sara skh",
roll:"21",
oege:"SN",
    };

    resolve(Sara)

})

sara.then((update)=>{
    console.log(update);
})
