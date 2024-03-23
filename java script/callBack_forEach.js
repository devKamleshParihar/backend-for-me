let arr = [1,2,3,4,5,6]

// arr.forEach((value)=> console.log(value))
// arr.forEach((value,index,arr)=> console.log("i =",index,'value = ',value,arr))

arr.forEach((value,index)=>{
    // console.log(value * (index + 1));//value * value // value ** 2
})

// second method

arr.forEach(function(value,index){
    // console.log(value * (index + 1));//value * value // value ** 2
})


//third method
let myFun = (value)=>{
    // console.log(value ** 2);//value * value // value ** 2
}
arr.forEach(myFun);

arr.forEach(value=>{
    // console.log(value ** 3);
})

let myArr = [1,2,3,4,5,6,7,8,9,10]

 myArr.forEach(value=>{
    console.log(value ** 2);
})

console.log(myArr);














// first parameter in foreach method is value second index and third arr it self


/*

higher order function in java script

higher order function defination : - 

a function which takes function as parameter , is called callback fuction

callback function defination : - 

a function which is passed as parameter to another function is called callback function.

1. function which takes function as parameter

2. function which return function

3. function which return array

4. function which return object

5. function which return boolean

6. function which return string

7. function which return number

8. function which return undefined

9. function which return null

10. function which return symbol

11. function which return any type of data

12. function which return nothing

13. function which return void

14. function which return never

15. function which return class

16. function which return interface

17. function which return enum

18. function which return type

19. function which return namespace

20. function which return module

21. function which return package

22. function which return import

23. function which return export

24. function which return super

25. function which return this

26. function which return new

27. function which return delete
  
30. function which return in

*/