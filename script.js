const starWars = [
  {
    "id": 1,
    "name": "Luke Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "homeworld": "tatooine"
  },
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "Rodia"
  },
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  {
    "id": 17,
    "name": "Wedge Antilles",
    "pic": "https://lumiere-a.akamaihd.net/v1/images/databank_wedgeantilles_01_169_b8185dce.jpeg?region=0%2C0%2C1560%2C878",
    "homeworld": "corellia"
  },
  {
    "id": 18,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  {
    "id": 19,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
  },
  {
    "id": 20,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
];

let homeworldsRaw = starWars.map(starHomeWorld => starHomeWorld.homeworld ?? "other");
console.log(homeworldsRaw);

const homeworldsUnique = homeworldsRaw.filter((item, index) => homeworldsRaw.indexOf(item) === index);
console.log(homeworldsUnique);

const homeworldsLowercase = homeworldsUnique.map(lowerCase => lowerCase.toLowerCase());
console.log(homeworldsLowercase);

const homeworlds = homeworldsLowercase;
console.log(homeworlds); 

function showRadio(){
  for(j = 0 ; j < homeworlds.length ; j++){
    document.getElementById("showInput").innerHTML+=`
        
        <div class="form-check col-auto">
          <input class="form-check-input" type="radio" name="homeworld" id="${homeworlds[j]}" value="${homeworlds[j]}">
          <label class="form-check-label" for="${homeworlds[j]}">
            ${homeworlds[j]}
          </label>
        </div>
    `;
  }
}

function showCharacter(){
  for(i = 0 ; i < starWars.length ; i++){
    document.getElementById("showCard").innerHTML+= `
        <div class="card m-2" style="width: 19rem;">
          <div class="card-body">
            <img style="width:100%; height:200px;" src="${starWars[i].pic}" class="img-fluid" alt="${starWars[i].name}">
            <p class="card-text">Name: ${starWars[i].name}</p>
            <p class="card-text">Home Town: ${starWars[i].homeworld ?? "other"}</p>
          </div>
        </div>
    `;
  };
}

function filtered() {

  const radioButton = document.querySelectorAll('input[name="homeworld"]');
  const cardContainer = document.getElementById("showCard");

  radioButton.forEach( radioButton => {

    radioButton.addEventListener('change',function(){
      const selectedRadio = document.querySelector('input[name="homeworld"]:checked').value;
      const filteredHomeworld = selectedRadio;
      console.log("secılen anavatan: ",filteredHomeworld);


      let filterCharacter;
      if (filteredHomeworld === "other") {
        filterCharacter = starWars.filter(user => !user.homeworld);
      } else {
        filterCharacter = starWars.filter(user => user.homeworld?.toLowerCase() === filteredHomeworld);
      }

      cardContainer.innerHTML="";

      filterCharacter.forEach(character => {
        const card = `
            <div class="card m-2" style="width: 19rem;">
              <div class="card-body">
                <img style="width:100%; height:200px;" src="${character.pic}" class="img-fluid" alt="${character.name}">
                <p class="card-text">Name: ${character.name}</p>
                <p class="card-text">Home Town: ${character.homeworld ?? "other"}</p>
              </div>
            </div>
        `;
        cardContainer.innerHTML+=card;
       });

    });
  });
 
}

function renderCharacters(){
  showRadio();
  showCharacter();
  filtered();

document.getElementById("deleteAdd").innerHTML= "Hide Character";
const dangerButton = document.getElementById("deleteAdd");

dangerButton.classList.remove("btn-success-button");
dangerButton.classList.add("btn-danger-button"); 

document.getElementById("deleteAdd").onclick = removeCharacters;

}

function removeCharacters(){
  
const removeCard = document.getElementById("showCard");
removeCard.innerHTML = "";

const removeRadio = document.getElementById("showInput");
removeRadio.innerHTML="";

const successButton = document.getElementById("deleteAdd");

successButton.classList.remove("btn-danger-button");
successButton.classList.add("btn-success-button");

document.getElementById("deleteAdd").innerHTML = "Show Character";

document.getElementById("deleteAdd").onclick = renderCharacters;
}

