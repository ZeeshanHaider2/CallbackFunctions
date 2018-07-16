//Example 01
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


//EXample 02
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
