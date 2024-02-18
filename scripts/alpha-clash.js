// function play(){
//     // 1 hide the homescreen - add the class hide to the home section
    
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//         // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
    
// }
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
    hideElementById('home-screen');
    showElementByID('play-ground');
    continueGame()
}