//Empty Array or List
var guests = [];

//add at particular index.
guests[0] = ("Yaman");
guests[1] = ("Manish");
guests[2] = ("Bromis");
guests[3] = ("Sandeep");

//Add an item to the end of an Array or List
guests.push("Prateek");
guests.push("Mayank");
console.log("LIST 1: " + guests);

//Remove an item from the end of an Array or List
guests.pop();
guests.pop();
console.log("LIST 2: " +guests);

//Remove an item from the beginning of an Array or List
guests.shift();
console.log("LIST 2: " +guests);

var name = prompt('Enter Your Name:: ');

console.log("ARRAY LENGTH : "+guests.length);

//check if data exist in List or Array.
if (guests.includes(name)) {
    alert('Its Exist. Welcome');
} else {
    alert("Try Again. not exists.");
}

console.log(name);
