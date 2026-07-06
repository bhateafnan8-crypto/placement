// Destructing of object

let user = {
    name:"Afnan",
    age:21,
    city:"Mumbai"
}

let {name,city} = user

console.log(name,city)

// Destructing of array

let citys = ["Mumbai","Banglore","Gokak","Telangana"]

let [cityOne, , CityThree]  = citys

console.log(CityThree)

// Destructing in function

function greet({name,city}){

    return `Hello ${name} from ${city}`
}

let greeting = greet(user)

console.log(greeting)

//Spread operator

let arr1 = [1,2,3]

let arr2 = [4,5,6]

arr1 = [...arr1 , ...arr2]
let arr3 = [...arr1 , ...arr2]

console.log("arr3 = ",arr3)

console.log("arr1 + arr2  = ",arr1)

// Rest Paremeter

function sum(...numbers){
    let num = 0
    for(const add of numbers){
        num +=add
    }
    return num
}

console.log(sum(1,2,3,4))
console.log(sum(10,20,30,40,5))

// with first and more 

function printName(firstName,...Name){
    console.log("firstName = ",firstName)
    console.log("Name =",Name)

}
printName("Afnan","Mehdi","Noor","Mohammed","Bhate")