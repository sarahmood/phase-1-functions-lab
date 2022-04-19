// Code your solution in this file!
let scuberLocation = 42;

// distanceFromHqInBlocks
function distanceFromHqInBlocks(pickup){
    if (pickup > scuberLocation){
    return pickup - scuberLocation;
    } 
    
    return scuberLocation - pickup;
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(41));

// distanceFromHqInFeet 
function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup)*264;
}
console.log(distanceFromHqInFeet(41));
console.log(distanceFromHqInFeet(40));

//distanceTravelledInFeet
function distanceTravelledInFeet(start, destination){
if (start > destination){
    return (start - destination)*264;
}
return (destination - start)*264;
}

console.log(distanceTravelledInFeet(34, 38));

// calculatesFarePrice
function  calculatesFarePrice(start, destination){
    let farePrice = distanceTravelledInFeet(start, destination);
    if (farePrice <= 400){
        return 0;
    }  else if (farePrice > 400 && farePrice <= 2000){
        return (farePrice - 400) * 0.02 
    } else if (farePrice > 2000 && farePrice <= 2500){
        return 25;
    } else {
       return "cannot travel that far"
    }
}

console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
