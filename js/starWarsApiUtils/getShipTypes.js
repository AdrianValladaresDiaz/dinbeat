const fetchShipsPage = async (url) => {
  const response = await fetch(url);
  const { next, results } = await response.json();
  return { next, results };
};

const getAllShips = async () => {
  const ships = [];
  let next;
  const firstFetchResult = await fetchShipsPage(
    "https://swapi.dev/api/starships"
  );
  ships.push(firstFetchResult.results);
  next = firstFetchResult.next;

  while (next) {
    const fetchResults = await fetchShipsPage(next);
    ships.push(...fetchResults.results);
    next = fetchResults.next;
  }

  return ships;
};

const getShipTypes = async () => {
  const ships = await getAllShips();
  const shipsByClass = {};
  ships.forEach((ship) => {
    const shipClass = ship.starship_class;
    if (shipsByClass.hasOwnProperty(shipClass)) {
      shipsByClass[shipClass] += 1;
    } else {
      shipsByClass[shipClass] = 1;
    }
  });
  return shipsByClass;
};

export default getShipTypes;
