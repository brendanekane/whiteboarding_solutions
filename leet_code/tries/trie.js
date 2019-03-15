class Trie {
    constructor() {
        this.root = {};
        this.actualWord = false;
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) {
                node[word[i]] = {};
            }
            node = node[word[i]];
        }
        node.actualWord = true;


    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]])return false;
            else node = node[word[i]];
        }
        if (node.actualWord) return true;
        else return false;
    }

    startsWith(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) return false;
            else node = node[word[i]];
        }
        return true;
    }
}
