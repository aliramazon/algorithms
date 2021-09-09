const WeightedGraph = require("./59_WeightedGraph");

let graph = new WeightedGraph();
graph.addEdge("Atlanta", "Boston", 100);
graph.addEdge("Atlanta", "Denver", 160);
graph.addEdge("Boston", "Chicago", 120);
graph.addEdge("Boston", "Denver", 180);
graph.addEdge("Denver", "Chicago", 40);
graph.addEdge("Chicago", "El Paso", 80);
graph.addEdge("Denver", "El Paso", 140);
graph.addEdge("El Paso", "Boston", 100);

// console.log(graph);
// console.log(graph.getVertex("Atlanta"));

const findCheapestPath = (origin, destination) => {
    let cheapestPrices = new Map();
    let layover = new Map();
    let visitedPlaces = new Map();
    let notVisitedPlaces = [origin];

    if (origin) {
        cheapestPrices.set(origin.value, 0);
    } else {
        return "Origin is not found";
    }

    if (!destination) return "Destination is not found";

    let currentPlace = origin;

    while (currentPlace) {
        visitedPlaces.set(currentPlace.value, true);
        notVisitedPlaces = notVisitedPlaces.filter(
            (notVisitedPlace) => notVisitedPlace.value !== currentPlace.value
        );

        for (let [value, weightedVertex] of currentPlace.adjacentVertices) {
            let cityName = value;
            let { weight, vertex } = weightedVertex;

            let priceFromOriginToAdjacentPlace =
                cheapestPrices.get(currentPlace.value) + weight;

            if (
                !cheapestPrices.has(cityName) ||
                cheapestPrices.get(cityName) > priceFromOriginToAdjacentPlace
            ) {
                cheapestPrices.set(cityName, priceFromOriginToAdjacentPlace);
                layover.set(cityName, currentPlace.value);
            }

            if (!visitedPlaces.has(cityName)) {
                notVisitedPlaces.push(vertex);
            }
        }
        let nextCheapestPlace = notVisitedPlaces[0];
        for (let notVisitedPlace of notVisitedPlaces) {
            if (
                cheapestPrices.get(nextCheapestPlace.value) >
                cheapestPrices.get(notVisitedPlace.value)
            ) {
                nextCheapestPlace = notVisitedPlace;
            }
        }
        currentPlace = nextCheapestPlace;
    }

    if (!cheapestPrices.has(destination.value)) {
        return "There is no flight to your destination";
    }

    let path = [];
    let currentCityName = destination.value;

    while (currentCityName !== origin.value) {
        path.push(currentCityName);
        currentCityName = layover.get(currentCityName);
    }
    path.push(origin.value);

    return {
        path: path.reverse(),
        price: cheapestPrices.get(destination.value)
    };
};

console.log(
    findCheapestPath(graph.getVertex("Boston"), graph.getVertex("El Paso"))
);
