// --- Directions
// Given a array of length 6 numbers, 
//return the 24 hour digital format as "hh:mm:ss"
// --- Examples
// formatTime([1,2,3,4,5,6]) === '12:34:56'
// maxChar([0, 1, 0, 1, 2, 3]) === '00:11:23'

function formatTime(intArray) { 
    let hours = [];
    let minutes = [];
    let seconds = [];
    let count = 0;
    //loop through each and find smallest numbers seperate into hour, minutes, seconds
    intArray.sort();//sorts in ascending order
    for(let eachNum of intArray){
        if(count <2){
            hours.push(eachNum);
        }
        if(count > 1 && count < 4){
            minutes.push(eachNum);
        }
        if(count >3 && count <6){
            seconds.push(eachNum);
        }
        count++;
    }
    //check hours 
    if(hours[0] == 2 && hours[1] > 3){
        return "Incorrect Input";
    }
    //check minutes
    if(minutes[0] > 5 || seconds[0] > 5){
        return "Incorrect Input";
    }
    return ""+hours[0]+hours[1]+":"+minutes[0]+minutes[1]+":"+seconds[0]+seconds[1];

}
module.exports = formatTime;