
//var = accesible for function in which we define
function hello(){
    for(var i = 0; i < 5; i++)
    {
        console.log(i);
    }

    console.log(i);
}

hello();

//let = only accesible for block in which we define

function play(){
    for(let i = 0; i < 5; i++)
    {
        console.log(i);
        //i is accesible for here only
    }
//i is not accesible for here
}

play();

//const = is a constant, we cannot reassign its value
const x = 1;
x = 2;
console.log(x); //ans : x is 1 not 2

//object 
const person = {
    name:'anit',
    talk(){
        console.log(this.name);
    }
}

console.log(person.name);
person.talk();

//arrow function

const square = function(num){
    return num * num;
}

const square = num => num * num;

// array map method
const fruits = ['apple', 'mango', 'orange'];

const list = fruits.map(fruit => `<li>${fruit}</li>`);
  

//destructuring

const address = {
    street : '',
    city : '',
    country: ''
}

const {street, city, country} = address; 

//spread operator

const first = [1,2,3];
const second = [5, 8, 6];

const third = [...first, ...second, 11, 12];

