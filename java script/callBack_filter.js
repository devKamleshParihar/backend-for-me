let arr = [1,2,3,4,5]
let newArr = arr.filter((value)=>{
    console.log(value);
    return value % 2 == 0 ;
})

console.log(newArr);