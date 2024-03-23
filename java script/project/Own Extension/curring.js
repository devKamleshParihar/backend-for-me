function x(a){
    if(!a) return null
    return (b)=>{
        return a + b;
    }
}

let c = x
console.log(c(2)(1));