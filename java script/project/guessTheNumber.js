let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);

        let userInput = document.querySelector('#guessField')
       let submit = document.querySelector('#subt')
       let GuessSlot =  document.querySelector('.guesses')
       let Remaining  = document.querySelector('.lastResult')
       let lowOrHi = document.querySelector('.lowOrHi')
       let startOver = document.querySelector('.resultParas')
       
       const p = document.createElement('p')

        let numGuess = 1
       let PreviousGuess = []
       let isPlay = true
       

       if(isPlay){
           submit.addEventListener('click',(e)=>{
               e.preventDefault()
               let guess = parseInt(userInput.value) 
               validateGuesses(guess)

           })
       }
       

       function validateGuesses(guess){
            if(isNaN(guess)){
                alert('enter a valid number')
            }
            else if(guess > 100){
                alert('please enter number less than 100')
            }
            else if(guess < 1){
                alert('please enter number more than 0')
            }
            else if(guess == randomNumber){
                displayMessage(`you win you guess is ${guess}`)
                Remaining.innerHTML = 0
                endGame()
            }
            else{
                PreviousGuess.push(guess)
                
                if(numGuess == 10){
                    displayGuesses(guess)
                    displayMessage(`game over . Random number was ${randomNumber}`)
                    endGame()
                }else{
                    displayGuesses(guess)
                    checkGuesses(guess)
                }
            }
       }
       function checkGuesses(guess){
            if(guess === randomNumber){
                displayMessage(`you win you guess is ${guess}`)
                endGame();
            }
            else if(guess > randomNumber){
                displayMessage('the value too high')
            }
            else if(guess < randomNumber){
                displayMessage('the value too low')
            }
       }

       function displayGuesses(guess){
            userInput.value = ''
            GuessSlot.innerHTML += `${guess} ` 
            numGuess++
            Remaining.innerHTML = `${11 - numGuess}`    
       }

       function displayMessage(message){
            lowOrHi.innerHTML = `<h1>${message}</h1>`;
       }
       function endGame(){
           userInput.value = ''
           userInput.setAttribute('disabled','')
           p.classList.add('button')
           p.innerHTML = `<h2 id="newGame">Start new game</h2>`
           startOver.appendChild(p)
           isPlay = false
           startGame()  
        }

        function startGame(){
        const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('click',(e)=>{
            randomNumber = parseInt(Math.random() * 100 + 1);
            PreviousGuess=[]
            numGuess = 1
            GuessSlot.innerHTML = ''
            Remaining.innerHTML = `${11 -numGuess}`
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            isPlay = true
        })
        }