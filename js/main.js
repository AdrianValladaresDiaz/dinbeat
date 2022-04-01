import getTotalShips from "./starWarsApiUtils/getTotalShips.js";
import getShipTypes from "./starWarsApiUtils/getShipTypes.js";

const starshipCount = document.querySelector("#total-ships");
const nOfStarships = await getTotalShips();
starshipCount.textContent = `Total ships: ${nOfStarships}`;

const ships = await getShipTypes();
