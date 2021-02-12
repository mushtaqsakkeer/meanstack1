var arr=[1,2,3,4];
var inp=5;
for(let i of arr)
{
    for(let j of arr)
    {
        if(i+j==inp)
            {
                console.log(i,j);
                break
            }
    }
}