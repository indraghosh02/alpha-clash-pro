// function play(){
//     // 1 hide the homescreen - add the class hide to the home section
    
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//         // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
    
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    // stop the game if pressed esc

    if(playerPressed==='Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('cur-alpha')
    const CurrentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet =  CurrentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('u get a point');

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);




        // update score
        // 1 get the current ScreenOrientation
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // 2 increase the score by 1
        // const newScore = currentScore + 1;
        // // 3 show the updated score
        // currentScoreElement.innerText =  newScore;


        // // start a new round
        removeBackgroundColorById(expectedAlphabet)
        
        continueGame();
    }
    else{
        console.log('u missed');

        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);

        if(newLife===0){
            gameOver();
        }

        // 1 get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife= parseInt(currentLifeText);
        // // 2 reduce the life count
        // const newLife = currentLife - 1;
        // // 3 display the updated life count
        // currentLifeElement.innerText =  newLife;




    }

}

// capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    // step 1 - genarate random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('cur-alpha');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);




}

function play(){

    // hide everything show only the playground 

    hideElementById('home-screen');
    hideElementById('final-score');
    showElementByID('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementByID('final-score');

    // update final score
    // 1 get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore );

    // clear the last selected alphabet heighlight
    const CurrentAlphabet = getElementTextById('cur-alpha');
    removeBackgroundColorById(CurrentAlphabet);

}

