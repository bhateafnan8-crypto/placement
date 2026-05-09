let lists = document.getElementById("lists");
let btn = document.getElementById("btn");

async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    
    console.log(data);

    
    data.forEach((name) => {
        let li = document.createElement("li");
        li.innerText = name.name;
        lists.appendChild(li);
    });


}

// getUsers();



// function getdata(names){


//    names.forEach((name) => {
//         li.innerText = name.name;
//    });
//   
// }
// getdata();



btn.addEventListener("click", getUsers);