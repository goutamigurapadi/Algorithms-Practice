// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {    
   return str.split('').reduce((reversed, character) => character + reversed, '');
}
module.exports = reverse;


//solution 1
// function reverse(str) {
//     //turn str to array
//     const array = str.split('');
//     //call reverse method
//     array.reverse();
//     //parse array to str
//     return array.join('');
// }

//solution 2
// function reverse(str) {
//     let reversed = '';    
//     for(let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }