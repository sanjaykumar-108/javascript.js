const accountid=144553 //const ka matlab ye hota hai ki isko change nhi kar sakte ek baar value assign karne ke baad
let accountemail="sanjay725685@gmail.com"
var accountpassword="12345"
accountcity="bihar"
let accountstate;

// accountid=2 //not allowed
console.log(accountid);
accountemail="hc@hc.com"
accountpassword="21212121"
accountcity="bengluru"
console.log(accountid);
console.table([accountid,accountemail,accountpassword,accountcity,accountstate])// sqr bracket use karke sare variable ka naam likh  sakte hai
// prefer not to use var because of issue in
//  block scope and functional scope
// javascript ke andar kuch constant keyword hote hai