/*const score=400;
console.log(score);

const balance= new Number(400);
console.log(balance);

console.log(balance.toString().length);//yeh number ke andar ka toString hai
console.log(balance.toFixed(1));//yeh number ke andar ka toFixed hai
const otherNumber=23.8966

console.log(otherNumber.toPrecision(3));//precision=In JavaScript, precision refers to how accurately a number can be represented and stored.
//JavaScript stores all regular numbers using the 64-bit floating-point (IEEE 754) format, which means numbers have limited precision.
const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN'));//yeh number ke andar ka toLocalString hai
*/

//++++++++++++++++++++++++++++++++maths+++++++++++++++++++++++++++++++

console.log(Math);//yeh math ke andar ka PI hai
console.log(Math.abs(-4));//abs hai absolute value ka method hai negative value ko positive me convert kar deta hai
console.log(Math.round(4.6));//round method hai jo decimal value ko round off kar deta hai

console.log(Math.ceil(4.6));//ceil method hai jo decimal value ko upar ki taraf round off kar deta hai
console.log(Math.floor(4.6));//floor method hai jo decimal value ko neeche ki taraf round off kar deta hai

console.log(math.min(4,6,8,9,2));//min method hai jo minimum value ko return kar deta hai
console.log(math.max(4,6,8,9,2));//max method hai jo maximum value ko return kar deta hai

console.log(Math.random());//random method hai jo random number ko generate kar deta hai 0 se 1 ke beech me
//math.random ki value hamesha 0 se 1 ke beech me hoti hai
console.log(Math.random()*10);//math.random ki value hamesha 0 se 1 ke beech me hoti hai isliye hum usko multiply karte hai 10 se taki 0 se 10 ke beech me random number generate ho
console.log(Math.floor(Math.random()*10));//math.random ki value hamesha 0 se 1 ke beech me hoti hai isliye hum usko multiply karte hai 10 se taki 0 se 10 ke beech me random number generate ho aur usko floor method se round off kar dete hai taki decimal value na aaye

console.log((math.random()*10)+1);//

const min=10
const max=20
math.random()*(max-min+1)+min//formula hai 
console.log(Math.floor(math.random()*(max-min+1))+min)
/* Ye 0 se lekar 1 ke beech random decimal number deta hai.
Note: Ye kabhi bhi 1 nahi deta.Math.floor() decimal ko neeche wale integer me convert karta hai.
"min aur max (dono inclusive) ke beech ek random poora number generate karo."*/