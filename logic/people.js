import {menuButtons} from './variables.js';

console.log(menuButtons);
if(menuButtons !== null){
    let menuCategory;
    menuButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log('click');
            menuCategory = button.textContent;
            sessionStorage.setItem('Set Category', menuCategory);
        })
    })
}





