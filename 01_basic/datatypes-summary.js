//primitive data types jo ki call by value hote hai unme se kuch data types hai
// 7 types:string, number, boolean, null, undefined, symbol, BigInt

const score=90
const scorevalue=100.5
const isloggedin=false
const outsidetemp=null
let useremail;
const id=Symbol('123')

const anotherid=Symbol('123')
console.log(id===anotherid);//false because symbol is unique

const bigNumber=34567890123456789012345678901234567890n




// reference types (non primitive data types)
//non primitive ko function hi bola jata hai or jo function ka return usko object hi bola jata hai

//Array,object,functions,
const heros=['shaktiman','naagraj','doga']
let myobj={
    name:"aman",
    age:22,
    isloggedin:true
}    


// variable wala tarika sikhenge
const myfunction=function(){
    console.log("hello world");

}
//console.log(typeof myfunction);//function
console.log(typeof outsidetemp);
console.log(typeof scorevalue);
console.log(typeof heros);


