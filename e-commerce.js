function storeCourage(){
  // An outter function containing variables which contains the name of the store, the items that the store sells and also if statements to catch errors when the users does make any input.
 
  let text= "Hello \r \r Welcome to Courage's popup shop";
    confirm(text);
  let store="These are the few items we have \r\r 1.brush #1000 \r 2.toothpaste #500\r 3.shirts #3000\r 4. singlet #1500\r 5.boxers #2000\r\r\r please Input a number";
  
    let first= prompt(store);
  if(first == undefined){
    alert("Maybe next time") }
let quantity= "How many of the product do you want";
  let second=prompt(quantity);
if(second == undefined){
  alert("You didn't make any input")
}


function mystore(first,second){
  // a nested function that contains the logic of the whole store.
let courage= parseInt(second)
let brush;
let toothpaste;
let shirts;
let singlet;
let boxers;
if (first==1){
  brush =1000*courage
}else if(first==2){
  toothpaste= 500*courage
}else if(first==3){
  shirts=3000*courage
}else if(first==4){
  singlet=1500*courage
}else if(first==5){
  boxers=2000*courage
}
console.log(brush)
console.log(toothpaste)
console.log(shirts)
console.log(singlet)
console.log(boxers)
}

mystore(first,second);
  
};
storeCourage()