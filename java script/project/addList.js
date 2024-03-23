function addList(lang){
   const li =  document.createElement('li');
   li.innerHTML = lang
   document.querySelector('.language').appendChild(li)

}

// addList('nodejs')

function addListOpti(lang){
    const li  = document.createElement('li');
    li.appendChild(document.createTextNode(lang))
    document.querySelector('.language').appendChild(li)
}
addListOpti('data')
addListOpti('html')
addListOpti('express js')
//



//UpDate
let selectList = document.querySelector('li:last-child');
const newEle = document.createElement('li');
newEle.textContent = 'CSS'
selectList.replaceWith(newEle)
// let list.textContent = 'CSS';
ducument.querySelector('language')


//update 
let secondSelect = document.querySelector('li:nth-child(2)')
let newe = document.createElement('li')
secondSelect.outerHTML = '<li>Node js</li>'


//delete
let deleteData = document.querySelector('li:last-child')
// deleteData.remove();

