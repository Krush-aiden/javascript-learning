"use strict";

const player0 = document.querySelector('.player--0')
const player01 = document.querySelector('.player--1')

const playeractive = document.querySelector('.player--active')

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');


const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice')
diceEl.classList.add('hidden');

let currentValue,currentValueTwo,totalscore,totalscoretwo,activePlayer,playing;

const init = function(){
     currentValue = 0;
     currentValueTwo = 0;
     totalscore = 0;
     totalscoretwo = 0;
     activePlayer = 0;
     playing = true
    diceEl.classList.add('hidden');
    current0.textContent = 0;
    current1.textContent = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    player0.classList.remove('player--winner')
    player01.classList.remove('player--winner')
    player0.classList.add('player--active')
    player01.classList.remove('player--active')
}
init()



document.querySelector('.btn--roll').addEventListener('click', function(){
    //generate a random dice value 
    if(playing){
   const diceValue = Math.trunc(Math.random() * 6 + 1)
   console.log('diceValue', diceValue)
    //console.log('dice', dice)
    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceValue}.png`;

    // checked for roll 1
    if(diceValue == 1){
        // add dice to current score
        currentValue = 0
        currentValueTwo = 0
        console.log('activePlayer', activePlayer)
        if(activePlayer === 0){
            current0.textContent = currentValue;
        } else if (activePlayer === 1){
            current1.textContent = currentValueTwo
        }
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active')
        player01.classList.toggle('player--active')
    } else {
        if(activePlayer === 0){
            currentValue = currentValue + diceValue
            current0.textContent = currentValue;
        } else if (activePlayer === 1){
            currentValueTwo = currentValueTwo + diceValue
            current1.textContent = currentValueTwo
        }
    }
    console.log('currentValueTwo', currentValueTwo)
    console.log('currentValue', currentValue)
}
})

document.querySelector('.btn--hold').addEventListener('click', function(){
    console.log('currentValue', currentValue)
    totalscore += currentValue; //current = previous currentValue
    console.log('totalscore', totalscore)
    if(playing){
    console.log('currentValueTwo', currentValueTwo)
    totalscoretwo += currentValueTwo;
    console.log('totalscoretwo', totalscoretwo)
    if((totalscore || totalscoretwo) >= 100){
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } 
    currentValue = 0
    currentValueTwo = 0
    console.log('activePlayer', activePlayer)

    if(activePlayer === 0){
        current0.textContent = currentValue
         score0.textContent = totalscore
       
    } else if (activePlayer === 1){
        score1.textContent = totalscoretwo
        current1.textContent = currentValueTwo;
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active')
    player01.classList.toggle('player--active')
    // Declaring the winner
}
})

document.querySelector('.btn--new').addEventListener('click', init)
   