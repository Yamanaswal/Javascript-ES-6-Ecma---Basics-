function getMilk(numbers){
    alert("NUMBERS IS: -> " + numbers);
    alert(numbers + " of bottles.");
}

function getMilkCount(numbers){
    var e = numbers * numbers;
    return e;
}


//without return type - void
getMilk(23);

//return type - int
var res = getMilkCount(23);

alert("Return by getMilkCount() function:-> "+res);
