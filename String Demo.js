var name = prompt("What is Your Name?");

var firstChar = name.slice(0,1).toUpperCase();

//var restOfName = name.slice(1,name.length);
var restOfName = name.slice(1).toLowerCase();

console.log(firstChar+restOfName);