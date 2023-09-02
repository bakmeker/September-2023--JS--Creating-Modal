'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

// Making a function to not repeat my self.
const closeModal =  function()
{
   modal.classList.add(`hidden`);
   overlay.classList.add(`hidden`);
};
// Making a function to not repeat my self.
const openModal = function()
{
modal.classList.remove(`hidden`);
overlay.classList.remove(`hidden`);
};


// Looping to choice all moduls and not just 1
for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener(`click`, openModal);


// Closing / openning models
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function(e) 
{
    console.log(e.key);
// just if a person hit ESC on keyboard
if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
        closeModal();
    
}

});