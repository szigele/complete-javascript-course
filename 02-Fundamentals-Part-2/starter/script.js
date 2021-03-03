"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = "Audio";



//Functions

function logger() {
    console.log("My name is Jonas");
}

logger(); //invoking/running/calling the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);


console.log(age1, age2);



//Arrow functions

//Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

//Arrow

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearUntilRetirement(1991, "Jonas"));



//Functions calling functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }

    //return `${firstName} retires in ${retirement} years.`
}

console.log(yearUntilRetirement(1991, "jonas"));
console.log(yearUntilRetirement(1970, "mike"));



///////////////////////////////////////////////////////////////////////////
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �



const calcAvg = (a, b, c) => (a + b + c) / 3

//Test 1
const avgDolphins = calcAvg(44, 23, 71);
const avgKoalas = calcAvg(65, 54, 49);
console.log(avgDolphins, avgKoalas);


const checkWinner = function(avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
       console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
       console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    }else {
        console.log("No team wins");
    }
}

checkWinner(avgDolphins, avgKoalas);
checkWinner(100, 200);



const friend1 = "michael";
const friend2 = "steven";
const friend3 = "peter";

const friends = ["michael", "steven", "peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends[2]);

const firstName = "jonas";
const jonas = [firstName, "schmedtmann", 2037 - 1991, friends];

console.log(jonas);
console.log(jonas.length);


//Exercise

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(ages);



const friends = ["michael", "steven", "peter"];
//Add elements, returns the new length
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements

friends.pop(); // Last, returns the removed element
console.log(friends);

friends.shift(); //First, returns the removed element
console.log(friends);

console.log(friends.indexOf("steven")); // returns the pos of the element
console.log(friends.indexOf("bob")); // -1

console.log(friends.includes("steven")); // true or false, is in the array?
console.log(friends.includes("bob"));

if (friends.includes("steven")) {
    console.log("you have a friend called steven");
}



//////////////////////////////////////////////////////////////////////////////

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �



const calcTip = function(value) {
    if (50 <= value && value <= 300) {
        return value * 0.15;
    } else {
        return value * 0.2;
    }
}


const bill1 = calcTip(100);
console.log(bill1);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [(calcTip(bills[0]) + bills[0]), (calcTip(bills[1]) + bills[1]), (calcTip(bills[2]) + bills[2])];

console.log(total);



// OBJECTS

const jonas = {
    firstName: "jonas",
    lastName: "schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["michael", "peter", "steven"]
};

console.log(jonas);
//Dot notation
console.log(jonas.lastName);

//bracket notation
const nameKey = "Name";
console.log(jonas["lastName"]);
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIN = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends");

if (jonas[interestedIN]) {
    console.log(jonas[interestedIN]);
} else { // undefined -> falsy 
    console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}
//Add properties
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



//Object methods

const jonas = {
    firstName: "jonas",
    lastName: "schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["michael", "peter", "steven"],
    hasDriversLicense: true,

    // calcAge: function(birthYear) { // object method!!!
    //     return 2037 - birthYear;
    // }

    // calcAge: function() { // object method!!!
    // console.log(this);
    //    return 2037 - this.birthYear;
    //}

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} - year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license `;
    }
};

console.log(jonas.calcAge()); //dot notation
console.log(jonas["calcAge"](1991)); // bracket notation

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());



///////////////////////////////////////////////////////////////////////////////

Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to

implement the calculations! Remember: BMI = mass / height ** 2 = mass /
    (height * height)(mass in kg and height in meter)
Your tasks:
    1. For each of them, create an object with properties
for their full name, mass, and
height(Mark Miller and John Smith)
2. Create a 'calcBMI'
method on each object to calculate the BMI(the same method on both objects).Store the BMI value to a property, and also
return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
tall.
GOOD LUCK�


const mark = {
    fullName: "Mark miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

mark.calcBMI();
john.calcBMI();


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s ${john.bmi}`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}


// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}



const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher", ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    //reading the array
    console.log(jonasArray[i], typeof jonasArray[i]);

    //filling the array
    //types[i] = typeof jonasArray[i];
    types.push(typeof [i]);
}

console.log(types);




const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);

}

console.log(ages);

//continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i], typeof jonasArray[i]);

}



//looping backwards
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher", ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

//Loop inside a loop 


for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------- Starting ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} `);
    }
}



//While loop

//for (let rep = 1; rep <= 10; rep++) {
//    console.log(`lifting weights repetition ${rep}`);
//}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("loop is about to end...");
    }
}



/////////////////////////////////////////////////////////////////////////////////
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(value) {
    if (50 <= value && value <= 300) {
        return value * 0.15;
    } else {
        return value * 0.2;
    }
}

for (let i = 0; i <= bills.length - 1; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}
console.log(tips);
console.log(totals);

// bonus

const calcAvg = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAvg([2, 3, 7]));
console.log(calcAvg(totals));
console.log(calcAvg(tips));
*/