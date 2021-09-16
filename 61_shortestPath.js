const Queue = require("./45_Queue");
const Graph = require("./57_Graph");

const findShortestPath = (startVertex, endVertex) => {
    let visitedVertices = new Map();
    let queue = new Queue();
    let previousVertexTable = new Map();
    let shortestPath = [];

    queue.enqueue(startVertex);
    visitedVertices.set(startVertex.value, true);

    while (queue.length) {
        let current = queue.dequeue();

        for (let [
            adjacentVertexValue,
            adjacentVertex
        ] of current.adjacentVertices) {
            if (!visitedVertices.has(adjacentVertexValue)) {
                visitedVertices.set(adjacentVertexValue, true);
                queue.enqueue(adjacentVertex);
                previousVertexTable.set(adjacentVertexValue, current.value);
            }
        }
    }

    let currentValue = endVertex.value;

    while (currentValue !== startVertex.value) {
        shortestPath.push(currentValue);
        currentValue = previousVertexTable.get(currentValue);
    }
    shortestPath.push(startVertex.value);

    return shortestPath.reverse();
};

let graph = new Graph();

graph.addEdge("Ali", "p1");
graph.addEdge("Ali", "p2");
graph.addEdge("p1", "p6");
graph.addEdge("p1", "p3");
graph.addEdge("p1", "p8");
graph.addEdge("p2", "p5");
graph.addEdge("p2", "p7");
graph.addEdge("p5", "p6");
graph.addEdge("p3", "p4");
graph.addEdge("p3", "p8");
graph.addEdge("p4", "p7");
graph.addEdge("p8", "p7");

console.log(
    findShortestPath(graph.vertices.get("Ali"), graph.vertices.get("p7"))
);

console.log(
    findShortestPath(graph.vertices.get("Ali"), graph.vertices.get("p6"))
);
console.log(
    findShortestPath(graph.vertices.get("Ali"), graph.vertices.get("p8"))
);

console.log(
    findShortestPath(graph.vertices.get("p1"), graph.vertices.get("p6"))
);

console.log(
    findShortestPath(graph.vertices.get("p1"), graph.vertices.get("p7"))
);
