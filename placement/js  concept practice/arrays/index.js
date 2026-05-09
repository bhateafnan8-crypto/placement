// Is array mein se:


let users = [
  {name: "Rohan", age: 15},
  {name: "Amit", age: 22},
  {name: "Sara", age: 17},
  {name: "Karan", age: 25},
  {name: "Neha", age: 19}
];


// 1. Sirf 18 saal se upar waale nikalo
// 2. Unke sirf naam ek array mein lo
// 3. Unki total age nikalo

    let fill = users.filter((num) => num.age > 18)

    console.log(fill)

    let mp = fill.map((num) => {
        return num.name
    })

    console.log(mp)

    let red =  fill.reduce((acc,curr) => {
        return acc + curr.age;
    },0)

    console.log(red)


    let result = users.filter((user) => {
       return  user.age > 18
    }).map((user) => {
        return user.name
    })
    .reduce((acc,curr) => {
        return acc + curr.age;
    },0);

    console.log(result)















// let arr = [
//     { name: "EarBuds", price: 15000 }, 
//     { name: "Glass", price: 200 }, 
//     { name: "Back Cover", price: 500 }, 
//     { name: "Case Cover", price: 100 }, 
//     { name: "Toy", price: 5000 }
// ];

// let fill = arr.filter((product) => 
//      product.price > 500 
// );

// console.log(fill.map((product) => product.name)) 

// let total = arr.reduce((acc,cur) => {
//     return acc + cur.price;

// },0);

//     console.log(total)



// // if (fill == true){
// // let mp = arr.map((product) => 
// //    console.log (product.name)
// // );
// // console.log(mp)

// // }


// // console.log(fill)
