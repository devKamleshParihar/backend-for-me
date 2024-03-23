document.getElementById('images').addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        let remove = e.target.parentNode;
        remove.parentNode.removeChild(remove)
    }
})