const cardArea2 = document.querySelector('#card-area2');

async function getPeople2(){
    try {
        const response = await fetch('https://swapi.dev/api/people/?page=2');
        
        if(!response.ok){
            throw new Error("There was an HTTP error")
        }

        const data = await response.json();
        const people = data.results;

        createPeopleCards2(people);
    }
    catch(e){
        console.error(e);
    }
}

async function createPeopleCards2(data) {
    data.forEach((person) => {

        const peopleCard = document.createElement('div');
        const peopleName = document.createElement('h3');
        const peopleBirth = document.createElement('h3');

        cardArea2.appendChild(peopleCard);
        peopleCard.appendChild(peopleName);
        peopleCard.appendChild(peopleBirth);

        peopleCard.classList.add('people-card');

        peopleName.textContent = `Name: ${person.name}`;
        peopleBirth.textContent = `Birth: ${person.birth_year}`
    })
}

getPeople2();
