var arr1=[10,11,13,14,15], arr2=[8,9,10,11,16];

for(let num of arr1){
    for(let num1 of arr2){
        if(num==num1){
            console.log(num); // OR  console.log(num1);
        }
    }
}
   //        OR
// var p1=0,p2=0;
// while(p1<arr1.length & p2<arr2.length){
  //  if(arr1[p1]==arr2[p2]){
    //    console.log(arr1[p1]);
      //  p1+=1;
   // }
   // else if(arr1[p1]>arr2[p2]){
     //   p2+=1;
   // }
   // else{
     //   p1+=1;
   // }
// }
