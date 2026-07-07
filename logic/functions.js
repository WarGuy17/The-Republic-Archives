import {} from './variables'

export function createPeopleCards(data, parent){
    data.forEach((person) => {

        const peopleCard = document.createElement('div');
        const peopleName = document.createElement('h3');
        const peopleBirth = document.createElement('h3');

        parent.appendChild(peopleCard);
        peopleCard.appendChild(peopleName);
        peopleCard.appendChild(peopleBirth);

        peopleCard.classList.add('people-card');

        peopleName.textContent = `Name: ${person.name}`;
        peopleBirth.textContent = `Birth: ${person.birth_year}`
    })
}

export async function getPeople(page){
    try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);

        if(!response.ok){
            throw new Error('The HTTP request was not ok.')
        }

        const data = await response.json();
        console.log(data);
        const people = data.results;
        createPeopleCards(people, cardArea1);
        console.log(people);
    }
    catch(e){
        console.error(e);
    }
}