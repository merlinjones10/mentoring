// run node index.js in terminal to run this code
function hello1() {
    console.log("Hello")
}
const hello2 = () => {
    console.log("hello");
}

function add(a, b) {
    return a + b
}
const add2 = (a, c) => {
return a + c;
}


function whatToWear(weather) {
    if (weather === 'sunny') {
        return 'sunglasses'
    } else if (weather === 'rainy') {
        return 'umbrella'
    } else {
        return 'shorts'
    }
}

const whatToWear2 = (weather) => {
    if (weather === 'sunny') {
        return 'sunglasses'
    } else if (weather === 'rainy') {
        return 'umbrella'
    } else {
        return 'shorts'
    }
};


/* ------------------------------------------------------ */

function numToString(num) {
    return num.toString();
}

function stringToNum(str) {
    return Number(str);
}
// [11, 22, 33, 44, 55, 9, 14]
function filterAges(ages) {
    return ages.filter(age => age >= 18); // 
}

function greetUser(firstName, lastName) {
    return `Hello ${firstName} ${lastName}`;
}

function square(num) {
    return num * num;
}

console.log(whatToWear2('sunny'));

// const num2 = add2(2,2)
// console.log(num2)
// const number = add(1,2)
console.log(filterAges([11, 22, 33, 44, 55, 9, 14]))