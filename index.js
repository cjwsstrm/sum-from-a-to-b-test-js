// base case as if statement
// function sum(fromN, toN) {
//   if (fromN === toN) {
//     return toN
//   }
//   return fromN + sum(fromN + 1, toN)
// }


// recursive case as if statement. 1 ms faster (7 vs 8)?
function sum(fromN, toN) {
  if (fromN < toN) {
    return fromN + sum(fromN + 1, toN)
  }
  return toN
}

console.log(sum(3, 7))


module.exports = sum;