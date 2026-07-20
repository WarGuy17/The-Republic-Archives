import {cardArea} from './variables.js'

export function createCards(data, parent){
    parent.innerHTML = '';//clears the card area to make sure new cards can be put inside.
    setTimeout(()=> {//sets a timeout to do the below code.
        data.forEach((x) => {
            const card = document.createElement('div');//creating card
            const name = document.createElement('h3');//creating a place to put name inside card.

            parent.appendChild(card);//attaching card to cardArea
            card.appendChild(name);//putting name inside card

            card.classList.add('card');//adding a premade class to the card

            name.textContent = `${x.name}`;//attaches name to the person.name fetched.
        })
        loadingState(parent);
    }, 1000);
}

export async function getPeople(input, button, parent, category){//probably going to pass in arguements that can be pushed into the fetch for every single call it has to do instead of rewriting it over and over again.
    try {
        parent.innerHTML = '';
        loadingState(parent);
        const response = await fetch(`https://swapi.dev/api/${category}/?page=${input}`);//fetches information

        if(!response.ok){//checks if the response was ok.
            throw new Error('The HTTP request was not ok.');
        }

        const data = await response.json();//attaches response to the javascript object notation and to data.
        if(data.next === null){//if there is no next page disables that button.
            console.log(button)
            button.disabled = true;
            console.log(button.disabled);
        }
        else {
            button.disabled = false;
        }
        const info = data.results;//attaches results to people 

        createCards(info, parent);//that data is thrown into a card renderer/function above.
    }
    catch(e){
        console.error(e);
    }
}

export function loadingState(parent){
    if(parent.innerHTML === ''){//checks if cardArea is empty
        const loadingBox = document.createElement('div');//makes a box
        const loadingMessage = document.createElement('h2');//makes the message

        document.body.appendChild(loadingBox);//attaches box to body of html
        loadingBox.appendChild(loadingMessage);//attaches message to the box.
        loadingMessage.textContent = 'Loading....';//loading message

        loadingBox.classList.add('loadingBox');//loading style.
    }
    else {
        const oldLoadingBox = document.getElementsByClassName('loadingBox');//checks elements named by class. cant find the variables because of scope.
        console.log(oldLoadingBox);
        if(oldLoadingBox){
            console.log('it worked');
            oldLoadingBox[0].remove();//since it is an array returned the first response is then removed which is the only element.
        }
    }
}
