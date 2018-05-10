// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// this is not applicable for negitive numbers
function reverseInt(num) {
    let result = 0;
    while(num>0){
        result = result*10 + num%10;
        num =  num/10;
        debugger;
    }
    return result;
}
module.exports = reverseInt;


//solution 1
// function reverseInt(number) {
//     return parseInt(number.toString().split('').reverse().join(''))* Math.sign(number);
// }