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

const fareMultiplier = [2, 3]

function createFareMultiplier (fareMultiplier) {
    console.log(fareMultiplier)
    return fareMultiplier
}

createFareMultiplier({fareDoubler: 2, fareTripler: 3});

function fareDoubler () {

}

function fareTripler () {


}

