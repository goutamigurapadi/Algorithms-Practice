// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxChar = '';
    for(let char of str){
        chars[char] = chars[char]+1 || 1;
    }
    for(let item in chars){
        if(chars[item] > max){
            max = chars[item];
            maxChar = item;
        }
    }
    console.log(chars);
    console.log(maxChar);
    return maxChar;
}

module.exports = maxChar;
