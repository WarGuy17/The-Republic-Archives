const cardArea = document.querySelector('#card-area');

async function getPeople(){
    try {
        const response = await fetch('https://swapi.dev/api/people/');

        if(!response.ok){
            throw new Error('The HTTP request was not ok.')
        }

        const data = await response.json();
        const people = data.results
        createPeopleCards(people);
        console.log(people)
    }
    catch(e){
        console.error(e);
    }
}

async function createPeopleCards(data){
    data.forEach((person) => {

        const peopleCard = document.createElement('div');
        const peopleName = document.createElement('h3');
        const peopleBirth = document.createElement('h3');

        cardArea.appendChild(peopleCard);
        peopleCard.appendChild(peopleName);
        peopleCard.appendChild(peopleBirth);

        peopleCard.classList.add('people-card');

        peopleName.textContent = `Name: ${person.name}`;
        peopleBirth.textContent = `Birth: ${person.birth_year}`
    })
}

getPeople();

