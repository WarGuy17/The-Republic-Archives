import {createCards, getPeople, loadingState} from './functions.js';
import { cardArea, nextPage, previousPage } from './variables.js';
const newCategory = sessionStorage.getItem('Set Category').toLowerCase();
console.log(newCategory)

let page = 1;//this sets the page to 1





getPeople(page, nextPage, cardArea, newCategory)

if(nextPage !== null){
    nextPage.addEventListener('click', () => {//next button at the bottom of screen.
        page++;//iterates page
        getPeople(page, nextPage, cardArea, newCategory);//fetches the page
    });
}

if(previousPage !== null){
    previousPage.addEventListener('click', () => {
        if(page > 1){//checks to see if page is more than 1
            page--;
        }
        getPeople(page, nextPage, cardArea, newCategory);//fetches previous page
    })
}