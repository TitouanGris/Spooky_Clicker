function createCard(booster_name, booster_price, booster_click, booster_level) {
    return `

<div class="shop_item">
    <div class="shop_item_content">
        <div class="booster_name">
            <img src="Images/${booster_name}.png" class="shop_img">
            <p>${booster_name.toUpperCase()}</p>
        </div>
        <div  class="price">
            <p>${booster_price}x</p>
            <img src="Images/pumpkin.png" class="price_icon">
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
      booster_click: 2.0,
      booster_level: 0,
    },
    
    {
      booster_name: "Manor",
      booster_price: 100,
      booster_click: 1.5,
      booster_level: 0,
    },
    
    {
      booster_name: "Ghost",
      booster_price: 1000,
      booster_click: 2.2,
      booster_level: 0,
    },
    
    {
      booster_name: "Graveyard",
      booster_price: 250,
      booster_click: 1.8,
      booster_level: 0,
    },
    
    {
      booster_name: "Devil",
      booster_price: 5000,
      booster_click: 2.5,
      booster_level: 3,
    },
    
  ];
  

const cards = document.querySelector("#shop_boosters");

const generateBooster = () => {
  cards.innerHTML = "";
  for (let i = 0; i < boosterToAdd.length; i++) {

          const html = createCard(
            boosterToAdd[i].booster_name,
            boosterToAdd[i].booster_price,
            boosterToAdd[i].booster_click,
            boosterToAdd[i].booster_level
          );

          cards.innerHTML += html;
        }
      };


generateBooster();
