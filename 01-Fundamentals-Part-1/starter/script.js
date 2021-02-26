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

*/

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