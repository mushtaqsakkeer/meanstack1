var num=2, lowlimit=8, upplimit=25;
// 1**3=1
// 2**3=8  print8
// 3**3=27
let result=0;
for(var i=1;i<=upplimit;i++){
    result=i**num;
    if(result>=lowlimit & result<=upplimit){
        console.log(result);
    }

}