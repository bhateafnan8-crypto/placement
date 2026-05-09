 // Ek function banao — makeMultiplier
// Jisme ek number pass karo
// Wo ek function return kare
// Jo bhi number pass karo — usse multiply kare

// Example:

function makeMultiplier(n){
      function num(x){
          return x * n;    
    }
    return num
}


let double = makeMultiplier(2);
console.log(double(5));  // 10
console.log(double(8));  // 16

let triple = makeMultiplier(3);
console.log(triple(5));  // 15
 
 
 
 
 
 
 
 
 // Ek shopping cart banao
// Har item ka naam, price, aur quantity ho
// Ek function banao jo:
// 1. Total bill nikale (price * quantity)
// 2. 18% GST add kare
// 3. Final amount return kare



// const cart = [{name:"shoe",price:800,quantity:2},
//     {name:"bottle",price:500,quantity:4},
//     {name:"bag",price:1500,quantity:6}
// ];
    


// let bestseller = cart.reduce((acc,curr) => {
//     // return  acc.totalprice  > curr.totalprice
//     if ( (acc.price * acc.quantity) > (curr.price * curr.quantity) ){
//         return acc
//     }
//     else{
//         return curr
//     }
// })

// console.log(bestseller)


// let toalBill = cart.map((product) => {
//     return product.price * product.quantity 
// })

// console.log(toalBill)




// let totalBill = cart.map((product) => {
//     return  ((product.price * product.quantity ) * (18/100))
// })

// let overallBill = totalBill.reduce((acc,curr) => {
//     return acc + curr
// })
// console.log(totalBill)
// console.log(overallBill)




  
  
  
  // Ek function banao — gradeStudent naam ka


// Array pass karo
// Return kare naya array jisme har student ka 
// naam aur grade ho:
// 90+   → "A"
// 75-89 → "B"  
// 60-74 → "C"
// 60 se neeche → "Fail"
    
    // let students = [
    // {name: "Rohan", marks: 90},
    // {name: "Amit", marks: 98},
    // {name: "Sara", marks: 78},
    // {name: "Karan", marks: 75},
    // {name: "Neha", marks: 45},
    // {name: "Sneha", marks: 30},
    // {name: "Snehal", marks: 89},

    // ];
    // function gradeStudent(grade){
    //    if(grade.marks >= 90 ) {
    //         return  `${grade.name} = A`
            
    //    } 
    //   else if(grade.marks >= 75 && grade.marks <= 89 ) {
    //         return  `${grade.name} = B`
            
    //    } 
    //    else if(grade.marks >= 60  && grade.marks <= 74) {
    //         return  `${grade.name} = C`
            
    //    } 
    //    else {
    //         return  `${grade.name} = F`
            
    //    }
    // }
    // students.forEach(student => {
    //    console.log( gradeStudent(student))
    // });
    
    
    
    
    
    
    
    
    
    
    // let students = [
    // {name: "Rohan", marks: 25},
    // {name: "Amit", marks: 22},
    // {name: "Sara", marks: 66},
    // {name: "Karan", marks: 75},
    // {name: "Neha", marks: 89}
    // ];


    // function checkMarks(num){
    //    return  num.filter((mar) => {
    //         return mar.marks >60
    //     }).map((num) => {
    //         return num.name
    //     })
    // };

    // let marks = checkMarks(students);
    // console.log(marks)

    // function checkMarks(arr){
    //     if(arr.marks > 60) {
    //         return arr.name
    //     }
    // }
    // let Marks = checkMarks(students);
    // console.log(Marks)






    // function User(name){
    //     console.log("Hello =>",name)
    // }
    // User("afnan");

    // let Check = (num1,num2) =>{
    //     if(num1 > num2 ){
    //         console.log(`Num1 > Num2 => ${num1} > ${num2}`)
    //     }
    //     else{
    //         console.log(`Num2 > Num1 => ${num2} > ${num1}`)
    //     }
    // }
    // Check(12,22);