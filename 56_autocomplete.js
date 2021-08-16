const Trie = require("./55_Trie");

class AutoComplete extends Trie {
    #collectAllWords(node = super.root) {
        let words = [];

        const traverseTrie = (node, acc) => {
            for (let char in node.children) {
                if (char === "*") {
                    words.push(acc);
                } else {
                    traverseTrie(node.children[char], acc + char);
                }
            }
        };
        traverseTrie(node, "");
        return words;
    }

    autocomplete(text) {
        let currentNode = super.search(text);
        if (!currentNode) return [];
        return this.#collectAllWords(currentNode).map(
            (partial) => text + partial
        );
    }
}

let autocomplete = new AutoComplete();
let words = [
    "accent",
    "acc",
    "accept",
    "accenture",
    "cat",
    "can",
    "cannot",
    "capital",
    "curry",
    "auto"
];

for (let word of words) {
    autocomplete.insert(word);
}

console.log(autocomplete.autocomplete("acce"));
