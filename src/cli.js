const sum = require("./sum")
const params = process.argv.slice(2)
    .map(n => +n)            // 加算演算子でnumberに変換
    .filter(n => !isNaN(n)); // numberにならなかったものを除外
console.log(sum(...params));
