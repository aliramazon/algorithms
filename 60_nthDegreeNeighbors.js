const Queue = require("./45_Queue.js");
const Graph = require("./57_Graph");

const nthDegreeNeighbors = (startVertex, n) => {
    let queue = new Queue();
    let visitedVertices = new Map();
    let degree = 0;
    let current;
    let result = [];

    queue.enqueue([startVertex, degree]);
    visitedVertices.set(startVertex.value, true);

    while (queue.length) {
        [current, degree] = queue.dequeue();
        if (degree === n) {
            result.push(current);
            continue;
        }
        for (let [key, vertex] of current.adjacentVertices) {
            if (!visitedVertices.has(key)) {
                visitedVertices.set(vertex.value, true);
                queue.enqueue([vertex, degree + 1]);
            }
        }
    }

    return result;
};

let graph = new Graph();

graph.addEdge("Ali", "person-1");
graph.addEdge("Ali", "person-2");
graph.addEdge("person-1", "person-4");
graph.addEdge("person-2", "person-3");
graph.addEdge("person-3", "person-9");
graph.addEdge("person-3", "person-6");
graph.addEdge("person-3", "person-11");
graph.addEdge("person-4", "person-6");
graph.addEdge("person-4", "person-10");
graph.addEdge("person-6", "person-7");
graph.addEdge("person-6", "person-8");

console.log(nthDegreeNeighbors(graph.vertices.get("person-2"), 2));
