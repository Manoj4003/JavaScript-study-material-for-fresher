// Destructuring means every value srored in a variable after E6 Single line Destructng also easyly posible
let arr=[1,2,3,4];
console.log(arr[0]);


let [a,,,d]=arr;
console.log(a,d);


let arr1=[1,23,5,4546,668,12,12,24,5];
let [a1,b1,c1,...d1]=arr1;
console.log(a1,b1,c1,d1);


