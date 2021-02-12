var num=9;
var flag=0;
// 7(2 to 6), 11(2 to 10)......

for(let i=2;i<num;i++){ i=2
    if(num%i==0){  //9%2
        flag=1;
        break;
    }
    
}
if(flag==1){
    console.log("not prime");
}
else{
    console.log("prime");
}