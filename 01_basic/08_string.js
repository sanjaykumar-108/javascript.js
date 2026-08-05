//code ko modunize tarike se likhna sikhenge aaj
const name="aman"
const repocount=5

console.log(name +repocount+"value");//aaj ke din me backtick ka use karenge('')

console.log(`hello my name is ${name} and my repo count is ${repocount}`);//yeh string interpolation hai

const gameName=new String("pubg")//yeh string constructor hai

console.log(gameName[0]);//[0] ye key value hai na ki string ka index
console.log(gameName.__proto__);//yeh string ke andar ka prototype hai


console.log(gameName.length);//yeh string ke andar ka length hai
console.log(gameName.toUpperCase());//yeh string ke andar ka toUpperCase hai
console.log(gameName.toLowerCase());//yeh string ke andar ka toLowerCase hai
console.log(gameName.charAt(2));//yeh string ke andar ka charAt hai
console.log(gameName.indexOf('t'));//t kis position pe hai uske liye bhi method hai indexOf(any value ya alphabet)


