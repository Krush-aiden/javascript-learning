'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'correct Number...';
// document.querySelector('.score').textContent = 25;
// document.querySelector('.number').textContent = 25;
// document.querySelector('.guess').value = 15;

let score = 20;
let number = Math.trunc(Math.random() * 20 + 1);
console.log('number', number)
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
const guessNumber = Number(document.querySelector('.guess').value);

    //No Number
    if (!guessNumber) {
        document.querySelector('.message').textContent = '😒 No number selected'
    } // Correct Number 
    else if (guessNumber === number) {
        if (highScore <= score)  {
            highScore = score;
            document.querySelector('.highscore').textContent = `${highScore}`;
        }
        document.querySelector('.message').textContent = '😎correct Number....'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = guessNumber
    }
    // Check number is incorrect
    else if(guessNumber !== number){
        document.querySelector('.message').textContent = (guessNumber > number) ? '🚄 Too high' : '👇 Too Low';
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💣 you lost"
            document.querySelector('.score').textContent = 0;
        }
    } 
    else {
        document.querySelector('.message').textContent = '😜incorrect Number'
    }
})

//function to reset the Game
const newFunction = function () {
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'start guessing...'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#242020';
    document.querySelector('.number').textContent = '?';
    number = Math.trunc(Math.random() * 20 + 1);
    console.log('number', number)
}

document.querySelector('.again').addEventListener('click', newFunction)