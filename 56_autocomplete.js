const Trie = require("./55_Trie");

class AutoComplete extends Trie {
    #collectAllWords(node = this.root) {
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

    autoComplete(text) {
        let currentNode = this.search(text);
        if (!currentNode) return [];
        return this.#collectAllWords(currentNode);
    }

    autoCorrect(text) {
        let longestPrefix = "";
        let currentNode = this.root;

        for (let char of text) {
            if (currentNode.children[char]) {
                longestPrefix += char;
                currentNode = currentNode.children[char];
            } else {
                return longestPrefix + this.#collectAllWords(currentNode)[0];
            }
        }

        return text;
    }

    printAllChars(node = this.root) {
        if (!node) return;
        for (let char in node.children) {
            console.log(char);
            this.printAllChars(node.children[char]);
        }
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

console.log(autocomplete.autoCorrect("accepr"));
console.log(autocomplete.autoCorrect("accet"));
console.log(autocomplete.autoCorrect("canna"));
