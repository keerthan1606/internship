let skill =  [ "HTML","Css","python", "C"]
console.log(skill[0])
console.log(skill.length)
console.log(typeof(skill))

let person = {
    name: "keerthan",
    age : 19,
    isstudent:true,
    skill :  [ "HTML","Css"]
}
console.log(person["name"])
console.log(person.isstudent)
console.log(person["isstudent"])

function greet(name){
    return "hello." + name
}console.log(greet("keerthan"))

function sayhello(){
    console.log("hello")
}sayhello()

function findproduct(a,b){
    
    return a*b
}
console.log(findproduct(4,7))

function findadd(a,b){
    
    return a+b
}
console.log(findadd(4,7))

//function expression
let add = function(a,b){
    return a + b
}
console.log(add(1,2));

let calculatetax=(price,rate)=>{
    let tax = price * (rate/100)
    return price + tax
}
console.log(calculatetax(1000,18))