const settingsToggle = (match, main) => {
    let settingsScreen = document.querySelector('.settings-screen')
    let settingsButton = document.querySelector('.settings')
    let exitButton = document.querySelector('.exit')

    settingsButton.addEventListener('click', () => {
        blurFadeScreen()
    })

    exitButton.addEventListener('click', () => {
        blurFadeScreen()
    })

    const blurFadeScreen = () => {
        settingsScreen.classList.toggle('fadein')
        settingsScreen.classList.toggle('fadeout')
        match.classList.toggle('blur')
        main.classList.toggle('blur')
    }

    const updateRounds = () => {
        let roundsCount = document.querySelector('.rounds-count p')
        let roundsIncrement = document.querySelector('.increment')
        let roundsDecrement = document.querySelector('.decrement')
        let currentRounds = 3
        let rounds = currentRounds

        roundsCount.textContent = currentRounds
        

        roundsIncrement.addEventListener('click', ()=>{
            if (rounds === 10)
            {
                console.log("limit")
            } 
            else 
            {
                rounds++
                roundsCount.textContent = rounds
            }
            tempRoundsSwap(currentRounds, rounds)
        })

        roundsDecrement.addEventListener('click', ()=>{
            if (rounds === 0)
            {
                console.log("limit")
            } 
            else 
            {
                rounds--
                roundsCount.textContent = rounds
            }
            tempRoundsSwap(currentRounds, rounds)
        })
    }

    const tempRoundsSwap = (a, b) => {
        let applyRounds = document.querySelector('.apply')

        applyRounds.addEventListener('click', ()=>{
            a = b
        })
    }

    updateRounds()
}





export default settingsToggle