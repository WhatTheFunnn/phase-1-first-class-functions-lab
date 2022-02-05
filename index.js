const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 
const returnFirstTwoDrivers = function () {
        return drivers.slice(0, 2)
    }
const returnLastTwoDrivers = function () {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function selectingdrivers(a, b) {
    if (a === 0) { 
        return returnFirstTwoDrivers;
    }else if(b === 1) {
        return returnLastTwoDrivers;
    }
}

function createFareMultiplier (fareMultiplier) {
    return function (fare) {
        return fareMultiplier * fare
    }
}

let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)


function selectDifferentDrivers (drivers, theDrivers){
    if (theDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(theDrivers)
    } else {
        return returnLastTwoDrivers(drivers)
    }
}
