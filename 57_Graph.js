class Vertex {
    #adjacentVertices;
    constructor(value) {
        this.value = value;
        this.#adjacentVertices = new Map();
    }

    addAdjacent(vertex) {
        if (!this.adjacentVertices.has(vertex.value)) {
            this.adjacentVertices.set(vertex.value, vertex);
        }
    }

    removeAdjacent(vertex) {
        this.adjacentVertices.delete(vertex.value);
    }

    get adjacentVertices() {
        return this.#adjacentVertices;
    }

    isAdjacent(vertex) {
        return this.#adjacentVertices.has(vertex.value);
    }
}
const Direction = {
    DIRECTED: "DIRECTED",
    UNDIRECTED: "UNDIRECTED"
};
class Graph {
    constructor(edgeDirection = Direction.DIRECTED) {
        this.vertices = new Map();
        this.edgeDirection = edgeDirection;
    }

    addVertex(value) {
        if (this.vertices.has(value)) {
            return this.vertices.get(value);
        }
        let vertex = new Vertex(value);
        this.vertices.set(value, vertex);
        return vertex;
    }

    removeVertex(value) {
        let current = this.vertices.get(value);

        if (current && this.edgeDirection === Direction.UNDIRECTED) {
            for (let [value, vertex] of this.vertices) {
                vertex.removeAdjacent(current);
            }
        }
        return this.vertices.delete(value);
    }

    addEdge(source, destination) {
        let sourceVertex = this.addVertex(source);
        let destinationVertex = this.addVertex(destination);

        sourceVertex.addAdjacent(destinationVertex);
        if (this.edgeDirection === Direction.UNDIRECTED) {
            destinationVertex.addAdjacent(sourceVertex);
        }

        return [sourceVertex, destinationVertex];
    }

    removeEdge(source, destination) {
        let sourceVertex = this.vertices.get(source);
        let destinationVertex = this.vertices.get(destination);

        if (sourceVertex && destinationVertex) {
            sourceVertex.removeAdjacent(destinationVertex);

            if (this.edgeDirection === Direction.UNDIRECTED) {
                destinationVertex.removeAdjacent(sourceVertex);
            }
        }
    }

    depthFirstTraverse(startVertex) {
        let map = new Map();

        const traverse = (vertex) => {
            if (map.has(vertex.value)) return;
            map.set(vertex.value, vertex);
            console.log(vertex.value);
            for (let [_, adjacentVertex] of vertex.adjacentVertices) {
                traverse(adjacentVertex);
            }
        };
        traverse(startVertex);
    }

    depthFirstSearch(startVertex, searchValue) {
        let hash = new Map();
        let foundVertex = null;

        const search = (vertex) => {
            if (vertex.value === searchValue) {
                foundVertex = vertex;
                return;
            }
            hash.set(vertex.value, vertex);

            for (let [_, adjacentVertex] of vertex.adjacentVertices) {
                if (foundVertex) {
                    return; // It prevents unnecessary loop
                }
                if (hash.has(adjacentVertex.value)) continue; // It prevents infinite loop and serves as base case as well.

                search(adjacentVertex);
            }
        };
        search(startVertex);
        return foundVertex;
    }
}

let graph = new Graph(Direction.UNDIRECTED);
graph.addEdge("elice", "sultan");
graph.addEdge("elice", "fred");
graph.addEdge("fred", "diana");
graph.addEdge("alice", "fred");
graph.addEdge("alice", "love");
graph.addEdge("alice", "diana");
graph.addEdge("diana", "ali");
graph.addEdge("ali", "gina");

/* {
    elice: ["sultan", "fred"],
    sultan: ["elice"],
    fred: ["elice", "diana", "alice"],
    diana: ["fred", "alice", "ali"],
    alice: ["fred", "love", "diana"],
    love: ["alice"],
    ali: ["diana", "gina"],
    gina: ["ali"]

}*/

console.log(graph.depthFirstSearch(graph.vertices.get("alice"), "love"));
