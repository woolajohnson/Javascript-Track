//1
let result = foreach([1, 2, 3, 4, 5], function (num) {
    return num * 2;
});
console.log(result); //this should log [2,4,6,8,10]
