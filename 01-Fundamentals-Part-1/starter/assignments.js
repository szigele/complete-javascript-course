/*
//LECTURE: Variables

let country = 'Hungary';
let continent = 'Europe';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

//LECTURE: Data types

let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// LECTURE: let, const, var

language = 'hungarian';
//const language = 'hungarian';

console.log(language);

//LECTURE: Basic Operators

let populationHalf = population / 2;
console.log(populationHalf);
console.log(population + 1);

let populationFinland = 6;
console.log(population > populationFinland);

let populationAvg = 33;
console.log(population > populationAvg);

const description = (country + " is in " + continent + " and its " + population + " million people speak " + language);
console.log(description);

const description2 = `${country} is in ${continent} and it's ${population} million people speak ${language}`;

console.log(description2);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${populationAvg - population} million below average`);
}


const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}


const language = "chinese";

switch (language) {
    case "chinese":
        console.log("MOST number of native speakers");
        break;
    case "spanish":
        console.log("2nd place of native speakers");
        break;

    case "english":
        console.log("3rd place");
        break;

    case "hindi":
        console.log("Number 4");
        break;

    case "arabic":
        console.log("Number 5");
        break;

    default:
        console.log("Great language too");
        break;
}



//Ternary operator

const population = 10;

console.log(`Hungary's population is ${population > 33 ? "above" : "below"} average`);

*/