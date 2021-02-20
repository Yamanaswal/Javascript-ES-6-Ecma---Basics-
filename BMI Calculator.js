
var w = prompt('Enter Your Weight.');
var h = prompt('Enter Your Height.');

//BMI Calculations.
function bmiCalculator(w,h){
var bmi = w/(h*h);
return Math.round(bmi);
}


alert("Bmi is: " + bmiCalculator(w,h));