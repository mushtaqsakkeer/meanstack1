var num=153;
var r=0;
var sum=0;
var temp;
temp= num;
while(num>0)
{
    r=num%10;
    sum=sum+(r*r*r);
    num=Math.floor(num/10);
}
console.log(sum);
if(sum==temp){
    console.log("armstrong");
}
else{
    console.log("not amrmstrong");
}