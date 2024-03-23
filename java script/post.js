// let a = 10;
// let b;
// let c = 30;

// console.log( a && b && c  ); //undefined

// b = " ";
// console.log( a && b && c  ); //30

// b = "";
// console.log( a && b && c  ); // Nothing

// console.log( a && 1 && c  ); // 30
// console.log( a && 0 && c  ); // 0


// console.log( a && b>2 && c  ); //false
// console.log( a && b<2 && c  ); //30


// Callback Function in javaScript with forEach method
// a callback function is a function passed as an argument to another function.
// The callback function is executed after another function has finished executing.




// let arr = [1 , 2 , 3 , 4 , 5]

// arr.forEach(function (value , index , array){
//     console.log(value);
// }

 
// forEach method is used to iterate over an array and execute a callback function for each element.

// forEach method takes a callback function as an argument.
// The callback function is executed for each element in the array.
// The callback function takes three parameters:
// 1. The current element
// 2. The index of the current element
// 3. The array itself
// The forEach method returns the original array.

// Example:

// let arr = [1 , 2 , 3 , 4 , 5]

// arr.forEach(function (value , index , array){
//     console.log(value);
// }
let arr = [1 , 2 , 3 , 4 , 5]




arr.forEach((value)=>{
    console.log(value);
})







