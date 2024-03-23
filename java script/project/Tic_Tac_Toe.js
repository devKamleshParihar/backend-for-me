let boxes = document.querySelectorAll('.box')
  let resetbtn = document.querySelector('#reset-btn')
  let msg  = document.querySelector('#msg')
  let msgContainer = document.querySelector('.msg-container')
  let newGamebtn = document.querySelector('#new-btn')
  let turn = true

  let arr = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]
  

  boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
      if(turn){
        box.innerHTML = '🙍🏻‍♂️'
        turn = false
      }else{
        box.innerHTML = '🙍🏻'
        turn = true
      }
      console.log('clicked');
      box.disabled = true
      checkWinner()
    })
  }) 

const checkWinner = ()=>{
  for (let pattern of arr) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val)
      }
    }

  }
}
const resetgame = ()=>{
    let turn = true
    enableBoxes()
    msgContainer.classList.add('hide')

  }

const disableBoxes = ()=>{
  for (const b of boxes) {
    b.disabled = true
  }
}
const enableBoxes = ()=>{
  for (const b of boxes) {
    b.disabled = false
    b.innerHTML = ''
  }
}

const showWinner = (winner)=>{
  msg.innerHTML = `congratulations , winner is ${winner}`
  msgContainer.classList.remove('hide')
  disableBoxes();
}

newGamebtn.addEventListener('click',resetgame)
resetbtn.addEventListener('click',resetgame)