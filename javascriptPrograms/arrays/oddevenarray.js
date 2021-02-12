var arr=[10,11,12,13,14]

var odd=[];
var even=[];

for(let num of arr){
    if(num%2==0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}
console.log("Even=" + even);
console.log("Odd=" + odd);