//  We use majority of three type only
// 1.Named Function
// 2.Ananomous Function
// 3.Arrow function 


// Named Function
function namedFunction()
{
    console.log("It is a named Function");

}
namedFunction();

// Ananomous Function
let anyName=function(){
    console.log("Is is a ananomous functon");
}
anyName();

// Arrow Function
let anyName1 =()=>
{   console.log("This is a Arrow function");

}
anyName1();

// How to optimize the arrorw function code
// 1.If one paramenter no need bracket and curly brases
let name="Manojkumar "
let value=(userName)=>{
    console.log(userName)
}
value(name);

let userName="Manojkumar A";
let details =fName=>fName;

let result=details(userName);
console.log(result);

// let userName="Manojkumar A";
// let details =(fName)=>{
//     return fName;
// }
// let result=details(userName);
// console.log(result);
