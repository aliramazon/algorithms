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
