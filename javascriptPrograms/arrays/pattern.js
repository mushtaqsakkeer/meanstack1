var arr=[4,2,5,7];  //[9,8,7]
// i/p arr=[5,4,6]   [10,11,9]
// i/p arr=[4,2,5,7]  [14,16,13,11]

var a=[];
sum=0;
diff=0;

for(let num of arr)
{
    sum=sum+num;
}
for(let n of arr){
    diff=sum-n;
    a.push(diff);


    //OR
    //a.push(sum-n);

    
}
console.log(a);