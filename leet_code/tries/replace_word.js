class Trie {
    constructor() {
        this.root = {};
        this.prefix = false;
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) node[word[i]] = {};
            node = node[word[i]];
        }
        node.prefix = true;
    }

    shortestPrefix(word) {
        let node = this.root;
        let prefix = "";
        for (let i = 0; i < word.length; i++) {
            if (!node[word[i]]) return word;
            prefix += word[i];
            node = node[word[i]];
            if (node.prefix) return prefix;
        }
        return word;
    }
}


const replaceWords = (dict, sentence) => {
    const prefixTrie = new Trie(),
          arr = sentence.split(" ");

    for (let i = 0; i < dict.length; i++) {
        prefixTrie.insert(dict[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        let replace = prefixTrie.shortestPrefix(arr[i]);
        if (replace !== arr[i]) arr[i] = replace;
    }
    return arr.join(" ");
};
