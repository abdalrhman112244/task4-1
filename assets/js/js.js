var numbers = [];
for(var i = 0; i<10 ; i++){
    numbers.push(Math.floor(Math.random()*10));
}
var Sum1 = 0;
var Sum2 = 0;
for(var j = 0;j<numbers.length;j++ ){
    if (numbers[j]%2 === 0){
        Sum1 += numbers[j];
}
if (numbers[j]<5){
    Sum2+=numbers[j];
}
}
console.log(Sum1);
console.log(Sum2);
document.writeln(Sum1);
document.writeln(Sum2);