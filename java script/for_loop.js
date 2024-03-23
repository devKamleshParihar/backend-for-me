// // let obj = {
// //     ram : 54,
// //     shyam : 78,
// //     krishna:15,
// //     radha : 98
// // };
// // //for in loop
// // //for in loop use in objects and arrays and string

// // for(let i in obj){
// //     console.log(i,obj[i]);
// // }

// // //for of loop
// // //use for  of string and arrays


// // for(let i of "kamlesh")
// // {
// //     console.log(i);
// // }


// //question 
// // using for loop to print the  keys and vlaues of an object
// let obj = {
//     ram:50,
//     shayam:30,
//     krishna:40,
//     radha:60
// }

// for(let i = 0 ;i<Object.keys(obj).length;i++)
// {
//     console.log(Object.keys(obj)[i],Object.values(obj)[i]);
// }
// console.log("\n");

// for(let i = 0 ;i<Object.keys(obj).length;i++)
// {
//     console.log(Object.keys(obj)[i],obj[Object.keys(obj)[i]]);
// }
// console.log("\n");
// for(let i in obj){
//     console.log(i,obj[i]);
// }

// console.log(obj);

let currectNumber = 10;
let number = prompt('enter the correct number');
// checknumber(number);

// first ways to find currect number
function checknumber(number)
{
    
    if(number == 3)
    {
        alert('the number is correct');
        return;
    }
    else{
        alert('try again');
        number = prompt('enter the correct number');
        checknumber(number);
    }
}

//second ways to find currect number
while(number != currectNumber)
{
    alert('try again');
    number = prompt('enter the correct number');

}
alert('the number is correct');



