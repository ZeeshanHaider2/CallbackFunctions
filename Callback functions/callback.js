//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
//EXample 01
function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);


//Example 02
let x = function(){
    console.log("I am called from inside a function");
};
//function y has "callback" as an argument
let y = function(callback){
    console.log("do something");
    callback();
}

y(x);
//output:
//do something 
//I am called from inside a function


//EXample 03
let add = function( a, b){
    return a + b;
}
let multiply = function( a, b){
    return a * b;
}


let doWhatever = function ( a,b){
    console.log(`Here are the two numbers ${a}, ${b}`);
};

let calc = function (num1, num2, callback){
 if (typeof callback === "function"){ //if you want to make sure that the user is passing a function not anything else. Only then it will be executed
    return callback (num1, num2);
 }
};



console.log(calc(2,3,multiply));

console.log(calc(2,3,add));

console.log(calc(2,3, doWhatever));

//Also possible:
//this is an anonymous function, there is no need to define it and pass it, when you have to use something only once, just write it as an argument.
console.log(calc(2,3, function(a,b){
    return a - b;
}));


//Another very good explaination (The best example)

var users = ["Zeeshan", "Martin","Sunil"];

function addUser(username){
    setTimeout(function(){
        users.push(username);
    }, 1700); //since the time delay is more, the fuction getUsers will finish faster BUT we want to add users first before we get users.
}

function getUsers(){
    setTimeout(function(){
        console.log(users);
    }, 100);
}

addUser("abdula");
getUsers();

//Now we will use Callback to solve this problem

var users = ["Zeeshan", "Martin","Sunil"];

function addUser(username, callback){ //added callback to enforece the order of operation i.e.addUser will run first 
    setTimeout(function(){
        users.push(username);
        callback();
    }, 1700); 
}

function getUsers(){
    setTimeout(function(){
        console.log(users);
    }, 100);
}

addUser("Sarah", getUsers);

