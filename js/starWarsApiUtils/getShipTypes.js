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
    console.log(fetchResults);
    ships.push(...fetchResults.results);
    next = fetchResults.next;
  }

  return ships;
};

const getShipTypes = async () => {
  const ships = await getAllShips;
  const shipsByType = {};
  ships.forEach((ship) => {
    if (shipsByType.hasOwnProperty(ship.starship_class)) {
      console.log("hi");
    }
  });
};

// starship_class

export default getShipTypes;
