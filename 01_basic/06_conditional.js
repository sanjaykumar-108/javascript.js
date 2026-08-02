// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2==="2");
// console.log(2!=="2");
// console.log("2">1); //predictable result nhi dega is type ke conversion me
// console.log("02">1);// compare karte waqt dhayan rakhe ki dono ka data types same ho 


console.log(null>0);// is tarah ke conversion kabhi bhi confusion create karte hai isliye avoid karna chahiye
console.log(null==0);//comparison operators and equal to operator dono ka kaam karne ka style alag hai javascript me isliye ye false return karega
console.log(null>=0);// value conversion ke time null ko 0 me convert kar deta hai isliye ye true return karega
console.log(undefined==0);//undefined me convert karne se false hi value dega
//strict check ka matlab hota hai triple equal to operator ka use karna or data type ko bhi check karna
console.log("2"===2);//false
//clean code ki priority jyada hoti hai isliye aise comparison operators ka use avoid karna chahiye