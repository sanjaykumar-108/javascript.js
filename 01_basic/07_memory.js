//memory ko reserve karna or memory ko free karna coder ka kaam hai



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack=primitive types ko store karne ke liye use hota hai
//heap=non primitive types ko store karne ke liye use hota hai

let myName="aman"//primitive type isliye stack me store hoga
let anotherName=myName//copy of myName isliye stack me store hoga

anotherName="himasnhu"//anotherName ko change karne se myName me koi change nhi hoga kyuki dono alag alag stack me store hai
console.log(myName);//aman
console.log(anotherName);//anotherName ke andar ek copy di jati hai 
// heap se jab wapas se reference lete hai to wo copy nhi milta hai original reference milta hai

let user1={     //non primitive type isliye heap me store hoga
    email:"aman@gmail.com",
    upi:"aman@upi"      
} 
let user2={
       email:"sudhanshu@gmail.com",
       upi:"sudhanshu@upi"
}
console.log(user1.email);
console.log(user2.email);

