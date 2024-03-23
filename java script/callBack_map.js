let arr = [1,2,3,4,5]

let newArr = arr.map((value)=>{
    console.log(value,"\n")
    return value % 2 == 0;//if we use condition in after return then output is true and false
    //if we solve this problem we use filter callback 
})

console.log(newArr);