function hello1() {
    console.log("Hello")
}

const hello2 = () => {
    console.log("hello");
}

const name = 'merlin'

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

console.log(whatToWear2('sunny'));

const num2 = add2(2,2)
console.log(num2)
const number = add(1,2)
console.log(number)