let fun=()=>{


let i=1;
let count = 0;
while(i<=10){
    let arr = ['snake','water','gun'];
    let user = prompt('enter snake,water or gun');
    let random = Math.floor(Math.random()*3);
    
if(arr[random] == user){
    alert('draw');
}else if(arr[random] == 'snake' && user == 'gun'){
    alert(' Gun you won')
    count++;
}else if(arr[random] == 'snake' && user == 'water'){
    count++;
    alert('snake you won')
}else if(arr[random] == 'water' && user == 'gun'){
    alert('you loose')
}else if(arr[random] == 'water' && user == 'snake'){
    count++;
    alert('you won')
}else if(arr[random] == 'gun' && user == 'snake'){
    alert('you loose')
}else if(arr[random] == 'gun' && user == 'water'){
    count++;
    alert('you won')
}
alert(arr[random]);

i++;
}
alert('your score is '+ count);
}
let c = confirm('do you want to play snake water gun');
if(c){
    fun();
}else{
    alert('thank you');
}

