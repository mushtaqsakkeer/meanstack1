//2=> 24(2+22)
//3=> 369(3+33+333)

var num=3;
var sum=0;
var sum1=0;
var i=1;

    while(i<=num)
    {
       sum1=sum1*10+num;
       sum=sum+sum1;
       i++;
    }
  console.log(sum);
   num++;
