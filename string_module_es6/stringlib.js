module.exports = class StringModule {
    concat(word1, word2) {
        return word1 + word2;
    }
    repeat(word, times) {
        let result = "";
        for (let i = 0; i < times; i++) {
            result += word;
        }
        return result;
    }
    toString(input) {
        return "" + input + "";
    }
    charAt(word, index) {
        if (word.length < index) {
            return "Index is longer than the word.";
        } else {
            return word[index];
        }
    }
};
