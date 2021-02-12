//    &  |  ^ 

//         x    y    x&y    x|y    x^y
//         1    0    0      1       1
//         1    1    1      1       0
//         0    0    0      0       0
//         0    1    0      1       1



console.log((2>5) & (3<5)); //false 0
console.log((2>5) | (3<8)); //true 1
console.log(2&4); // 0010 & 0100 = 0000 ie, 0
console.log(2|4); // 0010 | 0100 = 0110 ie, 6
console.log(2^4); // 0010 ^ 0100 = 0110 ie, 6

// INCREMENT AND DECREMENT

var num=10;
console.log(num++);
console.log(++num);