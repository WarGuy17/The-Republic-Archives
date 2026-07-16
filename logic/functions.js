import {cardArea} from './variables.js'

export function createPeopleCards(data, parent){
    parent.innerHTML = '';
    setTimeout(()=> {
        data.forEach((person) => {
            const peopleCard = document.createElement('div');//creating card
            const peopleName = document.createElement('h3');//creating a place to put name inside card.

            parent.appendChild(peopleCard);
            peopleCard.appendChild(peopleName);

            peopleCard.classList.add('people-card');

            peopleName.textContent = `${person.name}`;
        })
        loadingState(parent);
    }, 1000);
}

export async function getPeople(input, button, parent){//probably going to pass in arguements that can be pushed into the fetch for every single call it has to do instead of rewriting it over and over again.
    try {
        parent.innerHTML = '';
        loadingState(parent);
        const response = await fetch(`https://swapi.dev/api/people/?page=${input}`);

        if(!response.ok){
            throw new Error('The HTTP request was not ok.');
        }

        const data = await response.json();
        if(data.next === null){
            console.log(button)
            button.disabled = true;
            console.log(button.disabled);
        }
        else {
            button.disabled = false;
        }
        const people = data.results;

        createPeopleCards(people, parent);
    }
    catch(e){
        console.error(e);
    }
}

export function loadingState(parent){
    if(parent.innerHTML === ''){
        const loadingBox = document.createElement('div');
        const loadingMessage = document.createElement('h2');

        document.body.appendChild(loadingBox);
        loadingBox.appendChild(loadingMessage);
        loadingMessage.textContent = 'Loading....';

        loadingBox.classList.add('loadingBox');
    }
    else {
        const oldLoadingBox = document.getElementsByClassName('loadingBox');
        console.log(oldLoadingBox);
        if(oldLoadingBox){
            console.log('it worked');
            oldLoadingBox[0].remove();
        }
    }
}
