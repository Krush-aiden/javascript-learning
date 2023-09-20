'use strict';

const overLay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal')
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

const unhideFileds = function(){
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}

for(let i = 0; i <= openModal.length - 1; i++){
    openModal[i].addEventListener('click', unhideFileds)
}

const hideFields = function(){
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}

closeModal.addEventListener('click', hideFields)
overLay.addEventListener('click', hideFields)


document.addEventListener('keydown', function (event) {
    if(event.key === "Escape"){
        if(!modal.classList.contains('hidden'))
             hideFields()
    }
})

