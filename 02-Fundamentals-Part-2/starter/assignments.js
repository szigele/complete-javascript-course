"use strict";

/*

function describeCountry(country, population, capitalCity) {
    const description = (`${country} has ${population} million people and its capital city is 
    ${capitalCity}`);
    return description;
}


const hungary = describeCountry("Hungary", 10, "Budapest");
console.log(hungary);

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);

const germany = describeCountry("Germany", 83, "Berlin");
console.log(germany);



//Function declaration vs expression

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const hungary = percentageOfWorld1(10);
console.log(hungary);

//expression

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

const percentageFinland = percentageOfWorld2(6);
console.log(percentageFinland);



const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percentage = percentageOfWorld3(10);
console.log(percentage);



const populations = [10, 130, 33, 50];

if (populations.length = 4) {
    console.log(true);
} else {
    console.log(false);
}

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])
];

console.log(percentages);



const neighbours = ["slovakia", "austria", "croatia", "romania"];

neighbours.push("utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("probably not an european country");
}

neighbours[neighbours.indexOf("croatia")] = "Republic of Croatia";
console.log(neighbours);



//Objects

const myCountry = {
    country: "hungary",
    capital: "budapest",
    language: "hungarian",
    population: 10,
    neighbours: ["slovakia", "austria", "croatia"],

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}`)
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}

console.log(myCountry.population + 2);
console.log(myCountry["population"] - 2);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting...`);
}



const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}



const populations = [10, 130, 33, 50];
const percentages2 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

for (let i = 0; i <= populations.length - 1; i++) {
    percentages2[i] = percentageOfWorld1(populations[i]);
    console.log(percentages2[i]);
}
console.log(percentages2);



const populations = [10, 130, 33, 50];
const percentages3 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

let i = 0;
while (i = populations.length - 1) {
    percentages3[i] = percentageOfWorld1(populations[i]);
    console.log(percentages3[i]);
    i++;
}
*/