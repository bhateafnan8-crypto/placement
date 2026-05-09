// const { createElement } = require("react");

// let title = document.getElementById("title");
// let btn = document.getElementById("btn");
// console.log(title)

// console.log(btn)

// let count = 0
// btn.addEventListener("click",function(){
//     count++;
//     if(count == 1){

//         title.innerText = "Maine DOM seekh liya"
//     }
//     else if (count == 2){
//         title.style.color="blue"
//     }
//     else if(count == 3){title.style.display="none"}

// })
// btn1.addEventListener("click",function(){
// title.style.color="blue"
// })
// btn2.addEventListener("click",function(){
// title.style.display="none"
// })



let submitbtn = document.getElementById("submit-btn");
// let dltbtn = document.getElementById("dlt-btn");
let inp = document.getElementById("inp");
let ans = document.getElementById("ans");
let ul = document.getElementById("lists");



submitbtn.addEventListener("click", function (fn) {
    fn.preventDefault();
    if (!inp.value) {
        ans.innerText = ` Please enter your name`;
    }
    else {
        // console.log(inp.value)
        let li = document.createElement("li");
        li.innerText = inp.value;
        
        inp.value = ""

        let dltbtn = document.createElement("button");
        dltbtn.innerText = "Delete";
        dltbtn.style.marginLeft="20px"
        li.appendChild(dltbtn)
        dltbtn.addEventListener("click", function () {
            li.remove();

        })
        ul.appendChild(li)
    }
    // console.log(inp.value)
})


