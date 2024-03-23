let arr = [1,2,3,4,6,5,6];
// console.log(arr.join(' and '));

let b = toString(arr);
let a =arr.pop();
let c = arr.shift();
let d = arr.unshift(10);
let e = arr.push(10);

// console.log(e,arr);


let f = [1,2,3,4,5];
delete f[2];
// console.log(f.length);






// // HOW TO SORT AN ARRAY IN JAVA SCRIPT


// let x = [1,4,66,22,44,666,888];
// x.sort(); // [ 1 , 22 , 4 , 44 , 66 , 666 , 888 ]

// // HOW TO SORT AN ARRAY IN ASCENDING ORDER
// let compare  = (a,b)=> a - b
// x.sort(compare); // [ 1 , 4 , 22 , 44 , 66 , 666 , 888 ]


// // HOW TO SORT AN ARRAY IN DESCENDING ORDER
// x.sort((a,b)=> b-a); // [ 888 , 666 , 66 , 44 , 4 , 22 , 1 ]
// console.log(x);


let abc = [1,2,3,4,5,6];

// abc.reverse();
let deletevalue = abc.splice(2,2,10,11);
// console.log(abc,deletevalue);

//that return new array
// console.log(abc.slice(2,5));
console.log(abc.slice(2));
