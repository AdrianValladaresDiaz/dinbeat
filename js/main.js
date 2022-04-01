import getTotalShips from "./starWarsApiUtils/getTotalShips.js";
import getShipTypes from "./starWarsApiUtils/getShipTypes.js";

const starshipCount = document.querySelector("#total-ships");
const nOfStarships = await getTotalShips();
starshipCount.textContent = `Total ships: ${nOfStarships}`;

const shipTypes = await getShipTypes();

const container = document.querySelector("#main-container");
const typeList = document.createElement("ul");
container.appendChild(typeList);

Object.keys(shipTypes).forEach((shipType) => {
  const newLi = document.createElement("li");
  newLi.textContent = `${shipType}: ${shipTypes[shipType]}`;
  typeList.appendChild(newLi);
});
