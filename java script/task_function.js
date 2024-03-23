
// count vowels in string

// let arr = [];
// // let data = prompt('enter a string')
// let data = 'hello i am kamlesh parihar'
// let c = check(data)
// console.log(c);

// function check1(str){
//     let count = 0;
//     for(let key in str){
//         if(str[key] == 'a'||str[key] == 'i'||str[key] == 'e'||str[key] == 'o'||str[key] == 'u'){
//             count++;
//             // arr.push(str[key]);
//         }
//     }
//     return count;
// };

// for(let key in arr){
//     console.log(arr[key]);
// }

// push vowels in array 

// let arr = [];
// // let data = prompt('enter a string')
// let data = 'i '
// check(data)

// function check(str){
//     for(let key in str){
//         if(str[key] == 'a'||str[key] == 'i'||str[key] == 'e'||str[key] == 'o'||str[key] == 'u'){
//             arr.push(str[key]);
//         }
//         // return arr;
//     }
// };

// for(let key in arr){
//     console.log(arr[key]);
// }


// count vowels in string
// using arrow function count vowels

let check = (str) => {
    let count = 0;
    for(let key in str){
        if(str[key] == 'a'||str[key] == 'i'||str[key] == 'e'||str[key] == 'o'||str[key] == 'u'){
            count++;
            // arr.push(str[key]);
        }
    }
    return count;

}

let data1 = 'hello i am kamlesh parihar'
console.log(check(data1));






