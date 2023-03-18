// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }

const fareDoubler= createFareMultiplier(2);
const Fare1 = 10;

console.log(fareDoubler(Fare1)); 

const fareTripler= createFareMultiplier(3);
const Fare2 = 10;

console.log(fareTripler(Fare2)); 

function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray);
  }
  


  