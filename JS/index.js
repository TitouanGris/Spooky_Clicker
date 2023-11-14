function createCard(booster, booster_price, booster_click, booster_level) {
  return `

<div class="shop_item" id="${booster}" onclick="booster(['${booster}', ${booster_price}, ${booster_click}, ${booster_level}])">
    <div class="shop_item_content">
        <div class="booster_name">
            <img src="./docs/assets/Images/${booster.toLowerCase()}.png" class="shop_img">
            <p>${booster.toUpperCase()}</p>
        </div>
        <div class="price">
            <p>${booster_price}x</p>
            <img src="./docs/assets/Images/pumpkin.png" class="price_icon">
        </div>
        <div class ="click_booster">
            <p class="click_booster_number">${booster_click}</p>
            <p class="click_booster_copy">Pumpkin p/ click</p>
        </div>
        <div class="level">
            <p class="level_text">Level</p>
            <p class="level_number">${booster_level}</p>
        </div>
     </div>
</div>
`;
}


const boosterToAdd = [
  {
    booster_name: "Zombie",
    booster_price: 20,
    booster_click: 1.2,
    booster_level: 0,
  },

  {
    booster_name: "Catacomb",
    booster_price: 500,
    booster_click: 32,
    booster_level: 0,
  },

  {
    booster_name: "Manor",
    booster_price: 100,
    booster_click: 6.6,
    booster_level: 0,
  },

  {
    booster_name: "Ghost",
    booster_price: 1000,
    booster_click: 70,
    booster_level: 0,
  },

  {
    booster_name: "Graveyard",
    booster_price: 250,
    booster_click: 15.6,
    booster_level: 0,
  },

  {
    booster_name: "Devil",
    booster_price: 999999,
    booster_click: 400,
    booster_level: 0,
  },

];


const cards = document.querySelector("#shop_boosters");


let baseLevel = 0;
let levelUp = 1;

function booster(boost) {
  if (nombreClics < boost[1]) {
    console.log(boost)
    return alert("Click me more AHAHAH !")
  }
  else {
    pumpkinPerClicks += boost[2]
    document.getElementById("pumpkinPerClicks").textContent = pumpkinPerClicks.toFixed(1);


    nombreClics -= boost[1]
    document.getElementById("nombreClics").textContent = nombreClics.toFixed(1);

    for (const item of boosterToAdd) {
      if(item.booster_name === boost[0]){
        item.booster_level++
        item.booster_price = (item.booster_price ** 1.33).toFixed(1)
      }
    }
    generateBooster()
  }
}

const generateBooster = () => {
  cards.innerHTML = "";
  for (let i = 0; i < boosterToAdd.length; i++) {

    const html = createCard(
      boosterToAdd[i].booster_name,
      boosterToAdd[i].booster_price,
      boosterToAdd[i].booster_click,
      boosterToAdd[i].booster_level,
    );

    cards.innerHTML += html;
  }
};


generateBooster();




