// function function1()
// {
//     console.log("This is a function 1");
    
// }
// function function2()
// {
//     console.log("This is a function 2");
    
// }
// function1(function2());

function add(callback,a,b)
{
    console.log(a+b);
 
}
function sub(num1,num2)
{
    console.log(num1-num2);
}
add(sub,20,20);