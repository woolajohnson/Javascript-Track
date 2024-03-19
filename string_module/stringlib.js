module.exports = function () {
    return {
        concat: function (word1, word2) {
            return word1 + word2;
        },
        repeat: function (word, times) {
            let result = "";
            for (let i = 0; i < times; i++) {
                result += word;
            }
            return result;
        },
        toString: function (input) {
            return "" + input + "";
        },
        charAt: function (word, index) {
            if (word.length < index) {
                return "Index is longer than the word.";
            } else {
                return word[index];
            }
        },
    };
};
