//  90 greater than and equal number calculate
// let marks = [50,90,98,94,25,65,99,100]
// let result = marks.filter((value)=>{
//     return value >= 90
// })
//  console.log(result);


// insert in array 1 to n value

// let n = prompt('enter n value in array')
// let arr = [];
// for(let i = 0 ; i < n ; i++){
//     arr[i] = i + 1;
// }
// console.log(arr);


// sum of number 
// let arr = [1,2,3,4,5]
// let value = arr.reduce((a,b)=>{
//     return a + b
// })
// console.log(value);


// product of number
// let value1 = arr.reduce((a,b)=>{
//     return a * b
// })
// console.log(value1);

// let arr = []
// let n = 5;
// for(let i in Array.from({lenght:n})){
//     arr[i] = +i + 1;
// }
// console.log(arr);

let arr = [];
let n = 5;
for (let i in Array.from({ length: n })) {
    arr[i] = i;
    arr[i] = Number.parseInt(arr[i]);
}
console.log(arr);



