let change = setTimeout(()=>{
    document.querySelector('h1').innerHTML = 'hii Nitesh'
},3000)

let btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    clearTimeout(change)
})