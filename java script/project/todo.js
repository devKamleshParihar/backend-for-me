// let input = document.querySelector('.input');
// let data = input.values;
// let submit = document.querySelector('.submit')
// let list = document.querySelector('.list')
// document.write()
// console.log(i

function data(){

    let input = document.querySelector('#inputData');
    let data = input.value;
    let li = document.createElement('li');
    let ckt = document.createElement('input');
    ckt.type  ='checkbox'
    console.log(ckt);
    li.appendChild(document.createTextNode(data,ckt));
    document.querySelector('.list').appendChild(li).appendChild(ckt)
    if(data){
        input.value = ""
    }
}



let btn = document.querySelector('#btn')
btn.addEventListener('click',data)
