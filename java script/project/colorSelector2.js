let buttons = document.querySelectorAll('.button')
    let body = document.querySelector('body');

    buttons.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            if(e.target.id == 'red'){
                body.style.backgroundColor = e.target.id;
                console.log(e.target.id);
            }
            if(e.target.id == 'blue'){
                body.style.backgroundColor = e.target.id;
                console.log(e.target.id);
            }
            if(e.target.id == 'green'){
                body.style.backgroundColor = e.target.id;
                console.log(e.target.id);
            }
            if(e.target.id == 'white'){
                body.style.backgroundColor = e.target.id;
                console.log(e.target.id);
            }

        })
    })