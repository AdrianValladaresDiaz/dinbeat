import getTotalShips from "./starWarsApiUtils/getTotalShips.js";

const starshipCount = document.querySelector("#total-ships");
console.log(starshipCount);
const nOfStarships = await getTotalShips();
starshipCount.textContent = `Total ships: ${nOfStarships}`;
