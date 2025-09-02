//primitive
// 7 types=numbers,boolean,number,null,undefined,symbol,BigInt
const score=100
const scoreValue=100.34
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const idAnother=Symbol('123')
console.log(id===idAnother)
const BigNumber=123455432123432432n



//reference-non-primitive



//array,objects,functions

const name=["moskh","kavy","manav","tanush"]
let myobj={
    name: "moksh",
    age: 19,
}


const MyFunction = function(){
    console.log("hello world")
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2 types of memory - stack and heap type memory
//stack=primitive  heap=non-primitive 
//in stack memory it return copy of variable while heap returns original
let myname="moksh"
let anothername=myname
anothername="kaku"
console.log(myname);
console.log(anothername);
let userone={
    email:"moksh@google.com",
    user:"user@ybl"
}
let usertwo=userone
usertwo.email="hacrrr@google.com"
console.log(userone.email);
console.log(usertwo.email);

