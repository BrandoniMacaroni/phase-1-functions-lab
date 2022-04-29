// Code your solution in this file!
function distanceFromHqInBlocks(distanceHq) {
    return Math.abs(42 - distanceHq);
}

function distanceFromHqInFeet(valueHq) {
    return (264 * distanceFromHqInBlocks(valueHq));
}

function distanceTravelledInFeet(start, destination) {
    let result = Math.abs(start - destination) * 264;
    return result;
}

function calculatesFarePrice(start, destination) {
    let result = (Math.abs(start - destination) * 264);
    if (result <= 400) {
        return 0;
    }
    if (result <= 2000 && result > 400) {
        return (((result - 400)* 2)/100);
    }
    if (result > 2000 && result < 2500) {
        return 25;
    } 
    if (result > 2500) {
        return 'cannot travel that far';
    }
}