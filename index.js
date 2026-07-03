async function getStarshipManifestAsync(){
    try {
        const response = await fetch('https://swapi.dev/api/starships/?page=1');

        if(!response.ok){
            throw new Error("Ship Manifest didn't load properly");
        }

        const data = await response.json();

        console.log(data)
    }
    catch(error){
        console.error("There was an error" + error)
    }
}
console.log("Archive boot sequence initiated")

getStarshipManifestAsync();