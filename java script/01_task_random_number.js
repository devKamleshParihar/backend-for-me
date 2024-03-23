let randomNumber = Math.random() * 100;
randomNumber = Math.floor(randomNumber);

console.log(randomNumber);
let count = 0;


let userNUm = prompt("Enter a number between 0 and 100");
while(true){

                        
    if(userNUm < randomNumber){
     userNUm = prompt(`your ans is wrong the value is greaterthan ${userNUm} `);
     count++;
    }

    else if(userNUm > randomNumber){
        userNUm = prompt(`your ans is wrong the value is lessthan ${userNUm}`);
        count++;
    }
    else{
        count++;
        alert(`you are right and you have taken ${count} attempts and you number is ${randomNumber}`);
        break;
    
    }

    
}