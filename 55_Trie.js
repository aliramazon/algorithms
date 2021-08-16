class TrieNode {
    constructor() {
        this.children = {};
    }
}

class Trie {
    #root;
    constructor() {
        this.#root = new TrieNode();
    }

    get root() {
        return this.#root;
    }

    insert(word) {
        let currentNode = this.#root;

        for (let char of word) {
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char];
            } else {
                currentNode.children[char] = new TrieNode();
                currentNode = currentNode.children[char];
            }
        }
        currentNode.children["*"] = null;
    }

    search(word) {
        let currentNode = this.#root;

        for (let char of word) {
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char];
            } else {
                return null;
            }
        }

        return currentNode;
    }
}

module.exports = Trie;
