class WeightedVertex {
    #adjacentVertices;
    constructor(value) {
        this.value = value;
        this.#adjacentVertices = new Map();
    }

    addAdjacent(vertex, weight) {
        this.#adjacentVertices.set(vertex.value, { weight, vertex });
    }

    removeAdjacent(vertex) {
        this.#adjacentVertices.delete(vertex.value);
    }

    get adjacentVertices() {
        return this.#adjacentVertices;
    }
}

const Direction = {
    DIRECTED: "DIRECTED",
    UNDIRECTED: "UNDIRECTED"
};

class WeightedGraph {
    constructor(edgeDirection = Direction.DIRECTED) {
        this.vertices = new Map();
        this.edgeDirection = edgeDirection;
    }

    addVertex(value) {
        if (this.vertices.get(value)) {
            return this.vertices.get(value);
        }

        let vertex = new WeightedVertex(value);
        this.vertices.set(value, vertex);
        return vertex;
    }

    removeVertex(value) {
        let current = this.vertices.get(value);

        if (current) {
            for (let [_, vertex] of this.vertices) {
                vertex.removeAdjacent(current);
            }
        }
        return this.vertices.delete(value);
    }

    addEdge(source, destination, weight) {
        let sourceVertex = this.addVertex(source);
        let destinationVertex = this.addVertex(destination);

        sourceVertex.addAdjacent(destination, weight);
        if (this.edgeDirection === Direction.UNDIRECTED) {
            destinationVertex.addAdjacent(sourceVertex, weight);
        }
    }

    removeEdge(source, destination) {
        let sourceVertex = this.vertices.get(source);
        let destinationVertex = this.vertices.get(destination);

        if (sourceVertex && destinationVertex) {
            sourceVertex.removeVertex(destinationVertex);

            if (this.edgeDirection === Direction.UNDIRECTED) {
                destinationVertex.removeVertex(sourceVertex);
            }
        }
    }
}
