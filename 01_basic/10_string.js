//code ko modunize tarike se likhna sikhenge aaj
const name="aman-kumar"
const repocount=5

console.log(name +repocount+"value");//aaj ke din me backtick ka use karenge('')

console.log(`hello my name is ${name} and my repo count is ${repocount}`);//yeh string interpolation hai

const gameName=new String("pubg-hc-com")//yeh string constructor hai

console.log(gameName[0]);//[0] ye key value hai na ki string ka index
console.log(gameName.__proto__);//yeh string ke andar ka prototype hai


console.log(gameName.length);//yeh string ke andar ka length hai
console.log(gameName.toUpperCase());//yeh string ke andar ka toUpperCase hai
console.log(gameName.toLowerCase());//yeh string ke andar ka toLowerCase hai
console.log(gameName.charAt(2));//yeh string ke andar ka charAt hai
console.log(gameName.indexOf('t'));//t kis position pe hai uske liye bhi method hai indexOf(any value ya alphabet)

 const newString =gameName.substring(0,3)//substring ke andar hum negative value nahi de sakte hai
console.log(newString);//last wali value jo dali hai wo include nhi hoti hai

const anotherString=gameName.slice(0,3);//slice me hum negative value bhi de sakte hai

const anotherString2=gameName.slice(-4,2);//reverse value dene pe piche se start hota hai aur 4th index pe ruk jata hai

const newStringOne="himanshu"
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://sanjay.com/sanjay%20kumar"

console.log(url.replace("%20","-"));//replace method me hum first value ko replace karte hai second value se

console.log(url.includes("sanjay"));//includes method me hum check karte hai ki koi value string ke andar hai ya nahi

console.log(gameName.split('_'));