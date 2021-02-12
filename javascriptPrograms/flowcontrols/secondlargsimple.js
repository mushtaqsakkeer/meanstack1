var num1=1;
var num2=50;
var num3=5;

if(num1>num2 & num1<num3 | num1<num2 & num1>num3){
    console.log(num1);
}
else if(num2>num1 & num2<num3 | num2<num1 & num2>num3){
    console.log(num2);
}
else{
    console.log(num3);
}