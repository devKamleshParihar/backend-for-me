// let cval = document.querySelector('#counterVal')
// cval.innerText = 2

/*

let d = document.querySelector('#d');
let fun = ()=>{
    cv.innerText = cv.innerText - 1;
}
d.onclick = fun()
let cv = document.querySelector('#cv');
let i = document.querySelector('#i');

*/
let cv = document.querySelector('#cv');
let d = document.querySelector('#d');
let r = document.querySelector('#r');
let i = document.querySelector('#i');

let inr = ()=>{
    cv.innerHTML = +(cv.innerHTML) + 1;
}
let dec = ()=>{
    cv.innerHTML = +(cv.innerHTML) - 1;
}
let res = ()=>{
    cv.innerHTML = 0;
}


i.onclick = inr;
d.onclick = dec;
// r.onclick = res;

r.addEventListener('click',res)



