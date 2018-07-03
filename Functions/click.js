var counter = 0;

const button = document.querySelector("#count-up");

console.log(button);


let  myFunction =() =>{ 


 counter = counter + 1;
    
    
console.log(counter);
}






button.addEventListener("click", myFunction);



const button2 = document.querySelector("#btn-primary");


let first = function() {

  setTimeout( function(){
    console.log(1);
  }, 5000 );
}
function second(){
  console.log(2);
}
//console.log(first());
//console.log(second());

button2.addEventListener("click", first);