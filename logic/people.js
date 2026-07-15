import {createPeopleCards, getPeople} from './functions.js';

const nextPage = document.querySelector('#nextPage');
const previousPage = document.querySelector('#previousPage');

let page = 1;

getPeople(page, nextPage);


nextPage.addEventListener('click', () => {
    page++;
    getPeople(page, nextPage);
});

previousPage.addEventListener('click', () => {
    if(page > 1){
        page--;
    }
    else {
        previousPage.disabled = true;
    }
    getPeople(page, nextPage);
})

