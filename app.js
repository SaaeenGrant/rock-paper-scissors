import settingsToggle from "./settings.js" 

const game = () => {
     
    let playerScore = 0
    let computerScore = 0
    let rounds = 5
    let mainMenu = document.querySelector('.main-menu')
    let matchMenu = document.querySelector('.match-score-container')
    let winScreen = document.querySelector('.win-screen')
    let winState = document.querySelector('.win-state')
    let options = document.querySelectorAll('.options .option-img')
    let playerImage = document.querySelector('.player-selection-img')
    let computerImage = document.querySelector('.computer-selection-img')


    const startGame = () => {
        let playButton = document.querySelector('.play')
       
        playButton.addEventListener("click", () => {
            mainMenu.classList.replace('fadein', 'fadeout')
            matchMenu.classList.replace('fadeout', 'fadein')
        })   

        playGame()   
    }

    const resetGame = () => {
        
        let resetButton = document.querySelector('.reset')

         resetButton.addEventListener("click", () => {
            mainMenu.classList.add('fadein')
            matchMenu.classList.replace('fadein', 'fadeout')
            defaultState()
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
        winScreenDisplay()
    }

    const winScreenDisplay = () => {
        let totalScore = playerScore + computerScore
        let winMessage = document.querySelector('.win-message')
        let playAgain = document.querySelector('.play-again')

        if(totalScore === rounds) {
            matchMenu.classList.add('blur')
            winScreen.classList.replace('fadeout', 'fadein')
            
            if(playerScore > computerScore){
                winMessage.textContent = "You Win!"
                return
            } else {
                winMessage.textContent = "You Lose!"
                return
            }
        }

        playAgain.addEventListener('click', () => {
            winScreen.classList.replace('fadeout', 'fadein')
            matchMenu.classList.remove('blur')
            defaultState()
        })
    }

    const defaultState = () => {
        playerScore = 0
        computerScore = 0
        updateScore() 

        playerImage.style.backgroundImage = null
        computerImage.style.backgroundImage = null

        winState.textContent = ""
        winScreen.classList.replace('fadein', 'fadeout')
    }

    resetGame()
    startGame()
    updateScore()
    settingsToggle(mainMenu, matchMenu, rounds)
    
}

game()