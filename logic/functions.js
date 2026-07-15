import {cardArea} from './variables.js'

export function createPeopleCards(data, parent){
    parent.innerHTML = '';
    data.forEach((person) => {
        const peopleCard = document.createElement('div');//creating card
        const peopleName = document.createElement('h3');//creating a place to put name inside card.

        parent.appendChild(peopleCard);
        peopleCard.appendChild(peopleName);

        peopleCard.classList.add('people-card');

        peopleName.textContent = `${person.name}`;
    })
}

export async function getPeople(input, button){//new idea use the next property of data instead of calling the function again.
    try {
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
        createPeopleCards(people, cardArea);
    }
    catch(e){
        console.error(e);
    }
}
