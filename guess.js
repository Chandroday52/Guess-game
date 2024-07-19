let randomNumber = parseInt(Math.random() * 100 + 1);  // taking the random number here

const submit = document.querySelector('#subt'); //taking many no. of numbers/ answers
const userInput  = document.querySelector('#guessField'); // taking the user input from the guess field
const guessSlot  = document.querySelector('.guesses');   //
const remaining  = document.querySelector('.lastResult');

const lowOrHi  = document.querySelector('.lowOrHi'); // taking the value to be low or high than the target value
const startOver  = document.querySelector('.resultParas');

const p = document.createElement('p');
let  prevGuess = [];
let numGuess = 1; // to count the no of guesses

let playGame = true;
if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
    });
}

function validateGuess(guess) {  // to check whether the no. is valid or not(between (1-100) or not)
    if(isNaN(guess)){
        alert('Please Enter a Valid number');
    }else if(guess < 1){
        alert('Please Enter a Valid positive number');
    }else if(guess > 100){
        alert('Please Enter a Valid number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over: Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
// isn't the guessed value is equal to the random  value
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is Tooo low `);
    }else if(guess > randomNumber){
        displayMessage(`Number is Too  high`)
    }
}

// empties the input value &&  add the guess value in inner html , decrement
// the no of chances left
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}:,  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

// low or high ka sms print karega
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML ='';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
