//Function to get Leap Year or not.
function isLeapYear(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "A Leap Year.";
            } else {
                return "Not A Leap Year.";
            }
        } else {
            return "A Leap Year.";
        }
    } else {
        return "Not A Leap Year.";
    }

}

console.log(isLeapYear(2021));
