var numbers = [];
for(var i = 0; i<10 ; i++){
    numbers.push(Math.floor(Math.random()*10));
}
var evenSum = 0;
var lessThanFiveSum = 0;
for(var j = 0;j<numbers.length;j++ ){
    if (numbers[j]%2 === 0){
        evenSum += numbers[j];
}
if (numbers[j]<5){
    lessThanFiveSum+=numbers[j];
}
}
console.log(evenSum);
console.log(lessThanFiveSum);
document.writeln(evenSum);
document.writeln(lessThanFiveSum);