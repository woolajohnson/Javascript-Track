//1
// function foreach(arr, value) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(value(arr[i]));
//     }
//     return newArr;
// }
// let result = foreach([1, 2, 3, 4, 5], function (num) {
//     return num * 2;
// });
// console.log(result); //this should log [2,4,6,8,10]

//2
// function foreach(arrays, callback) {
//     let newArr = [];
//     for (let i = 0; i < arrays.length; i++) {
//         newArr.push(callback(arrays[i]));
//     }
//     return newArr;
// }
// result = foreach([1, 2, 3, "v88", "training"], function (val) {
//     if (typeof val === "number") {
//         return 0;
//     } else {
//         return val;
//     }
// });
// console.log(result); //this should log [0,0,0,"v88","training"];

//3
function foreach(arrays, callback) {
    let newArr = [];
    for (let i = 0; i < arrays.length; i++) {
        newArr.push(callback(arrays[i]));
    }
    return newArr;
}
result = foreach([1, 2, 3, "hello"], function (val) {
    return typeof val;
});
console.log(result); //this should log ["number", "number", "number", "string"];
