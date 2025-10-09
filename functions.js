// let details={
//     name:"Manoj",
//     age:24
// }
// function printName(){
//     console.log("Hi I am "+details.name+details.age);
// }
// printName()



function printstatement(userName,userAge){
if(userAge<=40)
    console.log(`My name is ${userName} and my age is ${userAge}`);
}
printstatement("Manoj",34);

// Default parameter
function defaultParameter(name="manoj",age=24){
    console.log(`My name is ${name} and my age is ${age}`);
}
defaultParameter("kumar");