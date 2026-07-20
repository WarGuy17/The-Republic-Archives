import {createCards, getPeople, loadingState} from './functions.js';
import {cardArea, nextPage, previousPage, menuButtons} from './variables.js';

let page = 1;//this sets the page to 1 

if(cardArea !== null){
    console.log('cardArea doesnt = null')
    getPeople(page, nextPage, cardArea, 'people');
}

if(nextPage !== null){
    nextPage.addEventListener('click', () => {//next button at the bottom of screen.
        page++;//iterates page
        getPeople(page, nextPage, cardArea, 'people');//fetches the page
    });
}

if(previousPage !== null){
    previousPage.addEventListener('click', () => {
        if(page > 1){//checks to see if page is more than 1
            page--;
        }
        getPeople(page, nextPage, cardArea, 'people');//fetches previous page
    })
}

if(navArea !== null){
    navArea.addEventListener('click', () => {
        console.log('click');
    })
}





