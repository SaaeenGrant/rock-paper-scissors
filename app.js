const game = () => {

    let playerScore = 0
    let computerScore = 0
    let mainMenu = document.querySelector('.main-menu')
    let matchMenu = document.querySelector('.match-score-container')
    let options = document.querySelectorAll('.options .option-img')
    let playerImage = document.querySelector('.player-selection-img')
    let computerImage = document.querySelector('.computer-selection-img')

    const startGame = () => {
        let playButton = document.querySelector('.play')
       
        playButton.addEventListener("click", () => {
            mainMenu.classList.remove('fadein')
            mainMenu.classList.add('fadeout')
            matchMenu.classList.remove('fadeout')
            matchMenu.classList.add('fadein')

        })   

        playGame()  
    }

    const resetGame = () => {
        
        let resetButton = document.querySelector('.reset')

         resetButton.addEventListener("click", () => {
             mainMenu.classList.add('fadein')
             matchMenu.classList.remove('fadein')
             matchMenu.classList.add('fadeout')

             playerScore = 0
             computerScore = 0
             updateScore() 

             playerImage.style.backgroundImage = ``
             computerImage.style.backgroundImage = ``
             
         })
    }

    const playGame = () =>{

        let selection = ["rock","paper","scissors"]

        options.forEach(function(e){
            e.addEventListener("click", function(){

                let randomNumber = Math.floor(Math.random()*3)
                let random = selection[randomNumber]

                playerImage.style.backgroundImage = `url(./images/${this.classList[1]}.png)`
                computerImage.style.backgroundImage = `url(./images/${random}.png)`

                handComparison(this.classList[1], random)
            });
        });
    }

    const handComparison = (playerHand, computerHand) => {

        let winState = document.querySelector('.win-state')

        if (playerHand === "rock") {
            if(computerHand === "scissors") {
                winState.textContent = "You Win"
                playerScore++
                updateScore()
                return
            }
            else if ((computerHand === "paper")){
                winState.textContent = "You lose"
                computerScore++
                updateScore()
                return
            } else {
                winState.textContent = "Its a Tie"
                return
            }
        }

        if (playerHand === "paper") {
            if(computerHand === "rock") {
                winState.textContent = "You Win"
                playerScore++
                updateScore()
                return
            }
            else if ((computerHand === "scissors")){
                winState.textContent = "You lose"
                computerScore++
                updateScore()
                return
            } else {
                winState.textContent = "Its a Tie"
                return
            }
        }

        if (playerHand === "scissors") {
            if(computerHand === "paper") {
                winState.textContent = "You Win"
                playerScore++
                updateScore()
                return
            }
            else if ((computerHand === "rock")){
                winState.textContent = "You lose"
                computerScore++
                updateScore()
                return
            } else {
                winState.textContent = "Its a Tie"
                return
            }
        }
    }

    const updateScore = () => {
        let playerScoreText = document.querySelector('.player-score')
        let computerScoreText = document.querySelector('.computer-score')
        playerScoreText.textContent = playerScore
        computerScoreText.textContent = computerScore
    }


    resetGame()
    startGame()
    updateScore()

    
}

game()