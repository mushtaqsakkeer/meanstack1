var data1=[7,"hello",10.5,true]

//to update => data[2]=200.1
console.log(data1[0]);







var data=[10,50,20,30]
data.push(500)
console.log(data);
//[10,50,20,30,500]

for(let i=0;i<data.length;i++){
    console.log(data[i]);
}
 
        //OR

for(let num of data){
    console.log(num);
}
      
     //OR

data.forEach(num=>console.log(num))