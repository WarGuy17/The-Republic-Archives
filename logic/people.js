import {createPeopleCards, getPeople, loadingState} from './functions.js';
import {cardArea, nextPage, previousPage} from './variables.js';



let page = 1;

getPeople(page, nextPage, cardArea);





nextPage.addEventListener('click', () => {
    page++;
    getPeople(page, nextPage, cardArea);
});

previousPage.addEventListener('click', () => {
    if(page > 1){
        page--;
    }
    getPeople(page, nextPage, cardArea);
})

