//dates single moment ko define karta hai kisi bhi platform pe mili second me calculate hota hai


// let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDString);
// console.log(typeof myDate);

//let myCreateDate=new Date(2026,0,23)
//let myCreateDate=new Date(2026,7,6,9,4)//single digit me likhte hai agar count array hai to 0 se start hota hai months
//let myCreateDate=new Date("2026-08-14")//wahi hum "DD-MM-YY" karte hai to months 1 se start hota hai
let myCreateDate=new Date("08-22-2026")//idnia me hum is format ko follow karte hai"MM-DD-YY"ko follow karte hai
//console.log(myCreateDate.toLocaleString());//date ko string me rakhenge hamesha


let myTimeStamp = Date.now()//iska use hum in future koi bhi quiz/pole banaenge to usme  kisne fastest answer diya usko winner banane ke liye use karte hai

//console.log(myTimeStamp);
// console.log(myCreateDate.getTime());//ab value ko compare karne ke liye use kar sakte hai easily 
// console.log(Math.floor(Date.now()/1000));//exact value dega present ki

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// '${neDate.getDay()} and the time '

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone
    
})
