let arr1=["Manoj","Kumar","A"];
let arr2=[24,6379209750];
let newArray=[...arr1,...arr2];
console.log(newArray);

// We call ccreate a new array using this method also
let resultArray=[...arr1,"Manoj","Kumar"];
console.log(resultArray);

// restoperator
function funName(a,b,...arr){
    console.log(a,b,arr)
}
funName(1,2,3,4)