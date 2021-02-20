
var loveScore = Math.floor(Math.random() * 100) + 1;

//check value and datatype.
if(loveScore === 100){
    alert('your love score is ' + loveScore + "%" + " PERFECT SCORE");
}else if(loveScore > 70){
    alert('your love score is ' + loveScore + "%" + " Great Score");
}else if(loveScore > 0 && loveScore <= 30){
    alert('your love score is ' + loveScore + "%" + " Bad Luck!!");
}else if(loveScore > 30 || loveScore < 60){
    alert('your love score is ' + loveScore + "%" + " Hope Still there!!");
}
else{
    alert('your love score is ' + loveScore + "%" + " Try Again");
}