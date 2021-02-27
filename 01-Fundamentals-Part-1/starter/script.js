/*let js = 'amazing';
console.log(40 + 8 + 23);

console.log('Jonas');
console.log('23');

let firstName = 'Jonas';
console.log(firstName);

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javascriptIsFun = 'YES';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;


//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 2 a harmadikon

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

//comparison operator
console.log(ageJonas > ageSarah); // <,>, <=,>=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//////////////////////////////////////////////////////////////////////////////////

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � 


const weightMark1 = 78;
const weightJohn1 = 92;

const heightMark1 = 1.69;
const heightJohn1 = 1.95;

const weightMark2 = 95;
const weightJohn2 = 85;

const heightMark2 = 1.88;
const heightJohn2 = 1.76;

const bmiMark1 = weightMark1 / heightMark1 ** 2;
const bmiMark2 = weightMark2 / heightMark2 ** 2;

const bmiJohn1 = weightJohn1 / heightJohn1 ** 2;
const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;

const markHigherBMI1 = bmiMark1 > bmiJohn1;
const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(bmiMark1);
console.log(bmiMark2);
console.log(bmiJohn1);
console.log(bmiJohn2);
console.log(markHigherBMI1);
console.log(markHigherBMI2);


const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

console.log(`just a regular string`);

console.log(`string
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 😊");
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 2000;
let century;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

///////////////////////////////////////////////////////////////////

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �



const weightMark = 78;
const weightJohn = 96;

const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2;

const bmiJohn = weightJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23));

//Type coercion

console.log("I'am " + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" * "10");
console.log("23" / "10");
console.log("23" > "10");



//Truthy and falsy values

// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}


let height;
if (height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is undefined!");
}


// equality operators
const age = "18";
if (age === 18) console.log("You just became an adult!");

if (age == 18) console.log("You just became an adult!");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("cool, 23 is cool");
} else if (favourite === 7) {
    console.log("7 is cool also");
} else if (favourite === 9) {
    console.log("9 is cool also");
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


//logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}

*/

////////////////////////////////////////////////////////////////////////
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �


const scoreDolphins1 = 96;
const scoreDolphins2 = 96;
const scoreDolphins3 = 96;
const scoreKoalas1 = 96;
const scoreKoalas2 = 96;
const scoreKoalas3 = 96;

const avgDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
const avgKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;

if (avgDolphins > avgKoalas) {
    console.log("Winner is: Dolphins");
} else if (avgDolphins < avgKoalas) {
    console.log("Winner is: Koalas");
} else if (avgDolphins === avgKoalas) {
    console.log("It's a draw");
}


let minScoreDolphins;
if (scoreDolphins1 >= 100 || scoreDolphins2 >= 100 || scoreDolphins3 >= 100) {
    minScoreDolphins = true;
} else {
    minScoreDolphins = false;
}

let minScoreKoalas;
if (scoreKoalas1 >= 100 || scoreKoalas2 >= 100 || scoreKoalas3 >= 100) {
    minScoreKoalas = true;
} else {
    minScoreKoalas = false;
}

if ((avgDolphins > avgKoalas) && minScoreDolphins) {
    console.log("Winner is: Dolphins");
} else if ((avgDolphins < avgKoalas) && minScoreKoalas) {
    console.log("Winner is: Koalas");
} else if ((avgDolphins === avgKoalas) && minScoreDolphins && minScoreKoalas) {
    console.log(" It's a draw");
} else {
    console.log("No winner!");
}



//Switch statement

const day = "friday";

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("not a valid day");
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");

} else if (day === "tuesday") {
    console.log("Prepare theory videos");

} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");

} else if (day === "friday") {
    console.log("record videos");

} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");

} else {
    console.log("not a valid day");
}



//The conditional ternary operator

const age = 23;
age >= 18 ? console.log("I like to drink wine") :
    console.log("I like to drink water");

const age = 23;
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);



/////////////////////////////////////////////////////////////////////////

Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �



const bill = 430;
const tip = (bill >= 50) && (bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(tip);

console.log(` The bill was ${bill}, and the tip was ${tip}
, and the total value is ${bill+tip}`);

*/