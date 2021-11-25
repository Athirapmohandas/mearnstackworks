// var expr="%10+2"
// try{
//     console.log(eval(expr));
// }
// catch(error){
//     console.log("error ");
// }
// console.log("DB commit");


// var ph="90745287010"
// //console.log(ph.length);
// try{
//     if(ph.length!=10){
//         throw new Error("Invalid ph number")
//     }
//     else{
//         console.log(ph);
//     }
// }
// catch(error){
//     console.log("error");
// }

//isNaN("123aaa")?console.log(true):console.log(false);

var accnt="123aaa"
try{
    if(isNaN(accnt)){
        throw new Error("invalid acc no")
    }
    else{
        console.log("valid");
    }
}
catch(error){
    eval("%2=33");
}
finally{
    console.log("db commit");
}
